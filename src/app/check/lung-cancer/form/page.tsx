"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const initialState = {
  cancerType: "Lung Cancer",
  age: "",
  smoking: "0",
  yellow_fingers: "0",
  anxiety: "0",
  peer_pressure: "0",
  chronic_disease: "0",
  fatigue: "0",
  allergy: "0",
  wheezing: "0",
  alcohol_consuming: "0",
  coughing: "0",
  shortness_of_breath: "0",
  swallowing_difficulty: "0",
  chest_pain: "0",
};

export default function FormPrediksi() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    // Validasi input
    if (!formData.age || isNaN(Number(formData.age))) {
      toast.error("Harap masukkan umur yang valid");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Sedang memproses prediksi...", { id: "prediction" });

      const res = await fetch("http://localhost:3000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age),
        }),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "Gagal memproses prediksi");
      }

      const data = await res.json();

      // PERBAIKAN UTAMA: Format redirect yang benar
      const queryParams = new URLSearchParams({
        prediction: data.prediction,
        probability: data.probability.toString(),
        features: JSON.stringify(data.features_used),
      });

      // Method 1: Menggunakan string URL
      router.push(`/result?${queryParams.toString()}`);

      // Atau Method 2: Menggunakan object (alternatif)
      // router.push({
      //   pathname: '/result',
      //   query: Object.fromEntries(queryParams.entries())
      // });

      toast.success("Prediksi berhasil!", { id: "prediction" });
    } catch (error: any) {
      console.error("Prediction error:", error);
      toast.error(error.message || "Terjadi kesalahan", {
        id: "prediction",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-30">
      <Card className="max-w-2xl mx-auto p-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Form Prediksi Kanker Paru-Paru
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Isi form berikut untuk memprediksi kemungkinan kanker paru-paru.
          </p>
        </div>

        {/* Umur */}
        <div className="space-y-2 mt-4">
          <Label htmlFor="age">Umur</Label>
          <Input
            id="age"
            type="number"
            placeholder="Masukkan umur"
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            min="1"
            max="120"
            required
          />
        </div>

        {/* Gejala biner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            "smoking",
            "yellow_fingers",
            "anxiety",
            "peer_pressure",
            "chronic_disease",
            "fatigue",
            "allergy",
            "wheezing",
            "alcohol_consuming",
            "coughing",
            "shortness_of_breath",
            "swallowing_difficulty",
            "chest_pain",
          ].map((field) => (
            <div key={field} className="space-y-1">
              <Label className="capitalize text-sm text-gray-700 dark:text-gray-300">
                {field.replace(/_/g, " ")}
              </Label>
              <Select
                value={formData[field as keyof typeof formData]}
                onValueChange={(val) => handleChange(field, val)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Ya</SelectItem>
                  <SelectItem value="0">Tidak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full text-base mt-8"
          size="lg"
        >
          {loading ? "Memproses..." : "Prediksi Sekarang"}
        </Button>
      </Card>
    </div>
  );
}

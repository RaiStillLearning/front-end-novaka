"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
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

// Import Link dari Next.js untuk navigasi
import Link from "next/link";

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
  const [result, setResult] = useState<null | {
    prediction: string;
    probability: number;
  }>(null);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    if (!formData.age || isNaN(Number(formData.age))) {
      toast.error("Harap masukkan umur yang valid");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Sedang memproses prediksi...", { id: "prediction" });

      const res = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
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

      if (!data?.data?.prediction_label) {
        throw new Error("Data prediksi tidak ditemukan");
      }

      setResult({
        prediction: data.data.prediction_label,
        probability: data.data.probability,
      });

      toast.success("Prediksi berhasil!", { id: "prediction" });
    } catch (error: any) {
      console.error("Prediction error:", error);
      toast.error(error?.message || "Terjadi kesalahan", {
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

        {result && (
          <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Hasil Prediksi:{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {result.prediction}
              </span>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Probabilitas: {(result.probability * 100).toFixed(2)}%
            </p>
            {/* Gunakan Link untuk navigasi */}
            <Link href="/check/lung-cancer/history">
              <Button className="w-full text-base mt-4" size="lg">
                Lihat History Prediksi
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}

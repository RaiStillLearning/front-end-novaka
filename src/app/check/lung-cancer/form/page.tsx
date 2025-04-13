// src/app/check/lung-cancer/form/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function LungCancerFormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smoking: "",
    yellowFingers: "",
    anxiety: "",
    peerPressure: "",
    chronicDisease: "",
    fatigue: "",
    allergy: "",
    wheezing: "",
    alcohol: "",
    coughing: "",
    shortnessOfBreath: "",
    swallowingDifficulty: "",
    chestPain: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi post data ke API
      console.log("Submitting form data:", formData);

      // TODO: Uncomment kalau sudah ada endpoint API
      // const response = await fetch("/api/lung-cancer-predict", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // const result = await response.json();
      // console.log(result);

      // Sukses, redirect misalnya ke halaman hasil
      router.push("/check/lung-cancer/history");
    } catch (error) {
      console.error("Failed to submit:", error);
      alert("Gagal mengirim data. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto pt-28 md:pt-40 px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Lung Cancer Prediction Form
      </h1>

      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Age */}
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Smoking */}
            <div>
              <Label htmlFor="smoking">Smoking</Label>
              <select
                id="smoking"
                name="smoking"
                value={formData.smoking}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Yellow Fingers */}
            <div>
              <Label htmlFor="yellowFingers">Yellow Fingers</Label>
              <select
                id="yellowFingers"
                name="yellowFingers"
                value={formData.yellowFingers}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Anxiety */}
            <div>
              <Label htmlFor="anxiety">Anxiety</Label>
              <select
                id="anxiety"
                name="anxiety"
                value={formData.anxiety}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Peer Pressure */}
            <div>
              <Label htmlFor="peerPressure">Peer Pressure</Label>
              <select
                id="peerPressure"
                name="peerPressure"
                value={formData.peerPressure}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Chronic Disease */}
            <div>
              <Label htmlFor="chronicDisease">Chronic Disease</Label>
              <select
                id="chronicDisease"
                name="chronicDisease"
                value={formData.chronicDisease}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Fatigue */}
            <div>
              <Label htmlFor="fatigue">Fatigue</Label>
              <select
                id="fatigue"
                name="fatigue"
                value={formData.fatigue}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Allergy */}
            <div>
              <Label htmlFor="allergy">Allergy</Label>
              <select
                id="allergy"
                name="allergy"
                value={formData.allergy}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Wheezing */}
            <div>
              <Label htmlFor="wheezing">Wheezing</Label>
              <select
                id="wheezing"
                name="wheezing"
                value={formData.wheezing}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Alcohol */}
            <div>
              <Label htmlFor="alcohol">Alcohol Consumption</Label>
              <select
                id="alcohol"
                name="alcohol"
                value={formData.alcohol}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Coughing */}
            <div>
              <Label htmlFor="coughing">Coughing</Label>
              <select
                id="coughing"
                name="coughing"
                value={formData.coughing}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Shortness of Breath */}
            <div>
              <Label htmlFor="shortnessOfBreath">Shortness of Breath</Label>
              <select
                id="shortnessOfBreath"
                name="shortnessOfBreath"
                value={formData.shortnessOfBreath}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Swallowing Difficulty */}
            <div>
              <Label htmlFor="swallowingDifficulty">
                Swallowing Difficulty
              </Label>
              <select
                id="swallowingDifficulty"
                name="swallowingDifficulty"
                value={formData.swallowingDifficulty}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Chest Pain */}
            <div>
              <Label htmlFor="chestPain">Chest Pain</Label>
              <select
                id="chestPain"
                name="chestPain"
                value={formData.chestPain}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit Prediction"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

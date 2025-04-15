"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

interface FeatureData {
  [key: string]: number | string;
}

export default function PredictionResult() {
  const [isClient, setIsClient] = useState(false);
  const [predictionData, setPredictionData] = useState<{
    prediction: string | null;
    probability: number;
    features: FeatureData;
  }>({
    prediction: null,
    probability: 0,
    features: {},
  });

  useEffect(() => {
    setIsClient(true); // Set state to true when component is mounted on the client-side
  }, []);

  // Conditional rendering to ensure that hooks are only used client-side
  if (!isClient) {
    return null; // Render nothing or a loading component until it's client-side
  }

  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    try {
      const prediction = params.get("prediction");
      const probability = parseFloat(params.get("probability") || "0");
      const featuresStr = params.get("features");

      if (!prediction || !featuresStr) {
        throw new Error("Data prediksi tidak lengkap");
      }

      const features = JSON.parse(featuresStr);

      setPredictionData({
        prediction,
        probability: probability * 100, // Konversi ke persentase
        features,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Gagal memuat hasil prediksi");
      router.push("/form"); // Redirect kembali ke form jika error
    }
  }, [params, router]);

  if (!predictionData.prediction) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Memuat Hasil Prediksi...</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sedang memproses hasil prediksi Anda</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isPositive = predictionData.prediction === "YES";

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      {/* Card Hasil Prediksi */}
      <Card className="shadow-lg border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Hasil Prediksi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <span className="mr-3 text-lg">Hasil:</span>
            <Badge
              variant={isPositive ? "destructive" : "secondary"}
              className="text-lg px-4 py-2"
            >
              {isPositive ? "Positif Kanker" : "Negatif Kanker"}
            </Badge>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">
                Tingkat Probabilitas:
              </span>
              <span className="font-medium">
                {predictionData.probability.toFixed(2)}%
              </span>
            </div>
            <Progress
              value={predictionData.probability}
              className={`h-3 ${isPositive ? "bg-red-500" : "bg-green-500"}`}
            />
          </div>
        </CardContent>
      </Card>

      {/* Card Detail Fitur */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Faktor yang Mempengaruhi</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries(predictionData.features).map(([key, value]) => (
            <div
              key={key}
              className="border rounded-lg p-3 bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="text-sm text-muted-foreground capitalize">
                {key.replace(/_/g, " ")}
              </div>
              <div className="text-lg font-semibold">
                {typeof value === "number"
                  ? value.toFixed(2)
                  : value === "1"
                  ? "Ya"
                  : "Tidak"}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tombol Kembali */}
      <Button
        onClick={() => router.push("/form")}
        variant="outline"
        className="w-full mt-6"
      >
        Kembali ke Form Prediksi
      </Button>
    </div>
  );
}

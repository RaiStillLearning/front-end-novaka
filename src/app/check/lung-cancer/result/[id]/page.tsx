import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PredictionResult {
  id: string;
  risk_level: "low" | "medium" | "high";
  probability: number;
  explanation: string;
  date: string;
  input_data: {
    age: number;
    gender: string;
    smoking: number;
    // tambahkan field lain sesuai kebutuhan
  };
}

export default async function ResultPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch data dari API (contoh dummy data)
  const result: PredictionResult = {
    id: params.id,
    risk_level: "high",
    probability: 0.87,
    explanation:
      "Kombinasi usia, riwayat merokok, dan gejala yang dilaporkan menunjukkan risiko tinggi kanker paru-paru.",
    date: new Date().toLocaleDateString(),
    input_data: {
      age: 45,
      gender: "male",
      smoking: 20,
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/check/lung-cancer/history">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to History
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full ${
                result.risk_level === "high"
                  ? "bg-red-500"
                  : result.risk_level === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            />
            Hasil Prediksi Kanker Paru-paru
          </CardTitle>
          <p className="text-sm text-gray-600">
            ID: {result.id} • {result.date}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Risk Level Indicator */}
          <div className="space-y-2">
            <h3 className="font-medium">Tingkat Risiko</h3>
            <div
              className={`p-4 rounded-lg ${
                result.risk_level === "high"
                  ? "bg-red-50 text-red-800"
                  : result.risk_level === "medium"
                  ? "bg-yellow-50 text-yellow-800"
                  : "bg-green-50 text-green-800"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold capitalize">
                  {result.risk_level} risk
                </span>
                <span className="font-mono">
                  {(result.probability * 100).toFixed(1)}% probability
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className={`h-2.5 rounded-full ${
                    result.risk_level === "high"
                      ? "bg-red-500"
                      : result.risk_level === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${result.probability * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-2">
            <h3 className="font-medium">Penjelasan</h3>
            <p className="text-gray-700">{result.explanation}</p>
          </div>

          {/* Input Data Summary */}
          <div className="space-y-2">
            <h3 className="font-medium">Data yang Anda Input</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Usia</p>
                <p>{result.input_data.age} tahun</p>
              </div>
              <div>
                <p className="text-gray-500">Jenis Kelamin</p>
                <p>
                  {result.input_data.gender === "male"
                    ? "Laki-laki"
                    : "Perempuan"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Riwayat Merokok</p>
                <p>{result.input_data.smoking} pack years</p>
              </div>
              {/* Tambahkan data input lainnya */}
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-2">
            <h3 className="font-medium">Rekomendasi</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {result.risk_level === "high" ? (
                <>
                  <li>Segera konsultasi dengan dokter spesialis paru</li>
                  <li>Pertimbangkan untuk melakukan CT scan dada</li>
                  <li>Hentikan kebiasaan merokok jika masih merokok</li>
                </>
              ) : result.risk_level === "medium" ? (
                <>
                  <li>Konsultasi dengan dokter umum</li>
                  <li>Monitor gejala secara berkala</li>
                  <li>Pertimbangkan pemeriksaan rutin</li>
                </>
              ) : (
                <>
                  <li>Pertahankan gaya hidup sehat</li>
                  <li>Lakukan pemeriksaan rutin tahunan</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <Button asChild variant="outline">
              <Link href="/check/lung-cancer/history">Lihat History</Link>
            </Button>
            <Button asChild>
              <Link href="/check/lung-cancer/form">Prediksi Baru</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function LungCancerHistoryPage() {
  const [history, setHistory] = useState<
    Array<{ age: string; smoking: boolean; prediction: string }>
  >([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("lungCancerHistory") || "[]"
    );
    setHistory(storedHistory);
  }, []);

  return (
    <div className="p-30">
      <h1 className="text-3xl font-bold mb-6">Histori Prediksi</h1>

      {history.length === 0 ? (
        <p>Belum ada histori prediksi.</p>
      ) : (
        <div className="space-y-4">
          {history.map((item, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <p>
                <strong>Usia:</strong> {item.age}
              </p>
              <p>
                <strong>Perokok:</strong> {item.smoking ? "Ya" : "Tidak"}
              </p>
              <p>
                <strong>Prediksi:</strong> {item.prediction}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

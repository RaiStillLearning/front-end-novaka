"use client";

import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState<any[]>([]); // Menggunakan array untuk history
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null); // Track ID yang sedang dihapus
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengambil data history
  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      setError(null); // Reset error sebelum mencoba mengambil data

      try {
        const res = await fetch(
          "https://bekanker-production.up.railway.app/api/predict",
          {
            method: "GET", // Ambil data history
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`, // API Key dalam header
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Gagal memuat history: ${res.statusText}`);
        }

        const data = await res.json();
        setHistory(data.data || []); // Mengakses data history
      } catch (error: any) {
        setError(error.message || "Terjadi kesalahan saat memuat history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  // Fungsi untuk menghapus data
  const handleDelete = async (id: string) => {
    setLoading(true);
    setDeletingId(id); // Tandai ID yang sedang dihapus

    try {
      const res = await fetch(
        `https://bekanker-production.up.railway.app/api/predict/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`, // API Key dalam header
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Gagal menghapus data: ${res.statusText}`);
      }

      // Menghapus item dari list history setelah berhasil dihapus
      setHistory(history.filter((item) => item._id !== id));
    } catch (error: any) {
      setError(error.message || "Terjadi kesalahan saat menghapus data");
    } finally {
      setLoading(false);
      setDeletingId(null); // Reset state deletingId setelah proses selesai
    }
  };

  return (
    <div className="p-6 mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        History Prediksi
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          {history.length === 0 ? (
            <p>Belum ada prediksi sebelumnya.</p>
          ) : (
            <ul className="space-y-4">
              {history.map((item) => (
                <li key={item._id} className="border-b py-2">
                  <p>Umur: {item.age}</p>
                  <p>Prediksi: {item.prediction_label}</p>
                  <p>Probabilitas: {(item.probability * 100).toFixed(2)}%</p>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className={`text-red-500 hover:text-red-700 ${
                      deletingId === item._id ? "cursor-wait" : ""
                    }`}
                    disabled={deletingId === item._id} // Disable tombol saat menghapus
                  >
                    {deletingId === item._id ? "Menghapus..." : "Hapus"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

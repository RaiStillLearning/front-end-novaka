// lib/api.js
export async function predictCancer(data) {
  try {
    const res = await fetch("http://localhost:3000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // Kunci dari .env frontend
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Gagal prediksi");

    return result;
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message };
  }
}

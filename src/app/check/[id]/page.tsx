// src/app/check/[id]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { formQuestions } from "@/data/formQuestions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CancerFormPage() {
  const { id } = useParams();
  const router = useRouter();

  // Ambil pertanyaan berdasarkan ID kanker
  const questions = formQuestions[id as string];

  if (!questions) {
    return (
      <p className="text-center py-10 text-red-500">
        Jenis kanker tidak ditemukan.
      </p>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulir berhasil dikirim!"); // Gantilah ini dengan logika penyimpanan data
    router.push("/success"); // Arahkan user ke halaman sukses
  };

  return (
    <div className={"flex justify-center items-center min-h-screen px-6 py-10"}>
      <Card className={"max-w-2xl w-full shadow-xl rounded-lg"}>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Formulir Pemeriksaan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((q, index) => (
              <div key={index} className="space-y-3">
                <label className="block font-medium text-sm mb-1">
                  {q.question}
                </label>
                {q.type === "radio" && (
                  <RadioGroup className="flex flex-col space-y-2">
                    {q.options?.map((option, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <RadioGroupItem
                          value={option}
                          id={`${q.question}-${i}`}
                        />
                        <label
                          htmlFor={`${q.question}-${i}`}
                          className="cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
                {q.type === "text" && (
                  <Input
                    type="text"
                    placeholder="Jawaban Anda..."
                    className=" py-2 px-3 mt-3"
                  />
                )}
              </div>
            ))}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Kirim
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// src/app/check/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CancerCard from "@/components/sections/CancerCard";
import { cancerData } from "@/data/cancer";
import Image from "next/image";

export default function CheckPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div className="pt-28 md:pt-40 container mx-auto px-6 md:px-12 lg:px-20 dark:bg-gray-950 relative">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Jangan Tunggu Gejala, <br /> Periksa Kanker Lebih Dini!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Kanker bisa menyerang siapa saja, kapan saja. Deteksi dini adalah
            kunci untuk meningkatkan peluang kesembuhan. Dengan melakukan
            pemeriksaan rutin, Anda bisa melindungi diri dan orang-orang yang
            Anda cintai.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 md:w-[380px] lg:w-[450px]">
            <Image
              src="/check.jpg"
              alt="Pemeriksaan Kanker"
              width={450} // Ukuran maksimum untuk laptop
              height={300} // Bisa disesuaikan, atau hapus agar Next.js menyesuaikan otomatis
              className="w-64 md:w-[380px] lg:w-[450px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Cancer Card Section */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Pilih Jenis Kanker
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-40">
        {cancerData.map((cancer, index) => (
          <CancerCard key={index} cancer={cancer} />
        ))}
      </div>
    </div>
  );
}

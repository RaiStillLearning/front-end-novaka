// src/app/check/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function CheckPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
    } else if (status === "unauthenticated") {
      setIsLoading(false);
      router.push("/sign-in");
    } else {
      setIsLoading(false);
    }
  }, [session, status, router]);

  if (isLoading || status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    // This will briefly show before redirect happens
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium">Redirecting to sign in...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-40 container mx-auto px-6 md:px-12 lg:px-20 relative">
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
          <div className="w-64 md:w-[380px] lg:w-[450px] pt-5">
            <Image
              src="/check.jpg"
              alt="Pemeriksaan Kanker"
              width={450}
              height={300}
              className="w-64 md:w-[380px] lg:w-[450px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Cancer Card Section */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-8">
          Lung Cancer Prediction
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link href="/check/lung-cancer/form">
            <Card className="p-6 hover:bg-gray-900 transition-colors cursor-pointer h-full">
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-blue-500 mb-4"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <h2 className="text-xl font-semibold mb-2">New Prediction</h2>
                <p className="text-gray-600">
                  Start a new lung cancer risk assessment
                </p>
              </div>
            </Card>
          </Link>

          <Link href="/check/lung-cancer/history">
            <Card className="p-6 hover:bg-gray-900 transition-colors cursor-pointer h-full">
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-green-500 mb-4"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                <h2 className="text-xl font-semibold mb-2">
                  Prediction History
                </h2>
                <p className="text-gray-600">View your previous predictions</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Login Akun Terlebih Dahulu",
    description: "Masuk ke akun Anda untuk mengakses fitur pemeriksaan.",
    image: "/images/login-step.png",
  },
  {
    title: "Pergi ke Halaman Periksa",
    description: "Navigasi ke halaman pemeriksaan dari menu utama.",
    image: "/images/exam-step.png",
  },
  {
    title: "Masukkan Gejala Anda Di Form",
    description: "Pilih jenis gejala yang anda alami.",
    image: "/images/select-step.png",
  },
  {
    title: "Pilih Selesai & Lihat Hasil",
    description: "Setelah selesai, sistem akan menampilkan hasil deteksi.",
    image: "/images/results-step.png",
  },
];

export default function HowToCheckPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto px-4 py-30">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Cara Melakukan Pemeriksaan
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ikuti langkah-langkah sederhana ini untuk memeriksa risiko kanker
          Anda.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 px-4 flex justify-center"
              >
                <Card className="max-w-3xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Langkah {index + 1}: {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <p className="text-lg">{step.description}</p>
                      <div className="flex items-center mt-8">
                        <div className="flex-1">
                          {index > 0 && (
                            <Button
                              variant="ghost"
                              onClick={scrollPrev}
                              className="gap-1"
                            >
                              <ChevronRight className="h-4 w-4 rotate-180" />
                              Sebelumnya
                            </Button>
                          )}
                        </div>
                        <div className="flex-1 text-right">
                          {index < steps.length - 1 && (
                            <Button
                              variant="ghost"
                              onClick={scrollNext}
                              className="gap-1"
                            >
                              Selanjutnya
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={1280}
                          height={720}
                          quality={100}
                          priority
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? "bg-primary w-6" : "bg-muted"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" className="px-8 py-6 text-lg">
          <Link href="/check">Mulai Periksa Kesehatan</Link>
        </Button>
      </div>
    </div>
  );
}

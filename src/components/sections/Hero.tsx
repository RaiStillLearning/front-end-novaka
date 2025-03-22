import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-8 px-6 md:px-16 py-4">
      {/* Teks Section */}
      <div className="xl:w-1/2 text-center xl:text-left space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
          Kenali kanker sejak dini dengan teknologi canggih dan ahli
          terpercaya—karena peluang sembuh dimulai dari langkah pertama!
        </h1>
        <p className="text-xs sm:text-lg md:text-xl text-muted-foreground">
          Memanfaatkan ilmu terkini dan pendampingan dokter onkologi untuk
          deteksi dini kanker yang lebih cepat. Deteksi lebih awal, peluang
          sembuh lebih maksimal.
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-2 md:gap-4 justify-center xl:justify-start">
          <Link href="/check">
            <Button className="md:py-5 md:px-6 text-sm md:text-lg">
              Mulai Periksa Kesehatan
            </Button>
          </Link>
          <Link href="/how-to-check">
            <Button className="md:py-5 md:px-6 text-sm md:text-lg">
              Reservasi
            </Button>
          </Link>
        </div>
      </div>

      {/* Gambar Section */}
      <div className="hidden xl:flex xl:w-1/2 mt-3 xl:mt-0 justify-center">
        <Image
          src="/medis.jpg"
          alt="banner"
          width={720}
          height={720}
          className="rounded-lg shadow-2xl border mx-auto"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;

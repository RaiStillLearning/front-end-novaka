import HeroSection from "@/components/sections/Hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cancerData } from "@/data/cancer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="pt-28 md:pt-40">
      <HeroSection />

      <section className="py-10 md:py-36">
        <div className="container mx-auto px-16 md:px-24 lg:px-28">
          {/* Wrapper Carousel */}
          <div className="flex justify-center">
            <Carousel className="w-full max-w-full mx-auto">
              <CarouselContent className="w-full">
                {cancerData.map((cancer, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3 relative group" // Tambah "group" untuk efek hover
                  >
                    {/* Gambar */}
                    <Image
                      src={cancer.image}
                      alt={cancer.title}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover rounded-md"
                    />

                    {/* Overlay dengan teks */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md p-4">
                      <h3 className="text-lg md:text-xl font-semibold text-center">
                        {cancer.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

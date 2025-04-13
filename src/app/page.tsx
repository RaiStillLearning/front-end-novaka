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
      {/* Hero Section */}
      <HeroSection />

      {/* Carousel Section */}
      <section className="py-10 md:py-36 relative">
        <div className="container mx-auto px-16 md:px-24 lg:px-28">
          {/* Wrapper Carousel */}
          <div className="flex justify-center">
            <Carousel className="w-full max-w-full mx-auto">
              <CarouselContent className="w-full">
                {cancerData.flatMap((cancer) =>
                  cancer.image.map((image, index) => (
                    <CarouselItem
                      key={`${cancer.id}-${index}`}
                      className="basis-full md:basis-1/2 lg:basis-1/3 relative group"
                    >
                      <div className="relative h-full">
                        <Image
                          src={image}
                          alt={cancer.title}
                          width={1280}
                          height={720}
                          className="w-full h-full object-cover rounded-md"
                        />

                        {/* Overlay dengan teks */}
                        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md p-4">
                          <h3 className="text-lg md:text-xl font-semibold text-center">
                            {cancer.title}
                          </h3>
                        </div> */}
                      </div>
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"></div>
      </section>

      {/* Detail Kanker Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-gray-100 dark:to-gray-900 blur-2xl"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
            Macam-macam kanker
          </h2>

          <div className="space-y-12">
            {cancerData.map((cancer, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
              >
                {/* Gambar */}
                <div>
                  <Image
                    src={cancer.image[0]}
                    alt={cancer.title}
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                {/* Detail */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {cancer.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    {cancer.description}
                  </p>

                  {/* Gejala */}
                  <h4 className="text-xl font-semibold mt-6 text-gray-900 dark:text-gray-100">
                    Gejala:
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                    {cancer.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

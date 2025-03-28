// src/components/sections/CancerCard.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface CancerCardProps {
  cancer: {
    id: string;
    title: string;
    image: string;
    description: string;
  };
}

export default function CancerCard({ cancer }: CancerCardProps) {
  const router = useRouter();

  return (
    <div
      className="bg-gray-50 dark:bg-gray-900 cursor-pointer border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
      onClick={() => router.push(`/check/${cancer.id}`)}
    >
      <Image
        src={cancer.image}
        alt={cancer.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl text-gray-900 dark:text-gray-100 font-bold">
          {cancer.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">
          {cancer.description}
        </p>
      </div>
    </div>
  );
}

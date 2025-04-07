// src/components/about/TeamMemberCard.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  image: string;
  role: string;
}

export function TeamMemberCard({ name, image, role }: TeamMemberCardProps) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <span className="text-lg font-semibold mt-2">{name}</span>
          <p className="text-sm text-muted-foreground mt-1.5">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

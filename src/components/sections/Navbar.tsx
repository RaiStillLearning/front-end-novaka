"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// * Daftar rute navigasi dengan label dan href yang sesuai
const navRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/check", label: "Check" },
  { href: "/how-to-check", label: "How to check" },
];

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // * Setel isClient ke true setelah komponen di-mount untuk memastikan rendering di sisi klien
  useEffect(() => {
    setIsClient(true);
  }, []);

  // * Menangani klik login dengan menutup menu mobile dan navigasi ke halaman sign-in
  const handleLoginClick = () => {
    setIsOpen(false);
    router.push("/sign-in");
  };

  return (
    <div className="fixed top-0 w-full backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ! Logo dan Tautan Beranda */}
        <Link href="/">
          <h1 className="text-xl font-bold">Prediksi Kanker</h1>
        </Link>

        {/* * Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {navRoutes.map((route) => (
            <Button
              asChild
              key={route.href}
              variant="ghost"
              className="px-4 py-2"
            >
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
          {/* * Toggle Tema */}
          <ModeToggle />
          {/* * Tombol Login */}
          <Button asChild className="px-6 py-2">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>

        {/* * Menu Mobile dengan Sidebar */}
        <div className="md:hidden">
          {/* * Pastikan komponen di-render di sisi klien */}
          {isClient && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center space-x-2 w-full">
                {/* * Toggle Tema */}
                <ModeToggle />
                <SheetTrigger asChild>
                  {/* * Tombol Menu Mobile */}
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
              </div>
              {/* * Konten Sidebar Mobile */}
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-start space-y-4 mt-2 px-4">
                  {/* * Tautan Navigasi */}
                  {navRoutes.map((route) => (
                    <Button
                      asChild
                      key={route.href}
                      variant="ghost"
                      className="w-full text-left px-4 py-2"
                    >
                      <Link href={route.href} onClick={() => setIsOpen(false)}>
                        {route.label}
                      </Link>
                    </Button>
                  ))}
                  {/* * Tombol Login */}
                  <Button
                    className="w-full px-8 py-2"
                    onClick={handleLoginClick}
                  >
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

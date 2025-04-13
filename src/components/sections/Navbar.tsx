"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, Loader, LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/check", label: "Check" },
  { href: "/how-to-check", label: "How to check" },
];

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div className="fixed top-0 w-full backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold">Prediksi Kanker</h1>
        </Link>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {navRoutes
            .filter((route) => {
              // Kalau route-nya "/check" dan user belum login -> jangan tampilkan
              if (route.href === "/check" && !session) {
                return false;
              }
              return true;
            })
            .map((route) => (
              <Button
                asChild
                key={route.href}
                variant="ghost"
                className="px-4 py-2"
              >
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          <ModeToggle />

          {/* Login / Avatar */}
          {status === "loading" ? (
            <Loader className="size-6 animate-spin" />
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-4 items-center cursor-pointer">
                  <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage
                      className="size-10"
                      src={session.user?.image || undefined}
                    />
                    <AvatarFallback className="bg-sky-900 text-white">
                      {session.user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-56 shadow-lg rounded-lg"
              >
                <DropdownMenuLabel className="px-4 py-2">
                  <p className="font-semibold capitalize text-lg mb-1 truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {session.user?.email}
                  </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="text-red-500 focus:bg-red-500 cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md transition"
                >
                  <LogOut className="size-5 hover:text-white" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-4">
              <Button>
                <Link href="/sign-in">Login</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          {isClient && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex items-center space-x-2">
                <ModeToggle />
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
              </div>
              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-start space-y-4 mt-2 px-4">
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

                  {/* Mobile User Section */}
                  {status === "loading" ? (
                    <Loader className="size-6 animate-spin mx-auto" />
                  ) : session ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="w-full">Account</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center">
                        <DropdownMenuLabel>
                          <p>{session.user?.name}</p>
                          <p className="text-sm text-gray-500">
                            {session.user?.email}
                          </p>
                        </DropdownMenuLabel>
                        <DropdownMenuItem onClick={handleSignOut}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button
                      className="w-full"
                      onClick={() => router.push("/sign-in")}
                    >
                      Login
                    </Button>
                  )}
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

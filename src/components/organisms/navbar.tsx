import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

const navRoutes = [
  {
    href: "/",
    label: "Beranda",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/check",
    label: "Check",
  },
  {
    href: "/how-to-check",
    label: "How to check",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto px-10 py-4 flex justify-between items-center">
        <Link href="/">
          <h1>Prediksi Kanker</h1>
        </Link>

        <div className="items-center space-x-4 flex">
          {navRoutes.map((route, i) => (
            <Button asChild key={i} variant="ghost">
              <Link
                href={route.href}
                className="text-sm font-medium transition-colors"
              >
                {route.label}
              </Link>
            </Button>
          ))}

          <Button>
            <Link href="/login">Login</Link>
          </Button>

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

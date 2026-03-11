"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappNumber } from "@/lib/menu-data";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#cardapio", label: "Cardapio" },
  { href: "#destaques", label: "Destaques" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localizacao" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] font-oswald text-xl font-bold text-black">
            B
          </span>
          <span className="font-oswald text-xl font-bold tracking-[0.22em] text-white">
            BRASA BURGER
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Quero%20fazer%20um%20pedido%20na%20Brasa%20Burger`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Pedir Agora
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="rounded-md border border-white/20 p-2 text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[70] transition-all duration-300 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          aria-label="Fechar menu"
          className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"
          onClick={() => setMobileOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 h-[100svh] w-[86%] max-w-xs border-l border-white/10 bg-[#0b0b0b] px-6 pb-8 pt-24 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5 text-xl font-oswald tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/10 pb-3 text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Quero%20fazer%20um%20pedido%20na%20Brasa%20Burger`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 w-full"
            onClick={() => setMobileOpen(false)}
          >
            Pedir Agora
          </a>
        </aside>

        <button
          aria-label="Fechar menu"
          className="absolute right-4 top-4 rounded-md border border-white/20 bg-black/60 p-2 text-white"
          onClick={() => setMobileOpen(false)}
        >
          <X size={20} />
        </button>
        </div>
    </header>
  );
}

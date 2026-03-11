import Link from "next/link";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { whatsappNumber } from "@/lib/menu-data";

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/cardapio", label: "Cardapio" },
  { href: "/destaques", label: "Destaques" },
  { href: "/galeria", label: "Galeria" },
  { href: "/localizacao", label: "Localizacao" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] font-oswald text-lg font-bold text-black">
              B
            </span>
            <span className="font-oswald text-lg tracking-[0.2em] text-white">BRASA BURGER</span>
          </div>
          <p className="max-w-sm text-sm text-zinc-400">
            Blend bovino selecionado, grelha quente e montagem na hora. Pedido entrou, a chapa liga.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-oswald text-xl text-white">Links rapidos</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--primary)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-oswald text-xl text-white">Contato</h4>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-[var(--primary)]" />Rua da Brasa, 180 - Centro</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-[var(--primary)]" />(11) 3333-1122</li>
            <li className="flex items-center gap-2"><MessageCircle size={16} className="text-[var(--primary)]" />contato@brasaburger.com</li>
          </ul>
          <div className="mt-5 flex items-center gap-3 text-zinc-300">
            <a href="https://instagram.com/brasaburger" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><Instagram size={16} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><Facebook size={16} /></a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"><MessageCircle size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Brasa Burger. Todos os direitos reservados.
      </div>
    </footer>
  );
}

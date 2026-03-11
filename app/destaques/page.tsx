import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { highlightItems, menuItems, whatsappNumber } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Destaques | Brasa Burger",
  description: "Mais pedidos da semana na Brasa Burger.",
};

export default function DestaquesPage() {
  const highlights = menuItems.filter((item) => highlightItems.includes(item.id));

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <h1 className="font-oswald text-5xl text-white">Mais pedidos da semana</h1>
      <p className="mt-3 text-zinc-300">Os 3 que mais saem no balcao e no delivery.</p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.id} className="glass flex overflow-hidden rounded-2xl border border-white/10">
            <div className="relative w-28 shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="112px" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h2 className="font-oswald text-2xl text-white">{item.name}</h2>
                <p className="text-sm text-zinc-300">{item.description}</p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold text-[var(--primary)]">{item.price}</span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Quero%20pedir%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--primary)]/40 px-3 py-1 text-xs text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-black"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link href="/cardapio" className="mt-10 inline-block text-sm font-semibold text-[var(--primary)] hover:underline">
        Ver cardapio completo -&gt;
      </Link>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

const galleryItems = [
  { name: "Classic Brasa", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80" },
  { name: "Bacon Lovers", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=900&q=80" },
  { name: "Smash Duplo", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&q=80" },
  { name: "Texas BBQ", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&q=80" },
  { name: "Milk Shake", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80" },
  { name: "Batata Cheddar", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&q=80" },
];

export const metadata: Metadata = {
  title: "Galeria | Brasa Burger",
  description: "Galeria de burgers e acompanhamentos da Brasa Burger.",
};

export default function GaleriaPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <h1 className="font-oswald text-5xl text-white">Galeria</h1>
      <p className="mt-3 text-zinc-300">Fotos reais da cozinha e dos pedidos da semana.</p>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryItems.map((item) => (
          <article key={item.name} className="group relative mb-4 w-full overflow-hidden rounded-2xl border border-white/10">
            <Image src={item.image} alt={item.name} width={700} height={500} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/45 opacity-0 transition group-hover:opacity-100">
              <span className="absolute bottom-3 left-3 font-oswald text-2xl text-white">{item.name}</span>
            </div>
          </article>
        ))}
      </div>

      <a href="https://instagram.com/brasaburger" target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-[var(--primary)] hover:underline">
        @brasaburger no Instagram
      </a>
    </main>
  );
}

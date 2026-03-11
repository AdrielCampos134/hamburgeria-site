"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuItems, type MenuCategory, whatsappNumber } from "@/lib/menu-data";

type Filter = "Todos" | MenuCategory;

const filters: Filter[] = ["Todos", "Burgers", "Combos", "Acompanhamentos", "Bebidas"];

type MenuSectionProps = {
  compact?: boolean;
};

export default function MenuSection({ compact = false }: MenuSectionProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const filtered = useMemo(() => {
    if (activeFilter === "Todos") return menuItems;
    return menuItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="cardapio" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {!compact && (
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-400">Cardapio completo</p>
            <h2 className="font-oswald text-4xl leading-tight text-white sm:text-5xl">
              Monte seu pedido sem perder tempo
            </h2>
          </div>
        </div>
      )}

      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)]"
                : "border-white/15 text-zinc-300 hover:border-white/30"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--secondary)] shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(245,166,35,0.2)]"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              {item.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                  {item.tag}
                </span>
              )}
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-oswald text-2xl text-white">{item.name}</h3>
                <span className="font-semibold text-[var(--primary)]">{item.price}</span>
              </div>
              <p className="min-h-14 text-sm text-zinc-400">{item.description}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Quero%20adicionar%20${encodeURIComponent(item.name)}%20ao%20pedido`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex"
              >
                Adicionar ao pedido
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

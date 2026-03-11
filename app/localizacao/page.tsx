import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const openingHours = [
  { day: "Seg-Qui", hours: "18h-23h", key: [1, 2, 3, 4] },
  { day: "Sex", hours: "18h-00h", key: [5] },
  { day: "Sab", hours: "12h-00h", key: [6] },
  { day: "Dom", hours: "12h-22h", key: [0] },
];

export const metadata: Metadata = {
  title: "Localizacao | Brasa Burger",
  description: "Endereco e horarios da Brasa Burger.",
};

export default function LocalizacaoPage() {
  const today = new Date().getDay();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <h1 className="font-oswald text-5xl text-white">Localizacao e horarios</h1>

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10">
        <iframe
          title="Mapa Brasa Burger"
          src="https://www.google.com/maps?q=Paulista%20Sao%20Paulo&output=embed"
          className="h-[420px] w-full grayscale transition duration-500 hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 max-w-xs rounded-2xl border border-white/20 bg-black/70 p-4 backdrop-blur">
          <p className="font-oswald text-xl text-white">Brasa Burger</p>
          <p className="text-sm text-zinc-300">Rua da Brasa, 180 - Centro</p>
          <p className="mt-2 text-sm text-zinc-300">(11) 3333-1122</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="mb-4 font-oswald text-2xl text-white">Horarios</h2>
          <div className="space-y-2 text-sm text-zinc-300">
            {openingHours.map((line) => {
              const isToday = line.key.includes(today);
              return (
                <div
                  key={line.day}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                    isToday ? "bg-[var(--primary)]/15 text-white" : "bg-white/5"
                  }`}
                >
                  <span>{line.day}</span>
                  <span className="font-semibold">{line.hours}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="glass rounded-2xl p-6 text-sm text-zinc-300">
          <h2 className="mb-4 font-oswald text-2xl text-white">Atendimento</h2>
          <p className="mb-3 flex items-center gap-2"><Phone size={16} className="text-[var(--primary)]" />(11) 3333-1122</p>
          <p className="mb-3 flex items-center gap-2"><MessageCircle size={16} className="text-[var(--primary)]" />WhatsApp direto sem fila</p>
          <p className="flex items-center gap-2"><MapPin size={16} className="text-[var(--primary)]" />Retirada no balcao e delivery</p>
        </div>
      </div>
    </main>
  );
}

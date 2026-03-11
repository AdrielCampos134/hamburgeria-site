"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import MenuSection from "@/components/MenuSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import { highlightItems, menuItems, whatsappNumber } from "@/lib/menu-data";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Hamburguer certeiro. Vim pela indicacao e nao volto atras.",
    name: "Ricardo S.",
    role: "Cliente desde 2019",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    quote: "O Bacon Lovers e absurdo. Bacon no ponto, cheddar derretido, molho na medida.",
    name: "Mariana C.",
    role: "Cliente frequente",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    quote: "Consistencia toda vez. Pedido rapido, comida quente e bem montada.",
    name: "Carlos E.",
    role: "Chef",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
  },
  {
    quote: "Smash Duplo chegou em 20 minutos, pao inteiro e carne no ponto.",
    name: "Juliana T.",
    role: "Cliente",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80",
  },
  {
    quote: "Onion rings sequinhos e burger montado direito. Padrao sempre alto.",
    name: "Felipe M.",
    role: "Cliente",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80",
  },
  {
    quote: "Pedido saiu rapido mesmo com casa cheia. Cozinha eficiente.",
    name: "Patricia R.",
    role: "Cliente local",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
];

const galleryItems = [
  { name: "Classic Brasa", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80" },
  { name: "Bacon Lovers", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=900&q=80" },
  { name: "Smash Duplo", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&q=80" },
  { name: "Texas BBQ", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&q=80" },
  { name: "Milk Shake", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80" },
  { name: "Batata Cheddar", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&q=80" },
];

const openingHours = [
  { day: "Seg-Qui", hours: "18h-23h", key: [1, 2, 3, 4] },
  { day: "Sex", hours: "18h-00h", key: [5] },
  { day: "Sab", hours: "12h-00h", key: [6] },
  { day: "Dom", hours: "12h-22h", key: [0] },
];

export default function HomeSections() {
  const [heroReady, setHeroReady] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const today = useMemo(() => new Date().getDay(), []);
  const highlights = menuItems.filter((item) => highlightItems.includes(item.id));

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Erro ao enviar");

      setStatus(data.message || "Mensagem recebida!");
      event.currentTarget.reset();
    } catch {
      setStatus("Nao foi possivel enviar agora. Fale no WhatsApp.");
    }
  };

  return (
    <>
      <section id="inicio" className="mobile-vh-fix relative overflow-hidden md:min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80"
          alt="Hamburguer artesanal Brasa Burger"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.9))]" />

        <div
          className={`mobile-vh-fix relative mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 text-white transition-all duration-700 sm:px-6 sm:pb-24 sm:pt-32 lg:min-h-screen lg:px-8 ${
            heroReady ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-6 w-max animate-pulse rounded-full border border-[var(--primary)]/40 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
            Brasa Burger - Aberto agora
          </span>
          <h1 className="font-oswald text-5xl leading-tight sm:text-7xl">
            <span className="block">Hamburguer artesanal</span>
            <span className="text-gradient block">feito do jeito certo</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-200">
            Blend bovino selecionado, grelhado na brasa. Sem frescura.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/cardapio" className="btn-primary">
              Ver Cardapio
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Quero%20fazer%20um%20pedido%20na%20Brasa%20Burger`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:border-white"
            >
              Pedir no WhatsApp
            </a>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-4 text-center">
              <p className="font-oswald text-3xl text-[var(--primary)]">5.000+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-300">clientes satisfeitos</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="font-oswald text-3xl text-[var(--primary)]">4.9</p>
              <p className="text-xs uppercase tracking-widest text-zinc-300">avaliacao Google</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="font-oswald text-3xl text-[var(--primary)]">8 anos</p>
              <p className="text-xs uppercase tracking-widest text-zinc-300">de historia</p>
            </div>
          </div>

          <a href="#destaques" className="mt-10 inline-flex w-max animate-bounce self-center text-zinc-300">
            <ChevronDown />
          </a>
        </div>
      </section>

      <RevealOnScroll>
        <section id="destaques" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-4xl text-white sm:text-5xl">Mais pedidos da semana</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.id} className="glass flex overflow-hidden rounded-2xl border border-white/10">
                <div className="relative w-28 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="112px" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-oswald text-2xl text-white">{item.name}</h3>
                    <p className="text-sm text-zinc-300">Blend na chapa quente, montagem na hora.</p>
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
          <Link href="/cardapio" className="mt-8 inline-block text-sm font-semibold text-[var(--primary)] hover:underline">
            Ver cardapio completo -&gt;
          </Link>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-400">Por que a Brasa?</p>
            <h2 className="font-oswald text-4xl text-white sm:text-5xl">Sem atalho no preparo</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-5">
                <h3 className="mb-2 font-oswald text-2xl text-white">🔥 Grelhado na brasa</h3>
                <p className="text-sm text-zinc-300">Selo e sabor que forno nao faz.</p>
              </div>
              <div className="glass rounded-2xl p-5">
                <h3 className="mb-2 font-oswald text-2xl text-white">🥩 Blend artesanal</h3>
                <p className="text-sm text-zinc-300">Selecionado direto do acougue parceiro.</p>
              </div>
              <div className="glass rounded-2xl p-5">
                <h3 className="mb-2 font-oswald text-2xl text-white">⏱ Feito na hora</h3>
                <p className="text-sm text-zinc-300">Pedido entrou, comecou. Sem pre-preparo.</p>
              </div>
              <div className="glass rounded-2xl p-5">
                <h3 className="mb-2 font-oswald text-2xl text-white">✅ Ingredientes frescos</h3>
                <p className="text-sm text-zinc-300">Nada de congelado. Renovacao diaria.</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
              alt="Hamburguer sendo grelhado"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>
      </RevealOnScroll>

      <MenuSection />

      <RevealOnScroll>
        <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-oswald text-4xl text-white sm:text-5xl">Avaliacoes</h2>
            <div className="rounded-full border border-white/15 bg-[#111] px-5 py-2 text-sm text-zinc-300">
              Nota 4.9 ⭐ +850 avaliacoes
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name + item.role} className="glass rounded-2xl p-5">
                <div className="mb-3 flex gap-1 text-[var(--primary)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${item.name}-${index}`} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-zinc-200">&quot;{item.quote}&quot;</p>
                <div className="mt-4 flex items-center gap-3">
                  <Image src={item.avatar} alt={item.name} width={42} height={42} className="rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-zinc-400">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a href="https://g.page/r/brasaburger/review" target="_blank" rel="noreferrer" className="mt-8 inline-block text-sm font-semibold text-[var(--primary)] hover:underline">
            Avaliar no Google -&gt;
          </a>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="galeria" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-4xl text-white sm:text-5xl">Galeria</h2>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setLightbox(item.image)}
                className="group relative mb-4 w-full overflow-hidden rounded-2xl border border-white/10 text-left"
              >
                <Image src={item.image} alt={item.name} width={700} height={500} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/45 opacity-0 transition group-hover:opacity-100">
                  <span className="absolute bottom-3 left-3 font-oswald text-2xl text-white">{item.name}</span>
                </div>
              </button>
            ))}
          </div>
          <a href="https://instagram.com/brasaburger" target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-[var(--primary)] hover:underline">
            @brasaburger no Instagram
          </a>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="localizacao" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-4xl text-white sm:text-5xl">Localizacao e horarios</h2>
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
              <h3 className="mb-4 font-oswald text-2xl text-white">Horarios</h3>
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
              <h3 className="mb-4 font-oswald text-2xl text-white">Atendimento</h3>
              <p className="mb-3 flex items-center gap-2"><Phone size={16} className="text-[var(--primary)]" />(11) 3333-1122</p>
              <p className="mb-3 flex items-center gap-2"><MessageCircle size={16} className="text-[var(--primary)]" />WhatsApp direto sem fila</p>
              <p className="flex items-center gap-2"><MapPin size={16} className="text-[var(--primary)]" />Retirada no balcao e delivery</p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="contato" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-4xl text-white sm:text-5xl">Contato</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="glass rounded-2xl p-5">
                <p className="mb-2 flex items-center gap-2 font-semibold text-white"><Mail size={16} className="text-[var(--primary)]" />E-mail</p>
                <p className="text-sm text-zinc-300">contato@brasaburger.com</p>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="mb-2 flex items-center gap-2 font-semibold text-white"><MessageCircle size={16} className="text-[var(--primary)]" />WhatsApp</p>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="text-sm text-zinc-300 hover:text-[var(--primary)]">
                  Conversar com atendimento
                </a>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="mb-2 flex items-center gap-2 font-semibold text-white">Instagram</p>
                <a href="https://instagram.com/brasaburger" target="_blank" rel="noreferrer" className="text-sm text-zinc-300 hover:text-[var(--primary)]">
                  @brasaburger
                </a>
              </div>
            </div>

            <form onSubmit={submitLead} className="glass rounded-2xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-zinc-300">
                  Nome*
                  <input required name="name" className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-[var(--primary)]" />
                </label>
                <label className="text-sm text-zinc-300">
                  Telefone*
                  <input required name="phone" className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-[var(--primary)]" />
                </label>
                <label className="text-sm text-zinc-300 sm:col-span-2">
                  E-mail
                  <input type="email" name="email" className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-[var(--primary)]" />
                </label>
                <label className="text-sm text-zinc-300 sm:col-span-2">
                  Assunto
                  <select name="subject" className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-[var(--primary)]">
                    <option value="Pedido">Pedido</option>
                    <option value="Reserva">Reserva de mesa</option>
                    <option value="Parceria">Parceria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </label>
                <label className="text-sm text-zinc-300 sm:col-span-2">
                  Mensagem*
                  <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-[var(--primary)]" />
                </label>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary">
                  Enviar
                </button>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="text-sm text-zinc-300 hover:text-[var(--primary)]">
                  Ou falar direto no WhatsApp
                </a>
              </div>
              {status && <p className="mt-3 text-sm text-zinc-300">{status}</p>}
            </form>
          </div>
        </section>
      </RevealOnScroll>

      {lightbox && (
        <button
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image src={lightbox} alt="Imagem ampliada da galeria" width={1300} height={900} className="max-h-[90vh] w-auto rounded-xl object-contain" />
        </button>
      )}
    </>
  );
}

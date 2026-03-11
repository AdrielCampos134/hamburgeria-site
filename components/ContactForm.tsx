"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/menu-data";

export default function ContactForm() {
  const [status, setStatus] = useState("");

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
    <div className="grid gap-8 lg:grid-cols-2">
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
  );
}

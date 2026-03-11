import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Brasa Burger",
  description: "Fale com a Brasa Burger por formulario ou WhatsApp.",
};

export default function ContatoPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <h1 className="font-oswald text-5xl text-white">Contato</h1>
      <p className="mt-3 text-zinc-300">Fale com a equipe para pedido, reserva ou parceria.</p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </main>
  );
}

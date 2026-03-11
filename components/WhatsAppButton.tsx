"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappNumber } from "@/lib/menu-data";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const showTooltipTimer = setTimeout(() => setTooltip(true), 3000);
    const hideTooltipTimer = setTimeout(() => setTooltip(false), 8000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(showTooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {tooltip && (
        <div className="mb-3 rounded-full bg-[#1f2937] px-4 py-2 text-xs text-white shadow-lg">
          Faca seu pedido pelo WhatsApp! 🍔
        </div>
      )}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Quero%20fazer%20um%20pedido%20na%20Brasa%20Burger`}
        target="_blank"
        rel="noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.45)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400/70" />
        <MessageCircle className="relative" size={24} />
      </a>
    </div>
  );
}

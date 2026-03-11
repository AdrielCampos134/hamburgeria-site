import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";

export const metadata: Metadata = {
  title: "Cardapio | Brasa Burger",
  description: "Cardapio completo da Brasa Burger.",
};

export default function CardapioPage() {
  return (
    <main className="pt-28">
      <MenuSection compact />
    </main>
  );
}

export type MenuCategory = "Burgers" | "Combos" | "Acompanhamentos" | "Bebidas";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  tag?: "Popular" | "Chef" | "Novo";
};

export const whatsappNumber = "5511999999999";

export const menuItems: MenuItem[] = [
  {
    id: "classic-brasa",
    name: "Classic Brasa",
    description:
      "Pao brioche, blend 180g, cheddar, alface, tomate, cebola roxa, molho da casa.",
    price: "R$ 32,90",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    tag: "Popular",
  },
  {
    id: "bacon-lovers",
    name: "Bacon Lovers",
    description:
      "Pao australiano, blend 200g, bacon duplo, cheddar derretido, barbecue.",
    price: "R$ 39,90",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
    tag: "Popular",
  },
  {
    id: "smash-duplo",
    name: "Smash Duplo",
    description: "Pao de batata, 2x smash 90g, cheddar, picles, cebola, molho brasa.",
    price: "R$ 36,90",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80",
    tag: "Popular",
  },
  {
    id: "texas-bbq",
    name: "Texas BBQ",
    description:
      "Pao defumado, costela desfiada 220g, onion rings, coleslaw, BBQ Jack Daniels.",
    price: "R$ 45,90",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
    tag: "Chef",
  },
  {
    id: "veggie",
    name: "Veggie",
    description:
      "Pao integral, hamburguer de grao-de-bico, mussarela, rucula, tomate seco, pesto.",
    price: "R$ 34,90",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
    tag: "Novo",
  },
  {
    id: "blue-cheese",
    name: "Blue Cheese",
    description:
      "Ciabatta, blend 180g, gorgonzola, cebola caramelizada no vinho, rucula.",
    price: "R$ 42,90",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=400&q=80",
  },
  {
    id: "combo-classic",
    name: "Combo Classic",
    description: "Classic Brasa + batata media + refrigerante.",
    price: "R$ 49,90",
    category: "Combos",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80",
  },
  {
    id: "combo-premium",
    name: "Combo Premium",
    description: "Qualquer burger premium + batata com cheddar + milk shake.",
    price: "R$ 69,90",
    category: "Combos",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&q=80",
    tag: "Popular",
  },
  {
    id: "batata-frita",
    name: "Batata Frita",
    description: "Crocante por fora, macia por dentro.",
    price: "R$ 18,90",
    category: "Acompanhamentos",
    image:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80",
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    description: "Empanadas na casa e fritas na hora.",
    price: "R$ 22,90",
    category: "Acompanhamentos",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80",
  },
  {
    id: "batata-cheddar",
    name: "Batata com Cheddar e Bacon",
    description: "Batata rustica, cheddar cremoso e bacon picado.",
    price: "R$ 28,90",
    category: "Acompanhamentos",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&q=80",
    tag: "Popular",
  },
  {
    id: "refrigerante",
    name: "Refrigerante",
    description: "Lata 350ml.",
    price: "R$ 7,90",
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400&q=80",
  },
  {
    id: "milk-shake",
    name: "Milk Shake",
    description: "Chocolate, morango, ovomaltine ou nutella.",
    price: "R$ 19,90",
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
    tag: "Popular",
  },
  {
    id: "cerveja-artesanal",
    name: "Cerveja Artesanal",
    description: "IPA, Pilsen ou Weiss.",
    price: "R$ 15,90",
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
  },
];

export const highlightItems = ["classic-brasa", "smash-duplo", "bacon-lovers"];

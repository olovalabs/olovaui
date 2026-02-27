"use client"

import { RotatingCards, RotatingCard } from './rotating-cards';

const BASE_CARDS: RotatingCard[] = [
    {
      id: 1,
      content: "1",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      content: "2",
      img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      content: "3",
      img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      content: "4",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      content: "5",
      img: "https://images.unsplash.com/photo-1536697246787-1f27d39d4b96?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      content: "6",
      img: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      content: "7",
      img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      content: "8",
      background: "linear-gradient(135deg, #111 0%, #333 100%)",
    },
    {
      id: 9,
      content: "9",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
    },
];

// Tripling the cards to fill the radius and decrease gaps
const CARDS_DATA: RotatingCard[] = [
    ...BASE_CARDS,
    ...BASE_CARDS.map((c) => ({
      ...c,
      id: (typeof c.id === 'number' ? c.id + 9 : `${c.id}-2`),
      content: typeof c.content === 'string' ? String(Number(c.content) + 9) : c.content,
    })),
    ...BASE_CARDS.map((c) => ({
      ...c,
      id: (typeof c.id === 'number' ? c.id + 18 : `${c.id}-3`),
      content: typeof c.content === 'string' ? String(Number(c.content) + 18) : c.content,
    })),
];

export function RotatingCardsView() {
    return (
        <div className="relative h-[600px] w-full flex justify-center items-center overflow-hidden  rounded-2xl border border-white/5">
            <div
                className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[80vw] h-[400px] rounded-full pointer-events-none z-0 opacity-20"
                style={{
                    background:
                    "radial-gradient(ellipse at top, rgba(255,255,255,0.15) 0%, transparent 60%)",
                }}
            />

            <RotatingCards
                cards={CARDS_DATA}
                radius={750}
                duration={60}
                cardWidth={200}
                cardHeight={280}
                draggable={true}
                mouseWheel={true}
                pauseOnHover={true}
                autoPlay={true}
                className="w-full h-full z-10"
                centerClassName="bottom-[-500px] left-1/2"
            />
        </div>
    );
}

export default RotatingCardsView;

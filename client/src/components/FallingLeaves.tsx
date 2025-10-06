import { useEffect, useState } from "react";
import { Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  scale: number;
  emoji: string;
  blown: boolean;
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [isBlowing, setIsBlowing] = useState(false);

  useEffect(() => {
    const leafEmojis = ["🍂", "🍁"];
    const newLeaves: Leaf[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.6,
      emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
      blown: false,
    }));
    setLeaves(newLeaves);
  }, []);

  const blowLeaves = () => {
    setIsBlowing(true);
    setLeaves((prevLeaves) =>
      prevLeaves.map((leaf) => ({ ...leaf, blown: true }))
    );
    setTimeout(() => {
      setLeaves([]);
      setIsBlowing(false);
    }, 1000);
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className={`absolute text-4xl transition-all ${
              leaf.blown ? "blown-leaf" : "falling-leaf"
            }`}
            style={{
              left: `${leaf.left}%`,
              top: leaf.blown ? "-100px" : "-50px",
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
              transform: `rotate(${leaf.rotation}deg) scale(${leaf.scale})`,
              opacity: leaf.blown ? 0 : 1,
            }}
          >
            {leaf.emoji}
          </div>
        ))}
      </div>

      <Button
        onClick={blowLeaves}
        disabled={isBlowing || leaves.length === 0}
        size="icon"
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full shadow-lg hover:scale-110 transition-transform"
        data-testid="button-leaf-blower"
        title="Blow away the leaves!"
      >
        <Wind className={`h-8 w-8 ${isBlowing ? "animate-spin" : ""}`} />
      </Button>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes swing {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(30px);
          }
        }

        .falling-leaf {
          animation: fall linear infinite, swing 3s ease-in-out infinite;
        }

        .blown-leaf {
          transform: translateX(200vw) translateY(-200vh) rotate(720deg) !important;
          transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </>
  );
}

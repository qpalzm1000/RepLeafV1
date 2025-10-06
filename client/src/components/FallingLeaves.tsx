import { useEffect, useState, useRef } from "react";
import { Wind } from "lucide-react";

interface Leaf {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  emoji: string;
  opacity: number;
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [blowerPos, setBlowerPos] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const nextLeafIdRef = useRef(0);

  const leafEmojis = ["🍂", "🍁"];

  const createLeaf = (): Leaf => {
    const emoji = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
    return {
      id: nextLeafIdRef.current++,
      x: Math.random() * window.innerWidth,
      y: -50,
      velocityX: (Math.random() - 0.5) * 1,
      velocityY: 1 + Math.random() * 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 5,
      scale: 0.6 + Math.random() * 0.6,
      emoji,
      opacity: 1,
    };
  };

  useEffect(() => {
    const initialLeaves: Leaf[] = [];
    for (let i = 0; i < 25; i++) {
      const leaf = createLeaf();
      leaf.y = Math.random() * window.innerHeight;
      initialLeaves.push(leaf);
    }
    setLeaves(initialLeaves);

    const spawnInterval = setInterval(() => {
      setLeaves((prev) => {
        if (prev.length < 30) {
          return [...prev, createLeaf()];
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(spawnInterval);
  }, []);

  useEffect(() => {
    const animate = () => {
      setLeaves((prevLeaves) => {
        const updated = prevLeaves.map((leaf) => {
          let newLeaf = { ...leaf };

          if (isBlowing) {
            const dx = leaf.x - blowerPos.x;
            const dy = leaf.y - blowerPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 250) {
              const force = Math.max(0, (250 - distance) / 250) * 15;
              const angle = Math.atan2(dy, dx);
              newLeaf.velocityX += Math.cos(angle) * force;
              newLeaf.velocityY += Math.sin(angle) * force;
            }
          }

          newLeaf.x += newLeaf.velocityX;
          newLeaf.y += newLeaf.velocityY;
          newLeaf.rotation += newLeaf.rotationSpeed;

          newLeaf.velocityX += (Math.random() - 0.5) * 0.1;
          newLeaf.velocityX *= 0.98;
          newLeaf.velocityY = Math.min(newLeaf.velocityY, 5);

          if (newLeaf.y > window.innerHeight + 50 ||
              newLeaf.x < -50 ||
              newLeaf.x > window.innerWidth + 50) {
            newLeaf.opacity = 0;
          }

          return newLeaf;
        });

        return updated.filter((leaf) => leaf.opacity > 0);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isBlowing, blowerPos]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsBlowing(true);
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffsetRef.current = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsBlowing(true);
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffsetRef.current = {
      x: touch.clientX - rect.left - rect.width / 2,
      y: touch.clientY - rect.top - rect.height / 2,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setBlowerPos({
          x: e.clientX - dragOffsetRef.current.x,
          y: e.clientY - dragOffsetRef.current.y,
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        const touch = e.touches[0];
        setBlowerPos({
          x: touch.clientX - dragOffsetRef.current.x,
          y: touch.clientY - dragOffsetRef.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsBlowing(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute text-4xl transition-opacity duration-300"
            style={{
              left: `${leaf.x}px`,
              top: `${leaf.y}px`,
              transform: `rotate(${leaf.rotation}deg) scale(${leaf.scale})`,
              opacity: leaf.opacity,
            }}
          >
            {leaf.emoji}
          </div>
        ))}
      </div>

      <div
        className="fixed z-50 pointer-events-auto"
        style={{
          left: `${blowerPos.x}px`,
          top: `${blowerPos.y}px`,
          transform: "translate(-50%, -50%)",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        data-testid="button-leaf-blower"
      >
        <div
          className={`h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center transition-all ${
            isBlowing ? "scale-110 shadow-primary/50" : ""
          } hover:scale-105`}
        >
          <Wind
            className={`h-8 w-8 transition-transform ${isBlowing ? "animate-pulse scale-110" : ""}`}
          />
        </div>
        {isBlowing && (
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" />
        )}
      </div>
    </>
  );
}

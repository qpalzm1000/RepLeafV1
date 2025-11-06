import { useEffect, useState, useRef } from "react";
import leaf1 from "@assets/stock_images/leaf.png";
import leaf2 from "@assets/stock_images/leaf.png";
import leaf3 from "@assets/stock_images/leaf.png";
import leaf4 from "@assets/stock_images/leaf.png";
import leaf5 from "@assets/stock_images/leaf.png";
import blowerImage from "@assets/stock_images/leafblower.png";

interface Leaf {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  image: string;
  opacity: number;
  driftPhase: number;
  settling: boolean;
  depth: number;
}

const leafImages = [leaf1, leaf2, leaf3, leaf4, leaf5];

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [blowerPos, setBlowerPos] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth - 100 : 800, 
    y: typeof window !== 'undefined' ? window.innerHeight - 100 : 600 
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const nextLeafIdRef = useRef(0);
  const lastSpawnRef = useRef(0);

  const createLeaf = (delayedY?: number): Leaf => {
    const image = leafImages[Math.floor(Math.random() * leafImages.length)];
    const depth = 0.4 + Math.random() * 0.6;
    
    return {
      id: nextLeafIdRef.current++,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: delayedY ?? -80,
      velocityX: (Math.random() - 0.5) * 0.8,
      velocityY: 0.3 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      scale: depth * (0.5 + Math.random() * 0.5),
      image,
      opacity: 1,
      driftPhase: Math.random() * Math.PI * 2,
      settling: false,
      depth,
    };
  };

  useEffect(() => {
    const initialLeaves: Leaf[] = [];
    for (let i = 0; i < 25; i++) {
      const leaf = createLeaf();
      if (typeof window !== 'undefined') {
        leaf.y = Math.random() * window.innerHeight;
      }
      initialLeaves.push(leaf);
    }
    setLeaves(initialLeaves);
  }, []);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastSpawnRef.current) lastSpawnRef.current = timestamp;
      
      if (timestamp - lastSpawnRef.current > 600) {
        setLeaves((prev) => {
          if (prev.length < 35) {
            return [...prev, createLeaf()];
          }
          return prev;
        });
        lastSpawnRef.current = timestamp;
      }

      setLeaves((prevLeaves) => {
        const updated = prevLeaves.map((leaf) => {
          let newLeaf = { ...leaf };
          
          const gravity = 0.015 * newLeaf.depth;
          newLeaf.velocityY += gravity;
          
          newLeaf.driftPhase += 0.02;
          const drift = Math.sin(newLeaf.driftPhase) * 0.3;
          newLeaf.velocityX += drift;
          
          if (isBlowing) {
            const dx = leaf.x - blowerPos.x;
            const dy = leaf.y - blowerPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const blowerRadius = 300;

            if (distance < blowerRadius) {
              const forceMagnitude = Math.pow((blowerRadius - distance) / blowerRadius, 1.5) * 0.8;
              const angle = Math.atan2(dy, dx);
              
              const pushX = Math.cos(angle) * forceMagnitude;
              const pushY = Math.sin(angle) * forceMagnitude;
              
              newLeaf.velocityX += pushX;
              newLeaf.velocityY += pushY - (gravity * 2);
              
              newLeaf.settling = false;
              newLeaf.rotationSpeed = (Math.random() - 0.5) * 8;
            }
          }
          
          const windResistance = 0.02;
          newLeaf.velocityX *= (1 - windResistance);
          
          if (Math.abs(newLeaf.velocityY) < 0.5 && !isBlowing && Math.random() > 0.98) {
            newLeaf.settling = true;
            newLeaf.velocityY *= 0.95;
          }
          
          if (newLeaf.settling) {
            newLeaf.velocityY *= 0.98;
            newLeaf.velocityX *= 0.98;
            newLeaf.rotationSpeed *= 0.95;
            
            if (Math.abs(newLeaf.velocityY) < 0.05) {
              newLeaf.velocityY = Math.sin(newLeaf.driftPhase) * 0.1;
            }
          }
          
          newLeaf.velocityY = Math.min(newLeaf.velocityY, 4);
          newLeaf.velocityY = Math.max(newLeaf.velocityY, -4);
          
          newLeaf.x += newLeaf.velocityX;
          newLeaf.y += newLeaf.velocityY;
          newLeaf.rotation += newLeaf.rotationSpeed;

          if (typeof window !== 'undefined') {
            if (newLeaf.y > window.innerHeight + 100 ||
                newLeaf.x < -100 ||
                newLeaf.x > window.innerWidth + 100 ||
                newLeaf.y < -100) {
              newLeaf.opacity = 0;
            }
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
            className="absolute transition-opacity duration-500"
            style={{
              left: `${leaf.x}px`,
              top: `${leaf.y}px`,
              transform: `rotate(${leaf.rotation}deg) scale(${leaf.scale})`,
              opacity: leaf.opacity,
              filter: `drop-shadow(${2 * leaf.depth}px ${3 * leaf.depth}px ${4 * leaf.depth}px rgba(0,0,0,0.3))`,
              zIndex: Math.floor(leaf.depth * 10),
            }}
          >
            <img
              src={leaf.image}
              alt=""
              className="w-16 h-16 object-contain"
              style={{ 
                transform: `perspective(100px) rotateY(${Math.sin(leaf.driftPhase) * 15}deg)`,
              }}
            />
          </div>
        ))}
      </div>

      {isBlowing && (
        <div
          className="fixed pointer-events-none z-45"
          style={{
            left: `${blowerPos.x}px`,
            top: `${blowerPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div 
            className="absolute inset-0 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
              animation: "windPulse 0.5s ease-in-out infinite",
            }}
          />
        </div>
      )}

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
          className={`relative transition-all ${
            isBlowing ? "scale-105" : ""
          } hover:scale-110`}
          style={{
            animation: isBlowing ? "blowerVibrate 0.1s ease-in-out infinite" : "none",
          }}
        >
          <img
            src={blowerImage}
            alt="Leaf Blower"
            className="w-20 h-20 object-contain drop-shadow-2xl"
            style={{
              filter: isBlowing 
                ? "drop-shadow(0 0 20px rgba(234, 88, 12, 0.5)) brightness(1.1)" 
                : "drop-shadow(0 10px 25px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes windPulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes blowerVibrate {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-1px, 1px) rotate(-1deg); }
          50% { transform: translate(1px, -1px) rotate(1deg); }
          75% { transform: translate(-1px, -1px) rotate(-0.5deg); }
        }
      `}</style>
    </>
  );
}

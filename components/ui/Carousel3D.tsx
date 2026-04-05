"use client";

import { useState, useEffect, useCallback } from "react";

const carouselItems = [
  {
    stat: "300+",
    label: "SUBMISSIONS",
    detail: "17 Countries",
    bg: "from-[#f8f9fa] to-[#e9ecef]",
  },
  {
    stat: "50+",
    label: "SPEAKERS",
    detail: "Industry Leaders",
    bg: "from-[#f8f9fa] to-[#e9ecef]",
  },
  {
    stat: "1000+",
    label: "ATTENDEES",
    detail: "Global Reach",
    bg: "from-[#f8f9fa] to-[#e9ecef]",
  },
  {
    stat: "20+",
    label: "WORKSHOPS",
    detail: "Hands-on Sessions",
    bg: "from-[#f8f9fa] to-[#e9ecef]",
  },
  {
    stat: "10th",
    label: "EDITION",
    detail: "IEEE ITC India",
    bg: "from-[#f8f9fa] to-[#e9ecef]",
  },
];

export default function Carousel3D() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragRotation, setDragRotation] = useState(0);

  const totalItems = carouselItems.length;
  const angleStep = 360 / totalItems;

  const autoRotate = useCallback(() => {
    if (!isHovered && !isDragging) {
      setRotation((prev) => prev - 0.3);
    }
  }, [isHovered, isDragging]);

  useEffect(() => {
    const interval = setInterval(autoRotate, 30);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragRotation(rotation);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotation(dragRotation + delta * 0.4);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const radius = 180;

  return (
    <div
      className="carousel-3d-root relative mx-auto min-h-0 min-w-0 w-full max-w-full overflow-hidden select-none xl:mx-0"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* No viewport scale — scale was overflowing/clipping and triggered scrollbars in some browsers */}
      <div className="origin-[50%_50%] scale-100">
        {/* Fixed heights (shorter at 2xl+) so 3D scene fits; overflow-hidden clips 3D paint */}
        <div
          className="relative mx-auto flex w-full max-w-full items-center justify-center overflow-hidden
                     h-[188px] sm:h-[205px] md:h-[222px] lg:h-[238px] xl:h-[252px] 2xl:h-[232px] min-[2200px]:h-[248px] min-[2800px]:h-[260px]"
        >
          <div
            className="absolute w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-full max-h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging ? "none" : undefined,
            }}
          >
            {carouselItems.map((item, index) => {
              const angle = index * angleStep;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-[120px] sm:h-[135px] md:h-[150px] lg:h-[160px]"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div
                    className={`
                    relative h-full w-full cursor-grab overflow-hidden rounded-3xl border border-gray-200/80
                    bg-gradient-to-br ${item.bg}
                    shadow-[0_4px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]
                    active:cursor-grabbing
                    flex flex-col items-start justify-center
                    px-5 sm:px-6 md:px-7
                  `}
                  >
                    <div className="absolute right-3 top-2.5 flex items-center gap-1 opacity-40">
                      <div className="h-[6px] w-[6px] rounded-full bg-blue-600" />
                      <span className="text-[8px] font-semibold tracking-wider text-gray-500 sm:text-[9px]">
                        ITC 2026
                      </span>
                    </div>

                    <span className="font-space-grotesk text-[28px] font-bold leading-none tracking-tight text-[#022241] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                      {item.stat}
                    </span>

                    <span className="mt-1 font-space-grotesk text-[13px] font-bold tracking-[0.08em] text-[#03396c] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                      {item.label}
                    </span>

                    <span className="mt-1.5 font-poppins text-[11px] text-gray-500 sm:text-[12px] md:text-[13px]">
                      {item.detail}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#03396c] via-[#0557A7] to-[#03396c] opacity-60" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[24px] w-[60%] -translate-x-1/2 rounded-[50%] opacity-20 2xl:h-[20px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = ["/stock1.jpg", "/stock2.jpg", "/stock3.jpg"];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % IMAGES.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[320px] md:h-[420px]">
            {IMAGES.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt={`Hero Image ${index + 1}`}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-4 text-center">
                <h1 className="text-2xl font-bold text-blue-700 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl">
                    外国人技能実習事業
                </h1>
            </div>
        </div>
    );
}
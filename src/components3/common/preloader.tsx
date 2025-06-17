import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PRELOADER_IMAGES } from "../../constants/images";
import Image from "next/image";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const totalDuration = 6;

    const animateImages = () => {
      imagesRef.current.forEach((image, index) => {
        if (!image) return;

        const imageDelay = (index / PRELOADER_IMAGES.length) * totalDuration;

        gsap.fromTo(
          image,
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: totalDuration / PRELOADER_IMAGES.length,
            delay: imageDelay,
            ease: "power3.inOut",
          }
        );
      });

      gsap.delayedCall(totalDuration + 0.5, () => {
        const tl = gsap.timeline();

        tl.to(
          imagesRef.current.filter(Boolean),
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 1,
            stagger: 0.05,
            ease: "power3.inOut",
            onComplete: () => {
              setTimeout(() => {
                onComplete();
              }, 500);
            },
          },
          0
        );

        tl.to(".preloader-container", {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            const el = document.querySelector(".preloader-container");
            if (el) el.remove();
          },
        });
      });
    };

    const imageElements = imagesRef.current.filter(Boolean);
    const loadPromises = imageElements.map((img) => {
      return new Promise((resolve) => {
        if (img && img.complete) {
          resolve(true);
        } else {
          (img as HTMLImageElement).onload = () => resolve(true);
          (img as HTMLImageElement).onerror = () => resolve(true);
        }
      });
    });

    Promise.all(loadPromises).then(() => {
      animateImages();
    });

    return () => {
      gsap.killTweensOf([imagesRef.current]);
    };
  }, []);

  return (
    <div className="preloader-container flex items-center justify-center w-full h-screen bg-white  text-white font-anton-sc uppercase fixed overflow-hidden z-[999999]">
      <div className="relative flex items-center justify-center w-full h-full bg-yellow-700">
        <div className="relative overflow-hidden h-full w-100">
          {PRELOADER_IMAGES.map((image, index) => (
            <Image
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              src={image}
              alt={`Preloader Image ${index}`}
              priority
              quality={100}
              className="object-cover absolute w-full h-full"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

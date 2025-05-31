"use client";

import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-yellow-400/30 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-yellow-400">Destiny&apos;s Art Lab</h2>
          <p className="text-white/60">Crafting Digital Excellence</p>
        </div>
      </div>
    </div>
  );
}

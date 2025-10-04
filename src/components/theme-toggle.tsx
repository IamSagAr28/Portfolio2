'use client';

import { Palette } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="fixed top-6 right-6 z-50 p-3 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
      aria-label="Theme options"
    >
      <Palette className="w-5 h-5" />
    </button>
  );
}

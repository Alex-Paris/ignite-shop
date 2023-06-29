'use client'

import { useKeenSlider } from "keen-slider/react";
import { cache } from "react";

interface MainSliderProps {
  children: React.ReactNode
}

export const MainSlider = cache(({ children }: MainSliderProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider flex ml-auto min-h-[656px] max-w-[calc(100vw-((100vw-1180px)/2))]"
    >
      {children}
    </main>
  )
});
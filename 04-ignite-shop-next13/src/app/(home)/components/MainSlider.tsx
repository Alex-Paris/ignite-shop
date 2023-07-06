'use client'

import { useKeenSlider } from "keen-slider/react";

import { useResize } from "@/providers/resize";

interface MainSliderProps {
  children: React.ReactNode
}

export const MainSlider = (({ children }: MainSliderProps) => {
  const { windowWidth } = useResize();

  const [sliderRef] = useKeenSlider(
    windowWidth < 768 ? {
      slides: {
        perView: 2,
        spacing: 30
      }
    } : {
      slides: {
        perView: 3,
        spacing: 48
      }
    }
  )

  return (
    <main
      ref={sliderRef}
      className="keen-slider flex flex-1 ml-auto max-w-[calc(100vw-((100vw-1180px)/2))]"
    >
      {children}
    </main>
  )
});
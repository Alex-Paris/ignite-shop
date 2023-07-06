'use client'

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface MainSliderProps {
  children: React.ReactNode
}

export const MainSlider = (({ children }: MainSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 48
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <main className="flex-1 flex ml-auto max-w-[calc(100vw-((100vw-1180px)/2))]">
      <div
        ref={sliderRef}
        className="keen-slider flex-1 flex"
      >
        {children}
      </div>

      {
        loaded && instanceRef.current && (
          <>
            {
              currentSlide !== 0 &&
              <div className="absolute flex items-center pl-4 left-0 h-full max-h-[calc(100vh-184px)] w-32 bg-gradient-to-r from-gray900">
                <button
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                  className="group cursor-pointer"
                >
                  <CaretLeft size={48} className="duration-200 fill-gray300 group-hover:fill-gray100" />
                </button>
              </div>
            }

            {
              currentSlide < instanceRef.current.track.details.slides.length - 3 &&
              <div className="absolute flex items-center justify-end pr-4 right-0 h-full max-h-[calc(100vh-184px)] w-32 bg-gradient-to-l from-gray900">
                <button
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                  className="group cursor-pointer"
                >
                  <CaretRight size={48} className="duration-200 fill-gray300 group-hover:fill-gray100" />
                </button>
              </div>
            }
          </>
        )
      }
    </main>
  )
});
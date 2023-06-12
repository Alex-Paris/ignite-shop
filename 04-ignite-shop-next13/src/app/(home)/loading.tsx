'use client'

import { useKeenSlider } from 'keen-slider/react'

import Skeleton from '@/components/Skeleton'

export default function HomeLoading() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider flex ml-auto min-h-[656px]  max-w-[calc(100vw-((100vw-1180px)/2))]"
    >
      {
        [1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="keen-slider__slide group overflow-hidden"
          >
            <div className='flex-1 overflow-hidden'>
              <Skeleton
                width={1000}
                height={608}
                className='flex-1 '
              />
            </div>
            <div className='flex justify-between mt-2'>
              <Skeleton
                width={200}
                height={32}
              />
              <Skeleton
                width={100}
                height={32}
              />
            </div>
          </div>
        ))
      }
    </main>
  )
}

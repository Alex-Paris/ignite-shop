import Skeleton from '@/components/Skeleton'
import { MainSlider } from './components/MainSlider';

export default function ProductsListLoading() {
  return (
    <MainSlider>
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
    </MainSlider>
  )
}

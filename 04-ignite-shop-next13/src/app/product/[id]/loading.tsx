import Skeleton from '@/components/Skeleton'

export default function ProductLoading() {
  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] mx-auto">
      <Skeleton
        width={576}
        height={608}
        className='w-full max-w-xl h-[calc(656px-0.5rem)]'
      />

      <div className="flex flex-col">
        <Skeleton
          height={24}
        />
        <Skeleton
          height={24}
        />
        <Skeleton
          height={16}
          className="mt-10"
        />
        <Skeleton
          height={16}
        />
        <Skeleton
          height={16}
        />

        <div className="mt-auto">
          <Skeleton
            height={64}
          />
        </div>
      </div>
    </main>
  )
}

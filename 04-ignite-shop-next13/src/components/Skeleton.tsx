import ReactSkeleton, { SkeletonProps } from 'react-loading-skeleton'

export default function Skeleton({ ...rest }: SkeletonProps) {
  return (
    <ReactSkeleton
      {...rest}
      borderRadius={8}
      baseColor='#3131314e'
      className='opacity-40'
      highlightColor='#525252b4'
    />
  )
}

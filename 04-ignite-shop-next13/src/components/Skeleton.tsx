import ReactSkeleton, { SkeletonProps } from 'react-loading-skeleton'

export default function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <ReactSkeleton
      duration={2}
      borderRadius={8}
      baseColor='#3131314e'
      className={`opacity-40 ${className}`}
      highlightColor='#525252b4'
      {...rest}
    />
  )
}

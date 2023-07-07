import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  caption: string
}

export function Button({ caption, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`mt-auto bg-green500 border-0 rounded-lg p-5 cursor-pointer font-bold text-base duration-200 hover:enabled:bg-green300 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {caption}
    </button>
  )
}
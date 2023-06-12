'use client'

import { useEffect, useState } from "react"

import ThemeProvider from "./theme"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  return (
    <>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </>
  )
}
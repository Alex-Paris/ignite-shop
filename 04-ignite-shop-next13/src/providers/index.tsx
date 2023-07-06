import ResizeProvider from "./resize"
import ThemeProvider from "./theme"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ResizeProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ResizeProvider>
    </>
  )
}
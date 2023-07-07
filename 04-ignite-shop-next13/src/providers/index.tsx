import ThemeProvider from "./theme"
import CartProvider from "./cart"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ThemeProvider>
    </>
  )
}
import { NextRequest, NextResponse as res } from "next/server"

// Route expected from Stripe to send user to success page
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return res.redirect(new URL(`${process.env.NEXT_URL}/`))
  }

  return res.redirect(new URL(`${process.env.NEXT_URL}/success/${sessionId}`))
}
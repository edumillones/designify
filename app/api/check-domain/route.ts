import dns from 'dns'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { domain } = await req.json()

    const result = await new Promise<{ available: boolean }>((resolve) => {
      dns.resolve(domain, (err) => {
        if (err && err.code === 'ENOTFOUND') {
          resolve({ available: true })
        } else {
          resolve({ available: false })
        }
      })
    })

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: 'Error checking domain' }, { status: 500 })
  }
}
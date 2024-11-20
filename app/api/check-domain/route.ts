import dns from 'dns'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { domain } = await req.json()

    return new Promise((resolve) => {
      dns.resolve(domain, (err) => {
        if (err && err.code === 'ENOTFOUND') {
          resolve(NextResponse.json({ available: true }))
        } else {
          resolve(NextResponse.json({ available: false }))
        }
      })
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error checking domain' }, { status: 500 })
  }
}
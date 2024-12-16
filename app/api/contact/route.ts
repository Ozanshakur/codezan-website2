import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const contactRequest = await prisma.contactRequest.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ success: true, data: contactRequest })
  } catch (error) {
    console.error('Error in POST handler:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'An unexpected error occurred while submitting your request.'
    }, { status: 500 })
  }
}


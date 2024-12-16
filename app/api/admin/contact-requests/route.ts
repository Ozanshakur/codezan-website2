import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/lib/prisma'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const contactRequests = await prisma.contactRequest.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ success: true, data: contactRequests })
  } catch (error) {
    console.error('Error fetching contact requests:', error)
    return NextResponse.json({ success: false, error: 'An error occurred while fetching contact requests.' }, { status: 500 })
  }
}


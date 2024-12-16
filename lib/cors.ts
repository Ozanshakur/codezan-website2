import Cors from 'cors'
import { NextResponse } from 'next/server'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

export function runMiddleware(request: Request) {
  return new Promise((resolve, reject) => {
    cors(request as any, NextResponse.next() as any, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export { cors }


'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface ContactRequest {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
}

export default function AdminPage() {
  const [contactRequests, setContactRequests] = useState<ContactRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const { data: session, status } = useSession()
  const router = useRouter()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passwordChangeMessage, setPasswordChangeMessage] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    const fetchContactRequests = async () => {
      try {
        const response = await fetch('/api/admin/contact-requests')
        if (!response.ok) {
          throw new Error('Failed to fetch contact requests')
        }
        const data = await response.json()
        setContactRequests(data.data)
      } catch (err) {
        setError('An error occurred while fetching contact requests.')
      } finally {
        setIsLoading(false)
      }
    }

    if (session) {
      fetchContactRequests()
    }
  }, [session])

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      })

      const data = await response.json()

      if (response.ok) {
        setPasswordChangeMessage('Password changed successfully')
        setCurrentPassword('')
        setNewPassword('')
      } else {
        setPasswordChangeMessage(data.error || 'Failed to change password')
      }
    } catch (error) {
      setPasswordChangeMessage('An error occurred. Please try again.')
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="mb-8">
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Change Password
          </button>
        </form>
        {passwordChangeMessage && (
          <p className="mb-8 text-center text-sm font-medium text-green-400">
            {passwordChangeMessage}
          </p>
        )}

        <h2 className="text-2xl font-semibold mb-4">Contact Requests</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {contactRequests.length > 0 ? (
          <div className="grid gap-6">
            {contactRequests.map((request) => (
              <div key={request.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{request.name}</h3>
                <p className="text-gray-300 mb-2">{request.email}</p>
                <p className="text-gray-300 mb-2">{request.message}</p>
                <p className="text-gray-400 text-sm">
                  Submitted on: {new Date(request.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No contact requests found.</p>
        )}
      </div>
    </div>
  )
}


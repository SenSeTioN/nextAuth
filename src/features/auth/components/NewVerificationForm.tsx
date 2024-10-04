'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useVerificationMutation } from '../hooks'

import { AuthWrapper } from './index'

/**
 * Компонент для подтверждения электронной почты.
 */
export function NewVerificationForm() {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { verification } = useVerificationMutation()

	useEffect(() => {
		verification(token)
	}, [token, verification])

	return <AuthWrapper heading='Подтверждение почты' />
}
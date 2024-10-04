import type { Metadata } from 'next'
import { Suspense } from 'react'

import { NewVerificationForm } from '@/features/auth/components'

import { Loading } from '@/shared/components/ui'

export const metadata: Metadata = {
	title: 'Подтверждение почты'
}

export default function NewVerificationPage() {
	return (
		<Suspense fallback={<Loading />}>
			<NewVerificationForm />
		</Suspense>
	)
}

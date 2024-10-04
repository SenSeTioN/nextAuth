import type { Metadata } from 'next'
import { Suspense } from 'react'

import { NewPasswordForm } from '@/features/auth/components'

import { Loading } from '@/shared/components/ui'

export const metadata: Metadata = {
	title: 'Новый пароль'
}

export default function NewPasswordPage() {
	return (
		<Suspense fallback={<Loading />}>
			<NewPasswordForm />
		</Suspense>
	)
}

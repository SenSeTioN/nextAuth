import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import type { Dispatch, SetStateAction } from 'react'
import { toast } from 'sonner'

import { toastMessageHandler } from '@/shared/utils'

import type { TypeLoginSchema } from '../schemes'
import { authService } from '../services'

/**
 * Хук для выполнения мутации входа пользователя.
 */
export function useLoginMutation(
	setIsShowFactor: Dispatch<SetStateAction<boolean>>
) {
	const router = useRouter()

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: ({
			values,
			recaptcha
		}: {
			values: TypeLoginSchema
			recaptcha: string
		}) => authService.login(values, recaptcha),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onSuccess(data: any) {
			console.log(data)
			if (data.message) {
				toastMessageHandler(data)
				setIsShowFactor(true)
			} else {
				toast.success('Успешная авторизация')
				router.push('/dashboard/settings')
			}
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { login, isLoadingLogin }
}

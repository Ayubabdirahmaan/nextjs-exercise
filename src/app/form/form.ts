'use server'

type formState = {
    message: string,
    error: string
}

export async function UserPassword(prevState: formState, formData: FormData): Promise<formState> {
    const password = formData.get('password')?.toString()

    if (!password || password.length < 6) {
        return { message: '', error: 'password must be at least 6 character' }
    }

    return { message: 'welcome user', error: '' }
}
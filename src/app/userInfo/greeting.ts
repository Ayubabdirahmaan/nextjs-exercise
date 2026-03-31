'use server';
type formState = {
    firstName: string,
    lastName: string,
    error: string
}
export async function greeting(prevState: formState, formData: FormData): Promise<formState> {
    const firstName = formData.get('firstname')?.toString()
    const lastName = formData.get('lastname')?.toString()

    if (!firstName || !lastName || firstName.trim() || lastName.trim()  ) {
        return { firstName: '', lastName: '', error: 'fistname and lastname is required' }
    }

    return { firstName, lastName, error: `hello ${firstName} ${lastName}` }
}
'use server'
type formState = {
    message: string,
    error: string
}
export async function message(prevState: formState, formData: FormData): Promise<formState> {

    const email = formData.get('email')?.toString()

    if (!email || email.trim() === "") {
        return { message: "", error: "email is required" }
    }

    return { message: `Thanks for submitting!” on success`, error: '' }

}
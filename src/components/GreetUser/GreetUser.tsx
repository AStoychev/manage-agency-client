type UserProps = {
    user: string | null
}

export default function GreetUser({ user }: UserProps) {
    return (
        <div>
            Hello <span>{user} !</span>
        </div>
    )
}
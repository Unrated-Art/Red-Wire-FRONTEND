export interface AuthToken {
    role: "ADMIN" | "FORMATEUR" | "STAGIAIRE"
    id: number
    token: string
    firstName: string
    lastName: string
}

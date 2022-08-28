export interface AuthToken {
    id: number
    firstName: string
    lastName: string
    role: "ADMIN" | "FORMATEUR" | "STAGIAIRE"
}

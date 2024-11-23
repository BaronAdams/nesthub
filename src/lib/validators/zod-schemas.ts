import { z } from "zod"

export const loginCredentialsSchema = z.object({ 
    email: z.string().email("L'adresse email est invalide"), 
    password: z.string().min(6, "Le mot de passe doit avoir au moins 6 caractères") 
 })
import { z } from "zod"

export const loginCredentialsSchema = z.object({ 
    email: z.string({
        invalid_type_error: "Veuillez entrer votre adresse email"
    }).email("L'adresse email inserée est invalide"), 
    password: z.string({
        invalid_type_error: "Veuillez entrer un mot de passe",
    }).min(6, "Le mot de passe doit avoir au moins 6 caractères") 
 })

export const registerCredentialsSchema = z.object({ 
    email: z.string({
        invalid_type_error: "Veuillez entrer votre adresse email",
    }).email("L'adresse email inserée est invalide"), 
    password: z.string({
        invalid_type_error: "Veuillez entrer un mot de passe",
    }).min(6, "Le mot de passe doit avoir au moins 6 caractères").regex(/^(?=.*[A-Z]{1,})(?=.*\d)/, 'Le mot de passe doit contenir au moins 1 chiffre et 2 lettres majuscules'),
    firstName: z.string({
        invalid_type_error: "Veuillez entrer votre prénom",
    }).min(2, "Votre prénom doit avoir au moins 2 caractères"),
    lastName: z.string({
        invalid_type_error: "Veuillez entrer votre nom",
    }).min(2, "Votre nom doit avoir au moins 2 caractères"),
    location: z.string({
        invalid_type_error: "Veuillez choisir votre ville de résidence",
    }),
    phone: z.string({
        invalid_type_error: "Veuillez entrer votre numéro de téléphone",
    }).length(9, "Votre numero numéro de téléphone doit contenir 9 chiffres")
    
 })
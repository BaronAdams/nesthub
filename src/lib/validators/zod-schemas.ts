import { cityTags, hoodTags, propertyTypesTags } from "@/data"
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

 export const updatePreferencesSchema = z.object({
    actionType: z.string({ invalid_type_error:"Le type d'action doit pêtre une chaine de caractères"}),

    property_type: z.array(z.enum(['Terrain', 'Villa', 'Salle de fêtes', 'Immeuble', 'Appartement', 'Duplex', 'Studio', 'Chambre d\'hôtel', 'Entrepôt', 'Maison de vacances', 'Bureau', 'Magasin', 'Espace de vente', 'Contenaire', 'Chambre étudiant', 'Maison'],{
        invalid_type_error: "Vous devez préciser les propriétés parmi ceux citées suivant: 'Terrain', 'Villa', 'Salle de fêtes', 'Immeuble', 'Appartement', 'Duplex', 'Studio', 'Chambre d\'hôtel', 'Entrepôt', 'Maison de vacances', 'Bureau', 'Magasin', 'Espace de vente', 'Contenaire', 'Chambre étudiant', 'Maison'"
    }),{
        invalid_type_error: "Les types de propriétés mentionés doivent être dans un tableau"
    }),

    city: z.array(z.enum(["Bafoussam", "Bamenda", "Bertoua", "Buéa", "Douala", "Ebolowa", "Garoua", "Maroua", "Ngaoundéré", "Yaoundé"],{
            invalid_type_error: 'Vous devez préciser des villes parmi la liste suivante: "Bafoussam", "Bamenda", "Bertoua", "Buéa", "Douala", "Ebolowa", "Garoua", "Maroua", "Ngaoundéré", "Yaoundé" '
        }),{
        invalid_type_error: "Les villes mentionées doivent être dans un tableau"
    }),
    hood: z.array(z.enum([
        "Ndokoti",
        "Bonapriso, Carrefour Armée de l'air",
        "Bonapriso, Carrefour Hotel de l'air",
        "Bali, Koumassi",
        "Bonnamoussadi",
        "Tradex Borne 10 Village",
        "1ère Entrée Cogefar",
        "Cité des Palmiers",
        "PK8",
        "PK10",
        "PK12",
        "PK14",
    ],{
        invalid_type_error: 'Vous devez préciser vos lieux à partir des valeurs du le selecteur'
    }),{
        invalid_type_error: "Les lieux mentionés doivent être dans un tableau"
    })
 })
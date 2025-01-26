import useSWR from "swr";
import { getProperties } from "../actions/properties";

export function useProperties(url:string){
    const fetcher = async (arg: string) => {
        try {
           let properties = await getProperties(arg)
           if(!properties) throw new Error('Une erreur est survenue')
            return properties
        } catch (error) {
           // @ts-ignore
           throw new Error(error?.message)
        }
    }

    const { data, error, isLoading, mutate } = useSWR(url, fetcher)

    return {
        properties:data,
        isLoading,
        error,
        mutate
    }
}
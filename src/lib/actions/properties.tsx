import apiRequest from "../helpers/request";

export async function getProperties(url:string) {
    let res = await apiRequest.get(url)
    if(res.success) return res.properties
    if(res.error) throw Error('Une erreur est survenue')
}
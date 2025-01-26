
type FetchOptions = Omit<RequestInit, 'method'>

// export default class apiRequest{
//     static apiBaseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.API_BASE_URL
    
//     static async fetchRequest(endpoint:string, method:'GET'|'POST'|'DELETE'|'UPDATE'|'PATCH', options?: FetchOptions){
//         let url = `${this.apiBaseUrl}${endpoint}`
//         let response = null
//         let error = null
//         try {
//             const res = await fetch(url,{
//                 method: method,
//                 headers:{
//                     'Content-Type':"application/json",
//                     ...options?.headers
//                 },
//                 body: options?.body ? JSON.stringify(options.body) : null
//             })
//             response = res.json()
//         } catch (e) {
//             error = true
//             console.error('GET request failed')
//             throw e
//         }
//         return { error, ...response }
//     }

//     static async get(endpoint:string, options?: FetchOptions){
//         let { error, ...response } = await this.fetchRequest(endpoint,"GET",options)
//         return { error, ...response }
//     } 
//     static async post(endpoint:string, options?: FetchOptions){
//         let { error, ...response } = await this.fetchRequest(endpoint,"POST",options)
//         return { error, ...response }
//     } 
//     static async update(endpoint:string, options?: FetchOptions){
//         let { error, ...response } = await this.fetchRequest(endpoint,"UPDATE",options)
//         return { error, ...response }
//     } 
//     static async delete(endpoint:string, options?: FetchOptions){
//         let { error, ...response } = await this.fetchRequest(endpoint,"DELETE",options)
//         return { error, ...response }
//     } 
// }

const apiRequest = {
    apiBaseUrl : process.env.NODE_ENV === "development" ? "http://localhost:7000/api" : process.env.API_BASE_URL,
    fetchRequest: async function (endpoint:string, method:'GET'|'POST'|'DELETE'|'PUT'|'PATCH', options?: FetchOptions){
        let url = `${this.apiBaseUrl}${endpoint}`
        let response = null
        let error = null
        try {
            const res = await fetch(url,{
                method: method,
                headers:{
                    'Content-Type':"application/json",
                    ...options?.headers
                },
                body: options?.body ? JSON.stringify(options.body) : null
            })
            response = res.json()
        } catch (e) {
            error = true
            if(method === "GET")console.error('GET request failed')
            if(method === "POST")console.error('POST request failed')
            if(method === "PUT")console.error('PUT request failed')
            if(method === "DELETE")console.error('DELETE request failed')
            if(method === "PATCH")console.error('PATCH request failed')
            throw e
        }
        return { error, ...response }
    },
    get: async function(endpoint:string, options?: FetchOptions){
        let { error, ...response } = await this.fetchRequest(endpoint,"GET",options)
        return { error, ...response }
    },
    post: async function(endpoint:string, options?: FetchOptions){
        let { error, ...response } = await this.fetchRequest(endpoint,"POST",options)
        return { error, ...response }
    },
    update: async function(endpoint:string, options?: FetchOptions){
        let { error, ...response } = await this.fetchRequest(endpoint,"PUT",options)
        return { error, ...response }
    },
    delete: async function(endpoint:string, options?: FetchOptions){
        let { error, ...response } = await this.fetchRequest(endpoint,"DELETE",options)
        return { error, ...response }
    }
}

export default apiRequest
import { useEffect, useState } from "react"

export interface ITag{
    id: number,
    name: string,
}

export function useTags(){
    const [tags, setTags] = useState<ITag[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        async function getTags(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/tags/all')
                const result = await response.json()
                if (result.status === 'error') {
                    setError(result.message)
                } else {
                    setTags(result.data)
                }
            }
            catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally{
                setIsLoading(false)
            }
            
        }
        getTags()
        
    },[])
    return {tags: tags, isLoading: isLoading, error: error}
}
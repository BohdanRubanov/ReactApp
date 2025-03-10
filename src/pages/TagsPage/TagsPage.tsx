import { useTags } from "../../hooks/useTags"

export function TagsPage(){
    const {tags, isLoading} = useTags()

    return <div className="TagsPage">

        { isLoading === true ? (<div>Loading...</div>) :(

            <>
        
        
            {tags.map( (tag) => {
    
                
                return (
                    <div><p>{tag.name}</p></div>
                )
            }
            )}
            </>
        )}
    </div>
}
// Импорт не используется, нужно убрать
import { useEffect, useState } from "react"
import { useTags } from "../../hooks/useTags"

export function TagsPage(){
    // ?? дважды вызываешь хук
    const {tags} = useTags()
    const {isLoading } = useTags()

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
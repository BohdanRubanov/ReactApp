import { useEffect, useState } from "react";

export function useTitle(title: string){
    useEffect(() => {
            document.title = title
    }, [])
}
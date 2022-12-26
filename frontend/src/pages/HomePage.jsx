import { observer } from "mobx-react"
import { useEffect } from "react"
import allList from "../store/allList"

export const HomePage = observer(()=>{
    useEffect(()=>{
        yut()
        return allList.removeDate()
    }, [])
    const yut=()=>{
         allList.fetchLists()

    }
    
    return(
        <ul>
                {
                    allList.data.length ?
                
                allList.data.map((i)=>{
                    return (
                        <li key={i.id}>
                            {i.title}
                        </li>
                     )  
                }): 'load'
                 
                }
            
        </ul>
    )
})
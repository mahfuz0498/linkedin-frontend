import { useEffect, useState } from "react";


const useMah = (url) => {
    const [error ,  setError] = useState(false)
    const [val ,  setVal] = useState([])
    useEffect(
        fetch(url)
            .then(data => {
                setVal(data)
            })
            .catch(err =>
                setError(true)  )
        

     , []
   
     return {
         val, error
     }


}

export Default useMah;


9773176658
// 

const {val ,  error} = useMah(url )


n = 5;
5 5 5 5 5
5 4 4 4 4
5 4 3 3 3
5 4 3 2 2
5 4 3 2 1 


for(let i = 0 ; i < n ; i++){
   let  val = n
    for(let j= 0 ; j < i ; j++ ){
        console.log(val);
        val--;

    }

    for( let j = i+1 ; j < n ; j++){
        console.log(val);
    }
}


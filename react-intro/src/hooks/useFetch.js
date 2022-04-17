import { useState , useEffect } from "react";

const useFetch = (url , method) => {
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);
    useEffect(() => {
        async function sendHttpRequest(){
            try {
                setLoading(true);
                const response = await fetch(url , {
                    method: method ? method : 'GET'
                });

                if(!response.ok){
                    throw Error("Aldaa arlaa")
                }
    
                const result = await response.json();
                if(result){
                    setLoading(false);
                    setData(result);
                }
            } catch (err) {
                setLoading(false);
                setError(err.message)
            }
        }

        sendHttpRequest();
    } , []);

    return {loading , data , error}
}

export default useFetch;
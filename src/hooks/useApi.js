import { useEffect, useState } from "react";


const useApi = (url) => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchApi = () =>{
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setLoading(true);
                setData(response.data)
                //console.log(response);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi();
    }, [url])

    return {loading, data}
}
 
export default useApi;
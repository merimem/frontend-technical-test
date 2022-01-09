import { useEffect, useState } from "react";
import axios from "axios";


const useGetConversations = (id) => {
    console.log("id ",id)
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
  
    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios(
                    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/conversations/${id}`,      
                  );
                  console.log("conversations ",result.data)
                  setConversations(result.data);
                  setLoading(false);
            }catch(err){
                setError(err)
            }
        
        };
        fetchData();
      },[])
    
    return { conversations, loading, error };
}

export default useGetConversations;
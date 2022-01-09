import {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import { connect } from "react-redux";
const useGetMessages = (props)=>{
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    console.log("useGetMessages props ", props)
    useEffect(() => {
        
    },[])
    /* const fetchMessages = async () => {
        try{
            const result = await axios(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${activeConversation.id}`          
            );
            setMessages( result.data);
            setLoading(false)
        }catch(err){
            setError(err)
        }
    }
   

    useEffect(() => {
        fetchMessages()
    },[activeConversation])
    console.log("useGetMessages return : ",{ messages, loading, error } ) */
    return { messages, loading, error };
}

const mapStateToProps = state => {
    return {message: state.message.content,
            
            } 
  }
  const mapDispacthToProps = (dispatch) => {
    return {
        addMessage : (content, idConv)=> dispatch(addMessage(content,idConv))
    }
  }
  
export default connect(mapStateToProps, mapDispacthToProps)(useGetMessages)

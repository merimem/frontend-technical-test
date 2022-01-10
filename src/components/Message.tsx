import {Message as Msg, MessageGroup } from "@chatscope/chat-ui-kit-react";
import getDateFromTimestamp from "../helpers/getDateFromTimestamp"
function Message (props){
    const { content,id } = props
    console.log("content ", content)
    return (
         <MessageGroup key={content.id} direction={content.authorId == id ? "outgoing":"incoming"}>
                    <MessageGroup.Messages>
                       <Msg key={"msg"+content.id} model={{
                            type: "html",
                            message: content.body
                        }} >
                        <Msg.Footer sentTime={getDateFromTimestamp(content.timestamp)} />
                        </Msg>
                        </MessageGroup.Messages>
                    
                </MessageGroup>
    )
}
export default Message
import getReceipientNickname from "../helpers/getReceipientNickname";

let mockConversation =  {
    "id": 1,
    "recipientId": 2,
    "recipientNickname": "Jeremie",
    "senderId": 1,
    "senderNickname": "Thibaut",
    "lastMessageTimestamp": 1625637849
  }
describe("get Nickname of receipent From conversation test", ()=>{
    it('should display nickname of receiver correctly',()=>{
        expect (getReceipientNickname( mockConversation, "Thibaut")).toBe("Jeremie")
    })
})
import getDateFromTimestamp from "../helpers/getDateFromTimestamp";

describe("get Date From Timestamp test", ()=>{
    it('should display name of month correctly and day',()=>{
        expect (getDateFromTimestamp(1625637849)).toBe("July 7")
    })
})
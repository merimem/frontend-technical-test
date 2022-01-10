const getDateFromTimestamp = (tmp)=>{      
    var date = new Date(tmp * 1000);
    const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (monthNames[date.getMonth()]
           + " "+date.getDate()
            )
            
}
export default getDateFromTimestamp;

console.log("view")
const getMessages = () => {
    let matchFound = false

    const passcode = document.querySelector("#passcode")
    const message = document.querySelector("#message")
    console.log("button pressed", passcode.value)

    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()

        for(let key in data){
            console.log(key, data[key])
            if(key === passcode.value){
                matchFound = true
                console.log("match found")
                
                message.innerHTML = data[key]
                
            }
        }
        if (!matchFound){
            message.innerHTML = "Your password was not a match"
            message.style = "color: red;"

        }
    })
}

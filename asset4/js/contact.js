const cancel1 =document.getElementById("cancel4")



addEventListener("click", goback4);

function goback4(){
    location.href = "index.html"
}




const putname =document.getElementById("putname")
const putemail =document.getElementById("putemail")
const putmessage =document.getElementById("putmessage")


function sendbutton(){
        let num1= putname.value
        let num2 = putemail.value
        let num3 = putmessage.value

    
        if(num1==putname.value +num2==putemail.value +num3==putmessage.value){
            "Sent successfully"
        }
    
    
}



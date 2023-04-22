const messageInput = document.getElementById("message-input");
messageInput.addEventListener("keydown",function(event){
    if(event.key  == "Enter")
    getmessage();
})
function getmessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value="";
}
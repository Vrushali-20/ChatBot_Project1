

var sendBtn =  document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user={message:""};


var arrayOfPossibleMessage = [
    {message: "hi", response: "hello"},
    {message: "how are you?", response: "I am fine, thank you."},
    {message: "what is your name?", response: "I am Chatbot."},
    {message: "tell me a joke", response: "Why did the scarecrow win an award? Because he was outstanding in his field!"},
    {message: "what can you do?", response: "I can chat with you and answer simple questions."},
    {message: "bye", response: "Goodbye! Have a great day!"}
]


function sendMessage(userMessage){

   var messageElement= document.createElement('div');
   messageElement.style.textAlign = "right";
   messageElement.style.margin = "10px";

    messageElement.innerHTML="<span>You:</span>"+
    "<span>" +userMessage+ "</span>";

    chatContainer.appendChild(messageElement);

}

function  chatbotResponse(userMessage){

    var chatbotMessage = "";

    if(userMessage.length > 5 || userMessage.toLowerCase() == "hi"){
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

        if (result.length > 0){
            var response = result[0].response;
            chatbotMessage = response;

        }else {
            chatbotMessage = "please  send another message";
        }
    }else {
            chatbotMessage = "please send a different message";
        }



    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span>Chatbot: </span>"+
    "<span>"+chatbotMessage+"</span>";

    setTimeout(() => {
        messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000);


    }

sendBtn.addEventListener('click', function(e){

    var userMessage = textbox.value;

    if(userMessage == ""){
        alert('Please enter a message');

    }else{

     let userMessageText = userMessage.trim();
     user.message = userMessageText;
     textbox.value = "";
     sendMessage(userMessageText);
     chatbotResponse(userMessageText);
    }
});

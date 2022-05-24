const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [ 
    "message one",
    "message two",
    "message three",
    "message four",
    "message five",
]

button.addEventListener("click",()=> createNotif());

function createNotif(){
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText= randomMessage();
    toasts.appendChild(notif);
    setTimeout(()=>{
        notif.remove();
    },2000);
}

function randomMessage(){
    const random = messages[Math.floor(Math.random()* messages.length)]; 
    return random;
}
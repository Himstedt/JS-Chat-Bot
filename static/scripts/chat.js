
//Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage ="How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botTest"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoiew(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml =  '<p class="botTest"><span>' + firstMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if(userText == "") {
        userText = "I love your smile!";
    }

    let userHTML = ' <p class="userText"><span>' + botText + '</span></p>';

    $("#textInput").val("");
    $("chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1500)
}

function buttonSendText(sampleText) {
    let userHTML = ' <p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

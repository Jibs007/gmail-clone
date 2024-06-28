import { emails } from './data.js';


const renderMessages = () => {
    const messagesArea = document.getElementById("messages-area");
    messagesArea.innerHTML = "";

    emails.forEach((email) => {
        const messageElement = document.createElement("div");
        messageElement.className = "messages";

        const messageLeft = document.createElement("div");
        messageLeft.className = "messages-left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const starIcon = document.createElement("span");
        starIcon.className = "material-icons-outlined icon hover";
        starIcon.innerText = "star_border";

        const sender = document.createElement("span");
        sender.innerText = email.sender;

        messageLeft.appendChild(checkbox);
        messageLeft.appendChild(starIcon);
        messageLeft.appendChild(sender);

        const messageContent = document.createElement("div");
        messageContent.className = "messages-content";
        messageContent.innerText = `${email.subject} - ${email.message}`;

        const messageDate = document.createElement("div");
        messageDate.className = "messages-date";
        messageDate.innerText = email.date;

        messageElement.appendChild(messageLeft);
        messageElement.appendChild(messageContent);
        messageElement.appendChild(messageDate);

        messagesArea.appendChild(messageElement);
    });
};

// Initialize rendering of messages
renderMessages();

import { emails } from './data.js';

const renderMessages = () => {
    const messagesArea = document.getElementById('messages-area');
    messagesArea.innerHTML = '';

    emails.forEach((email) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'messages';

        const messageLeft = document.createElement('div');
        messageLeft.className = 'messages-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const starIcon = document.createElement('span');
        starIcon.className = 'material-icons-outlined icon hover';
        starIcon.innerText = 'star_border';

        const sender = document.createElement('span');
        sender.innerText = email.sender;

        messageLeft.appendChild(checkbox);
        messageLeft.appendChild(starIcon);
        messageLeft.appendChild(sender);

        const messageContent = document.createElement('div');
        messageContent.className = 'messages-content';
        messageContent.innerText = `${email.subject} - ${email.message}`;

        const messageDate = document.createElement('div');
        messageDate.className = 'messages-date';
        messageDate.innerText = email.date;

        messageElement.appendChild(messageLeft);
        messageElement.appendChild(messageContent);
        messageElement.appendChild(messageDate);

        messageElement.addEventListener('click', () => {
            messageElement.style.backgroundColor = '#f2f6fb';
        });

        messagesArea.appendChild(messageElement);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.getElementById('more-button');
    let isMore = false;

    moreButton.addEventListener('click', () => {
        const mailList = document.getElementById('mail-list');

        if (isMore) {
            const additionalItems = document.querySelectorAll('.additional-item');
            additionalItems.forEach(item => item.remove());
            moreButton.innerHTML = `<span class="material-icons-outlined icon"> expand_more </span>More`;
        } else {
            const additionalItemsHTML = `
        <li class="additional-item">
          <a href="#"><span class="material-icons-outlined icon"> label </span>Personal</a>
        </li>
        <li class="additional-item">
          <a href="#"><span class="material-icons-outlined icon"> info </span>Spam</a>
        </li>
        <li class="additional-item">
          <a href="#"><span class="material-icons-outlined icon"> delete </span>Trash</a>
        </li>
      `;
            mailList.insertAdjacentHTML('beforeend', additionalItemsHTML);
            moreButton.innerHTML = `<span class="material-icons-outlined icon"> expand_less </span>Less`;
        }

        isMore = !isMore;
    });

    const headNavLinks = document.querySelectorAll('.head-navbar .head-nav-link');

    headNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            headNavLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    renderMessages();
});

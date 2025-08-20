class ChatBox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            sendButton: document.querySelector('.send__button'),
            chatBox: document.querySelector('.chatbox__support')
        };
        
        this.state = false;  
        this.messages = [];  
    }

    display() {
        const { openButton, chatBox, sendButton } = this.args;

        // Toggle chatbox on/off
        openButton.addEventListener('click', () => this.toggleState(chatBox));

        // Send message when button clicked
        sendButton.addEventListener('click', () => this.onSendButton(chatBox));

        // Send message when Enter is pressed
        const inputNode = chatBox.querySelector('input');
        inputNode.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox);
            }
        });
    }

    toggleState(chatBox) {
        this.state = !this.state;
        if (this.state) {
            chatBox.classList.add('chatbox--active');
        } else {
            chatBox.classList.remove('chatbox--active');
        }
    }

    onSendButton(chatBox) {
        const textField = chatBox.querySelector('input');
        const text1 = textField.value.trim();
        if (!text1) return;

        // Add user message
        this.messages.push({ name: "User", message: text1 });
        this.updateChatText(chatBox);

        // Send message to server
        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(res => {
            // Add bot response
            this.messages.push({ name: "Sam", message: res.answer });
            this.updateChatText(chatBox);
            textField.value = '';
        })
        .catch(err => {
            console.error('Error:', err);
            this.updateChatText(chatBox);
            textField.value = '';
        });
    }

    updateChatText(chatBox) {
        let html = '';
        this.messages.slice().reverse().forEach(item => {
            if (item.name === "Sam") {
                html += `<div class="messages__item messages__item--visitor">${item.message}</div>`;
            } else {
                html += `<div class="messages__item messages__item--operator">${item.message}</div>`;
            }
        });

        const chatMessages = chatBox.querySelector('.chatbox__messages');
        chatMessages.innerHTML = html;
    }
}

// Initialize chatbox
const chatbox = new ChatBox();
chatbox.display();


    async function sendMessage() {
      const userInput = document.getElementById("chat-question").value.trim();
      if (!userInput) return;

      addMessage(userInput, 'user-message', 'Du');
      document.getElementById("chat-question").value = '';
      addMessage('Tänker... 🤖', 'bot-message', 'QuizBot');

      try {
        const response = await fetch("https://api.cohere.ai/v1/chat", {
          method: "POST",
          headers: {
            "Authorization": "Bearer ThqWWW1lAITxzbrZcLg7UxpF7heRs05GX83UO6eh",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userInput,
            model: "command-r-plus"
          })
        });

        const data = await response.json();
        removeThinkingMessage();

        if (data.text) {
          addMessage(data.text.trim(), 'bot-message', 'QuizBot');
        } else if (data.error) {
          addMessage("Fel från API: " + data.error.message, 'bot-message', 'QuizBot');
        } else {
          addMessage("Kunde inte generera svar.", 'bot-message', 'QuizBot');
        }

      } catch (err) {
        removeThinkingMessage();
        addMessage("Fel vid anslutning till Cohere API.", 'bot-message', 'QuizBot');
        console.error(err);
      }
    }

    function addMessage(text, className, sender) {
      const chatWindow = document.getElementById("chat-window");
      const messageDiv = document.createElement("div");
      messageDiv.className = className;
      messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
      chatWindow.appendChild(messageDiv);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function removeThinkingMessage() {
      const chatWindow = document.getElementById("chat-window");
      const messages = chatWindow.getElementsByClassName("bot-message");
      if (messages.length > 0 && messages[messages.length - 1].innerText.includes("Tänker")) {
        chatWindow.removeChild(messages[messages.length - 1]);
      }
    }
  

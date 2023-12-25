# ProgressiveAI JavaScript Library

Welcome to the official ProgressiveAI JavaScript Library! This library allows you to easily connect with ProgressiveAI's powerful AI Models and integrate them into your JavaScript projects.

## Installation

You can install the library using npm:

```bash
npm install progressiveai
```

## Getting Started

```javascript
// Call the official ProgressiveAI JavaScript Library
// From the "progressiveai" library, import the "Chat" class to create a connection with ProgressiveAI's AI Models
const { Chat } = require("progressiveai");

// Create a chat
const chatInstance = new Chat(
  "keyid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Input your ProgressiveAI API Key
  "Hello, AI!", // Enter a question of your choice
  "wispar" // Mention the AI Model you want to use. Currently, we offer "WISPAR Lite", and soon "WISPAR" will also be available.
);

// Get AI response
// Fetch a response from the AI Model; if not included, the request will not be submitted and processed
chatInstance.getResponse().then((response) => {
  if (response) {
    console.log("Response:", response); // Log the AI's response
  } else {
    console.log("Error getting response."); // Log an error
  }
});
```

Make sure to replace `"keyid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` with your actual ProgressiveAI API key.

## Help and Support

If you need help or have any questions, feel free to reach out to us:

- **[ProgressiveAI Support](https://support.progressiveai.org/)**: Visit our support platform for assistance.
- **[ProgressiveAI Documentation](https://docs.progressiveai.org/)**: Check out our documentation for detailed information and guides.
- **[GitHub Repository](https://github.com/ProgressiveAI/progressiveai-javascript)**: Report issues or contribute to the development on GitHub.

We're here to help you make the most of ProgressiveAI's AI capabilities!

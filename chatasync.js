const axios = require("axios");

class ChatAsync {
  constructor(apiKey, text, model) {
    this.apiKey = apiKey;
    this.text = text;
    this.model = model;
  }

  async getResponse() {
    const params = {
      api_key: this.apiKey,
      prompt: this.text,
    };

    try {
      const response = await axios.get(
        `https://api.progressiveai.org/v1/${this.model}/chat`,
        { params, timeout: 95000 }
      );

      const data = response.data;

      if (response.status !== 200) {
        handleHTTPError(response.status);
        return null;
      }

      return data.response;
    } catch (error) {
      handleRequestError(error);
      return null;
    }
  }
}

function handleHTTPError(statusCode) {
  switch (statusCode) {
    case 404:
      console.log("The AI Model is unavailable or doesn't exist at all!");
      break;
    case 502:
      console.log("Oops! The Server failed to return a response!");
      break;
    case 524:
      console.log("The request timed out. Please try again later.");
      break;
    default:
      console.log("HTTP Error: ", statusCode);
  }
}

function handleRequestError(error) {
  if (axios.isCancel(error)) {
    console.log("Request canceled: ", error.message);
  } else if (error.response) {
    handleHTTPError(error.response.status);
  } else if (error.request) {
    console.log("No response received: ", error.message);
  } else {
    console.log("Error during request: ", error.message);
  }
}

module.exports = ChatAsync;

/* Example usage:
async function exampleUsage() {
    const chatAsyncInstance = new ChatAsync('your_api_key', 'your_text_prompt', 'your_model');
    const response = await chatAsyncInstance.getResponse();

    if (response) {
        console.log('Response:', response);
    } else {
        console.log('Error getting response.');
    }
}

exampleUsage();*/

const axios = require("axios").default;

const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/chat",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzhkNjYxNjQtYmZjMi00NmEyLTg1YjctYWE5Y2E2YWVkYjI4IiwidHlwZSI6ImFwaV90b2tlbiJ9.3Eh7GkKGlGeTAu18PINETAo1JG9HfvfiWIWluQzDcqM",
  },
  data: {
    providers: "openai/gpt-4o",
    text: "give original recommandations from france, zamdane, khali, mairo, la feve",
    chatbot_global_action: "You are a music expert. You are given a country, You are given artists that i like. Give me music recommandations based on the informations. Just a list of artists nothing more. 10 Artists.",
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

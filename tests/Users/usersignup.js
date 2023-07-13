const axios = require('axios');

const data = JSON.stringify({
  email: 'talant@gmail.com',
  password: "talant'spass",
});

const data1 = JSON.stringify({
  email: 'chatgpt@openai.com',
  password: "chatgpt'spass",
});

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/api/users/user',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data1,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

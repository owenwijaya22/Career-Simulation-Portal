const axios = require('axios');

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/api/rooms',
  headers: {},
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

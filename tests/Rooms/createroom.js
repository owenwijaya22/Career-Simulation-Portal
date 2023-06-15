const axios = require('axios');

let data = JSON.stringify({
  "user": "648ad1484bbf7d798c7f4eb9",
  "prompt": "TESTING ROOM",
  "members": [
    "648ad1484bbf7d798c7f4eb9",
    "648ad1264bbf7d798c7f4eb7"
  ],
  "__v": 0
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/api/rooms/room',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

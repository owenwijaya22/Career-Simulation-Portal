const axios = require('axios');
let data = JSON.stringify({
  "from": "648ad1264bbf7d798c7f4eb7",
  "to": "648ad1484bbf7d798c7f4eb9",
  "message": "Hi John, how can I assist you today?",
  "timestamp": "2023-06-15T10:31:00Z",
  "roomId": "648ad3f797b7017b61ad1ff3"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/api/message/',
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

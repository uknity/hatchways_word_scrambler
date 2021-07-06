import axios from "axios";

export default {
    getSentence: function(apiCounter) {
        console.log('apiCounter in api' + apiCounter);
        const counterNum = apiCounter;
      return axios.get(`https://api.hatchways.io/assessment/sentences/${counterNum}`);
    }
    
  };

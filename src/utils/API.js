import axios from "axios";

export default {
    getSentence: function(counter) {
        console.log(counter);
        const counterNum = counter;
      return axios.get(`https://api.hatchways.io/assessment/sentences/${counterNum}`);
    }
    
  };


// method: GET
// url: https://api.hatchways.io/assessment/sentences/:counter
// Replace :counter with 1 (https://api.hatchways.io/assessment/sentences/1) to get the first
// sentence to begin with.

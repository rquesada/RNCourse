const axios = require('axios').default;

var UserService = {
    getUsers: function(){
        return axios.get('https://jsonplaceholder.typicode.com/users');
    }
}

export {UserService as default};
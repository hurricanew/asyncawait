const fetch = require('node-fetch')
function asyncCall() {
    return fetch('https://api.github.com/users/github');
}
function asyncCaller(input) {
    asyncCall(input)
        .then(res => res.json())
        .then(json => console.log(`call success json id is ${json.id}`));
}
asyncCaller();
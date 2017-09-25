const fetch = require('node-fetch')
function asyncCall(x) {
    return fetch('https://api.github.com/users/github');
}
async function asyncCaller() {
    const result = await asyncCall();
    const json = await result.json();
    console.log(`call success id is ${json.id}`)
}
asyncCaller();
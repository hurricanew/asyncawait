const fetch = require('node-fetch')
function asyncCall(x) {
    return fetch('https://api.github.com/users/githubxxxxx');
}
async function asyncCaller() {
    const result = await asyncCall();
    if (result.status !== 200) {
        throw new Error('zombies are taking over the earth!')
    }
    const json = await result.json();
    return json;
}


async function demo() {
    try {
        const result = await asyncCaller(); // {ResponseModel} hasError. data, hasPartialContent, message, is2fa
    }
    catch (error) {
            console.log(`catch the error ${error}`);
    }
}

demo();
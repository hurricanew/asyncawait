const fetch = require('node-fetch')
const Rx = require('rxjs');
function asyncCall() {
    return fetch('https://api.github.com/users/github');
}
async function asyncCaller() {
    const result = await asyncCall();
    const json = await result.json();
    console.log(`call success id is ${json.id}`)

    return json;

}
Rx.Observable.fromPromise(asyncCaller())
    .subscribe({
        next: res => console.log('got git hub id ' + res.id),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
    });


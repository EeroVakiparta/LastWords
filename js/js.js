var givenToken = "";

const setToken = () => {
    givenToken = document.getElementById("token").value;
    console.log(givenToken);
}

const sendButton = document.getElementById('button');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'OAuth ' + this.givenToken
        }
    }).then(response => {
        if (response.status >= 400) {
            return response.json().then(errResData => {
                const error = new Error('LastWOrds not wrking');
                error.data = errResData;
                throw error;
            });
        }
        return response.json();
    });
};

const helloToTwitter = () => {
    sendHttpRequest('POST', 'https://api.twitter.com/1.1/statuses/update.json?status=hello', json)
        .then(responseData => {
            console.log(responseData)
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

sendButton.addEventListener('click', helloToTwitter);
var givenToken = "";

const setToken = () => {
    givenToken = document.getElementById("token").value;
    console.log(givenToken);
}

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
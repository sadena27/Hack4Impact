const options = { 
    method: 'GET',
    headers: {
      "Accept" : "application/json"
    }
}

document.addEventListener('click', MouseEvent => {
    if (MouseEvent.target.id === 'joke-button') {
        fetch('https://icanhazdadjoke.com/', options)
            .then(response => {
                return response.json()
            })
            .then(responseAsJson => {
                document.getElementById('joke-text').innerText = responseAsJson.joke;
                console.log(responseAsJson.joke);
            })
            .catch(error => {
                console.error(error)
            })
    }
})
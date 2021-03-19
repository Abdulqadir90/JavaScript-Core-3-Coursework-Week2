const funny = document.getElementById("funnyPhotos");

function programmersHumour() {
    fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => {
        console.log('response',response)
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(response.error)
        }
    })
    .then((data) => {
        let img = document.createElement("img");
        img.src = data.img;
        funny.appendChild(img);
    })
    .catch((error) => {
        console.log('SOMETHING WENT WRONG:', error);
    });
}

programmersHumour();

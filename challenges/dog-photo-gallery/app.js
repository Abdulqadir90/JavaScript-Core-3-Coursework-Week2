const addDog = document.getElementById("button");
const container = document.getElementById("container");



function photoDogs() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(function (response) {
            if (response.status === 200 || response.ok) {
                return response.json();
            } else {
                throw Error(response.error);
            }
        })
        .then(function (data) {
                console.log('data', data);
                let dogImages = document.createElement("img");
                let dogList = document.createElement("li");
                dogList.className = "list";
                dogImages.src = data.message;
                dogImages.style.height = "300px";
                dogImages.style.width = "300px";
                dogList.appendChild(dogImages);
                container.appendChild(dogList);
        })
        .catch((err) => {
            console.log('Error', err);
        });
}

 addDog.addEventListener("click", photoDogs);


 window.onload = photoDogs;

const funny = document.getElementById("funnyPhotos");

    function programmersHumour() {
        fetch(`https://xkcd.now.sh/?comic=latest`)
        .then(function (response){
            return response.json()
        }

       
       
        )};
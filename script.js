// function getPostTitle(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then(response => response.json())  //prendo la risposta e la trasformo in formato json
//             .then(obj => resolve(obj.title))    //prendo l'oggetto json e utilizzo la funzione resolve con la chiave title dell'oggetto
//             .catch(reject)
//     })
// }

// getPostTitle(1)
//     .then(resp => console.log(resp)) //questa è la mia resolve che passo nella promise
//     .catch(err => console.log(err)) //questa è la mia reject che passo nella promise

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())  //prendo la risposta e la trasformo in formato json
            .then(
                post => fetch(`https://dummyjson.com/users/${post.userId}`) //faccio una seconda chiamata api per prendere i dettagli del autore passando i dati del post
                    .then(resp => resp.json())  //trasformo la risposta in json 
                    .then(autore => resolve({ ...post, autore }))   //nella resolve passo spread operator di post e aggiungo autore
                    .catch(err => console.log(err))
            )
            .catch(reject)
    })
}



getPostTitle(1)
    .then(resp => console.log(resp))
    .catch(err => console.log(err)) 
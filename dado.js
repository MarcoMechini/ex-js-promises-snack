// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, 
// genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 5) !== 0) {
                resolve(Math.floor(Math.random() * 6) + 1)
            } else {
                reject('dado incastrato')
            }
        }, 3000)
    })
}

lanciaDado()
    .then(resp => console.log(resp))
    .catch(err => console.error(err))
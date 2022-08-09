const tOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`)
      }, t)
    })
  }
  

Promise.all([tOut(1000), tOut(2000)]).then(result => console.log(result))

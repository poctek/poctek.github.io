if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/cacher.js', {scope: '/'})
    .then(response => {
      console.log('Worker installed successfully. Scope: ', response.scope)
    })
    .catch(error => {
      console.log("There's an error in the worker installation: ", error)
    })
}

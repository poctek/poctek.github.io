const CACHE_NAME = 'blog'
const NETWORK_TIMEOUT = 1000

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/script.js',
  '/assets/header-background.jpeg',
  '/assets/favicons/favicon-96x96.png',
]

this.addEventListener('install', event => {
  event.waitUntil(initialCache())
})

this.addEventListener('fetch', event => {
  event.respondWith(fromNetwork(event.request).catch(error => {
    fromCache(event.request)
  }))
})

function initialCache() {
  caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(URLS_TO_CACHE)
  })
}

function fromNetwork(request, failover) {
  let networkTimeoutError = setTimeout(() => console.log('No connection'), NETWORK_TIMEOUT)

  fetch(request).then(response => {
    clearTimeout(networkTimeoutError)
    return Promise.resolve(response)
  }).catch(error => Promise.reject(error))
}

function fromCache(request) {
  caches.open(CACHE_NAME).then(cache => {
    return cache.match(request).then(result => {
      if (result) {
        return result
      } else {
        return Promise.reject('No matches')
      }
    })
  })
}

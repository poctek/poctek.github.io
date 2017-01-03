const CACHE_NAME = 'blog'
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/script.js',
  '/assets/header-background.jpeg',
  '/assets/favicons/favicon-96x96.png',
  '/assets/favicons/favicon-96x96.png'
]

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE)
    })
  )
})

this.addEventListener('fetch', event => {
  let request = event.request
  let url = new URL(event.request.url)

  if (url.origin !== location.origin)
    return

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(request).then(result => {
        if (result) {
          return result
        } else {
          return fetch(request).then(response => {
            cache.put(request, response.clone())
            return response
          })
        }
      })
    })
  )
})

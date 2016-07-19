const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const scrape = require('scrape-it')

app.get('/get_prices', (req, res) => {
  scrape('http://www.memorylanephotobooth.com/pricing.html', {
    text: '#wsb-element-00000000-0000-0000-0000-000455621551 .txt'
  }).then(page => {
    res.json(page)
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

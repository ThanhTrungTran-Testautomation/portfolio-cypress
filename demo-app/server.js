const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

// Static Files
app.use(express.static('demo-app/public'))

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'admin' && password === '1234') {
    return res.json({ success: true })
  }
  res.status(401).json({ success: false })
})

// SPA Fallback
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'demo-app/public/index.html'))
})

app.listen(3000, '0.0.0.0', () =>
  console.log('App running on port 3000')
)
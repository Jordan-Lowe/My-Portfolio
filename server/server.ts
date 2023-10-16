// .server/server.ts
import express from 'express'
import path from 'path'

const app = express()
const PORT = 5173

// Assuming your public folder is at the root level of your project
app.use(express.static(path.join(__dirname, '../public')))

app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

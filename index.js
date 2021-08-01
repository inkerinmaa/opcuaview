import express from 'express'
import path from 'path'
import {requestTime, logger } from './middlewares/middlewares.js'
import serverRoutes from './routes/servers.js'

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //value can be a string or array (when extended is false), or any type (when extended is true).
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.get('/', (req, res) => {
  res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
  res.render('features', {title: 'Features Page', active: 'features'})
})


app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})












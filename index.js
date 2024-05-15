import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { login, register } from './controllers/UserController.js'
const DB_URL =
	'mongodb+srv://gasper:qqQQ220767@cluster0.uyg2efy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

/////////////////////Подключение DB/////////////////////////////////////
mongoose
	.connect(DB_URL)
	.then(() => console.log('DB ok'))
	.catch(err => console.log(`DB error ${err}`))
/////////////////Инициализация бэкэнда//////////////
const app = express()

app.use(express.json())
app.use(cors())
///////////////Обработка эндпоинтов//////////////////
app.post('/login', login)
app.post('/register', register)

/////////////Запуск бэкэнда///////////////
app.listen(4444, err => {
	err ? console.log(err) : console.log('Server ok')
})

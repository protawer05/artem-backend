import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import { login, register } from './controllers/UserController.js'
const DB_URL =
	'mongodb+srv://gasper:qqQQ220767@cluster0.uyg2efy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

/////////////////////Connect DB/////////////////////////////////////
mongoose
	.connect(DB_URL)
	.then(() => console.log('DB ok'))
	.catch(err => console.log(`DB error ${err}`))
const app = express()
///////////////////Create media storage///////////////////////////
const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})
const upload = multer({ storage })

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))
///////////////User endpoints//////////////////
app.post('/upload', upload.single('text'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	})
})
app.post('/login', login)
app.post('/register', register)

app.listen(4444, err => {
	err ? console.log(err) : console.log('Server ok')
})

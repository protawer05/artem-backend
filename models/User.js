import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	group: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: 'student',
	},
})

export default mongoose.model('User', UserSchema)

import mongoose from 'mongoose'

const LectionsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		fileName: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

export default mongoose.model('Lections', LectionsSchema)

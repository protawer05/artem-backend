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
	},
	{ timestamps: true }
)

export default mongoose.model('Lections', LectionsSchema)

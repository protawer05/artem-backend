import UserModel from '../models/User.js'

export const register = async (req, res) => {
	try {
		const password = req.body.password
		const userName = req.body.userName
		const fullName = req.body.fullName
		const doc = new UserModel({
			password,
			fullName,
			userName,
		})

		await doc.save()

		res.status(200).json({ password, fullName, userName })
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не удалось зарегестрироваться',
		})
	}
}
export const login = async (req, res) => {
	try {
		const user = await UserModel.findOne({ userName: req.body.userName })

		if (!user) {
			return res.status(404).json({
				message: 'Пользователь не найден',
			})
		}

		const isValidPass = user.password === req.body.password

		if (!isValidPass) {
			return res.status(400).json({
				message: 'Неверный логин или пароль',
			})
		}

		res
			.status(200)
			.json({
				password: user.password,
				fullName: user.fullName,
				userName: user.userName,
			})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не удалось авторизоваться',
		})
	}
}

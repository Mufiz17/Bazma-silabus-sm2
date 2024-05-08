const { registerUser } = require('../Models/AuthModel');
const { body, validationResult } = require('express-validator')

async function register(req, res) {
    const validation = [
        body('name').notEmpty().withMessage("Name is required"),
        body('email').notEmpty().isEmail().withMessage("Email is required"),
        body('password').notEmpty().withMessage("Password is required"),
        body('phone').notEmpty().withMessage("Phone is required")
    ]
    await Promise.all(validation.map((v) => v.run(req)));
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errMsg = errors.array().map(error => ({
            [error.path]: error.msg
        }))
        return res.status(422).json({
            success: false,
            message: "Validation Error",
            error: errMsg
        });
    }
    const { name, email, password, phone } = req.body;
    try {
        const result = await registerUser(name, email, password, phone)
        if (result.success) {
            res.status(201).json({
                success: result.success,
                message: result.message,
            })
        } else {
            res.status(500).json({ error: result.message })
        }
    } catch (error) {
        return 'Error in registration';
    }
}

module.exports = { register }
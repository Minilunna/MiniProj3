const express = require('express');
let router = express.Router();
const ExpertController = require('../controllers/expert.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(AuthController.checkAuth, ExpertController.get)
    .post(AuthController.checkAuth, [
        body('name').isString(),
        body('group').isString(),
        body('birth_date').isISO8601(),
        body('location.address').isString(),
        body('location.country').isString(),
        body('contact.email').isString(),
        body('contact.phone').isInt(),

        sanitizeBody('name').whitelist(CONFIG.sanitize.alphabet),
        sanitizeBody('location.address').whitelist(CONFIG.sanitize.alphabet + CONFIG.sanitize.numerical),
        sanitizeBody('location.country').whitelist(CONFIG.sanitize.alphabet),
        sanitizeBody('contact.email'),
    ], ExpertController.create);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.delete);

module.exports = router;
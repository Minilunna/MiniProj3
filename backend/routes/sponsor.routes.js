const express = require('express');
let router = express.Router();
const SponsorController = require('../controllers/sponsor.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(AuthController.checkAuth, SponsorController.get)
    .post(AuthController.checkAuth, [
        body('name').isString(),
        body('category').isString(),
        body('nif').isInt(),
        body('value').isInt(),        
        body('location.address').isString(),
        body('location.country').isString(),
        body('contact.email').isString(),
        body('contact.phone').isInt(),


        sanitizeBody('name').whitelist(CONFIG.sanitize.alphabet),
        sanitizeBody('location.address').whitelist(CONFIG.sanitize.alphabet + CONFIG.sanitize.numerical),
        sanitizeBody('location.country').whitelist(CONFIG.sanitize.alphabet),
        sanitizeBody('contact.email'),
    ], SponsorController.create);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.delete);

module.exports = router;
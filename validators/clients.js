const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('birthday').exists().notEmpty(),
    check('gender').exists().notEmpty().isLength({ min: 1, max: 1 }),
    check('dpi').exists().notEmpty().isLength({ min: 13, max: 13 }),
    check('address').exists().notEmpty(),
    check('nit').exists().notEmpty().isLength({ min: 8, max: 9 }),
    check('phone').exists().notEmpty().isLength({ min: 8, max: 8 }),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetItem = [
    check('id').exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = { validatorCreateItem, validatorGetItem };
const { clientsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');

const getItems = async (req, res) => {
    try {
        const data = await clientsModel.find({});
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
};

const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await clientsModel.findById(id);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await clientsModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await clientsModel.findByIdAndUpdate(id, body, {new: true});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await clientsModel.deleteOne({ _id: id });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
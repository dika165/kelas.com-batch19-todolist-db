import { getData, createData, updateData, deleteData } from "../repositories/users.js";
import { responseError, responseSuccess } from "../utils/response.js";

export const getUsers = async (request, response, next) => {
    try{
        const [result] = await getData();

        if(result.length != 0) {
            responseSuccess(response, "success", result)
        } else {
            responseError(response, "error", 404)
        }
    } catch(error) {
        next(error)
    }
}

export const createUsers = async (request, response, next) => {
    try {
        let name = request.body.name;
        let email = request.body.email;
        let password = request.body.password;
        const [result] = await createData(name, email, password);

        if(result.insertId >0) {
            responseSuccess(response, "success", result.insertId);
        } else {
            responseError(response, "Failed to create", 500)
        }
    } catch(error) {
        next(error)
    }
    
}

export const updateUser = async (request, response, next) => {
    try {
        let id = request.params.id;
        let name = request.body.name;
        let email = request.body.email;
        const [result] = await updateData(id, name, email);
        if (result.affectedRows > 0) {
            responseSuccess(response, "sucess update data", result)
        } else {
            responseError(response, "error udpate data", 400)
        }
    } catch (error) {
        next(error)
    }
    
}

export const deleteUser = async(request, response, next) => {
    try {
        let id = request.params.id;
        const [result] = await deleteData(id);

        if(result.affectedRows >0) {
            responseSuccess(response, "success", result)
        } else {
            responseError(response, "failed delete data")
        }
    } catch (error) {
        next(error)
    }
    
}
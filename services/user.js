import { getData, createData, updateData, deleteData } from "../repositories/users.js";

export const getUsers = async () => {
    const [result] = await getData();

    if(result.length != 0) {
        console.log(result);
    } else {
        console.log("data not fund");
    }
}

export const createUsers = async (name, email, password) => {
    const [result] = await createData(name, email, password);

    if(result.insertId >0) {
        console.log(`Berhasil menambahkan user dengan id:${result.insertId}`)
    }
}

export const updateUser = async (id, name, email) => {
    const [result] = await updateData(id, name, email);

    if (result.affectedRows > 0) {
        console.log('Update data berhasil');
    } else {
        console.log('Terjadi kesalahan')
    }
}

export const deleteUser = async(id) => {
    const [result] = await deleteData(id);

    if(result.affectedRows >0) {
        console.log("user berhasil di delete")
    } else {
        console.log("data user tidak ditemukan!")
    }
}
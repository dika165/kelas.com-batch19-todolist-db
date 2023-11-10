/*
    #tugas sesi 5
    1. buat table tasks dengan kolom : 
        - task_id (int)
        - user_id (int)
        - title (varchar)
        - descriptions (varchar)
        - is_done (int) => isi valuenya 1 atau 0
        - created_at (datetime)
        - updated_at (datetime)
        - updated_by (int)
    2. Buat Endpoint create, read, update, delete untuk table task tersebut;
    3. modifikasi endpoint(function) create user, update user, delete user, sehingga dapat memberikan response berupa 
        object data user yang dilakukan operation.
    4. modifikasi endpoint create task.tambahkan validasi token.  ambil value user_id dari payload / claim user yang login
*/
import * as ServiceUser from './services/user.js';
import express from 'express';

const host = "localhost";
const port = 8080
const app = express();
app.use(express.json());
app.get("/users", ServiceUser.tokenValidation, ServiceUser.getUsers);
app.post("/users", ServiceUser.tokenValidation,ServiceUser.createUsers);
app.put("/users/:id", ServiceUser.tokenValidation, ServiceUser.updateUser);
app.delete("/users/:id", ServiceUser.deleteUser);
app.post("/login", ServiceUser.login)


app.listen(port,host, () => {
    console.log(`server brerjlan di http://${host}:${port}`);
});
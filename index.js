/*
    #tugas sesi 4
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
*/
import * as ServiceUser from './services/user.js';
import express from 'express';

const host = "localhost";
const port = 8080
const app = express();
app.use(express.json());
app.get("/users", ServiceUser.getUsers);
app.post("/users", ServiceUser.createUsers);
app.put("/users/:id", ServiceUser.updateUser);
app.delete("/users/:id", ServiceUser.deleteUser);


app.listen(port,host, () => {
    console.log(`server brerjlan di http://${host}:${port}`);
});
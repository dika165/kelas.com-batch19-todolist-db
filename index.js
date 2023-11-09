/*
    #tugas sesi 3
    1. buat table tasks dengan kolom : 
        - task_id (int)
        - user_id (int)
        - title (varchar)
        - descriptions (varchar)
        - is_done (int) => isi valuenya 1 atau 0
        - created_at (datetime)
        - updated_at (datetime)
        - updated_by (int)
    2. Buat fungsi crete, read, update, delete untuk table task tersebut;
*/
import * as ServiceUser from './services/user.js';

console.log('daftar user sebelum di tambahkan');

await ServiceUser.getUsers();

// await ServiceUser.createUsers("Zahraa", "zahraa@gmail.com", "pass1234");
// await ServiceUser.createUsers("zafif", "zafif@gmail.com", "pass1234");

await ServiceUser.updateUser(3, "asri", "asri@gmail.com");


console.log('daftar user setelah di update');
await ServiceUser.getUsers();

await ServiceUser.deleteUser(5);
// await ServiceUser.deleteUser(6);
console.log("daftar user setelah di hapus");
await ServiceUser.getUsers();
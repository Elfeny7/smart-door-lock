import { User } from "../model/user";

export class UserListArray {
    userArray: User[] = [
       new User(101, "ikmal", "mahasiswa", "ikmal@gmail.com"),
       new User(102, "faris", "mahasiswa", "faris@gmail.com"),
       new User(103, "musyaffa", "mahasiswa", "musyaffa@gmail.com"),
       new User(104, "andi", "mahasiswa", "andi@gmail.com"),
       new User(105, "budi", "dosen", "budi@gmail.com"),
       new User(106, "jono", "mahasiswa", "jono@gmail.com"),
       new User(107, "adi", "mahasiswa", "adi@gmail.com"),
       new User(108, "putri", "mahasiswa", "putri@gmail.com"),
       new User(109, "reza", "mahasiswa", "reza@gmail.com"),
       new User(110, "tono", "mahasiswa", "tono@gmail.com"),
    ]
}
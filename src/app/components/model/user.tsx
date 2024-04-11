export class User {
    public id: number;
    public name: string;
    public status: string;
    public email: string;

    constructor(id: number, name: string, status: string, email: string) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.email = email;
    };
}
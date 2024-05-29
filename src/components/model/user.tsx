export class User {
    public id: number;
    public name: string;
    public number: string;
    public status: string;
    public email: string;

    constructor(id: number, name: string, number: string, status: string, email: string) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.status = status;
        this.email = email;
    };
}
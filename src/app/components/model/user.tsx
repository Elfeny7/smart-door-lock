class User {
    private id: number;
    private name: string;
    private status: string;
    private email: string;

    constructor(id: number, name: string, status: string, email: string) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.email = email;
    };
}
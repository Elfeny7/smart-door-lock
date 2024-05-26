export class Door {
    public id: number;
    public doorName: string;
    public floor: string;
    public name: string;
    public desc: string;

    constructor(id: number, doorName: string, floor: string, name: string, desc: string) {
        this.id = id;
        this.doorName = doorName;
        this.floor = floor;
        this.name = name;
        this.desc = desc;
    };
}
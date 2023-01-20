import { AlertType } from "./AlertType";

//Turn off the alarm if there was a previous alarm,
//then work for 3s, then turn off
export class alert{
    public  type: string
    constructor(type:AlertType, public message: string ){
        this.type='none'
        setTimeout(() => this.type=type.toString(),1);
        setTimeout(() => this.type='none', 3000);
    }
} 

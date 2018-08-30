export class User {
    $key : string;
    name : any;
    email : any;
    password : any;
    totalScore: number;
    badges: any[];
    topic1: any[];
    topic2: any[];
    topic3: any[];
    topic4: any[];
    topic5: any[]; 
    firstLogin: number;
    loginTime: string;

    constructor(name? : any, email? : any, password? : any, totalScore?: number, badges?: number[],
        topic1?: number[], topic2?: number[], topic3?: number[], topic4?: number[], topic5?: number[], firstLogin?:number) {
        this.name = (name!=null||name!=undefined)?name:"guest";
        this.email = (email!=null||email!=undefined)?email:"guest";
        this.password = (password!=null||password!=undefined)?password:"guest";
        this.totalScore = (totalScore!=null||totalScore!=undefined)?totalScore:5;
        this.badges = (badges!=null||badges!=undefined)?badges:[1,0,0,0,0];
        this.topic1 = (topic1!=null||topic1!=undefined)?topic1:[0,0,0,0,0];
        this.topic2 = (topic2!=null||topic2!=undefined)?topic2:[0,0,0,0,0];
        this.topic3 = (topic3!=null||topic3!=undefined)?topic3:[0,0,0,0,0];
        this.topic4 = (topic4!=null||topic4!=undefined)?topic4:[0,0,0,0,0];
        this.topic5 = (topic5!=null||topic5!=undefined)?topic5:[0,0,0,0,0];
        this.firstLogin = (firstLogin!=null||firstLogin!=undefined)?1:0;
        this.loginTime = new Date().toISOString();
    }

}

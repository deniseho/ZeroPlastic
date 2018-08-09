import {AnonymousSubscription} from "rxjs/Subscription";

export class User {
    $key : string;
    name : string;
    email : string;
    password : string;
    badge : string;
    achievements : Achievement;

    constructor(name : string, email : string, password : string, badge : string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.badge = badge;
    }
}

export class Achievement {
    email : string;
    topic1 : any;
    topic2 : any;
    topic3 : any;
    topic4 : any;
    topic5 : any;

    constructor(email: string) {
        this.email = email,
        this.topic1 = [
            {
                id: "tp1_q1",
                score: 0
            }, {
                id: "tp1_q2",
                score: 0
            }, {
                id: "tp1_q3",
                score: 0
            }, {
                id: "tp1_q4",
                score: 0
            }, {
                id: "tp1_q5",
                score: 0
            }
        ];
        this.topic2 = [
            {
                id: "tp2_q1",
                score: 0
            }, {
                id: "tp2_q2",
                score: 0
            }, {
                id: "tp2_q3",
                score: 0
            }, {
                id: "tp2_q4",
                score: 0
            }, {
                id: "tp2_q5",
                score: 0
            }
        ];
        this.topic3 = [
            {
                id: "tp3_q1",
                score: 0
            }, {
                id: "tp3_q2",
                score: 0
            }, {
                id: "tp3_q3",
                score: 0
            }, {
                id: "tp3_q4",
                score: 0
            }, {
                id: "tp3_q5",
                score: 0
            }
        ];
        this.topic4 = [
            {
                id: "tp4_game",
                score: 0
            }
        ];
        this.topic5 = [
            {
                id: "tp5_q1",
                score: 0
            }, {
                id: "tp5_q2",
                score: 0
            }, {
                id: "tp5_q3",
                score: 0
            }, {
                id: "tp5_q4",
                score: 0
            }, {
                id: "tp5_q5",
                score: 0
            }
        ]
    }
}

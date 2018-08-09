import {AnonymousSubscription} from "rxjs/Subscription";

export class User {
    $key : string;
    name : string;
    email : string;
    password : string;
    badge : string; 
    totalScore: number;
    topic1: number[];
    topic2: number[];
    topic3: number[];
    topic4: number[];
    topic5: number[]; 

    constructor(name : string, email : string, password : string, badge : string,
    totalScore: number, topic1: number[], topic2: number[], topic3: number[], topic4: number[], topic5: number[],) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.badge = badge;
        this.totalScore = totalScore;
        this.topic1 = topic1;
        this.topic2 = topic2;
        this.topic3 = topic3;
        this.topic4 = topic4;
        this.topic5 = topic5;
    }
}

// export class Achievement {
//     email : string;
//     topic1 : any;
//     topic2 : any;
//     topic3 : any;
//     topic4 : any;
//     topic5 : any;

//     constructor(email: string) {
//         this.email = email,
//         this.topic1 = [
//             {
//                 id: "tp1_q1",
//                 score: 0
//             }, {
//                 id: "tp1_q2",
//                 score: 0
//             }, {
//                 id: "tp1_q3",
//                 score: 0
//             }, {
//                 id: "tp1_q4",
//                 score: 0
//             }, {
//                 id: "tp1_q5",
//                 score: 0
//             }
//         ];
//         this.topic2 = [
//             {
//                 id: "tp2_q1",
//                 score: 0
//             }, {
//                 id: "tp2_q2",
//                 score: 0
//             }, {
//                 id: "tp2_q3",
//                 score: 0
//             }, {
//                 id: "tp2_q4",
//                 score: 0
//             }, {
//                 id: "tp2_q5",
//                 score: 0
//             }
//         ];
//         this.topic3 = [
//             {
//                 id: "tp3_q1",
//                 score: 0
//             }, {
//                 id: "tp3_q2",
//                 score: 0
//             }, {
//                 id: "tp3_q3",
//                 score: 0
//             }, {
//                 id: "tp3_q4",
//                 score: 0
//             }, {
//                 id: "tp3_q5",
//                 score: 0
//             }
//         ];
//         this.topic4 = [
//             {
//                 id: "tp4_game",
//                 score: 0
//             }
//         ];
//         this.topic5 = [
//             {
//                 id: "tp5_q1",
//                 score: 0
//             }, {
//                 id: "tp5_q2",
//                 score: 0
//             }, {
//                 id: "tp5_q3",
//                 score: 0
//             }, {
//                 id: "tp5_q4",
//                 score: 0
//             }, {
//                 id: "tp5_q5",
//                 score: 0
//             }
//         ]
//     }
// }

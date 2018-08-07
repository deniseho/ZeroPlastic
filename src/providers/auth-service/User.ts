import {AnonymousSubscription} from "rxjs/Subscription";

export class User {
    name : string;
    email : string;
    password : string;
    badge : string;
    achievements : Achievement;

    constructor(name : string, email : string, password : string, achievements : Achievement, badge : string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.achievements = achievements;
        this.badge = badge;
    }
}

export enum Badge {
    Badge01 = 0,
    Badge02 = 10,
    Badge03 = 20,
    Badge04 = 30,
    Badge05 = 40
}

export class Achievement {
    topic1 : any;
    topic4 : any;

    constructor() {
            this.topic1 = {
                qustion1: {
                    isAnswered: false,
                    isCorrect: false,
                    points: 5
                },
                qustion2: {
                    isAnswered: false,
                    isCorrect: false,
                    points: 5
                },
                qustion3: {
                    isAnswered: false,
                    isCorrect: false,
                    points: 5
                },
                qustion4: {
                    isAnswered: false,
                    isCorrect: false,
                    points: 5
                },
                qustion5: {
                    isAnswered: false,
                    isCorrect: false,
                    points: 5
                }
            }

            this.topic4 =  {
                game: {
                    score: 0
                }
            }
        }

}

import {AnonymousSubscription} from "rxjs/Subscription";

export class User {
    $key : string;
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

export class Achievement {
    topic1 : any;
    topic2 : any;
    topic3 : any;
    topic4 : any;
    topic5 : any;

    constructor() {
        this.topic1 = {
            qustion1: {
                isAnswered: false,
                isCorrect: false
            },
            qustion2: {
                isAnswered: false,
                isCorrect: false
            },
            qustion3: {
                isAnswered: false,
                isCorrect: false
            },
            qustion4: {
                isAnswered: false,
                isCorrect: false
            },
            qustion5: {
                isAnswered: false,
                isCorrect: false
            }
        },
        
        this.topic2 = {
            qustion1: {
                isAnswered: false,
                isCorrect: false
            },
            qustion2: {
                isAnswered: false,
                isCorrect: false
            },
            qustion3: {
                isAnswered: false,
                isCorrect: false
            },
            qustion4: {
                isAnswered: false,
                isCorrect: false
            },
            qustion5: {
                isAnswered: false,
                isCorrect: false
            }
        },

        this.topic3 = {
            qustion1: {
                isAnswered: false,
                isCorrect: false
            },
            qustion2: {
                isAnswered: false,
                isCorrect: false
            },
            qustion3: {
                isAnswered: false,
                isCorrect: false
            },
            qustion4: {
                isAnswered: false,
                isCorrect: false
            },
            qustion5: {
                isAnswered: false,
                isCorrect: false
            }
        },

        this.topic4 = {
            game: {
                score: 0
            }
        },

        this.topic5 = {
            qustion1: {
                isAnswered: false,
                isCorrect: false
            },
            qustion2: {
                isAnswered: false,
                isCorrect: false
            },
            qustion3: {
                isAnswered: false,
                isCorrect: false
            },
            qustion4: {
                isAnswered: false,
                isCorrect: false
            },
            qustion5: {
                isAnswered: false,
                isCorrect: false
            }
        }
    }

}

export class Items {
    private id : number;
    private text : string;

    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    public mySentences : any[] = [
        {
            id: 1,
            text: 'Sentence 1'
        }, {
            id: 2,
            text: 'Sentence 2'
        }, {
            id: 3,
            text: 'Sentence 3'
        }, {
            id: 4,
            text: 'Sentenc4 '
        }
    ];

    public getItems():any[] {
        return this.mySentences;
    }
}
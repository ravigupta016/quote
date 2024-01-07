export class Quotes {

    public content: string = '';
    public author: string = '';

    constructor(quote: string, author: string) {
        this.content = quote;
        this.author = author;
    }

}

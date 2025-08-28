export interface WordSetInterface {
    word: string;
    wordZh: string;
}

export interface ResultInterface {
    id: string;
    userInput: string;
    language: string;
    result: WordSetInterface[];
    createdAt: string;
}
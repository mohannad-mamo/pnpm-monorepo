export type Person = {
    name: string;
    age: number,
    pets?: Pet[]
}

export type Pet = {
    type: 'dog' | 'cat';
    name: string;
}
// Function

function testing(): string {
    return "test test"
}

const create = (): string => "test test test"

function testinggg(): number {
    return 123
}

function creates(): void {
    console.log("under the function")
}

const add = (x: number, y: number): string => {
    return `${x} ditambah ${y} sama dengan ${x+y}`;
}

const result = create();
console.log(result);
console.log(testing());
console.log(testinggg());
const res = add(10, 90);
console.log(res);
creates();
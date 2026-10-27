export let apiKey = "poijepoipoilkkwewrwfasdf";
// you can also do something like:
// export default "poijepoipoilkkwewrwfasdf";

export function greet() {
    return "Hello World!";
}

export const greetArrow = () => {
    return "Hello World Arrow!";
};

export const user = {
    name: "Richard",
    addr: "500 W 2nd St, Suite 2900, Austin, TX 78701",
    age: 32,
};

// classes

class User1 {
    constructor(name, addr, age) {
        this.name = name;
        this.addr = addr;
        this.age = age;
    }

    greetUser1() {
        console.log("Hi " + this.name);
    }
}

export const user1 = new User1(
    "Richard 1",
    "500 W 2nd St, Suite 2900, Austin, TX 78701",
    32,
);

// arrays, values that are stored in certain order
// that can be accessed by the index

export const hobbies = ["Sports", "Cooking", "Reading", "Chess"];

// destructuring arrays
export const [firstName, lastName] = ["Ricardo", "PSilva"];

export const { name, addr, age } = {
    name: "Richard",
    addr: "500 W 2nd St, Suite 2900, Austin, TX 78701",
    age: 32,
};

// spread operator, pull out the individual elements from an array
const testSprOp = ["Reading"];
export const mergeTestSprOp = [...hobbies, ...testSprOp];

export const extendedUser1 = {
    isAdmin: true,
    ...user,
};

// using functions as values
const handleTimeout = () => {
    console.log("Timed out...");
};

setTimeout(handleTimeout, 2000);
setTimeout(() => {
    console.log("Timed out... again");
}, 3000);

// more functions as values, this time with your own function def.
export const greeter = (greetFn) => {
    greetFn();
};

// functions inside functions
export const initFn = () => {
    const internalFn = () => {
        console.log("internalFn::Hi");
    };

    // you are able to define and call functions inside functions.
    internalFn();
};

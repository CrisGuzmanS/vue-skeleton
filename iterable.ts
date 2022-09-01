class User {

    private name: string;

    constructor(name: string) {
        this.name = name
    }
}

abstract class Collection implements Iterable<any> {
    private counter = 0;
    protected items: any;

    abstract item(item: any): any;

    public [Symbol.iterator]() {
        return {
            next: () => {
                return {
                    done: this.counter === this.items.length,
                    value: this.item(this.items[this.counter++])
                }
            }
        }
    }
}

class UserCollection extends Collection {

    public constructor(users: any) {
        super()
        this.items = users;
    }

    public item(item: any) {
        return new User(item);
    }
}

let c = new UserCollection(['one', 'two', 'three']);
for (let i of c) console.log(i);

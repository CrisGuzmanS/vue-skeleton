class User {

    private _name: string;

    constructor(name: string) {
        this._name = name
    }

    public name() {
        return this._name
    }
}

abstract class Collection implements Iterable<any> {
    protected items: any;

    abstract item(item: any): any;

    public [Symbol.iterator]() {

        let index = -1
        const data = this.items

        return {
            next: () => {
                return {
                    value: this.item(data[++index]),
                    done: !(index in data),
                }
            }
        }
    }
}

export default class UserCollection extends Collection {

    public constructor(users: any) {
        super()
        this.items = users;
    }

    public item(item: any) {
        return new User(item);
    }
}

//let c = new UserCollection(['one', 'two', 'three']);
//for (let i of c) console.log(i);
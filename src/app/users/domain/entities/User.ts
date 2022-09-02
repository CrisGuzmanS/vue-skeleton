export default class User {

    private _name: string;

    constructor(name: string) {
        this._name = name
    }

    public name() {
        return this._name
    }
}
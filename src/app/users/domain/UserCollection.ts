import Collection from '@/app/shared/domain/Collection'

class User {

    private name: string;

    constructor(name: string) {
        this.name = name
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
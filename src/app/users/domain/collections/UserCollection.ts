import User from '@/app/users/domain/entities/User'
import Collection from '@/app/shared/domain/collections/Collection'

export default class UserCollection extends Collection {

    public constructor(users: any) {
        super()
        this.items = users;
    }

    public item(item: any) {
        return new User(item);
    }
}
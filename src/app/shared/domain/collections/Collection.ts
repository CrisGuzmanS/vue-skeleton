export default abstract class Collection implements Iterable<any> {
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

    public first() {
        return this.item(this.items[0])
    }

    public push(element:any) {
        this.items.push(element)
    }
}
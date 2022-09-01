export default abstract class Collection implements Iterable<any> {
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
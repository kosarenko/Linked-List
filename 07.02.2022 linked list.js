class LinkedList1 {
    constructor() {
        this.head = {data:"start",next:this.append(data)}
        this.tail = null
    }
        append(data){
            const node = {data: data, next: null}
            if (this.tail) {
                this.tail.next = node

            }
            if(!this.head){
                this.head = node
            }

            this.tail = node
        }
    }


const list = new LinkedList1

// list.append('is')
// list.append('Alex')
list.append('Alex')
list.append('is')
list.append('firstname')
list.append('My')
list.append('Hello')

console.log(list)
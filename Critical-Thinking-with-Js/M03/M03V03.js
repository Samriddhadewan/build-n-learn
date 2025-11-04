class Stack{
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    pop(){
     if(this.isEmpty()){
        return undefined
     }   
     return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0;
    }
    print(){
        console.log(this.items.slice().reverse().join(" -> "))
    }
}
const stack1 = new Stack();

stack1.push(23)
stack1.push(34)
stack1.push(78)
console.log(stack1.peek())
stack1.print()
console.log(stack1.pop())
console.log(stack1.peek())
stack1.print()

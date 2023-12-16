class Stack {
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('ztm');
  myStack.push('discord');
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  
  
  //Discord
  //ZTM
  //google
  
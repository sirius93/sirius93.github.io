class LinkedList {
    constructor (head = null){
        this.head = head;
    }
    appendNode(newNode){
        let node = this.head;
        if(node == null){
            this.head = newNode;
            return;
        }
        while(node.next){
            node = node.next;
        }
        node.next = newNode;
    }
    printList(){
        let node = this.head;
        let printStr = "";
        while(node != null){
            var data = node.data;
            printStr = printStr + data + "->";            
            let nextNode = node.next;
            node = nextNode;
        }
        console.log(printStr);          
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let myList = new LinkedList();
let node = new Node(5);

myList.appendNode(node);
myList.appendNode(new Node(11));
myList.appendNode(new Node(7));
myList.printList(); 
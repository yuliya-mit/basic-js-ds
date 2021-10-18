const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data) {
  this.data=data;
  this.left=null;
  this.right=null;
}
}
module.exports = class BinarySearchTree {
  constructor (data) {
    this.Root=null;
  }
  root() {
    return this.Root;
  }

  add(data) {
  let newNode = new Node(data);
  if (this.Root === null) {
    this.Root = newNode;
    return;
  } else {
    let currentNode = this.Root;
    while (currentNode) {
      if(newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right= newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

preOrder (node, callback) {
  if (!node) {
    return;
  }

  if (callback) {
    callback (node);
  }

  this.preOrder(node.left, callback);
  this.preOrder(node.right, callback);
}

inOrder (node, callback) {
  if (!node) {
    return;
  }

  this.inOrder(node.left, callback);
  if (callback) {
    callback (node);
  }
  this.inOrder(node.right, callback);
 
}

postOrder (node, callback) {
  if (!node) {
    return;
  }

  this.postOrder(node.left, callback);
  this.postOrder(node.right, callback);
  if (callback) {
    callback (node);
  }
}

traverseDFS (callback, method) {
  if (method=== 'preOrder') {
    return this.preOrder(this.Root, callback);
  }
  if (method=== 'inOrder') {
    return this.inOrder(this.Root, callback);
  }
    return this.postOrder(this.Root, callback);
}

traverseBFS (callback) {
  const queue = [this.Root];
  while(queue.length) {
    const node=queue.shift();
    callback(node);
  
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
} 


  has(data) {
    let hasOrNot=false;
    this.traverseBFS(node => {
      if (node.data===data) {hasOrNot=true;}
    })
    return hasOrNot;
  }
  

  find(data) {
    let nodeEx= null;
    this.traverseBFS(node => {
      if (node.data===data) {nodeEx=node;}
    })
    return nodeEx;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let arr=[];
    this.traverseBFS(node => arr.push(node.data));
    return Math.min(...arr);
  }

  max() {
    let arr=[];
    this.traverseBFS(node => arr.push(node.data));
    return Math.max(...arr);
  }

}
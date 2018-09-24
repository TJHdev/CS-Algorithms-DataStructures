class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.insertTime = Date.now(); could be used to compare nodes of the same priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let insertedNode = new Node(val, priority);
    const values = this.values;
    values.push(insertedNode);
    let insertedIndex = values.length - 1;
    let parentIndex = Math.floor((insertedIndex - 1) / 2);
    if(!values[parentIndex]) {
      return values;
    }
    while(parentIndex >= 0 && values[parentIndex].priority > values[insertedIndex].priority) {
      let temp = values[parentIndex];
          values[parentIndex] = values[insertedIndex];
          values[insertedIndex] = temp;
      insertedIndex = parentIndex;
      parentIndex = Math.floor((insertedIndex - 1) / 2);
    }
    return values;
  }
  dequeue() {
    const values = this.values;
    const removedNode = values[0];
    const poppedValue = values.pop();
    if(values.length === 0) return poppedValue;
    values[0] = poppedValue;

    let parentIndex = 0;
    for(;;) {
      let leftChildIndex = (2 * parentIndex + 1);
      let rightChildIndex = (2 * parentIndex + 2);
      if(leftChildIndex >= values.length) leftChildIndex = null; 
      if(rightChildIndex >= values.length) rightChildIndex = null;
      let leftChild = values[leftChildIndex];
      let rightChild = values[rightChildIndex];
      let parent = values[parentIndex];

      if(!leftChild && !rightChild) break; //checks that the children exist before looking at priority properties

      if(rightChild && leftChild.priority > rightChild.priority) { 
        if(rightChild.priority < parent.priority) { // if child is larger, swap
          values[rightChildIndex] = parent;
          values[parentIndex] = rightChild;
          parentIndex = rightChildIndex;
        } else {
          break;
        }
      } else {
        if(leftChild.priority < parent.priority) { // if child is smaller, swap
          values[leftChildIndex] = parent; // swap logic
          values[parentIndex] = leftChild; 
          parentIndex = leftChildIndex; // reassign parentIndex 
        } else {
          break;
        }
      }
    }
    return removedNode;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      throw new Error('There is already a vertex with that name!');
    }
  }
  addEdge(vertex1, vertex2, weight) {
    if(!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push({node:vertex2, weight:weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight:weight});
  }
  dijkstra(startVertex, endVertex) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;

    // build up initial state
    for(let vertex in this.adjacencyList){
      let value = Infinity;
      if(vertex === startVertex) {
        value = 0;
      }
      distances[vertex] = value;
      nodes.enqueue(vertex, value);
      previous[vertex] = null;
    };

    // as long as there is something to visit
    while(nodes.values.length > 0) {
      smallest = nodes.dequeue().val;
      if(smallest === endVertex) { // triggers showing the result
        let result = [];
        let lastVertex = endVertex;
        while(previous[lastVertex]) {
          result.unshift(lastVertex);
          lastVertex = previous[lastVertex];
        }
        result.unshift(startVertex);
        console.log(`Shortest distance from ${startVertex} to ${endVertex} is ${distances[endVertex]}`) ; // need to return end distance
        return result;
      } 
      // console.log("distances", distances);
      // console.log("previous", previous);
      // console.log("priorityQueue", nodes.values);
      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbour in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbour];
          // calculate new distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if(candidate < distances[nextNeighbour]) {
            // updating new smallest distance to neighbour (it is a lookahead function)
            distances[nextNeighbour] = candidate;
            // updating previous - how we got to the neighbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
  }
}

let q = new PriorityQueue();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B", 4);
g.addEdge("A","C", 2);
g.addEdge("B","E", 3);
g.addEdge("C","D", 2);
g.addEdge("C","F", 4);
g.addEdge("D","E", 3);
g.addEdge("D","F", 1);
g.addEdge("E","F", 1);

g.dijkstra("A", "E");

// g.adjacencyList

// {
//   "A": [{node: "B", weight: 10}]
// }
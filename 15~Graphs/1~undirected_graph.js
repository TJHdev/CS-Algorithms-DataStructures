class Graph {
  constructor() {
    this.adjacencyList = {

    }
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      throw new Error('There is already a vertex with that name!');
    }
  }
  // 1. should find vertex1 in the adacencyList and add vertex2
  // 2. should find vertex2 in the adacencyList and add vertex1
  addEdge(vertex1, vertex2) {
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return undefined;
    this.adjacencyList[vertex].forEach((connectedVertex) => {
        this.removeEdge(vertex, connectedVertex);
    })
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(startingVertex) {
    const visitedVertices = {};
    const result = [];
    const helper = (vertex) => {
      if(!vertex) return null;
      visitedVertices[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(neighbour => {
        if(!visitedVertices[neighbour]) {
          helper(neighbour);
        }
      })
    }
    helper(startingVertex);
    return result;
  }
  depthFirstIterative(startingVertex) {
    const stack = [startingVertex]; // used instead of the call stack to keep track of what vertex is next
    const result = [];
    const visitedVertices = {};
    let lastVertex;

    visitedVertices[startingVertex] = true;
    while(stack.length > 0) {
      lastVertex = stack.pop();
      result.push(lastVertex);

      this.adjacencyList[lastVertex].forEach(neighbour => {
        if(!visitedVertices[neighbour]) {
          visitedVertices[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
  breadthFirstIterative(startingVertex) {
    const queue = [startingVertex];
    const result = [];
    const visitedVertices = {};
    let lastVertex;

    visitedVertices[startingVertex] = true;
    while(queue.length > 0) {
      lastVertex = queue.shift();
      result.push(lastVertex);

      this.adjacencyList[lastVertex].forEach(neighbour => {
        if(!visitedVertices[neighbour]) {
          visitedVertices[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('London');

// g.addEdge('Tokyo', 'London');


g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

//           A
//         /   \
//        B     C
//        |     |
//        D --- E
//         \   /
//           F
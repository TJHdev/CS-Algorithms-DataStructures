class PriorityQueue { // naive implementation
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a,b) => a.priority - b.priority);
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
        // return result;
      } 
      console.log("distances", distances);
      console.log("previous", previous);
      console.log("priorityQueue", nodes.values);
      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbour in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbour];
          console.log(nextNode);
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
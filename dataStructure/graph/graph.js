class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertex(vertex) {
        while (this, this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex('Seoul')
g.addVertex('Dallas')
g.addVertex('Tokyo')
g.addVertex('Busan')
g.addVertex('LA')
g.addVertex('NY')
g.addEdge('Seoul', 'Tokyo')
g.addEdge('Seoul', 'Dallas')
g.addEdge('Busan', 'Seoul')
g.addEdge('LA', 'Seoul')
g.addEdge('LA', 'NY');
g.removeVertex('Seoul')

// g.removeEdge('Seoul', 'Dallas')


console.log(g)
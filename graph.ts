interface Vertex {
  key: T;
  edges: T[];
}

export class Graph {
  private adjacencyList: Vertex[];

  constructor() {
    this.adjacencyList = [];
  }

  private getVertex(vertex: Vertex): Vertex {
    return this.adjacencyList.find(v => v.key === vertex.key);
  }

  addVertex(vertex: Vertex): boolean {
    if (this.getVertex(vertex)) {
      return true;
    }

    this.adjacencyList.push(vertex);
    return true;
  }

  addEdge(v1: Vertex, v2: Vertex): boolean {
    this.getVertex(v1).edges.push(v2);
    this.getVertex(v2).edges.push(v1);
    return true;
  }

  removeEdge(v1: Vertex, v2: Vertex): boolean {
    this.getVertex(v1).edges = this.getVertex(v1).edges.filter(v => v !== v2);
    this.getVertex(v2).edges = this.getVertex(v2).edges.filter(v => v !== v1);
    return true;
  }

  dfs(start: Vertex): Vertex[] {
    let result: Vertex[] = [];
    let visited: any = {};
    let stack: Vertex[] = [];
    stack.push(start);

    while (stack.length) {
      let v: Vertex = this.getVertex(stack.pop());
      if (!visited[v.key]) {
        visited[v.key] = true;
        result.push(v);
        v.edges.forEach(edge => {
          if (!visited[edge]) {
            stack.push(edge);
          }
        })
      }
    }

    return result;
  }

  // exact same thing as DFS except you use a queue
  bfs(start: Vertex): Vertex[] {
    let result: Vertex[] = [];
    let visited: any = {};
    let queue: Vertex[] = [];
    queue.push(start);

    while (queue.length) {
      let v: Vertex = this.getVertex(queue.shift());
      if (!visited[v.key]) {
        visited[v.key] = true;
        result.push(v);
        v.edges.forEach(edge => {
          if (!visited[edge]) {
            queue.push(edge);
          }
        })
      }
    }

    return result;
  }
}

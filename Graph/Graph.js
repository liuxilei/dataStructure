//图
function Graph() {
    //存顶点的名字
    var vertices = [];
    //存储邻接表， 顶点的名字作为键，邻接顶点作为值
    var adjList = new Dictionary();

    //向图中添加新的顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    //添加顶点之间的边
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    //打印
    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };

    //广度优化搜索算法(队列)
    this.bfs = function (v, callback) {
        var color = initializeColor(),
            queue = new Queue();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    };

    this.BFS = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred,
        };
    };

    //深度优化辅助函数
    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    dfsVisit(w, color, callback);
                }
            }
        }
    };

    //深度优先搜索
    this.dfs = function (callback) {
        var color = initializeColor();
        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    };

    var DFSVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] == ++time;
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++time;
        console.log('explored ' + u);
    };
    var time = 0;
    this.DFS = function () {
        var color = initializeColor(),
            d = [],
            f = [],
            p = [];
        time = 0;
        for (var i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }
        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }
        return {
            discovery: d,
            finished: f,
            predecessors: p,
        };
    };
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log('图的邻接表');
console.log(graph.toString());
function printNode(value) {
    console.log('拜访过的顶点：' + value);
}
graph.bfs(myVertices[0], printNode);

var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);

var fromVertex = myVertices[0];
for (var i = 1; i < myVertices.length; i++) {
    var toVertex = myVertices[i],
        path = new Stack();
    for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while (!path.isEmpty()) {
        s += ' - ' + path.pop();
    }
    console.log(s);
}

graph.dfs(printNode);
var result = graph.DFS();
console.log(result);

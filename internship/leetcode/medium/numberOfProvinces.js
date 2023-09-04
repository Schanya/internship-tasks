/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const getEdgest = (idx, edge) => {
    const edges = [];

    for (let i = 0; i < edge.length; i++) {
        if (idx === i) continue;
        if (edge[i] === 0) continue;
        edges.push(i)
    }

    return edges;
}

const buildAdjList = (edges, n = edges.length) => {
    const adjList = Array.from({ length: n }, () => []);

    for (let i = 0; i < edges.length; i++) {
        adjList[i].push(...getEdgest(i, edges[i]));
    }

    return adjList;
}

const dFs = (node, adjList, visited) => {
    visited[node] = true;

    for (let neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            dFs(neighbor, adjList, visited);
        }
    }
}

var findCircleNum = function (isConnected) {
    const adjList = buildAdjList(isConnected);
    const visited = {};
    let provinces = 0;

    for (let i = 0; i < adjList.length; i++) {
        if (!visited[i]) {
            provinces++;
            dFs(i, adjList, visited);
        }
    }

    return provinces;
};

const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

console.log(findCircleNum(isConnected));
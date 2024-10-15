// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
// result = 1;

function numIslands(grid){
    if(!grid || grid.length === 0) return 0

    const dfs=(i,j)=>{
        // Check for out-of-bounds or if the cell is water or already visited
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {
            return
        }

         // Mark the current cell as visited
         grid[i][j] = "0";

         // Perform DFS in all 4 directions
         dfs(i + 1, j); // down
         dfs(i - 1, j); // up
         dfs(i, j + 1); // right
         dfs(i, j - 1); // left
    }

    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // If a '1' is found, it's part of a new island
            if (grid[i][j] === "1") {
                islandCount++;
                dfs(i, j); // Start DFS to mark all connected lands
            }
        }
    }

    return islandCount;

}
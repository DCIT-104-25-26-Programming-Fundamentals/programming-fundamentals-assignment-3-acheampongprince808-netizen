// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
// Function to read a matrix
function readMatrix(rows, cols, name) {
    let matrix = [];

    console.log("\nEnter values for Matrix " + name + ":");

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        matrix.push(row.split(' ').map(Number));
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

// Part A: Transpose
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let i = 0; i < cols; i++) {
        transpose[i] = [];
        for (let j = 0; j < rows; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }

    return transpose;
}

//Add matrices
function addMatrices(A, B) {
    let rows = A.length;
    let cols = A[0].length;
    let sum = [];

    for (let i = 0; i < rows; i++) {
        sum[i] = [];
        for (let j = 0; j < cols; j++) {
            sum[i][j] = A[i][j] + B[i][j];
        }
    }

    return sum;
}

//Multiply matrices
function multiplyMatrices(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let colsB = B[0].length;

    let product = [];

    for (let i = 0; i < rowsA; i++) {
        product[i] = [];
        for (let j = 0; j < colsB; j++) {
            product[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                product[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return product;
}

// Main function
function main() {

    // ---------------- Part A ----------------
    console.log("=== PART A: TRANSPOSE MATRIX ===");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols, "A");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrix));

    // ---------------- Part B ----------------
    console.log("\n=== PART B: ADD MATRICES ===");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix1 = readMatrix(rows, cols, "A");
    let matrix2 = readMatrix(rows, cols, "B");

    console.log("\nSum of Matrices:");
    displayMatrix(addMatrices(matrix1, matrix2));

    // ---------------- Part C ----------------
    console.log("\n=== PART C: MULTIPLY MATRICES ===");

    let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    let A = readMatrix(rowsA, colsA, "A");

    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
    let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Error: Matrix multiplication is not possible.");
        return;
    }

    let B = readMatrix(rowsB, colsB, "B");

    console.log("\nProduct Matrix:");
    displayMatrix(multiplyMatrices(A, B));
}

// Run program
main();

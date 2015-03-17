'use strict';

var deepAST = require('deep-ast');
var astUtils = require('esutils').ast;
var traverse = require('traverse');

/**
 * Get all functions defined in a project
 * @param {String} filename The AST entry point
 * @returns {String[]} A list of function names
 */
function myFuncs(filename) {
  var ast = deepAST(filename);
  if (ast instanceof Error) {
    return ast;
  }

  var functionNodes = findFunctions(ast);
  return functionNodes.map(function getNames(node) {
    return getFunctionNameFromNode(node);
  });
}

/**
 * Traverse an AST and find all functions
 * @param {Object} ast SpiderMonkey compatible AST
 * @returns {Object[]} A list of all function nodes
 */
function findFunctions(ast) {
  return traverse(ast).reduce(function findFunction(memo, node) {
    if (astUtils.isNamedFunction(node)) {
      memo.push(node);
    }
    return memo;
  }, []);
}

/**
 * Get the name of the function from the node
 * @param {Object} node An esprima node
 * @returns {String} the function name
 */
function getFunctionNameFromNode(node) {
  return node.id.name;
}

module.exports = myFuncs;

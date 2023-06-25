// Import the math.js library


var calculateExpression = module.exports = function calculateExpression(expression) {
    const math = require ('mathjs');
    return new Promise((resolve, reject) => {
      try {
        const result = math.evaluate(expression);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

// Export the function to make it accessible from other files


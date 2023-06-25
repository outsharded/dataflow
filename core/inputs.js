const readline = require('readline');
const calculateExpression = require('../fuctions/math')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input in this form: type, arguments', (userInput) => {
    const result = userInput.split(',');
    if (result[0] === 'math') {
        calculateExpression(result[1])
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
  rl.close();
});

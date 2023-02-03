import chalk, { colorNames } from 'chalk';
import validator from 'validator';
const log=console.log;
log(chalk.blue("hello")+" "+chalk.red("!"));
// Compose multiple styles using the chainable API
// (red color ka Name,bg is blue,text is bold)
log(chalk.blue.bgGreen.bold('Hello world!'));
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.bold('with a blue substring') +
	' that becomes green again!'
));
 /* VALIDATOR BEGINS */
 
const isTrue=validator.isEmail('al@gmail.com'); //=> true
// console.log(isTrue);
 console.log(isTrue ? chalk.bgGreen(isTrue): chalk.bgRed(isTrue));


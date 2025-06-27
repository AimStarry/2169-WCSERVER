var myLogModule = require('./utility/log.js');

myLogModule.info('Node.js has started...');
myLogModule.warning('Warning node not found...');
myLogModule.error('Error: Node encountered an error...');

var msg = require('./utility/message.js');
//console.log(msg);
console.log(msg.SimpleMessage);
var person = require('./utility/data.js');
console.log(person.firstName + ' ' + person.lastName);
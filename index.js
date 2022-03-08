var cowsay = require("cowsay");
const cowsayTag = require('cowsay-tag');

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(cowsayTag`And another thing..`)

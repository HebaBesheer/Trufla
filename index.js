const store = require('./store');
const dictionary = require('./dictionary');

let result = null;

const command = store.args[2];

if(command.toLowerCase() != 'get' &&
    command.toLowerCase() !='list' &&
    command.toLowerCase() != 'add' &&
    command.toLowerCase() != 'clear' &&
    command.toLowerCase() != 'remove')
    {
        console.log('Please, enter a valid command.');
    }
else
{
    switch(command.toLowerCase())
    {
        case 'clear':
            result = store.clear();
            break;
        case 'get':
            result = store.get(store.args[3]);
            break;
        case 'add':
            result = store.add(new dictionary(store.args[3],store.args[4]));
            break;
        case 'list':
            result = store.list();
            break;
        case 'remove':
            result = store.remove(store.args[3]);
            break;
    }

    console.log(result);
 }
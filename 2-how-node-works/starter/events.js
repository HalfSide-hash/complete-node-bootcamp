const EventEmitter = require('events');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('New sale dood');
});

myEmitter.on('newSale', () => {
  console.log('J Jonah Jameson');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});
myEmitter.emit('newSale', 9);

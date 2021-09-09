const EventEmitter = require('events');

const varZone = 1000;
class Interval extends EventEmitter{
    constructor(){
        super();
        setInterval(() => this.emit('tick', 'some value'), 1000);
    }
}

const interval = new Interval();
interval.on('tick', value => {
    console.log(`tick: ${value}`);
    console.log(varZone);
});
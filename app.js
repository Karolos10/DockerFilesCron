const cron = require('node-cron');

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
    times++;
    console.log('running a task every second', times);
});

console.log('Inicio');
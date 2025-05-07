

let times = 0;

const syncDB = () => {
    times++;
    console.log('running a task every', times);

    return times;
}

module.exports = {
    syncDB
}

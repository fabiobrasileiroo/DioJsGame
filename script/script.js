const container = document.getElementById('container');
const ps = new PerfectScrollbar(container, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
});
// No need to update() or destroy() explicitly in this case

ps.update();
// or just with selector string
//const ps = new PerfectScrollbar('#container');
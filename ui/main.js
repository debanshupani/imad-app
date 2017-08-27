var button = document.getElementById('counter');
var counter = 0;

 = function () {
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};  
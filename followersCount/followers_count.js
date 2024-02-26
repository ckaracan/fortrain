let count=0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
function displayCount() {
document.getElementById('countDisplay').innerHTML;

}

function checkCountValue() {
    if (count===10) {
        alert("your ig got 10 follows");
        
    }
    else if(count===20) {
        alert("your ig got 20 followers");
    }
}
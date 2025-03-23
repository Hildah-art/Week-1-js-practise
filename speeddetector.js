function speedDetection(speed) {
const speedLimit =70;
const kmPerPoint = 5;
const maxPoints = 12;
if (speed <= speedLimit) {
    console.log("OK");
} else {
    let points = Math.floor((speed -speedLimit) / kmPerPoint);
    console.log(`Points: ${points}`);
    if (points > maxPoints) {
        console.log("License suspended");
    }
}
}
    speedDetection(80);

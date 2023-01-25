var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = 3; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var point = new Point(5, 7);
point.draw();

class Point {
    x: number;
    y: number;

    constructor(x: number = 1, y: number = 3) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
    
}

let point = new Point(5, 7);
point.draw();
console.log(point.draw());
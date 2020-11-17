class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 0,
            friction: 1.0,
            density: 5
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        fill(255);
        stroke("green");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();

    }
}
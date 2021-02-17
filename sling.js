class Sling {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.point = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var positionB = this.point;
            push();
            strokeWeight(4);
            stroke(113,196,204);
            line(pointA,positionB);
            pop();
        }
    }
    shoot() {
           this.sling.bodyA = null; 
    }
}
class Meteor extends Star {
    z = -10;
    constructor(position, scale) {
        super(position, scale);
        this.speed = vec2(Math.random() * 0.4 + 0.5, Math.random() * 1.3 + 2);
        if (Math.random() > 0.5) {
            this.speed[0] *= -1;
        }
    }
    Update() {
        this.Move(this.speed);
        var p = DrawingObject.Instance(Particle, vec2(this.position[0], this.position[1]));
        p.z = this.z;
        if (this.position[1] > 1000)
            this.Dispose();
    }
}

class Particle extends DrawingObject {
    time = 0;
    static GetVertex(vertices) {
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 60 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i < 7; i++) {
            var agree = i * 60;
            var x = Math.cos(agree * Math.PI / 180.0) * 300 + 500;
            var y = Math.sin(agree * Math.PI / 180.0) * 300 + 500;
            vertices.push(vec2(x, y));
        }
    }
    static GetColor(colors) {
        for (var i = 0; i < 8; i++)
            colors.push(vec4(255, 255, 0, 255)); // center
    }
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 8])
    }
    Update() {
        this.time += 2;
        var a = (100 - this.time) / 100;
        this.scale = vec2(a * 0.025 + 0.003, a * 0.025 + 0.003);
        this.offsetcolor = vec4(1, 1, 1, a * 0.02);
        if (this.time == 100)
            this.Dispose();
    }
}
class Bush extends DrawingObject {
    constructor(position) {
        super(position, vec2(1, 1));
        this.z = -5;
    }
    static GetVertex(vertices) {
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 1 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 60.0) * 75 + 500;
            var y = Math.sin(agree * Math.PI / 60.0) * 50 + 500;
            vertices.push(vec2(x, y));
        }
        this.temp_vertices = vertices;
    }

	// Set color
    static GetColor(colors) {
        for (var i = 0; i < 362; i++) {
            var a = this.temp_vertices[i][1] / 500;
            colors.push(vec4(40 * a, 180 * a, 40 * a, 255)); // center
        }
    }
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 362])
    }
    
	// Update color by position
    Update() {
        var a = (1200 - this.position[0]) / 1300 * 1.0;
        this.offsetcolor = vec4(a, a, a, 1);
    }
}
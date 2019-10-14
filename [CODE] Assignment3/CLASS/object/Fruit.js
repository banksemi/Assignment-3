class Fruit extends DrawingObject {
    speed = null;
	timeout = -1;
    constructor(position) {
        super(position, vec2(1, 1));
        this.z = -4;
        this.rotation = -Math.random() * 30;
        this.click_area_scale = vec2(0.6, 0.6);
    }
    static GetVertex(vertices) {
		vertices.push(vec2(500, 500));
        vertices.push(vec2(600, 400));
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 1 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 60.0) * 50 + 500;
            var y = Math.sin(agree * Math.PI / 60.0) * 50 + 500;
            vertices.push(vec2(x, y));
        }
        this.temp_vertices = vertices;
    }
    static GetColor(colors) {

		colors.push(vec4(240, 100, 100, 255)); // Line Color
		colors.push(vec4(240, 100, 100, 255)); // Line Color

		colors.push(vec4(240, 100, 100, 255)); // center
        for (var i = 0; i < 361; i++) {
            var a = this.temp_vertices[i][1] / 500;
            colors.push(vec4(240 * a, 40 * a, 40 * a, 255)); // center
        }
    }
    static GetDraw(drawlist) {
		drawlist.push([gl.LINES, 0, 2])
        drawlist.push([gl.TRIANGLE_FAN, 2, 362])
    }
    onMouseOver() {
        this.outline = true;
        this.offsetcolor = vec4(0.6, 0.6, 0.6, 1);
    }
    onMousePress() {
        if (this.speed == null) {
            this.speed = vec2(Math.random() * 3 - 1.5, -4);
            this.z = 1;
        }
    }
	// 1/60 update object
    Update() {
		this.outline = false;
		if (this.timeout > 0 && --this.timeout == 0)
			this.Dispose();
        if (this.speed != null) {
            this.rotation += this.speed[0] * 2.5;
            this.Move(this.speed);
			// Touch ground
            if (this.position[1] > 850) {
				if (this.timeout == -1)
					this.timeout = 300;
				// position go down -> y value reverse
				if (this.speed[1] > 0)
					this.speed = vec2(this.speed[0] * 0.7, this.speed[1] * -1 * (0.1 + Math.random() * 0.2));
			} else {
				// in the air get gravity
				this.speed[1] += 0.2;
			}
        }
        
        var a = (1200 - this.position[0]) / 1300 * 1.0;
        this.offsetcolor = vec4(a, a, a, 1);
    }
}
class Fruit extends DrawingObject {
    constructor(position) {
        super(position, vec2(1, 1));
        this.z = -4;
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
    
	// 1/60�ʸ��� �Ҹ��� �Լ�
    Update() {
        var a = (1200 - this.position[0]) / 1300 * 1.0;
        this.offsetcolor = vec4(a, a, a, 1);
    }
}
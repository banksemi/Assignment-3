class Wall extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    // Input vertex and color in same time
	static GetVertexColor(VertexColor)
	{
		VertexColor.push(vec2(0, 500), vec4(0, 0, 0, 255));
        VertexColor.push(vec2(1000, 500), vec4(0, 0, 0, 255));
        VertexColor.push(vec2(1000, 470), vec4(200, 200, 200, 255));

        VertexColor.push(vec2(0, 470), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(1000, 470), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(0, 500), vec4(0, 0, 0, 255));

		VertexColor.push(vec2(0, 500), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(1000, 800), vec4(60, 60, 60, 255));
        VertexColor.push(vec2(0, 800), vec4(100, 100, 100, 255));

		VertexColor.push(vec2(1000, 800), vec4(60, 60, 60, 255));
        VertexColor.push(vec2(0, 500), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(1000, 500), vec4(40, 40, 40, 255));

		VertexColor.push(vec2(0, 725), vec4(180, 180, 180, 80));
        VertexColor.push(vec2(1000, 725), vec4(150, 150, 150, 80));

		VertexColor.push(vec2(0, 650), vec4(200, 200, 200, 80));
        VertexColor.push(vec2(1000, 650), vec4(170, 170, 170, 80));

		VertexColor.push(vec2(0, 575), vec4(240, 240, 240, 80));
        VertexColor.push(vec2(1000, 575), vec4(210, 210, 210, 80)); // °¡·Î

		VertexColor.push(vec2(250, 500), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(250, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(125, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(125, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(250, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(250, 725), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(125, 725), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(125, 800), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(500, 500), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(500, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(375, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(375, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(500, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(500, 725), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(375, 725), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(375, 800), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(750, 500), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(750, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(625, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(625, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(750, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(750, 725), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(625, 725), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(625, 800), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(875, 650), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(875, 575), vec4(170, 170, 170, 40));

		VertexColor.push(vec2(875, 725), vec4(200, 200, 200, 40));
        VertexColor.push(vec2(875, 800), vec4(170, 170, 170, 40));
        

	}

	// Draw
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLES, 0, 3]);
        drawlist.push([gl.TRIANGLES, 3, 3]);
		drawlist.push([gl.TRIANGLES, 6, 3]);
        drawlist.push([gl.TRIANGLES, 9, 3]);
		drawlist.push([gl.LINES, 12, 2]);
		drawlist.push([gl.LINES, 14, 2]);
		drawlist.push([gl.LINES, 16, 2]);
		drawlist.push([gl.LINES, 18, 2]);
		drawlist.push([gl.LINES, 20, 2]);
		drawlist.push([gl.LINES, 22, 2]);
		drawlist.push([gl.LINES, 24, 2]);
		drawlist.push([gl.LINES, 26, 2]);
		drawlist.push([gl.LINES, 28, 2]);
		drawlist.push([gl.LINES, 30, 2]);
		drawlist.push([gl.LINES, 32, 2]);
		drawlist.push([gl.LINES, 34, 2]);
		drawlist.push([gl.LINES, 36, 2]);
		drawlist.push([gl.LINES, 38, 2]);
		drawlist.push([gl.LINES, 40, 2]);
		drawlist.push([gl.LINES, 42, 2]);
		drawlist.push([gl.LINES, 44, 2]);
        
    }
}
class Wall extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    // 버택스랑 컬러를 동시에 입력
	static GetVertexColor(VertexColor)
	{
		VertexColor.push(vec2(0, 500), vec4(0, 0, 0, 255));
        VertexColor.push(vec2(1000, 500), vec4(0, 0, 0, 255));
        VertexColor.push(vec2(1000, 470), vec4(200, 200, 200, 255));

        VertexColor.push(vec2(0, 470), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(1000, 470), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(0, 500), vec4(0, 0, 0, 255));

		VertexColor.push(vec2(0, 500), vec4(200, 200, 200, 255));
        VertexColor.push(vec2(1000, 500), vec4(180, 180, 180, 255));
        VertexColor.push(vec2(0, 800), vec4(80, 80, 80, 255));

		VertexColor.push(vec2(0, 800), vec4(80, 80, 80, 255));
        VertexColor.push(vec2(1000, 800), vec4(40, 40, 40, 255));
        VertexColor.push(vec2(1000, 500), vec4(180, 180, 180, 255));

		VertexColor.push(vec2(0, 725), vec4(180, 180, 180, 80));
        VertexColor.push(vec2(1000, 725), vec4(150, 150, 150, 80));

		VertexColor.push(vec2(0, 650), vec4(200, 200, 200, 80));
        VertexColor.push(vec2(1000, 650), vec4(170, 170, 170, 80));

		VertexColor.push(vec2(0, 575), vec4(240, 240, 240, 80));
        VertexColor.push(vec2(1000, 575), vec4(210, 210, 210, 80)); // 가로

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

    // 오브젝트가 처음 나타날 경우 Update() 전에 호출되는 함수
    Start() {
    }

    // 해당 오브젝트를 클릭할 경우 실행되는 함수
    onMouseClick() {
    }

    // 해당 오브젝트를 마우스로 누르고 있을 때 실행되는 함수(여러번 실행될 수 있음)
    onMousePress() {
    }

    // 1/60초마다 불리는 함수
    Update() {
        /*var a = 1 - (800 - this.position[1]) / 500 * 1.2;
        this.offsetcolor = vec4(a, a, a, 1);

		this.Move(vec2(1,0));
		if (this.position[0] >= 1000)
		{
			this.Move(vec2(-1000,0));
		}*/
    }
}
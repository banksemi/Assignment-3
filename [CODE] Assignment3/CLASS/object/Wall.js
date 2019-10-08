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

        /*VertexColor.push(vec2(500, 300), vec4(99, 191, 23, 255));
        VertexColor.push(vec2(100, 600), vec4(52, 168, 23, 255));
        VertexColor.push(vec2(900, 600), vec4(52, 168, 23, 255));

        VertexColor.push(vec2(400, 600), vec4(142, 87, 4, 255));
        VertexColor.push(vec2(600, 600), vec4(142, 87, 4, 255));
        VertexColor.push(vec2(650, 900), vec4(73, 33, 3, 255));
        VertexColor.push(vec2(350, 900), vec4(73, 33, 3, 255));*/
	}
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLES, 0, 3]);
        drawlist.push([gl.TRIANGLES, 3, 3]);
		drawlist.push([gl.TRIANGLES, 6, 3]);
        drawlist.push([gl.TRIANGLES, 9, 3]);
        /*drawlist.push([gl.TRIANGLES, 6, 3]);
        drawlist.push([gl.TRIANGLE_FAN, 9, 4]);*/
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
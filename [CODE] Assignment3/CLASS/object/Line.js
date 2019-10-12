class Line extends DrawingObject {
    connected_object1 = null;
    connected_object2 = null;
    constructor(position, scale) {
        super(position, scale);
    }
    // 버택스랑 컬러를 동시에 입력
	static GetVertexColor(VertexColor) {
        VertexColor.push(vec2(0, 0), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(0, 1000), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(1000, 1000), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(1000, 0), vec4(255, 255, 255, 255));
    }
    
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 4]);
    }

    ConnectObjects(object1, object2)
    {
        this.connected_object1 = object1;
        this.connected_object2 = object2;
        this.z = (object1.z + object2.z) / 2;
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
        if (this.connected_object2 != null) {
            var x = this.connected_object2.position[0]  - this.connected_object1.position[0];
            var y = this.connected_object2.position[1]  - this.connected_object1.position[1];
            var d = Math.sqrt(x*x + y*y);
            var ro = Math.atan(y/x) / Math.PI * 180;
            this.rotation = ro;
            this.scale = vec2(0.001 * d, 0.001);
            this.position = vec2(this.connected_object1.position[0] + x / 2, this.connected_object1.position[1] + y / 2);
        }
    }
}
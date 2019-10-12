class LampLight extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    static GetVertexColor(VertexColor)
    {
       VertexColor.push(vec2(130,200), vec4(255, 225, 0, 180));
       VertexColor.push(vec2(130, 900), vec4(255, 230, 153, 120));
       VertexColor.push(vec2(700, 900), vec4(255, 230, 153, 180));
    }
    static GetDraw(drawlist) 
	{
	  drawlist.push([gl.TRIANGLES, 0, 3]);
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
        var a = (1000 - this.position[0]) / 950 * 1.2;
        this.offsetcolor = vec4(a, a, a, 1);

      /*this.Move(vec2(1,0));
      if (this.position[0] >= 1000)
      {
         this.Move(vec2(-1000,0));
      }*/
    }
}
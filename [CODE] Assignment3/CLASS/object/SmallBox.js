class SmallBox extends DrawingObject {

    constructor(position, scale) {
        super(position, scale);
    }
    // 버택스랑 컬러를 동시에 입력
   static GetVertexColor(VertexColor)
   {	
		//20 4
		VertexColor.push(vec2(610, 700), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(610, 600), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(700, 720), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(700, 620), vec4(214, 168, 134, 255));
		//24 4
        VertexColor.push(vec2(700, 720), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(700, 620), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(770, 690), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(770, 600), vec4(214, 168, 134, 255));
		//28 4
        VertexColor.push(vec2(610, 600), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(700, 620), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(680, 580), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(770, 600), vec4(198, 156, 131, 255));
		//32 4
        VertexColor.push(vec2(640, 590), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(650, 585), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609), vec4(247, 221, 189, 255));
		//36 4
        VertexColor.push(vec2(730, 640), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(740, 630), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609), vec4(247, 221, 189, 255));

		//0 ,4
        VertexColor.push(vec2(620, 900), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(620, 730), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 920), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));
  
   }
  
   static GetDraw(drawlist) {
      for (var i = 0; i<=16; i = i+4){
         drawlist.push([gl.TRIANGLE_STRIP, i, 4]);
      }
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
        this.offsetcolor = vec4(a,a, a, 1);
		if(boxNum ==3 || boxNum ==0 || boxNum ==1){
			this.dispose();
		}
      /*this.Move(vec2(1,0));
      if (this.position[0] >= 1000)
      {
         this.Move(vec2(-1000,0));
      }*/
    }
}
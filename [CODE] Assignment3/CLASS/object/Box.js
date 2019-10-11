class Box extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    // 버택스랑 컬러를 동시에 입력
   static GetVertexColor(VertexColor)
   {
      
      VertexColor.push(vec2(620, 900), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(620, 730), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 920), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));

      VertexColor.push(vec2(820, 920), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(840, 835), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(840, 680), vec4(214, 168, 134, 255));

      VertexColor.push(vec2(620, 730), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(820, 750), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(670, 670), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(840, 680), vec4(198, 156, 131, 255));
      //박스 끈
      VertexColor.push(vec2(700, 770), vec4(247, 221, 189, 230));
        VertexColor.push(vec2(730, 775), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(700, 740), vec4(247, 221, 189, 230));
        VertexColor.push(vec2(730, 743),  vec4(247, 221, 189, 255));

        VertexColor.push(vec2(700, 740), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(730, 743),  vec4(247, 221, 189, 200));
      VertexColor.push(vec2(740, 675), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(770, 676), vec4(247, 221, 189, 200));

      //박스 2번째
      VertexColor.push(vec2(610, 700), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(610, 600), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(700, 720), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(700, 620), vec4(214, 168, 134, 255));

      VertexColor.push(vec2(700, 720), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(700, 620), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(770, 690), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(770, 600), vec4(214, 168, 134, 255));
   
      VertexColor.push(vec2(610, 600), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(700, 620), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(680, 580), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(770, 600), vec4(198, 156, 131, 255));
      
      VertexColor.push(vec2(640, 590),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(650, 585),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609),  vec4(247, 221, 189, 255));

      VertexColor.push(vec2(730, 640),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(740, 630),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609),  vec4(247, 221, 189, 255));
      
   
   }
    static GetDraw(drawlist) {
      for (var i = 0; i<=36; i = i+4){
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
   
      /*this.Move(vec2(1,0));
      if (this.position[0] >= 1000)
      {
         this.Move(vec2(-1000,0));
      }*/
    }
}
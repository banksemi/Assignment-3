class SmallBox extends DrawingObject {

    constructor(position, scale) {
        super(position, scale);
    }
    // ���ý��� �÷��� ���ÿ� �Է�
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


    // ������Ʈ�� ó�� ��Ÿ�� ��� Update() ���� ȣ��Ǵ� �Լ�
    Start() {
    }

    // �ش� ������Ʈ�� Ŭ���� ��� ����Ǵ� �Լ�
    onMouseClick() {
    }

    // �ش� ������Ʈ�� ���콺�� ������ ���� �� ����Ǵ� �Լ�(������ ����� �� ����)
    onMousePress() {
    }
   

    // 1/60�ʸ��� �Ҹ��� �Լ�
    Update() {
        var a = (1000 - this.position[0]) / 950 * 1.2;
        this.offsetcolor = vec4(a,a, a, 1);
		if(boxNum ==3 || boxNum ==0 || boxNum ==1){
			this.Dispose();
		}
      /*this.Move(vec2(1,0));
      if (this.position[0] >= 1000)
      {
         this.Move(vec2(-1000,0));
      }*/
    }
}
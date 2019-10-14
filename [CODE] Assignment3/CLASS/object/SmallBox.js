// Small Box Class
class SmallBox extends DrawingObject {

    constructor(position, scale) {
        super(position, scale);
    }
   // Set Vertex and Color
   // Box are cube
   static GetVertexColor(VertexColor)
   {   
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

        VertexColor.push(vec2(640, 590), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(650, 585), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609), vec4(247, 221, 189, 255));

        VertexColor.push(vec2(730, 640), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(740, 630), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609), vec4(247, 221, 189, 255));

        VertexColor.push(vec2(620, 900), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(620, 730), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 920), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));
  
   }
   // Draw Vertex
   static GetDraw(drawlist) {
      for (var i = 0; i<=16; i = i+4){
         drawlist.push([gl.TRIANGLE_STRIP, i, 4]);
      }
    }

    // Update every 1/60th of a second.
    Update() {
        var a = (1000 - this.position[0]) / 950 * 1.2;
        this.offsetcolor = vec4(a,a, a, 1);

      // There are six box states.
      // Among them, the small box disappears(Dispose) at 0,1,3th.
      if(boxNum ==0 || boxNum ==1 || boxNum ==3){
         this.Dispose();
      }
    }
}
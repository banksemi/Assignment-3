// Big Box Class
class Box extends DrawingObject {

    constructor(position, scale) {
        super(position, scale);
    }
   // Set Vertex and Color
   // Box are cube
   static GetVertexColor(VertexColor)
   {      
        // 0 ,4
        VertexColor.push(vec2(620, 900), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(620, 730), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 920), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));
        // 4. 4
        VertexColor.push(vec2(820, 920), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(840, 835), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(840, 680), vec4(214, 168, 134, 255));
        // 8, 4
        VertexColor.push(vec2(620, 730), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(820, 750), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(670, 670), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(840, 680), vec4(198, 156, 131, 255));
        // 12,4
        VertexColor.push(vec2(700, 770), vec4(247, 221, 189, 230));
        VertexColor.push(vec2(730, 775), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(700, 740), vec4(247, 221, 189, 230));
        VertexColor.push(vec2(730, 743), vec4(247, 221, 189, 255));
        // 16 , 4
        VertexColor.push(vec2(700, 740), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(730, 743), vec4(247, 221, 189, 200));
        VertexColor.push(vec2(740, 675), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(770, 676), vec4(247, 221, 189, 200));

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
      // Among them, the big box disappears(Dispose) at 4,0th.
      if(boxNum ==0 || boxNum ==4){
         this.Dispose();
      }

    }
}
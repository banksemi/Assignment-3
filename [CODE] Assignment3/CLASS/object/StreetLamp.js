// Street Lamp Body Class
class StreetLamp extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }

   // Set Vertex and Color
    static GetVertexColor(VertexColor){

        VertexColor.push(vec2(50, 0), vec4(100, 100, 100, 255));
        VertexColor.push(vec2(130, 0), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(50, 900), vec4(100, 100, 100, 255));
        VertexColor.push(vec2(130, 900),vec4(255, 255, 255, 255));

        VertexColor.push(vec2(50, 0),vec4(100, 100, 100, 255));
        VertexColor.push(vec2(65, 0), vec4(127, 127, 127, 255));
        VertexColor.push(vec2(50, 900), vec4(10, 10, 10, 210));
        VertexColor.push(vec2(65, 900), vec4(127, 127, 127, 255));

        VertexColor.push(vec2(130,200), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(260, 200), vec4(127,127, 127, 255));
        VertexColor.push(vec2(130, 270),vec4(255, 255, 255, 255));
        VertexColor.push(vec2(260, 270),  vec4(127,127, 127, 255));

        VertexColor.push(vec2(130,265), vec4(255, 255, 0, 200));
        VertexColor.push(vec2(190, 265), vec4(255, 255, 0, 200));
        VertexColor.push(vec2(130, 275),vec4(255, 255, 0, 200));
        VertexColor.push(vec2(190, 275), vec4(255, 255, 0, 255));
 
   }
   // Draw Vertex
   static GetDraw(drawlist) {
       drawlist.push([gl.TRIANGLE_STRIP, 0, 4]);
       drawlist.push([gl.TRIANGLE_STRIP, 4, 4]);
       drawlist.push([gl.TRIANGLE_STRIP, 8, 4]);
       drawlist.push([gl.TRIANGLE_STRIP, 12, 4]);
   }

    // Function called before Update() when the object first appears
    Start() {
        this.z = 1000;
    }
   // Update of street lamp lights over time
    ColorUpdate(colors) {
        colors.push(vec4(100, 100, 100, 255));
        colors.push(vec4(255, 255, 255, 255));
        colors.push(vec4(100, 100, 100, 255));
        colors.push(vec4(255, 255, 255, 255));

        colors.push(vec4(100, 100, 100, 255));
        colors.push(vec4(127, 127, 127, 255));
        colors.push(vec4(10, 10, 10, 210));
        colors.push(vec4(127, 127, 127, 255));

        colors.push(vec4(255, 255, 255, 255));
        colors.push(vec4(127,127, 127, 255));
        colors.push(vec4(255, 255, 255, 255));
        colors.push(vec4(127,127, 127, 255));
      
      if (Sky.instance.GlobalTime >= 9 && Sky.instance.GlobalTime < 19){
         colors.push(vec4(100, 100, 100, 200));
         colors.push(vec4(100, 100, 100, 200));
         colors.push(vec4(100, 100, 100, 200));
         colors.push(vec4(100, 100, 100, 255));
       // StreetLamp Light turn off
       // ColorUpdate => Black
      }
      else {
         colors.push(vec4(255, 255, 0, 200));
         colors.push(vec4(255, 255, 0, 200));
         colors.push(vec4(255, 255, 0, 200));
         colors.push(vec4(255, 255, 0, 255));
       // StreetLamp Light turn on
       // ColorUpdate => Yell Light
      }
   }

    // Update every 1/60th of a second.
    Update() {
        var a = (1000 - this.position[0]) / 950 * 1.2;
        this.offsetcolor = vec4(a, a, a, 1);
    }
}
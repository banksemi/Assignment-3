// Street Lamp Light class
class LampLight extends DrawingObject {
  constructor(position, scale) {
    super(position, scale);
  }
  // Set Lamp Vertex and Color
  static GetVertexColor(VertexColor) 
  {
    VertexColor.push(vec2(130, 900), vec4(255, 230, 153, 120));
    VertexColor.push(vec2(130, 200), vec4(255, 225, 0, 180));
    VertexColor.push(vec2(700, 900), vec4(255, 230, 153, 180));
    
    VertexColor.push(vec2(130, 200), vec4(255, 225, 0, 33));
    VertexColor.push(vec2(700, 900), vec4(255, 230, 0, 33));
    
    VertexColor.push(vec2(150, 200), vec4(255, 225, 0, 0));
    VertexColor.push(vec2(720, 900), vec4(255, 230, 0, 0));
  }
  // Draw Vertex
  static GetDraw(drawlist) {
    drawlist.push([gl.TRIANGLES, 0, 3]);
    drawlist.push([gl.TRIANGLE_STRIP, 3, 4]);
  }

  // Update Streetlight Lamp
  Update() {
    var a = (1000 - this.position[0]) / 950 * 1.2;
   
   if ( Sky.instance.GlobalTime >= 9 && Sky.instance.GlobalTime < 19){ 
      this.offsetcolor = vec4(a, a, a, 0); 
      // StreetLamp Light turn off
      // Setting alpha value 0
   }
   else{
        this.offsetcolor = vec4(a, a, a, 1); 
       // StreetLamp Light turn on
       // setting alpha value 1
   }
   
   if ( Sky.instance.GlobalTime >= 19.2 && Sky.instance.GlobalTime < 20){ 
       this.offsetcolor = vec4(a, a, a, 0);
       // If the light is on, it will flash once.
   }
  
  }
}
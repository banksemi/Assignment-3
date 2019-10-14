// Classes that can create constellations when stars are connected
class Line extends DrawingObject {
    connected_object1 = null;
    connected_object2 = null;

    constructor(position, scale) {
        super(position, scale);
    }

    // Set Vertex and Color
   static GetVertexColor(VertexColor) {
        VertexColor.push(vec2(0, 0), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(0, 1000), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(1000, 1000), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(1000, 0), vec4(255, 255, 255, 255));
    }

    // Draw Vertex
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 4]);
    }

   // Function to Which Two Stars Can Be Connected
    ConnectObjects(object1, object2)
    {
        this.connected_object1 = object1;
        this.connected_object2 = object2;
        this.z = (object1.z + object2.z) / 2;
    }

    // Update every 1/60th of a second.
    Update() {
      // Connect two objects.
      // If there is an star(object) that has previously been connected, 
      // This is the update code that connects with the previous one(별).
        if (this.connected_object2 != null) {
            var x = this.connected_object2.position[0]  - this.connected_object1.position[0];
            var y = this.connected_object2.position[1]  - this.connected_object1.position[1];
            var d = Math.sqrt(x*x + y*y);
            var ro = Math.atan(y/x) / Math.PI * 180;
            this.rotation = ro;
            this.scale = vec2(0.001 * d, 0.001);
            this.position = vec2(this.connected_object1.position[0] + x / 2, this.connected_object1.position[1] + y / 2);
        }
      //If one of the two stars(object) you tried to connect to disappears, this.dispose()
        if (this.connected_object1.disposed || this.connected_object2.disposed)
            this.Dispose();
    }
}
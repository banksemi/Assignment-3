// Ground Class
class Ground extends DrawingObject {
    constructor(position) {
        super(position, vec2(1, 1));
        this.z = -5;
    }

   // Set Ground Vertex
    static GetVertex(vertices) {
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 1 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * 1200 + 500;
            var y = Math.sin(agree * Math.PI / 180.0) * 400 + 500;
            vertices.push(vec2(x, y));
        }
        this.temp_vertices = vertices;
    }
   //Set Ground Color
    static GetColor(colors) {
        for (var i = 0; i < 362; i++) {
            var a = this.temp_vertices[i][1] / 500;
            colors.push(vec4(250 * a, 236 * a, 197 * a, 255)); // center
        }
    }
   //Draw Vertex
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 362])
    }
   
}
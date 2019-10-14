// Light (The Light at the far right of the Sky) Class
class Light extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
        this.z = 1000;
    }
   // Set Vertex 
    static GetVertex(vertices) {
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 1 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * 1200 + 500;
            var y = Math.sin(agree * Math.PI / 180.0) * 800 + 500;
            vertices.push(vec2(x, y));
        }

        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 1 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * 300 + 500;
            var y = Math.sin(agree * Math.PI / 180.0) * 200 + 500;
            vertices.push(vec2(x, y));
        }
    }
   // Set Color
    static GetColor(colors) {
        colors.push(vec4(255, 255, 255, 30)); // center

        for (var i = 0; i < 361; i++) {
            colors.push(vec4(255, 255, 255, 0));
        }

        colors.push(vec4(255, 111, 0, 20)); // center

        for (var i = 0; i < 361; i++) {
            colors.push(vec4(255, 111, 0, 0));
        }
    }
   // Draw Vertex
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 362]);
        drawlist.push([gl.TRIANGLE_FAN, 362, 362]);
    }

}
class Animal extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    static GetVertex(vertices) {

        // Leg
        this.DrawRect(vertices, 389, 640, 507, 816);
        this.DrawRect(vertices, 615, 668, 716, 816);
        this.DrawRect(vertices, 464, 675, 559, 816);
        this.DrawRect(vertices, 688, 620, 777, 816);

        // Body
        this.DrawCycle(vertices, 591, 531, 170, 1.3, 0.8);
        this.DrawCycle(vertices, 591, 551, 170, 1.3, 0.8);
        this.DrawCycle(vertices, 591, 581, 170, 1.3, 0.8);

        // Outline
        this.DrawCycle(vertices, 361, 430, 270);
        this.DrawCycle(vertices, 361, 430, 180);

        // Ear
        this.DrawCycle(vertices, 221, 285, 185 / 2);
        this.DrawCycle(vertices, 505, 285, 185 / 2);
        this.DrawCycle(vertices, 221, 285, 50);
        this.DrawCycle(vertices, 505, 285, 50);

        // Eye
        this.DrawCycle(vertices, 277, 381, 20);
        this.DrawCycle(vertices, 455, 381, 20);

        // Mouse
        this.DrawCycle(vertices, 359, 526, 100);
        this.DrawCycle(vertices, 359, 526, 30, 1.2, 0.8);

        // Mane
        this.DrawCycle(vertices, 370, 276, 80);

    }
	// Set Color
    static GetColor(colors) {
        this.DrawRectColor(colors, vec4(233, 153, 103, 255));
        this.DrawRectColor(colors, vec4(233, 153, 103, 255));
        this.DrawRectColor(colors, vec4(248, 217, 130, 255));
        this.DrawRectColor(colors, vec4(248, 217, 130, 255));


        this.DrawCycleColor(colors, vec4(248, 217, 130, 255));
        this.DrawCycleColor(colors, vec4(248, 217, 130, 255));
        this.DrawCycleColor(colors, vec4(248, 217, 130, 255));

        this.DrawCycleColor(colors, vec4(226, 116, 94, 255));
        this.DrawCycleColor(colors, vec4(248, 217, 130, 255));

        this.DrawCycleColor(colors, vec4(248, 217, 130, 255));
        this.DrawCycleColor(colors, vec4(248, 217, 130, 255));
        this.DrawCycleColor(colors, vec4(240, 180, 122, 255));
        this.DrawCycleColor(colors, vec4(240, 180, 122, 255));


        this.DrawCycleColor(colors, vec4(29, 45, 58, 255));
        this.DrawCycleColor(colors, vec4(29, 45, 58, 255));

        this.DrawCycleColor(colors, vec4(253, 253, 156, 255));
        this.DrawCycleColor(colors, vec4(0, 0, 0, 200));

        this.DrawCycleColor(colors, vec4(226, 116, 94, 255));
    }
	// Draw Vertex
    static GetDraw(drawlist) {
        let offset = 0;

        drawlist.push([gl.TRIANGLE_FAN, offset * 4, 4]); offset += 4;
        drawlist.push([gl.TRIANGLE_FAN, offset, 4]); offset += 4;
        drawlist.push([gl.TRIANGLE_FAN, offset, 4]); offset += 4;
        drawlist.push([gl.TRIANGLE_FAN, offset, 4]); offset += 4;

        for (let index = 0; index < 14; index++) {
            drawlist.push([gl.TRIANGLE_FAN, index * 362 + offset, 362]);
        }
    }
    static DrawCycleColor(colors, color) {
        for (var i = 0; i < 362; i++) {
            colors.push(color);
        }
    }
    static DrawCycle(vertices, ox, oy, d, sx = 1, sy = 1) {
        var start = vertices.length;
        vertices.push(vec2(ox, oy));

        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
            var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
            vertices.push(vec2(x, y));
        }
        return [gl.TRIANGLE_FAN, start, 362];
    }
    static DrawRect(vertices, x1, y1, x2, y2) {
        vertices.push(vec2(x1, y1));
        vertices.push(vec2(x2, y1));
        vertices.push(vec2(x2, y2));
        vertices.push(vec2(x1, y2));
    }
    static DrawRectColor(colors, color) {
        for (var i = 0; i < 4; i++) {
            colors.push(color);
        }
    }

	Start() {
        this.z = 1100;
    }
}
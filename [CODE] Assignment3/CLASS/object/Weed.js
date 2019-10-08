class Weed extends DrawingObject {
    static GetVertex(vertices) {
        vertices.push(vec2(25, 38));
        vertices.push(vec2(30, 41));
        vertices.push(vec2(31, 40));
        vertices.push(vec2(32, 47));
        vertices.push(vec2(37, 46));
        vertices.push(vec2(35, 54));
        vertices.push(vec2(41, 54));
        vertices.push(vec2(38, 64));
        vertices.push(vec2(48, 58));
        vertices.push(vec2(39, 68));
        vertices.push(vec2(55, 68));

        vertices.push(vec2(51, 28));
        vertices.push(vec2(48, 34));
        vertices.push(vec2(51, 38));
        vertices.push(vec2(46, 43));
        vertices.push(vec2(51, 47));
        vertices.push(vec2(45, 52));
        vertices.push(vec2(52, 53));
        vertices.push(vec2(44, 59));
        vertices.push(vec2(51, 63));
        vertices.push(vec2(43, 68));
        vertices.push(vec2(62, 68));

        vertices.push(vec2(70, 37));
        vertices.push(vec2(63, 41));
        vertices.push(vec2(67, 45));
        vertices.push(vec2(57, 48));
        vertices.push(vec2(65, 54));
        vertices.push(vec2(54, 54));
        vertices.push(vec2(63, 60));

        vertices.push(vec2(49, 64));
        vertices.push(vec2(62, 68));
        vertices.push(vec2(62, 68));
        vertices.push(vec2(62, 68));

        for (let index = 0; index < vertices.length; index++) {
            vertices[index][0] *= 10;
            vertices[index][1] *= 10;
        }
    }
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_STRIP, 0, 11]);
        drawlist.push([gl.TRIANGLE_STRIP, 11, 11]);
        drawlist.push([gl.TRIANGLE_STRIP, 22, 11]);
    }
    static GetColor(colors) {
        for (let i = 0; i < 3; i++) {
            colors.push(vec4(181, 230, 29, 255)); // center
            colors.push(vec4(151, 193, 21, 255));
            colors.push(vec4(151, 193, 21, 255));

            colors.push(vec4(181, 230, 29, 255)); // center
            colors.push(vec4(99, 191, 23, 255));
            colors.push(vec4(99, 191, 23, 255));

            colors.push(vec4(99, 191, 23, 255)); // center
            colors.push(vec4(52, 168, 23, 255));
            colors.push(vec4(52, 168, 23, 255));

            colors.push(vec4(52, 168, 23, 255));
            colors.push(vec4(52, 168, 23, 255));
        }
    }
    Update() {
        var a = 1 - (1000 - this.position[1]) / 500 * 0.5;
        this.offsetcolor = vec4(a, a, a, 1);
    }

}
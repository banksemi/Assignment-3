class Star extends DrawingObject {
    static last_clicked_star = null;
    rgb = 0;
    flag = 0; // it is flag to select in 'plus' and 'minus'
    z = -10;
    static GetVertex(vertices) {
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        vertices.push(vec2(500, 370)); // top

        vertices.push(vec2(530, 470));
        vertices.push(vec2(610, 470)); // right

        vertices.push(vec2(550, 520));
        vertices.push(vec2(560, 590)); // right bottom

        vertices.push(vec2(500, 550));
        vertices.push(vec2(440, 590)); // left bottom

        vertices.push(vec2(460, 520));
        vertices.push(vec2(370, 470)); // left

        vertices.push(vec2(460, 470));
        vertices.push(vec2(500, 370)); // top

        vertices.push(vec2(500, 500));
        // From circle, move the angle 60 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i < 7; i++) {
            var agree = i * 60;
            var x = Math.cos(agree * Math.PI / 180.0) * 300 + 500;
            var y = Math.sin(agree * Math.PI / 180.0) * 300 + 500;
            vertices.push(vec2(x, y));
        }

    }
    static GetColor(colors) {
        colors.push(vec4(255, 255, 255, 255)); // center
        for (var i = 0; i < 11; i++)
            colors.push(vec4(233, 233, 84, 255));

        colors.push(vec4(117, 157, 94, 155)); // center
        for (var i = 0; i < 7; i++)
            colors.push(vec4(0, 0, 0, 0));
    }

    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 12, 8])
        drawlist.push([gl.TRIANGLE_FAN, 0, 12])
    }

    Start() {
        this.rgb = Math.random() * 100;
        if (Math.random() > 0.5)
            this.flag = 1;
    }

    Update() {
        this.Move(vec2(-0.1, (this.position[0] - 500.0) / -4000));
        if (this.flag == 0)
            this.rgb -= 2;
        else
            this.rgb += 2;

        if (this.rgb > 100)
            this.flag = 0;
        else if (this.rgb < 0)
            this.flag = 1;
        this.offsetcolor = vec4(1, 1, 1, this.rgb / 100 * 1);
    }
    DrawEffect() {
        for(var i = 0 ; i < 15; i++){
            var p = DrawingObject.Instance(StarEffect, vec2(this.position[0], this.position[1]));
            p.z = this.z;
        }
    }
    onMousePress() {
        if (this != Star.last_clicked_star) {
            if (Star.last_clicked_star != null) {
                var o1 = Star.last_clicked_star;
                var o2 = this;
                var line = DrawingObject.Instance(Line);
                line.ConnectObjects(o1,o2);
                line.offsetcolor = vec4(1, 1, 1, 0.25);
            }
            this.DrawEffect();
        }
        Star.last_clicked_star = this;
    }
}

class StarEffect extends DrawingObject {
    time = 0;
    static GetVertex(vertices) {
        // The center of the hexagon.
        vertices.push(vec2(500, 500));

        // From circle, move the angle 60 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i < 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * 300 + 500;
            var y = Math.sin(agree * Math.PI / 180.0) * 300 + 500;
            vertices.push(vec2(x, y));
        }
    }
    static GetColor(colors) {
        for (var i = 0; i < 361; i++)
            colors.push(vec4(255, 255, 255, 255)); // center
    }
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_FAN, 0, 362])
    }

    Start() {
        this.speed = vec2(Math.random() * 1 - 0.5, Math.random() * 1 - 0.5);
        this.Move(this.speed, 10);
    }
    Update() {
        this.Move(this.speed);
        this.time += 2;
        var a = (100 - this.time) / 100;
        this.scale = vec2(a * 0.013 + 0.004, a * 0.013 + 0.004);
        this.offsetcolor = vec4(1, 1, 1, a * 0.1);
        if (this.time == 100)
            this.Dispose();
    }
}
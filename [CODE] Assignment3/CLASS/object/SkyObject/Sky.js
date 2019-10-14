class Sky extends DrawingObject {
    static instance;
    GlobalTime = 0;
    Speed = 5;
    HtmlBox;
    HtmlSpeed;
    z = -10000;
    constructor(position, scale) {
        super(position, scale);
        Sky.instance = this;
        this.HtmlBox = document.getElementById("clock");
        this.HtmlSpeed = document.getElementById("clock_speed");
        this.background = true;
    }
    static GetVertexColor(VertexColor) {
        VertexColor.push(vec2(0, 0), vec4(0, 0, 0, 255));
        VertexColor.push(vec2(1000, 0), vec4(0, 0, 0, 255));
        VertexColor.push(vec2(1000, 1000), vec4(0, 0, 0, 0));
        VertexColor.push(vec2(0, 1000), vec4(0, 0, 0, 0));
    }

    static GetDraw(drawlist) {

        drawlist.push([gl.TRIANGLE_FAN, 0, 4])
    }
    Frame = 0;

    CreateObject(start, end, delay, func) {
        delay /= this.Speed;
        delay = Number(delay.toFixed(0));
        if (this.Frame % delay == 0) {
            if (start > end) {
                if (this.GlobalTime > start || this.GlobalTime < end)
                    func();
            }
            else {
                if (this.GlobalTime > start && this.GlobalTime < end)
                    func();
            }
        }
    }

    Start() {
        for (var i = 0; i < 30; i++) {
            DrawingObject.Instance(Star, vec2(Math.random() * 1000, Math.random() * 500), vec2(0.03, 0.03))
        }
    }

    // 이 함수를 오버라이드하면 화면이 갱신될 때 마다 컬러값을 변경할 수 있음!! (CPU 부하 증가)
    ColorUpdate(colors) {
        // this.GlobalTime <- 현재 시간 (0~24) 사이 값을 가짐
        var alpha;
        var originalColors = [vec4(8, 12, 21, 255), vec4(8, 12, 21, 255), vec4(100, 83, 138, 255), vec4(100, 83, 138, 255)];
        var newColors = [vec4(66, 64, 114, 255), vec4(66, 64, 114, 255), vec4(100, 83, 138, 255), vec4(100, 83, 138, 255)];

        if (this.GlobalTime < 3) {
            for (var i = 0; i < 4; i++) {
                colors.push(originalColors[i]);
            }
        } else if (this.GlobalTime >= 21 || (this.GlobalTime >= 3 && this.GlobalTime < 6)) {
            if (this.GlobalTime >= 21)
                alpha = ((24 - this.GlobalTime) / 3);
            else if (this.GlobalTime < 6)
                alpha = ((this.GlobalTime - 3) / 3);
            for (var i = 0; i < 4; i++) {
                colors.push(mix(originalColors[i], newColors[i], alpha));
            }
        } else if ((this.GlobalTime >= 6 && this.GlobalTime < 9) || (this.GlobalTime >= 18 && this.GlobalTime < 21)) {
            originalColors = [vec4(66, 64, 114, 255), vec4(66, 64, 114, 255), vec4(100, 83, 138, 255), vec4(100, 83, 138, 255)];
            newColors = [vec4(115, 76, 103, 255), vec4(115, 76, 103, 255), vec4(49, 114, 198, 255), vec4(49, 114, 198, 255)];

            if (this.GlobalTime < 9)
                alpha = ((this.GlobalTime - 6) / 3);
            else if (this.GlobalTime > 9)
                alpha = ((21 - this.GlobalTime) / 3);

            for (var i = 0; i < 4; i++) {
                colors.push(mix(originalColors[i], newColors[i], alpha));
            }
        } else if ((this.GlobalTime >= 9 && this.GlobalTime < 12) || (this.GlobalTime >= 15 && this.GlobalTime < 18)) {
            originalColors = [vec4(115, 76, 103, 255), vec4(115, 76, 103, 255), vec4(49, 114, 198, 255), vec4(49, 114, 198, 255)];
            newColors = [vec4(49, 114, 198, 255), vec4(49, 114, 198, 255), vec4(49, 114, 198, 255), vec4(49, 114, 198, 255)];

            if (this.GlobalTime < 12)
                alpha = ((this.GlobalTime - 9) / 3);
            else if (this.GlobalTime > 12)
                alpha = ((18 - this.GlobalTime) / 3);

            for (var i = 0; i < 4; i++) {
                colors.push(mix(originalColors[i], newColors[i], alpha));
            }
        }
        else if (this.GlobalTime >= 12 && this.GlobalTime < 15) {
            colors.push(vec4(49, 114, 198, 255)); // 좌측 상단
            colors.push(vec4(49, 114, 198, 255)); // 우측 상단
            colors.push(vec4(49, 114, 198, 255)); // 우측 하단
            colors.push(vec4(49, 114, 198, 255)); // 좌측 하단
        }
    }



    Update() {
        this.Speed = this.HtmlSpeed.value / 10;
        this.Frame++;
        this.HtmlBox.value = "Time : " + this.GlobalTime.toFixed(2) + " H";
        this.GlobalTime += 0.01 * this.Speed;
        if (this.GlobalTime >= 24) this.GlobalTime -= 24;
        if (this.GlobalTime < 0) this.GlobalTime += 24;

        var new_x = 1100;
        if (this.Speed < 0) new_x = -100;
        this.CreateObject(18, 3, 15, function () {
            DrawingObject.Instance(Star, vec2(new_x, Math.random() * 500), vec2(0.03, 0.03))
        });
        this.CreateObject(6, 16, 100, function () {
            DrawingObject.Instance(Cloud, vec2(new_x, Math.random() * 200 + 130), vec2(0.1 + Math.random() * 0.12, 0.1)).MoveY = false;
        });
    }
}

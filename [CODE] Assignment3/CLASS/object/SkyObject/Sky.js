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
    }
	static GetVertexColor(VertexColor)
	{
        VertexColor.push(vec2(0,0),vec4(0,0,0,255));
        VertexColor.push(vec2(1000,0),vec4(0,0,0,255));
        VertexColor.push(vec2(1000,1000),vec4(0,0,0,0));
        VertexColor.push(vec2(0,1000),vec4(0,0,0,0));
    }

    static GetDraw(drawlist) {
        
        drawlist.push([gl.TRIANGLE_FAN, 0, 4])
    }
    Frame = 0;

    CreateObject(start, end, delay, func)
    {
        delay /= this.Speed;
        delay = Number(delay.toFixed(0));
        if (this.Frame % delay == 0)
        {
            if (start > end)
            {
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
        for (var i = 0 ; i < 30; i++) {
            DrawingObject.Instance(Star, vec2(Math.random() * 1000, Math.random() * 500), vec2(0.03, 0.03))
        }
    }

    // 이 함수를 오버라이드하면 화면이 갱신될 때 마다 컬러값을 변경할 수 있음!! (CPU 부하 증가)
    ColorUpdate(colors) {
        // this.GlobalTime <- 현재 시간 (0~24) 사이 값을 가짐
        colors.push(vec4(255 * this.GlobalTime / 24,0,0,255)); // 좌측 상단
        colors.push(vec4(0,255,0,255)); // 우측 상단
        colors.push(vec4(0,0,255,255)); // 우측 하단
        colors.push(vec4(0,0,0,255)); // 좌측 하단
    }

    Update() {
        this.Speed = this.HtmlSpeed.value / 10;
        this.Frame++;
        this.HtmlBox.value = this.GlobalTime.toFixed(2) + " H";
        this.GlobalTime += 0.01 * this.Speed;
        if (this.GlobalTime >= 24) this.GlobalTime -= 24;

        this.CreateObject(18,3,15,function() {
            DrawingObject.Instance(Star, vec2(1000, Math.random() * 500), vec2(0.03, 0.03))
        });
        this.CreateObject(6,16,100,function() {
            DrawingObject.Instance(Cloud, vec2(1100, Math.random() * 200 + 130), vec2(0.1 + Math.random() * 0.12, 0.1)).MoveY = false;
        });
    }
}

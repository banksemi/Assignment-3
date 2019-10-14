// Cloud Class
class Cloud extends SkyObject {
    static CycleCount = 14;
    static CyclePoint = 30;
	static GetVertexColor(VertexColor)
	{
        for(var i = 0; i < Cloud.CycleCount; i++)
        {
            var nx =  ((Math.random() - 0.5) * 2) * 300;
            var ny =  ((Math.random() - 0.5) * 2) * 100;
            Cloud.DrawCycle(VertexColor, 500 + nx, 500 + ny,200,  vec4(56,68,97,200), vec4(56,68,97,200), Cloud.CyclePoint);
        }
    }
    
    static GetDraw(drawlist) {
        for(var i = 0; i < Cloud.CycleCount; i++)
            drawlist.push([gl.TRIANGLE_FAN, i * Cloud.CyclePoint, Cloud.CyclePoint])
    }

    Start() {
        super.Update();
        this.outline = true;
    }
}

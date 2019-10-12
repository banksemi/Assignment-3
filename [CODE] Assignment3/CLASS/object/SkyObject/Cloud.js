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
    
    static DrawCycle(VertexColor, ox, oy, r, m_color, out_color, count = 362)
    {
		VertexColor.push(vec2(ox, oy), m_color);
        count -= 1;
        // From circle, move the angle 60 degrees to get the x, y. And add them to the array of vertexs.
        for (var i = 0; i < count; i++) {
            var agree = i * (360 / (count - 1));
            var vx = Math.cos(agree * Math.PI / 180.0) * r + ox;
            var vy = Math.sin(agree * Math.PI / 180.0) * r + oy;
            VertexColor.push(vec2(vx, vy), out_color);
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

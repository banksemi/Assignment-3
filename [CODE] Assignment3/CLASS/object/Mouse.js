class Mouse extends DrawingObject {
    x = 0;
    y = 0;
    clicked = false;
	static GetVertexColor(VertexColor)
	{

    }
    
    static GetDraw(drawlist) {

    }

    // 오브젝트가 처음 나타날 경우 Update() 전에 호출되는 함수
    Start() {
    }

    // 해당 오브젝트를 클릭할 경우 실행되는 함수
    onMouseClick() {
        Star.last_clicked_star = null;
        if (Star.mouse_line != null)
        {
            Star.mouse_line.Dispose();
            Star.mouse_line = null;
        }
    }
    onMouseUp() {
        if (Star.mouse_line != null)
        {
            Star.mouse_line.Dispose();
            Star.mouse_line = null;
        }
    }

    // 해당 오브젝트를 마우스로 누르고 있을 때 실행되는 함수(여러번 실행될 수 있음)
    onMousePress() {
        DrawingObject.Instance(Fruit, vec2(this.position[0], this.position[1]), vec2(0.1, 0.1)).onMousePress();
    }

    // 1/60초마다 불리는 함수
    Update() {
        
    }
}
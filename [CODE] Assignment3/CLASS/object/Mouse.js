class Mouse extends DrawingObject {
    x = 0;
    y = 0;
    clicked = false;
	static GetVertexColor(VertexColor)
	{

    }
    
    static GetDraw(drawlist) {

    }

    // Function to execute when the object is clicked
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

    // Function to execute when the object is pressed with the mouse (may be executed multiple times)
    onMousePress() {
		if (this.position[1] > 500)
		{
			DrawingObject.Instance(Fruit, vec2(this.position[0], this.position[1]), vec2(0.1, 0.1)).onMousePress();
		}
    }
}
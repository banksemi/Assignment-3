class SkyObject extends DrawingObject {
    MoveY = true;
    time = 0;
    set_y = 100;
    shown = false;
    Speed = 1
    z = -10;
    // 오브젝트가 처음 나타날 경우 Update() 전에 호출되는 함수
    Start() {
    }

    // 해당 오브젝트를 클릭할 경우 실행되는 함수
    onMouseClick() {
        Star.last_clicked_star = null;
    }

    // 해당 오브젝트를 마우스로 누르고 있을 때 실행되는 함수(여러번 실행될 수 있음)
    onMousePress() {
    }

    // 1/60초마다 불리는 함수
    Update() {
        if (this.MoveY) {
            this.Move(vec2(-1.7 * Sky.instance.Speed * this.Speed, (this.position[0] - 500.0) / -3000 *  Sky.instance.Speed));   
        }
        else
            this.Move(vec2(-1.7 * Sky.instance.Speed * this.Speed, 0));

        if (this.position[0] < -150 || this.position[0] > 1150)
            this.Dispose();
    }
}
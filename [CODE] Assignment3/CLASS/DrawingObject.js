
//  This is a abstract class, designed to make it easy to draw images.
class DrawingObject {
    // Object list that requested to be deleted during the update().
    static disposelist = [];

    // All Object (drawable)
    static Object = [];

    // This is necessary to integrate the vertices of each object. (integrate -> send gl at first)
    static vertices = [];
    static colors = [];

    // This is the starting point of range for vertices each class can access.
    static vertexStartIndex;
    static colorStartIndex;

    // rander request
    static drawlist = [];

    offsetcolor = vec4(1, 1, 1, 1);
    z = 0;
    outline = false;
    first_start = true;

    static bottom = 0;

    // Create a new instance.
    static Instance(classtype, position, scale = vec2(1, 1)) {
        var instance = new classtype();
        instance.position = position;
        instance.scale = scale;

        // Make the static value accessible to each instance.
        instance.prototype = classtype;

        // Include that object in the next rendering.
        DrawingObject.Object.push(instance);

        return instance;
    }

    static GetVertex(arrayPointer) {
    }
    static GetColor(arrayPointer) {
    }

   static GetVertexColor(arrayPointer) {
      return false;
   }

    static GetDraw() {
    }

    static Init(ClassName) {
        // Each class first executes this function.

      var v = []; // arrayPointer
      var c = []; // arrayPointer
      var vc = []; // arrayPointer
      var ImplementGetVertexColor = ClassName.GetVertexColor(vc);
      if (ImplementGetVertexColor === false) {
         // Load the vertex of that class.
         ClassName.GetVertex(v);
         ClassName.GetColor(c);
      } else {
         for(var i = 0; i < vc.length; i += 2)
         {
            v.push(vc[i]);
            c.push(vc[i + 1]);
         }
      }
      
      // Setting Vertex Range to this class(not super class)
      ClassName.VertexStart = DrawingObject.vertices.length;
      ClassName.ColorStart = DrawingObject.colors.length;

      // Add vertex to super class
      DrawingObject.vertices = DrawingObject.vertices.concat(v);
      DrawingObject.colors = DrawingObject.colors.concat(c);

        var d = [];
        ClassName.GetDraw(d);
        ClassName.drawlist = d;

        for(var i = 0; i < v.length; i++)
        {
            if (ClassName.bottom < v[i][1])
            {
                ClassName.bottom = v[i][1];
            }
        }
        console.log(ClassName.bottom);
    }

    Dispose() {
        DrawingObject.disposelist.push(this);
    }

    GraphicUpdate() {
        if (this.first_start) {
            this.first_start = false;
            this.Start();
        }
        // Run the Update statement for each object. (It can modify X, Y, Z, ,Scale ,etc...)
        this.Update();

        // Setting uniform by using each object value
        gl.uniform4f(gl.offset, this.position[0], this.position[1], 0, 0);
        gl.uniform4f(gl.scale, this.scale[0], this.scale[1], 0, 0);
        gl.uniform4fv(gl.offsetcolor, this.offsetcolor);

        if (this.outline == true)
        {
            // Save offsetcolor to temp.
            var temp = this.offsetcolor;

            // Black Color
            this.offsetcolor = vec4(0, 0, 0, 1);
            gl.uniform4fv(gl.offsetcolor, this.offsetcolor);
            for(var x = -1; x <= 1; x++)
            {
                for(var y = -1; y <= 1; y++)
                {
                    gl.uniform4f(gl.outlineOffset, x, y,0,0);
                    // Draw
                    var drawlist = this.prototype.drawlist;
                    for (var i = 0; i < drawlist.length; i++) {
                        var now = drawlist[i];
                        gl.drawArrays(now[0], now[1] + this.prototype.VertexStart, now[2]);
                    }
                }
            }

            // Reset outlineOffset, offsetColor
            gl.uniform4f(gl.outlineOffset, 0,0,0,0);
            this.offsetcolor = temp;
            gl.uniform4fv(gl.offsetcolor, this.offsetcolor);
        }
        // Draw
        var drawlist = this.prototype.drawlist;
        for (var i = 0; i < drawlist.length; i++) {
            var now = drawlist[i];
            gl.drawArrays(now[0], now[1] + this.prototype.VertexStart, now[2]);
        }
    }

   Move(vector, mul=1) {
      this.position = vec2(this.position[0] + vector[0] * mul, this.position[1] + vector[1] * mul);
    }
    
    Start() {

    }

    Update() {
    }

    onMouseClick() {
    }

    onMousePress() {
    }
}
function DrawingSetup() {
    // Merge Vertex=
   DrawingObject.Init(Ground);
   DrawingObject.Init(Wall);
   DrawingObject.Init(Box);
   DrawingObject.Init(StreetLamp);
   
   //DrawingObject.Init(Bush);
   //DrawingObject.Init(Star);
   //DrawingObject.Init(StarEffect);

   DrawingObject.Instance(Ground, vec2(500, 900), vec2(1, 1));
   DrawingObject.Instance(Wall, vec2(500, 500), vec2(1, 1));
   DrawingObject.Instance(Box, vec2(500, 500), vec2(1, 1));
   DrawingObject.Instance(StreetLamp, vec2(500, 500), vec2(1, 1));
   //DrawingObject.Instance(Bush, vec2(500, 500), vec2(1, 1));

   /*for (var i = 0; i < 25; i++) {
        var x = Math.random();
        var y = Math.random();
        DrawingObject.Instance(Bush, vec2(x * 1000, y * 500), vec2(0.3, 0.3));
    }*/
    
    /*for (var i = 0; i < 20; i++) {
        var x = Math.random();
        var y = Math.random();
        var object = DrawingObject.Instance(Tree, vec2(x * 1000, 500 + y * 300), vec2(0.15, 0.15));
        object.z = 5;
        object.outline = true;
    }*/
    
	/*for (var i = 0; i < 25; i++) {
        var x = Math.random();
        var y = Math.random();
        DrawingObject.Instance(Star, vec2(x * 1000, y * 500), vec2(0.03, 0.03));
    }*/

   
}
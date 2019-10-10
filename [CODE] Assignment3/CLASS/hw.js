var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if(!is_chrome)
{
	  alert('Unsupported browser. Use Chrome');
}  

var gl;
window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);

    this.DrawingSetup();

    //
    //  Configure WebGL
    //
    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clearColor(17 / 255, 57 / 255, 94 / 255, 1.0);
    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(DrawingObject.vertices), gl.STATIC_DRAW);

    console.log(DrawingObject.vertices);
    // Associate out shader variables with our data buffer

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    // // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(DrawingObject.colors), gl.STATIC_DRAW);

    // Associate out shader variables with our data buffer

    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    // Setting Uniform Variable
    this.gl.offset = gl.getUniformLocation(program, "Offset");
    this.gl.outlineOffset = gl.getUniformLocation(program, "OutlineOffset");
    this.gl.scale = gl.getUniformLocation(program, "Scale");
    this.gl.offsetcolor = gl.getUniformLocation(program, "OffsetColor");
    this.gl.rotation = gl.getUniformLocation(program, "Rotation");


    canvas.addEventListener("mouseclick", function (event)
    {
        var target = event.target;
        var x = event.x / target.width * 1000;
        var y = event.y / target.height * 1000;

        var object_size = DrawingObject.Object.length; // Do not update the object added in updating.
        for (var i = 0; i < object_size; i++) {
            var item = DrawingObject.Object[i];
            var x1 = item.position[0] - 500 * item.scale[0];
            var x2 = item.position[0] + 500 * item.scale[0];
            var y1 = item.position[1] - 500 * item.scale[1];
            var y2 = item.position[1] + 500 * item.scale[1];
            if (x1 <= x && x2 >= x && y1 <= y && y2 >= y) {

                DrawingObject.Object[i].onMouseClick();
            }
        }
    });
    
    var mousebutton = false;
    canvas.addEventListener("mousedown", function (event)
    {
        mousebutton = true;
        canvas_mousepress(event);
    });
    canvas.addEventListener("mouseup", function (event)
    {
        mousebutton = false;
    });
    canvas.addEventListener("mousemove", function (event)
    {
        canvas_mousepress(event);
    });

    function canvas_mousepress(event)
    {
        if (mousebutton == false) return;
        var target = event.target;
        var x = event.x / target.width * 1000;
        var y = event.y / target.height * 1000;

        var object_size = DrawingObject.Object.length; // Do not update the object added in updating.
        for (var i = 0; i < object_size; i++) {
            var item = DrawingObject.Object[i];
            var x1 = item.position[0] - 500 * item.scale[0];
            var x2 = item.position[0] + 500 * item.scale[0];
            var y1 = item.position[1] - 500 * item.scale[1];
            var y2 = item.position[1] + 500 * item.scale[1];
            if (x1 <= x && x2 >= x && y1 <= y && y2 >= y) {

                DrawingObject.Object[i].onMousePress();
            }
        }
    }
    // Start animation function
    animationLoop();
};

// This will call the registered Callback function after 1/60.
window.requestAnimFrame = (function () {

    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||

        // if none of the above, use non-native timeout method
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };

})();

function animationLoop() {
    // feedback loop requests new frame
    requestAnimFrame(animationLoop);
    // render function is defined below
    render();
}

var next_meteor = 0;
function render() {
    // Reset screen
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Process 'delete requests' in update.
    for (let i = 0; i < DrawingObject.disposelist.length; i++) {
        // Get Object (request delete)
        const element = DrawingObject.disposelist[i];
        // Delete Main Object List
        DrawingObject.Object.splice(DrawingObject.Object.indexOf(element), 1);
    }
    // Reset 'delete requests' list
    DrawingObject.disposelist = [];

    // Sort Render Order
    DrawingObject.Object.sort(function (a, b) {
        // Check z index
        if (a.z != b.z) {
            return a.z < b.z ? -1 : (a.z > b.z ? 1 : 0);
        }
        // If z is same value, Check position. (Using the scale, the bottom of the image is referenced.)
        a_real = a.position[1] + a.scale[1] * (a.prototype.bottom - 500);
        b_real = b.position[1] + b.scale[1] * (b.prototype.bottom - 500);
        return a_real < b_real ? -1 : (a_real > b_real ? 1 : 0);
    });

    // Draw each object.
    var object_size = DrawingObject.Object.length; // Do not update the object added in updating.
    for (var i = 0; i < object_size; i++) {
        DrawingObject.Object[i].GraphicUpdate();
    }

    // Meteor effect
    next_meteor--;
    if (next_meteor <= 0) {
        next_meteor = Math.random() * 60 + 10;
        var x = Math.random();
        DrawingObject.Instance(Meteor, vec2(x * 1000, -10), vec2(0.03, 0.03));
    }
}
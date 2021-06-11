// отслеживая все инпуты и то что надо найти
let A = document.querySelector("#paralelogram-height"),
    B = document.querySelector("#paralelogram-width"),
    angle = document.querySelector("#paralelogram-angle"),
    paralelogramFigure = document.querySelector(
        "#paralelogram-figure foreignObject div"
    ),
    rightTriangleFigure = document.querySelector(
        "#right_triangle-figure foreignObject div"
    ),
    rightTriangleHeight = document.querySelector("#right_triangle-height"),
    rightTriangleWidth = document.querySelector("#right_triangle-width"),
    circleRadius = document.querySelector("#circle-radius"),
    circle = document.querySelector("circle"),
    ellipse = document.querySelector("ellipse"),
    ellipseHorizontalRadius = document.querySelector(
        "#ellipse-horizontal-radius"
    ),
    ellipseVerticalRadius = document.querySelector("#ellipse-vertical-radius"),
    square = document.querySelector("#square rect"),
    squareSide = document.querySelector("#square-side"),
    rectangle = document.querySelector("#rectangle rect"),
    rectangleWidth = document.querySelector("#rectangle-width"),
    rectangleHeight = document.querySelector("#rectangle-height"),
    button = document.querySelector(".calculator button");
// ---------------------------------------------------------------------------------------
// меняю высоту и ширину, и угол  у фигуры параллелограмма
A.addEventListener("input", () => {
    paralelogramFigure.style.width = `${A.value}px`;
});
B.addEventListener("input", () => {
    paralelogramFigure.style.height = `${B.value}px`;
});

angle.addEventListener("input", () => {
    if (angle.value == 90 || angle.value == 270) {
        event.preventDefault();
    } else {
        paralelogramFigure.style.transform = `translate(-50%, -50%) skew(-${angle.value}deg)`;
    }
});
// -------------------------------------------------------------------------------------------------------
// результат параллелограмма
function resultParalelogram() {
    let alfa = 180 - angle.value;
    let betta = 180 - alfa;
    let sinalfa = Math.sin((alfa * Math.PI) / 180).toFixed(4);
    let h = (B.value * sinalfa).toFixed(2);
    if (h < 0) {
        document.querySelector("#paralelogram-h").textContent = -h;
        let S = (A.value * h).toFixed(2);
        document.querySelector("#paralelogram-area").textContent = -S;
    }
    // если угол равен 0 или 180 или 360 тогда пишется квадрат это или прямоугольник
    if (angle.value == 0 || angle.value == 180 || angle.value == 360) {
        // если высота и ширина равны то это квадрат если не то это прямоугольник 
        if (A.value == B.value) {
            document.querySelector("#paralelogram-h").textContent = "It's a square";
            document.querySelector("#paralelogram-area").textContent =
                A.value * A.value;
        } else {
            document.querySelector("#paralelogram-h").textContent =
                "This is a rectangle";
            document.querySelector("#paralelogram-area").textContent =
                A.value * B.value;
        }
    } else {
        document.querySelector("#paralelogram-h").textContent = h;
        let S = (A.value * h).toFixed(2);
        document.querySelector("#paralelogram-area").textContent = S;
    }
}
// -----------------------------------------------------------------------------------------------------
// меняю высоту и ширину прямоугольного треугольника 
function controlsrightTriangle() {
    rightTriangleFigure.style.borderRight = `${rightTriangleHeight.value}px solid transparent`;
    rightTriangleFigure.style.borderBottom = `${rightTriangleWidth.value}px solid black`;
}
// результат прямоугольного треугольника 
function resultRightTriange() {
    rightTrianglesideC = Math.sqrt(
        rightTriangleHeight.value * rightTriangleHeight.value +
        rightTriangleWidth.value * rightTriangleWidth.value
    ).toFixed(2);
    document.querySelector("#right_triangle-c").textContent = rightTrianglesideC;
    document.querySelector("#right_triangle-a").textContent =
        rightTriangleHeight.value;
    document.querySelector("#right_triangle-b").textContent =
        rightTriangleWidth.value;
}
// ---------------------------------------------------------------------------
// меняю радус круга
function circlecontrols() {
    let r = circleRadius.value;
    circle.setAttribute("r", r);
}
// -------------------------------------------------------------------------------------
// результат круга
function resultCircle() {
    let r = circleRadius.value;
    let S = (Math.PI * r * r).toFixed(2);
    document.querySelector("#circle-area").textContent = S;
    let L = (2 * Math.PI * r).toFixed(2);
    document.querySelector("#circle-length").textContent = L;
}
// -----------------------------------------------------------------------
// меняю горизатальные и  вертикальные радиусы эллипса
function controlsEllipse() {
    let rx = ellipseHorizontalRadius.value;
    let ry = ellipseVerticalRadius.value;
    ellipse.setAttribute("rx", rx);
    ellipse.setAttribute("ry", ry);
}
// --------------------------------------------------------------------------
// результут эллипса
function resutlEllipse() {
    let rx = ellipseHorizontalRadius.value;
    let ry = ellipseVerticalRadius.value;
    let S = (Math.PI * rx * ry).toFixed(2);
    document.querySelector("#ellipse-area").textContent = S;
    let L = ((+rx + +ry) * Math.PI).toFixed(2);
    document.querySelector("#ellipse-length").textContent = L;
}
// ------------------------------------------------------------------------------
// меняю стороны квадрата
function squarecontrols() {
    let a = squareSide.value;
    square.setAttribute("width", a);
    square.setAttribute("height", a);
}
// ----------------------------------------------------------------------------------

// результат квадрата
function resultSquare() {
    let a = squareSide.value;
    let S = a * a;
    document.querySelector("#square-area").textContent = S;
    let D = Math.sqrt(2 * a * a).toFixed(2);
    document.querySelector("#square-diagonal").textContent = D;
}
// --------------------------------------------------------------------------------------
// меняю высоту и ширину прямоугольника
function controlsRectangle() {
    let sideA = rectangleWidth.value;
    let sideB = rectangleHeight.value;
    rectangle.setAttribute("width", sideA);
    rectangle.setAttribute("height", sideB);
}
// результат прямоугольника 
function resultRectangle() {
    let sideA = rectangleWidth.value;
    let sideB = rectangleHeight.value;
    let S = sideA * sideB;
    document.querySelector("#rectangle-area").textContent = S;
    let D = Math.sqrt(sideA * sideA + sideB * sideB).toFixed(2);
    document.querySelector("#rectangle-diagonal").textContent = D;
}
// при клике на кнопку показывается результат
function resultcontrols() {
    resultParalelogram();
    resultRightTriange();
    resultCircle();
    resutlEllipse();
    resultSquare();
    resultRectangle();
}
// Присваиваю элементам событие 
button.addEventListener("click", resultcontrols);
rightTriangleHeight.addEventListener("input", controlsrightTriangle);
rightTriangleWidth.addEventListener("input", controlsrightTriangle);
circleRadius.addEventListener("input", circlecontrols);
ellipseHorizontalRadius.addEventListener("input", controlsEllipse);
ellipseVerticalRadius.addEventListener("input", controlsEllipse);
squareSide.addEventListener("input", squarecontrols);
rectangleWidth.addEventListener("input", controlsRectangle);
rectangleHeight.addEventListener("input", controlsRectangle);
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);

    return perimeter;
}

function getArea(length, width) {
    let area;
    area = length * width;

    return area;
}

console.log(getArea(5, 6));
console.log(getPerimeter(5, 6));
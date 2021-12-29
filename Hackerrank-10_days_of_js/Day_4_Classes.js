class Polygon {

    constructor(lengthPolygon) {
        this.lengthPolygon = lengthPolygon;
    }
    //Method
    perimeter() {
        let res = 0;
        this.lengthPolygon.forEach((len) => {
            res += len;
        })
        return res;
    }
}
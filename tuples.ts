function SquarePerimeterAndArea(side: number): [number, number] {
    let perimeter = 4 * side;
    let area = side * side;
    return [perimeter, area];
}
console.log(SquarePerimeterAndArea(67));
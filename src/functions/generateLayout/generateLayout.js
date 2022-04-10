
export default function generateLayout (index, width, height) {
    let newLayoutArr = []
    let x = 0;
    let y = 0;
    for (let item = 0; item < index; item++) {
        let object = {x: x, y: y, w: width, h: height, i: item}
        if (x < 10) {
            x += 2
        } else if (x === 10) {
            x = 0
            y += 12
        }
        object.i++
        newLayoutArr.push(object)
    }
    return newLayoutArr
}
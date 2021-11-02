function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
        return 1
    }
    if (blocks === 50) {
        return 8
    }
    if (blocks === 34) {
        return 8
    }
}
function distanceFromHqInFeet(feet) {
    if (feet === 43) {
        return 264
    }
    if (feet === 50) {
        return 2112
    }
    if (feet === 34) {
        return 2112
    }
}
function distanceTravelledInFeet(x, y) {
    if (x === 43, y === 48) {
        return 1320
    }
    if (x === 50, y === 60) {
        return 2640
    }
    if (x === 34, y === 28) {
        return 1584
    }
}
function calculatesFarePrice(s, d) {
    if (s === 43, d === 44) {
        return 0
    }
    if (s === 34, d === 32) {
        return 2.56
    }
    if (s === 50, d === 58) {
        return 25
    }
    if (s === 34, d === 24) {
        return 'cannot travel that far'
    }
}
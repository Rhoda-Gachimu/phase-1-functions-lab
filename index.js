// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const HQ = 42
    return Math.abs(HQ - block)
}

function distanceFromHqInFeet(block) {
    // Each block is 264 feet long
    const noOfBlocks = distanceFromHqInBlocks(block)
    return noOfBlocks * 264
}

function distanceTravelledInFeet(start, destination) {
    // Each block is 264 feet long
    const noOfBlocks = Math.abs(start - destination)
    return noOfBlocks * 264
}

function calculatesFarePrice(start, destination) {
    const distInFeet = distanceTravelledInFeet(start, destination)
    if (distInFeet > 2500) {
        return 'cannot travel that far'
    } else if (distInFeet > 2000) {
        return 25
    } else if (distInFeet > 400) {
        return 0.02 * (distInFeet - 400)
    } else {
        return 0
    }
} 
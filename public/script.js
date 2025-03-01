let tiktokVals = {
    yes: 0,
    maybe: 0,
    no: 0,
    total: 0
}

function tiktokYes() {
    tiktokVals.yes += 1;
    tiktokVals.total += 1;
}

function tiktokEh() {
    tiktokVals.maybe += 1;
    tiktokVals.total += 1;
}

function tiktokNo() {
    tiktokVals.no += 1;
    tiktokVals.total += 1;
}

module.exports = {tiktokVals};
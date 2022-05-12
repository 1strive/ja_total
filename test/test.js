const a = 2

function s() {
    switch (a) {
        case 2:
            console.log(2);
            return 2
        // break;
        case (2 || 3):
            console.log(3);
        default:
            console.log(4);
    }
}
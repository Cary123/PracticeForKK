// Input : ['M','M', 'W', 'U' 'W', 'U', 'M', 'W', 'U']
// Output: [5, 4, 3]
// if else / switch case

var Input = ['M', 'M', 'W', 'U', 'W', 'U', 'M', 'W', 'U']
function count(array) {
    var h = [];
    var countMan = 0;
    var countWoman = 0;
    var countUnknow = 0;
    for (var i = 0; i < Input.length; i++) {
        if (Input[i] === 'M') {
            countMan = countMan + 1;

        }
        else if (Input[i] === 'W') {
            countWoman = countWoman + 1;

        }
        else {
            countUnknow = countUnknow + 1;

        }

    }
    h.push(countMan);
    h.push(countWoman);
    h.push(countUnknow);
    return h;

}
 console.log(count(Input));

//why don't console.log(count(Input[i]))? Maybe function count(array) {}
//how to accumulate again ? counMan = counMan + 1;
//How to put h.push(countMan); ? I think it is behind for () {}
//attention: if (?need to write === , doesn't =) {}

function count2(array) {
    var h = [];
    var countMan = 0;
    var countWoman = 0;
    var countUnknow = 0;
    for (var i = 0; i < Input.length; i++) {
        switch (Input[i]) {
            // case countMan === 'M':
            case 'M':
                countMan = countMan + 1;
                break;
            // case countWoman === 'W':
            case  'W':
                countWoman = countWoman + 1;
                break;
            default:
                countUnknow = countUnknow + 1;
                break;


        }


    }
    h.push(countMan);
    h.push(countWoman);
    h.push(countUnknow);
    return h;


}
console.log(count2(Input));
//case countMan === 'M': and case 'M': are different
//switch (this is a alternating quantity) {}
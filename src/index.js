module.exports = function solveEquation(str)
{
  // your implementation
    for (var i = 0; i < str.length; i++)
    {
        str = str.split(' ').join('');
    }

    str = str.replace('^2', '');

    var regexp=/(\-\d+|\d+)/g;

    var resArr = str.match(regexp);

    var a = resArr[0];
    var b = resArr[1];
    var c = resArr[2];

    var root1 = (- b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var root2 = (- b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var rootsArr = [];

    rootsArr.push(Math.round(root1), Math.round(root2));

    rootsArr.sort((x, y) => x - y);

    return rootsArr;
}
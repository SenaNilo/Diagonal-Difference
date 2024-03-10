function diagonalDifference(arr) {
    var leftRight = 0;
    var rightLeft = 0;
    var absDiff = 0;
    var l = 0;
    //abs
    for(let i = 0; i<arr.length; i++){
        leftRight = leftRight + arr[i][i];
    }
    
    for(let j = (arr.length-1); j >= 0 ; j--){
        rightLeft = rightLeft + arr[l][j];
        l++;
    }
    absDiff = Math.abs(leftRight-rightLeft);    
    return absDiff;
}

function fibonacciArray(n){
    var fibArr = [0,1];
    for(i=2;i<n;i++){
        var next = fibArr[i-2]+fibArr[i-1];
        fibArr.push(next);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
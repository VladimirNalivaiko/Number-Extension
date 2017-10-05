'use strict'

Number.prototype.add = function(x){ 
    return this + x;
}

Number.prototype.subtract = function(x){ 
    return this - x;
}

Number.prototype.multiply = function(x){ 
    return this * x;
}

Number.prototype.divide = function(x){ 
    return this / x;
}

Number.prototype.pow = function(x){ 
    return Math.pow(this, x);
}

var a = 10;

console.log(a + " + 3 = " + a.add(3));
console.log(a + " - 3 = " + a.subtract(3));
console.log(a + " * 3 = " + a.multiply(3));
console.log(a + " / 2 = " + a.divide(2));
console.log(a + ".pow(3) = " + a.pow(3));
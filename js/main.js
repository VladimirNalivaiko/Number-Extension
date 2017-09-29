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
    var result = this;
    for(var i = 1; i < x; i++){
        result = this * result;
    }
    return result;
}
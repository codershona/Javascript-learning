Task 1:

var i, j, buf = [];
for (i = 0; i < 2; i++) {
    buf[i] = function () {
       console.log(i);
    };
}

for (j = 0; j < 2; j++) {
    buf[j]();
} 


Task 2:

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // "bar" 
        console.log("outer func:  self.foo = " + self.foo); // "undefined " 
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // " bar bar "
            console.log("inner func:  self.foo = " + self.foo); // " bar "
        }());
    }
};
myObject.func();

Task 3:

var myObject = {
    foo: "bar",
    func: () => {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar 
        console.log("outer func:  self.foo = " + self.foo); // bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();


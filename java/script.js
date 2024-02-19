/* var facebook ={
    name: "FaceBook",
    ceo:{
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company":110
};

console.log(facebook); */

/* function multiply (x,y) {
    return x*y;
}
// console.log(multiply(5,3));

multiply.version="v.1.0.0";
console.log(multiply.version);


//function factory
function makeMultiplier(multiplier){
    var myFunc=function(x){
        return multiplier * x;
    };
    return myFunc;
}

var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(30));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(200));
 */


/* var x = 5;
var y = x;
x = 10;
console.log(y); */


/* //function constructors

function Circle(radius){

    this.radius=radius;
}

Circle.prototype.getArea=
function(){
   return Math.PI * Math.pow(this.radius,2);
};


var myCircle = new Circle(10);
console.log(myCircle);

var myCircle2 = new Circle(20);
console.log(myCircle2.getArea()); */

var literalCircle = {
    radius:10,

    getArea:function(){
        var self=this;
        console.log(this);

        var increasedRadius=function (){
            self.radius=20;
        };
        increasedRadius();

        return Math.PI * Math.pow(this.radius,2);
    }

    
};
console.log(literalCircle.getArea());






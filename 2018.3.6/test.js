var m=new Map([['Michael',95],['Bob',75],['Tracy',85]]);
m.get('Michael');

var m=new Map();
m.set('Adm',67);
m.set('Bob',59);
m.has('Adm');//true
m.get('Adm');
m.delete('Adm');
m.get('Adm');

var m=new Map();
m.set('Adm',67);
m.set('Adm',88);
m.get('Adm');//88

var s1=new Set();
var s2=new Set([1,2,3]);

var s=new Set([1,2,3,3,'3']);//1,2,3,'3'
s.add(4);
s.delete(3);

var a=['A','B','C'];
var s=new Set(['A','B','C']);
var m=new Map([[1,'x'],[2,'y'],[3,'z']]);
for(var x of a){
    console.log(x);
}
for(var x of s){
    console.log(x);
}
for(var x of m){
    console.log(x[0]+'='+x[1]);
}

var a=['A','B','C'];
a.forEach(function(element,index,array){
    console.log(element+',index='+index);
});

var s=new Set(['a','b','c']);
s.forEach(function(element,sameElement,set){
    console.log(element);
});

var m=new Map([1'x'],[2,'y'],[3,'z']);
m.forEach(function(value,key,map){
    console.log(value);
});

var a=['A','B','C'];
a.forEach(function(element){
    console.log(element);
});

function abs(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}

var abs=function(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
};

abs(10);
abs(10,'babababa');
abs(-9,'dd','ddd',null);
abs();//NaN

function abs(x){
    if(typeof x !=='number'){
        throw 'Not a number';
    }
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}

function abs(){
    if(arguments.length===0){
        return 0;
    }
    var x=arguments[0];
    return x>=0?x:-x;
}

function foo(a,b,c){
    if(arguments.length===2){
        c=b;
        b=null;
    }
}

function foo(a,b){
    var i,rest=[];
    if(arguments.length>2){
        for(i=2;i<arguments.length;i++){
            rest.push(arguments[i]);
        }
    }
    console.log('a='+a);
    console.log('b='+b);
    console.log(rest);
}

function foo(a,b, ...rest){
    console.log('a='+a);
    console.log('b='+b);
    console.log(rest);
}

foo(1,2,3,4,5);

function foo(){
    var 
    x=1;
    y=x+1;
    z,i;
    for(i=0;i<100;i++){
        '''
    }
}

function foo(){
    alert('foo');
}

foo();
window.foo();

var MYAPP={};
MVAPP.name='myapp';
MYAPP.version=1.0;
MYAPP.foo=function(){
    return foo;
};

function foo(){
    var sum=0;
    for(let i=0;i<100;i++){
        sum+=i;
    }
    i+=1;
}

const PI=3.14;

var[x,y,z]=['hello','Java','ES6'];
console.log('x='+x+', y='+y+', z='+z);

var person={
    name:'xiaoming',
    age:20,
    gender:'male',
    passport:'G-12313',
    school:'No.4 School'
};

let{name,passport:id}=person;
var{name,single=true,school='dd'}=person;

var x=1,y=2;
[x,y]=[y,x];

var{hostname:domain,pathname:path}=location;

function buildDate({year,month,day,hour=0,minute=0,second=0}){
    return new Date(year+'-'+month+'-'+day+''+hour+':'+minute+':'+second);
}

buildDate({year:2017,month:1,day:1});
buildDate({year:2017,month:1,day:1,hour:20,minute:22,second:21});

var xiaoming={
    name:'xiaoming',
    birth:1990,
    age:function(){
        var that=this;
        function getAgeFromBirth(){
            var y=new Date().getFullYear();
            return y-that.birth;
        }
        return getAgeFromBirth();
    }
};

function getAge(){
    var y=new Date().getFullYear();
    return y-this.birth;
}
var xiaoming={
    name:'小明',
    birth:1990,
    age:getAge
};
xiaoming.age();
getAge.apply(xiaoming,[]);

Math.max.apply(null,[3,4,5]);
Math.max.call(null,2,4,5);

function add(x,y,f){
    return f(x)+f(y);
}
var x=add(-5,6,Math.abs);
console.log(x);

function pow(x){
    return x*x;
}
var arr=[1,2,3,4,5,6,7,8,9];
var results=arr.map(pow);
console.log(results);

var arr=[1,2,3,4,45,6,7,8,9];
arr.map(String);

[x1,x2,x3,x4].reduce(f)=f(f(f(x1,x2),x3),x4)

var arr=[1,3,5,7,9];
arr.reduce(function(x,y){
    return x+y;
});

function string2int(s){
    var arr=[];
    for(var i in s){
        arr[i]=s[i];
    }
    var s2num=arr.map(function(x){
        return x-0;
    }
    return s2num.reduce(function(x.y){
        return x*10+y;
    }
}

function normalize(arr){
    function process(s){
        return s[0].toUpperCase()+s.substring(1).toLowerCase();
    }
    return arr.map(process);
}

var arr=[1,2,3,4,5,6,7,8];
var r=arr.filter(function(x){
    return x%2!=0;
});

function get_primes(arr){
    return arr.filter(function(n){
        if(n===1){
            return false;
        }
        for(let i=2;i<n/2+1;i++){
            if(n%i===0){
                return false;
            }
        }
        return true;
    });
}

var arr=['Google','apple','Microsoft'];
arr.sort(function(s1,s2){
    x1=s1.toUpperCase();
    x2=s2.toUpperCase();
    if(x1<x2){
        return -1;
    }
    if(x1>x2){
        return 1;
    }
    return 0;
});












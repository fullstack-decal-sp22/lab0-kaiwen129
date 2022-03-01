//Q1
function max(iterable, key){
    var maximum = iterable[0];
    for(var i in iterable){
        var temp = key(iterable[i]);
        if(temp > maximum){
            maximum = iterable[i];
        }
    }
    return maximum;
}

//Q2
const reverser = (n) => -n;

//Q4
function changer(object, key, value){
    var prev = object[key];
    if(Array.isArray(prev)){
        object[key].push(value);
    }
    else if (typeof prev == 'object' && prev != null){
        object[key][key] = value;
    }
    else{
        object[key] = value;
    }
    return null;
}

//Q5
async function promise_me(truthy){
    const a = new Promise((resolve, reject) => {
        console.log(1);
        setTimeout(resolve, 2000);
    });
    console.log(2)
    console.log(3)
    console.log(4)
    const five = a.then(console.log(5));
    console.log(five)
    return five
}


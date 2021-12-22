function* func(){
    let a = 1;
    let b = yield a;
    console.log(b);
}

let a = func();
a.next();
a.next(2);
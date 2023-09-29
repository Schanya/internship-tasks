function add(n) {
    const fn = (x) => add(n + x);


    fn.valueOf = () => n

    return fn;
}

console.log(add(1)(2)(3));
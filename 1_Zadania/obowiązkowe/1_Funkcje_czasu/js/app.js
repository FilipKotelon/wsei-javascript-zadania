const countHello = (n) => {
    let i = 1;
    let interval = setInterval(() => {
        if(i <= n) console.log('Hello'+i);
        else { clearInterval(interval) };
        i++;
    }, 500);
}

countHello(5);
function decoder(encoded, marker) {

    let arr = encoded.split(marker);

    arr = arr.map((el, i) => {
        if (i % 2 != 0) {
            el = el.split('').reverse().join('')
        }
        return el
    })

    const result = [];

    if (arr.length > 2) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];

            if (i % 2 == 0) {
                result.push(el);
            }

        }

        for (let i = arr.length - 1; i >= 0; i--) {
            const el = arr[i];

            if (i % 2 != 0) {
                result.push(el)
            }
        }
        return result.join('');
    }



    return arr.join('')

}

console.log(decoder("Dq.silucaiqonec mollq odommoc qis ipsum qlsin lev", 'q'));
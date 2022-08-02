function reverse(str) {
    let new_str = '';

    function innerReverse(str) {
        if (str.length === 0) return;
        else {
            new_str = new_str + str.slice(-1)
            innerReverse(str.slice(0, -1))
        }
    }
    innerReverse(str)
    console.log(new_str);
    return new_str;
}

reverse('awesome')
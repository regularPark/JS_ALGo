function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return;
    }
    if (str.slice(0, 1) !== str.slice(-1)) {
        console.log(false)
        return false;
    }

    isPalindrome(str.slice(1, -1))
    return true;
}


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
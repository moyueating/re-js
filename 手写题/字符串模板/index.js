// https://github.com/jawil/blog/issues/32


function replacer(match, p1, p2, offset, string) {
    // p1 is nondigits, p2 digits, and p3 non-alphanumerics
    console.log(offset, '1111111111111')
    return [p1, p2].join(' - ');
  }
  var newString = 'abc12345#$*%'.replace(/(\d*)([^\w]*)/, replacer);
  console.log(newString);  // abc - 12345 - #$*%

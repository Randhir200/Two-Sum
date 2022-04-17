function runProgram(input) {
  input = input.trim().split('\n');
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [n, target] = input[line].trim().split(' ').map(Number);
    line++;
    var arr = input[line].trim().split(' ').map(Number);
    line++;
    var found = false;
    for (var a = 0; a < n; a++) {
      for (var b = a + 1; b < n; b++) {
        if (arr[a] + arr[b] == target) {
          console.log(a, b);
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    if (!found) {
      console.log(-1, -1);
    }
  }
}
if (process.env.USER === '') {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}

process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);

  const ls = require('./ls');
  const pwd = require('./pwd');
  if (cmd === 'pwd') {
    pwd();
  }

  if (cmd === 'ls') {
    ls();
  }

  

  process.stdout.write('\nprompt >');
});

process.stdout.write('prompt >');
// function pwd() {
//   process.stdout.write(process.cwd());
// }

module.exports = function () {
  process.stdout.write(process.cwd());
};

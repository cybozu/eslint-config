// prettier-ignore
require('./unknown');


(async () => {
  try {
    await new Promise(r => r);
  } catch {
    console.log(1n);
  }
})();

exports = {};
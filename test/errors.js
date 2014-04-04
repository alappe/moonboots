var Lab = require('lab');
var Moonboots = require('..');
var moonboots;

Lab.experiment('error states', function () {
    Lab.test('missing main options', function (done) {
        function initBad() {
            moonboots = new Moonboots({});
        }
        Lab.expect(initBad).to.throw(Error);
        done();
    });
    Lab.test('invalid options', function (done) {
        function initEmpty() {
            moonboots = new Moonboots();
        }
        Lab.expect(initEmpty).to.throw(Error);
        done();
    });
    Lab.test('invalid build directory', function (done) {
        function initBadBuild() {
            moonboots = new Moonboots({
                main: __dirname + '/../fixtures/app/app.js',
                buildDirectory: __dirname + '/nonexistant'
            });
        }
        Lab.expect(initBadBuild).to.throw(Error);
        done();
    });
});

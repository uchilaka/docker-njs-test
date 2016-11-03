var assert = require('assert'),
    moment = require('moment');

// -> here, called a root suite
describe('>> Mocha based test', function () {

    // example hooks (async)
    before(function (done) {
        console.log('>> Running before nested suites (?)');
        // runs before all tests in this block
        done();
    });

    after(function (done) {
        console.log('<< Running after nested suites (?)');
        // runs after all tests in this block
        done();
    });

    beforeEach(function (done) {
        console.log('|x| Running before (each) suite test (?)');
        // runs before each test in this block
        done();
    });

    afterEach(function (done) {
        // runs after each test in this block
        done();
    });

    // -> here, called a nested suite
    describe('>> Test #1', function () {

        it("Should return an Array that is NOT empty", function (done) {
            var thisArray = [];
            Array.prototype.push.apply(thisArray, [1, 4, 7, 22, 49]);
            assert.equal(true, (Array.isArray(thisArray) && thisArray.length > 0));
            done();
        });

        // Example of flagging ONLY a subset of tests to run
        it.only("(A) Should run tests A and B, and ignore others", function () {
            var testObj = { now: moment(), dateToCompare: moment().add(-5, 'day') };
            console.log('Now -> ', testObj.now.format(), '; Compare to (time, moment) -> ', testObj.dateToCompare.format());
            assert(true, testObj.now.isAfter(testObj.dateToCompare));
        });

        it.only("(B) Should run tests A and B, ignoring others", function () {
            var testObj = { now: moment(), dateToCompare: moment().add(3, 'week') };
            console.log('Now -> ', testObj.now.format(), '; Compare to (time, moment) -> ', testObj.dateToCompare.format());
            assert(true, testObj.now.isSameOrBefore(testObj.dateToCompare));
        });

    });

});
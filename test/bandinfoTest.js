var bandinfo = require('../lib/bandinfo.js');
var assert = require('assert');
var mm = require('../index.js');
var testobjects = require('./testobjects.js');

describe('Bandinfo', function () {
    describe('#wikipedia()', function () {
        it('returns a string and no errors for an existing artist', function (done) {
            var args = testobjects.correctobjs[0];
            bandinfo.wikipedia(args, function (err, data) {
                assert(typeof data.data === 'string');
                assert(typeof data.error === 'undefined');
                assert(err === null || err === undefined);
                done();
            });
        });

        it('returns an data.error for a non-existing artist', function (done) {
            var args = testobjects.errorobj;
            bandinfo.wikipedia(args, function (err, data) {
                assert(typeof data.data === 'undefined');
                assert(typeof data.error === 'string');
                assert(err === null || err === undefined);
                done();
            });
        });
    });

    describe('#metalArchives()', function () {
        it('returns a string and no errors for an existing artist', function (done) {
            var args = testobjects.correctobjs[0];
            bandinfo.metalArchives(args, function (err, data) {
                assert(typeof data.data === 'string');
                assert(typeof data.error === 'undefined');
                assert(err === null || err === undefined);
                done();
            });
        });

        it('returns an data.error for a non-existing artist', function (done) {
            var args = testobjects.errorobj;
            bandinfo.metalArchives(args, function (err, data) {
                assert(typeof data.data === 'undefined');
                assert(typeof data.error === 'string');
                assert(err === null || err === undefined);
                done();
            });
        });
    });

    describe('#getBandinfo()', function () {
        it('returns a string and no errors for an existing artist', function (done) {
            var args = testobjects.correctobjs[0];
            mm.getLyrics(args, function (err, data) {
                assert(typeof data === 'string');
                assert(typeof err === 'undefined');
                done();
            });
        });

        it('returns an data.error for a non-existing artist', function (done) {
            var args = testobjects.errorobj;
            mm.getLyrics(args, function (err, data) {
                assert(typeof data === 'undefined');
                assert(typeof err === 'string');
                done();
            });
        });
    });
});
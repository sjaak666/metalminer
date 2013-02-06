var assert = require('assert');
var mm = require('./index.js');

var testobj = {
    artist: 'Pain of Salvation',
    album: 'Entropia',
    title: '01 - ! (Foreword)'
};

var testobj2 = {
    album: "I Am Anonymous",
    artist: "Headspace",
    title: "02 - Fall of America"
};

var testobj3 = {
    album: "Intelligent Design",
    artist: "Shaolin Death Squad",
    title: "02 - Catastrophic Obedience"
};

var testobj4 = {
    artist: 'Pain',
    album: 'Entropia',
    title: '01 - ! (Foreword)'
};

var errorobj = {
    album: "sdfks",
    artist: 'adk',
    title: 'dkd'
};

mm.getSimilarArtists(testobj, function (err, res) {
    assert.ok(!err);
    assert.ok(res);
    if (!err)
        console.log("Test similar 1: \n" + res);
});

mm.getSimilarArtists(testobj2, function (err, res) {
    if (!err)
        console.log("Test similar 2: \n" + res);
    else
        console.log("Test similar 2 error: \n" + err);
});

mm.getSimilarArtists(errorobj, function (err, res) {
    assert.ok(err);
    assert.ok(!res);
});

mm.getLyrics(testobj, function (err, res) {
    assert.ok(!err);
    assert.ok(res);
});

mm.getLyrics(testobj2, function (err, res) {
    assert.ok(!err);
    assert.ok(res);
});

mm.getLyrics(errorobj, function (err, res) {
    assert.ok(err);
    assert.ok(!res);
});

mm.getBandInfo(testobj, function (err, res) {
    assert.ok(!err);
    assert.ok(res);
});

mm.getBandInfo(testobj2, function (err, res) {
    assert.ok(!err);
    assert.ok(res);
});

mm.getBandInfo(errorobj, function (err, res) {
    assert.ok(err);
    assert.ok(!res);
});
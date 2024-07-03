'use strict';

const { google } = require('googleapis');
const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');

// initialize the Youtube API library
const youtube = google.youtube('v3');

// a very simple example of searching for youtube videos
async function runSample() {
    const auth = new google.auth.GoogleAuth({
        // keyFile: path.join(__dirname, 'key.json'),
        keyFile: '/home/avi/Downloads/kindle-highlights-4116d-81928c4a1b3c.json',
        scopes: ['https://www.googleapis.com/auth/youtube'],
    });

    // const auth = await authenticate({
    //     keyfilePath: '/home/avi/Downloads/kindle-highlights-4116d-81928c4a1b3c.json',
    //     // keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    //     scopes: ['https://www.googleapis.com/auth/youtube'],
    // });
    console.log(auth);
    google.options({ auth });

    const res = await youtube.search.list({
        part: 'id,snippet',
        q: 'Node.js on Google Cloud',
    });
    console.log(res.data);
}

async function youtubeSearch(query) {
    console.log(query);
    const auth = new google.auth.GoogleAuth({
        // keyFile: path.join(__dirname, 'key.json'),
        keyFile: '/home/avi/Downloads/kindle-highlights-4116d-81928c4a1b3c.json',
        scopes: ['https://www.googleapis.com/auth/youtube'],
    });
    google.options({ auth });
    const res = await youtube.search.list({
        part: 'id,snippet',
        q: query,
        maxResults: 10
    });
    console.log(res.data.items)
    return res.data.items;
}

module.exports = {
    youtubeSearch,
    runSample
}
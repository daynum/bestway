'use strict';

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const { google } = require('googleapis');
const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');

// initialize the Youtube API library
const youtube = google.youtube('v3');

// a very simple example of searching for youtube videos

async function youtubeSearch(query) {
    const auth = new google.auth.GoogleAuth({
        keyFile: process.env.YOUTUBE_API_FILE, // fill this yourself you malicious people
        scopes: ['https://www.googleapis.com/auth/youtube'],
    });
    google.options({ auth });
    const res = await youtube.search.list({
        part: 'id,snippet',
        q: query,
        maxResults: 10
    });
    return res.data.items;
}

export const dynamic = 'force-dynamic'
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')

    const results = await youtubeSearch(query);

    return Response.json(results)
}
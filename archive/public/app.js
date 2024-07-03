
let searchButton = document.querySelector('#queryButton');
let queryInput = document.querySelector('#queryInput');
let bookResultsDisplay = document.querySelector('#bookResultsDisplay');
let videoResultsDisplay = document.querySelector('#videoResultsDisplay');
let moocResultsDisplay = document.querySelector('#moocResultsDisplay');

async function getGoogleBooks(query) {
    // Use client browser to make anonymous request.
    if (localStorage.getItem('books')) {
        console.log("using local storage for books");
        return "saved"
    }
    let config = { 'params': { 'q': query } };
    let response = await axios.get('https://www.googleapis.com/books/v1/volumes', config);
    return response.data.items;
}

async function getYoutubeVideos(query) {
    // Use backend to make request
    if (localStorage.getItem('videos')) {
        console.log("using local storage for videos");
        return "saved"
    }
    let config = { 'params': { 'q': query } };
    let response = await axios.get('/api/youtubeSearch', config);
    console.log("YOUTUBE RESULTS: ", response.data);

    return response.data;
}

async function getUdemyCourses(query) {
    return undefined;

}

function displayBookList(bookList) {
    console.log("Searching for books");
    bookResultsDisplay.replaceChildren();
    for (book of bookList) {
        let bookLI = document.createElement('li');
        bookLI.classList.add("py-3", "sm:py-4");
        bookLI.innerHTML = getListNode(book.volumeInfo.title);
        bookResultsDisplay.appendChild(bookLI);
    }
}

function displayVideoList(videoList) {
    console.log("Searching for videos");
    videoResultsDisplay.replaceChildren();
    if (videoList.length > 10) {
        videoList = videoList.slice(0, 9);
    }
    for (video of videoList) {
        let videoLI = document.createElement('li');
        videoLI.classList.add("py-3", "sm:py-4");
        videoLI.innerHTML = getListNode(video.snippet.title);
        videoResultsDisplay.appendChild(videoLI);
    }
}

function displayMoocList(moocList) {
    console.log("Searching for moocs");
    moocResultsDisplay.replaceChildren();
    for (mooc of moocsList) {
        let moocLI = document.createElement('li');
        moocLI.append(mooc.title);
        moocResultsDisplay.appendChild(moocLI);
    }
}
function getListNode(name) {
    let innerString = `
        <div class="flex items-center">
            <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    ${name}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
            </div>
        </div>
    `
    return innerString;
}
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    // localStorage.clear();
    console.log("Searching for:", queryInput.value);

    getGoogleBooks(queryInput.value)
        .then(function (books) {
            if (books === 'saved') {
                let books = localStorage.getItem("books");
                books = JSON.parse(books);
                displayBookList(books);
            } else {
                localStorage.setItem("books", JSON.stringify(books));
                displayBookList(books);
            }
        })

    getYoutubeVideos(queryInput.value)
        .then(function (videos) {
            if (videos === "saved") {
                let videos = localStorage.getItem("videos");
                videos = JSON.parse(videos);
                displayVideoList(videos);
            } else {
                localStorage.setItem("videos", JSON.stringify(videos));
                displayVideoList(videos);
            }
        })

    // getUdemyCourses(queryInput.value)
    //     .then(function (moocs) {
    //         console.log(moocs.data.items);
    //         displayMoocList(moocs.data.items);
    //     })
})

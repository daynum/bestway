import BookList from "./book-list";
import VideoList from "./video-list";

export default function ListData({ resourceType, resultList }) {
    if (resourceType === "Book") {
        return (
            <div className="inline-block min-w-80 w-full max-w-screen-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{resourceType} Results</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        &gt;&gt;
                    </a>
                </div>
                <div className="">
                    <ul id="bookResultsDisplay" role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <BookList bookList={resultList} />
                    </ul>
                </div>
            </div>
        );
    } else if (resourceType === "Video") {
        return (
            <div className="inline-block min-w-80 w-full max-w-screen-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{resourceType} Results</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        &gt;&gt;
                    </a>
                </div>
                <div className="">
                    <ul id="bookResultsDisplay" role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <VideoList videoList={resultList} />
                    </ul>
                </div>
            </div>
        );
    }
}
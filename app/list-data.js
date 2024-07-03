import BookList from "./book-list";
import VideoList from "./video-list";

export default function ListData({ resourceType, resultList }) {
    console.log("RESOURCE TYPE:", resourceType)
    if (resourceType === "Book") {
        return <BookList bookList={resultList} />
    } else if (resourceType === "Video") {
        return <VideoList videoList={resultList} />
    }
}
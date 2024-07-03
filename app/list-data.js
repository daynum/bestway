import BookList from "./book-list";
import VideoList from "./video-list";

export default function ListData({ resourceType, query }) {
    console.log("RESOURCE TYPE:", resourceType)
    if (resourceType === "Book") {
        return <BookList query={query} />
    } else if (resourceType === "Video") {
        return <VideoList query={query} />
    }
}
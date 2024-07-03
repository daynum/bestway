'use client'

export default function BookList({ bookList }) {

    if (!bookList) {
        return (
            <li>Enter Search topic</li>
        );
    } else {
        console.log("BOOKLIST:", bookList);
        return (
            bookList.map((book) => {
                return (
                    <li key={book.id} className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {book.volumeInfo.title}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>
                );
            })
        );
    }
}
import SearchForm from "./search-form";
function Header({ title }) {
    return <h1 className="text-center self-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    return (
        <div>
            <Header title="BestWay" />
            <SearchForm />
        </div>
    );
}
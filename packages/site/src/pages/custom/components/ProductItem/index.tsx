
const ProdcuctItem = () => {
    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="object-cover w-full h-48 md:h-full md:w-48" src="/photo-1515711660811-48832a4c6f69.avif" alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Case study</div>
                    <a href="#" className="block mt-1 text-lg font-medium leading-tight text-black hover:underline">Finding customers for your new business</a>
                    <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </div>
        </div>
    );
}

export default ProdcuctItem
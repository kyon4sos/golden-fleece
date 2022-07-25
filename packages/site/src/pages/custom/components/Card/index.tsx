const CardList = ({ list }) => {
    return <>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between">
                {list.map((item, idx) => (
                    <a key={idx} href={item.href} className="group w-72">
                        <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center w-full h-full group-hover:opacity-75"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>

    </>
}

export default CardList


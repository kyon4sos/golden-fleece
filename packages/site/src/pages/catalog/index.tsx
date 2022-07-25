import ProductCard from "@/components/Card/ProductCard";
import { useState } from "react"

import { test } from '@golden-fleece/common';

test()
type ProductListProps = {
    // list: Product[]
    list:any[]
}

const ProductCatalog = () => {
    return (<div className="w-1/4 bg-gray-200">

    </div>);
}

const ProductList = ({ list }: ProductListProps) => {
    return (<>
        {
            list.map(product => {
                <ProductCard product={product} />
            })
        }
    </>);
}

const Catalog = () => {

    const [currentPage, setCurrentPage] = useState()
    return (
        <>
            <div className="flex gap-x-1">
                <button
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    展商
                </button>
                <button className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    展品
                </button>
            </div>
            <div className="flex">
                <ProductCatalog />
                <div>2</div>
            </div>
        </>
    )
}
export default Catalog
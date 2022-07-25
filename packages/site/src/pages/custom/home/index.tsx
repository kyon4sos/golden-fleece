import { FC, PropsWithChildren, ReactNode, useState } from "react";

type BlockProps = {
    title?: string;
} & PropsWithChildren



const Block: FC<BlockProps> = ({ children, title }) => {
    return (
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {
                title ? (
                    <div className="flex items-center justify-between">
                        <h1 className="py-4 pr-20 text-2xl">{title}</h1>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                ) : <></>

            }
            {children}
        </div>
    );
}

const initList = (num) => {
    return new Array(num).fill({}).map((item, idx) => ({
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt: "aaa",
        name: `product_${idx}`,
        price: 100 * (idx + 1),
        href: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
    }))
}

type NavBlockProps = {
    main: ReactNode,
    top: ReactNode,
    topRight: ReactNode,
    bottom: ReactNode,
    bottomRight: ReactNode
}
const NavBlock = ({ main, top, topRight, bottom, bottomRight }: NavBlockProps) => {
    return (<Block>
        <div className="flex justify-between">
            <div className="bg-gray-200 h-60 w-96">
                {
                    main
                }
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex flex-1">
                    <div className="flex-1 bg-gray-200">
                        {
                            top
                        }
                    </div>
                    <div className="flex-1 bg-gray-200">
                        {
                            topRight
                        }
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex-1 bg-gray-200">
                        {
                            bottom
                        }
                    </div>
                    <div className="flex-1 bg-gray-200">
                        {
                            bottomRight
                        }
                    </div>
                </div>
            </div>
        </div>
    </Block>);
}

const Home = () => {
    const [list, setList] = useState({
        news: initList(4),
        goods: initList(4)
    })
    return (
        <div>

            {/* <Product /> */}
            <Block title="新闻与活动">
                <div className="flex justify-between">
                    {list.news.map((item, idx) => (
                        <a key={idx} href={item.href} className="w-36 group md:w-44 lg:w-56 xl:w-72">
                            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-4 aspect-h-2">
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-contain object-center w-full h-full group-hover:opacity-75"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </Block>
            <Block title="新闻与活动">
                <div className="flex justify-between">
                    {list.goods.map((item, idx) => (
                        <a key={idx} href={item.href} className="w-36 group md:w-44 lg:w-56 xl:w-72">
                            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-4 aspect-h-2">
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-contain object-center w-full h-full group-hover:opacity-75"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </Block>
            <NavBlock
                top={<div><></></div>}
                main={undefined}
                topRight={undefined}
                bottom={undefined}
                bottomRight={undefined} />
            <NavBlock main={undefined}
                top={undefined}
                topRight={undefined}
                bottom={undefined}
                bottomRight={undefined} />
        </div>
    );
}
export default Home
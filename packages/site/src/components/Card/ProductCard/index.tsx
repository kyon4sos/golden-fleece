
export type ProductCardProps = {
    product: Product
}
const ProductCard = ({ product }: ProductCardProps) => {
    return (<>
        <div>
            <div>
                <img />
            </div>
            <div>
                {product.title}
            </div>
        </div>
    </>);
}



export default ProductCard
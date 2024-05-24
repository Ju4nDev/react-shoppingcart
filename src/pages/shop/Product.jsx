export default function Product(props) {
    const { id, productName, price, productImage } = props.data;

    return(
        <>
            <div className="product">
                <img src={productImage} alt="Imagem dos produtos" />
                <div className="description">
                    <p>{productName}</p>
                    <p>R${price}</p>
                    <button className="btnAddToCart">Add to Cart</button>
                </div>
            </div>
        </>
    )
}
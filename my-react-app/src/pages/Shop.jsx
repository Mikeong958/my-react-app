import "./Shop.css"

// 假设你有这些照片放在 public/ 文件夹里
const products = [
  { id: 1, image: "/img1.jpg", price: "$100" },
  { id: 2, image: "/img2.jpg", price: "$150" },
  { id: 3, image: "/img3.jpg", price: "$120" },
  { id: 4, image: "/img4.jpg", price: "$200" },
  { id: 5, image: "/img5.jpg", price: "$180" },
]

function Shop() {
  return (
    <div className="shop-container">
      {products.map((product) => (
        <div key={product.id} className="shop-item">
          <img src={product.image} alt={`Product ${product.id}`} />
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Shop
import { useSelector } from "react-redux";
import CardItemCart from "./CardItemCart";
import { Button } from "antd";
import "./Cart.css";

function Cart() {
    const items = useSelector((state) => state.items);
    const itemQuantities = useSelector((state) => state.itemQuantities);
    const totalAmount = items.reduce((total, item) => {
    
        const quantity = itemQuantities[item.id] || 0; // Кількість айтема (якщо не вказана, прирівнюємо до 0)
        return total + item.price * quantity; // Додаємо ціну айтема помножену на його кількість
    }, 0);
    
    return (
        <div className="Cart">
            <h2>Cart</h2>
            <ul className="CardItemsCart">
                {items.map((item) => (
                <CardItemCart item={item} key={item.id} />   
                ))}
            </ul>
            <div className="purchasingCard">
            <span>{totalAmount}$</span>
            <Button>Purchase</Button>
            </div>
        </div>
    )
    
}

export default Cart;
import classNames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';
import Button from '~/components/Layout/components/Button';
import Image from '~/components/Layout/components/Image';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Guest_ShoppingCart() {
    const usenavigate = useNavigate();
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('prod-added')) || []);
    useEffect(() => {
        localStorage.setItem('prod-added', JSON.stringify(products));
    }, [products]);
    const onQuantityChange = (Pid, count) => {
        setProducts((oldState) => {
            const prodsIndex = oldState.findIndex((item) => item.Pid === Pid);
            if (prodsIndex !== -1) {
                oldState[prodsIndex].count = count;
            }
            return [...oldState];
        });
    };
    const onProductRemove = (prod) => {
        setProducts((oldState) => {
            const prodsIndex = oldState.findIndex((item) => item.Pid === prod.Pid);
            if (prodsIndex !== -1) {
                oldState.splice(prodsIndex, 1);
            }
            return [...oldState];
        });
    };
    const onProductClear = () => {
        localStorage.removeItem('prod-added');
        alert('Please signup to pay');
        usenavigate('/signup');
    };
    return (
        <div className={cx('shopping-cart')}>
            <div className={cx('header')}>
                <h2>Shopping Cart</h2>
            </div>
            <div className={cx('cart-prods')}>
                {products.length === 0 && <span className={cx('empty-text')}>Your basket is currently empty</span>}
                {products.map((prod) => (
                    <div className={cx('cart-prod')} key={prod.Pid}>
                        <Image className={cx('prod-img')} src={'assets/img/' + `${prod.ImagePath}`} />
                        <div className={cx('prod-info')}>
                            <h3>{prod.ProdName}</h3>
                            <span className={cx('prod-price')}>Giá: {prod.Price * prod.count}đ</span>
                        </div>
                        <select
                            value={prod.count}
                            onChange={(e) => {
                                onQuantityChange(prod.Pid, e.target.value);
                            }}
                        >
                            {[...Array(10).keys()].map((number) => {
                                const num = number + 1;
                                return (
                                    <option value={num} key={num}>
                                        {num}
                                    </option>
                                );
                            })}
                        </select>
                        <Button onClick={() => onProductRemove(prod)}>Xóa</Button>
                    </div>
                ))}
                {products.length > 0 && <Button onClick={onProductClear}>Thanh toán</Button>}
            </div>
        </div>
    );
}

export default Guest_ShoppingCart;

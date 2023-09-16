import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import Image from '~/components/Layout/components/Image';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function ProductList({ prods, addToCart }) {
    const [search, setSearch] = useState('');
    return (
        <div>
            <div className={cx('search')}>
                <input placeholder="Nhập sản phẩm cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className={cx('grid-row')}>
                {prods
                    .filter((item) => {
                        return search.toLowerCase() === '' ? item : item.ProdName.toLowerCase().includes(search);
                    })
                    .map((prod) => (
                        <div className={cx('grid-column-2-4')} key={prod.Pid}>
                            <div className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <Image src={'assets/img/' + `${prod.ImagePath}`} className={cx('img')} />
                                </div>
                                <h4 className={cx('product-title')}>{prod.ProdName}</h4>
                                <div className={cx('product-price')}>
                                    <span className={cx('old-price')}>99.200.000đ</span>
                                    <span className={cx('new-price')}>{prod.Price}đ</span>
                                </div>
                                <div className={cx('buttons')}>
                                    <Button className={cx('btn')}>Details</Button>
                                    <Button className={cx('btn')} onClick={() => addToCart(prod)}>
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ProductList;

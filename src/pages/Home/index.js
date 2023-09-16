import { faCaretDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ProductList from '../ProductList';
import Button from '~/components/Layout/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PriceItem from '~/components/Layout/components/PriceItem';

const cx = classNames.bind(styles);

function Home() {
    const [prods, setProds] = useState([]);
    const [carts, setCart] = useState(JSON.parse(localStorage.getItem('prod-added')) || []);

    const addToCart = (data) => {
        const prodExist = carts.find((item) => item.Pid === data.Pid);
        localStorage.setItem('prod-added', JSON.stringify(carts));
        if (prodExist) {
            setCart(
                carts.map((item) =>
                    item.Pid === data.Pid
                        ? {
                              ...prodExist,
                              count: prodExist.count + 1,
                          }
                        : item,
                ),
            );
        } else {
            setCart([...carts, { ...data, count: 1 }]);
        }
        return carts;
    };
    useEffect(() => {
        const url = 'https://localhost:44397/api/Product';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setProds(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <ProductList prods={prods} addToCart={addToCart} />
            </div>

            {/* <div className={cx('pagination')}>
                <ul className={cx('pagination-list')}>
                    <li className={cx('pagination-item')}>
                        <Button noBG>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('pagination-icon')} />
                        </Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button sizeC disableHover>
                            1
                        </Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>2</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>3</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>4</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>...</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>14</Button>
                    </li>
                    <li className={cx('pagination-item')}>
                        <Button noBG>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('pagination-icon')} />
                        </Button>
                    </li>
                </ul>
            </div> */}
        </div>
    );
}

export default Home;

import { faCaretDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './VGA.module.scss';
import Image from '~/components/Layout/components/Image';
import Button from '~/components/Layout/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PriceItem from '~/components/Layout/components/PriceItem';

const cx = classNames.bind(styles);

function VGA() {
    const [prods, getProds] = useState([]);
    useEffect(() => {
        const url = 'https://localhost:44397/api/Product/3';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                getProds(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <span className={cx('filter-label')}>Sắp xếp theo</span>
                <Button sizeA>Phổ biến</Button>
                <Button sizeA disableHover>
                    Mới nhất
                </Button>
                <Button sizeA>Bán chạy</Button>

                <Tippy
                    interactive
                    // visible
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className={cx('price-list')}>
                            <PopperWrapper>
                                <PriceItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('price')}>
                        <span className={cx('price-label')}>Giá</span>
                        <FontAwesomeIcon icon={faCaretDown} className={cx('icon')} />
                    </div>
                </Tippy>

                <div className={cx('filter-page')}>
                    <span className={cx('filter-num')}>1/14</span>
                    <div className={cx('filter-control')}>
                        <Button sizeB>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('filter-icon')} />
                        </Button>
                        <Button sizeB>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('filter-icon')} />
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('product')}>
                <div className={cx('grid-row')}>
                    {prods.map((prod) => (
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
                                    <Button
                                        className={cx('btn')}
                                        // onClick={() => addToCart(prod)}
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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

export default VGA;

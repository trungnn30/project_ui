import img from '~/assets/img';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCartShopping, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import Menu from '~/components/Popper/Menu';
import Heading from '~/components/Layout/components/Heading';
import Button from '~/components/Layout/components/Button';
import Search from '../Search';
import { useState, useEffect } from 'react';
import ShoppingCart from '~/pages/User/ShoppingCart';

const cx = classNames.bind(styles);

function HeaderUser() {
    const usenavigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        alert('Đăng xuất thành công!!');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
        usenavigate('/login');
    };
    return (
        <header className={cx('header')}>
            <div className={cx('grid')}>
                <div className={cx('navbar')}>
                    <ul className={cx('navbar-list')}>
                        <li className={cx('navbar-item', 'navbar-separate', 'navbar-qr')}>
                            Tải ứng dụng
                            {/* QR */}
                            <div className={cx('qr')}>
                                <img src={img.qr} className={cx('qr-img')} />
                                <div className={cx('download')}>
                                    <a href="" className={cx('download-item')}>
                                        <img src={img.as} className={cx('download-img')} />
                                    </a>
                                    <a href="" className={cx('download-item')}>
                                        <img src={img.ggp} className={cx('download-img')} />
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className={cx('navbar-item')}>
                            <span className={cx('title')}>Kết nối</span>
                            <a href="" className={cx('navbar-icon-link')}>
                                <FontAwesomeIcon icon={faFacebook} className={cx('navbar-icon')} />
                            </a>
                            <a href="" className={cx('navbar-icon-link')}>
                                <FontAwesomeIcon icon={faInstagram} className={cx('navbar-icon')} />
                            </a>
                        </li>
                    </ul>

                    <ul className={cx('navbar-list')}>
                        <li className={cx('navbar-item', 'navbar-notify')}>
                            <Tippy
                                interactive
                                // visible
                                placement="bottom-end"
                                render={(attrs) => (
                                    <Menu>
                                        <Heading>Thông báo mới nhận</Heading>
                                        <ul className={cx('notify-list')}>
                                            <li className={cx('notify-item')}>
                                                <a href="" className={cx('notify-link')}>
                                                    <img src={img.asus_rog_strix} className={cx('notify-img')} />
                                                    <div className={cx('notify-info')}>
                                                        <p className={cx('notify-title')}>
                                                            ASUS ROG Strix GeForce RTX 4090 OC White Edition 24GB GDDR6X
                                                        </p>
                                                        <p className={cx('notify-content')}>Mô tả</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <footer className={cx('notify-footer')}>
                                            <a href="" className={cx('notify-btn')}>
                                                Xem tất cả
                                            </a>
                                        </footer>
                                    </Menu>
                                )}
                            >
                                <a href="" className={cx('navbar-icon-link')}>
                                    <FontAwesomeIcon icon={faBell} className={cx('navbar-icon')} />
                                    <span>Thông báo</span>
                                </a>
                            </Tippy>
                        </li>

                        <li className={cx('navbar-item')}>
                            <a href="" className={cx('navbar-icon-link')}>
                                <FontAwesomeIcon icon={faCircleQuestion} className={cx('navbar-icon')} />
                                <span>Trợ giúp</span>
                            </a>
                        </li>

                        <li className={cx('navbar-item')}>
                            <Button signUp onClick={handleLogout}>
                                Logout
                            </Button>
                        </li>

                        <li className={cx('navbar-item')}>
                            <Button logIn>Welcome, {userName.User_Username}</Button>
                        </li>
                    </ul>
                </div>

                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        <Button backHome to={'/user'}>
                            <img src={img.logo} className={cx('container-logo')} />
                        </Button>
                    </div>

                    {/* <Search /> */}

                    <div className={cx('cart')}>
                        {/* <ShoppingCart
                            visibilty={cartsVisibilty}
                            products={prodsInCart}
                            onClose={() => setCartVisible(false)}
                            onQuantityChange={onQuantityChange}
                            onProductRemove={onProductRemove}
                        /> */}
                        {/* <Tippy
                            interactive
                            // visible
                            placement="bottom-end"
                            render={(attrs) => (
                                <Menu cart>
                                    <Heading>Sản phẩm mới thêm</Heading>
                                    <ul className={cx('notify-list')}>
                                        <li className={cx('notify-item')}>
                                            <a href="" className={cx('notify-link')}>
                                                <img src={img.asus_rog_strix} className={cx('notify-img')} />
                                                <div className={cx('notify-info')}>
                                                    <p className={cx('notify-title')}>
                                                        ASUS ROG Strix GeForce RTX 4090 OC White Edition 24GB GDDR6X
                                                    </p>
                                                    <p className={cx('notify-content')}>Mô tả</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <Button primary rightBtn>
                                        Xem giỏ hàng
                                    </Button>
                                </Menu>
                            )}
                        > */}
                        <Button noBG className={cx('cart-item')} to={'/shopping-cart'}>
                            <FontAwesomeIcon icon={faCartShopping} className={cx('cart-icon')} />
                            {/* {prodsInCart.length > 0 && <span>{prodsInCart.length}</span>} */}
                        </Button>
                        {/*  */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderUser;

import img from '~/assets/img';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCartShopping, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Heading from '~/components/Layout/components/Heading';
import Button from '~/components/Layout/components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        img: img.asus_rog_strix,
        title: 'ASUS_ROG_Strix_GeForce_RTX_4090_OC_White_Edition_24GB_GDDR6X',
        content: 'Mô tả',
    },

    {
        img: img.asus_rog_strix,
        title: 'ASUS_ROG_Strix_GeForce_RTX_4090_OC_White_Edition_24GB_GDDR6X',
        content: 'Mô tả',
    },

    {
        img: img.asus_rog_strix,
        title: 'ASUS_ROG_Strix_GeForce_RTX_4090_OC_White_Edition_24GB_GDDR6X',
        content: 'Mô tả',
    },
];

function Header() {
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
                            <Button signUp to={'/signup'}>
                                Đăng ký
                            </Button>
                        </li>

                        <li className={cx('navbar-item')}>
                            <Button logIn to={'/login'}>
                                Đăng nhập
                            </Button>
                        </li>
                    </ul>
                </div>

                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        <Button backHome to={'/'}>
                            <img src={img.logo} className={cx('container-logo')} />
                        </Button>
                    </div>

                    {/* <Search /> */}

                    <div className={cx('cart')}>
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
                        >
                            <a href="" className={cx('cart-item')}>
                                <FontAwesomeIcon icon={faCartShopping} className={cx('cart-icon')} />
                            </a>
                        </Tippy> */}
                        <Button noBG className={cx('cart-item')} to={'/guest-cart'}>
                            <FontAwesomeIcon icon={faCartShopping} className={cx('cart-icon')} />
                            {/* {prodsInCart.length > 0 && <span>{prodsInCart.length}</span>} */}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

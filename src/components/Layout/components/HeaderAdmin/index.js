import img from '~/assets/img';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCartShopping, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './HeaderAdmin.module.scss';
import Menu from '~/components/Popper/Menu';
import Heading from '~/components/Layout/components/Heading';
import Button from '~/components/Layout/components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);

function HeaderAdmin() {
    const usenavigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('admin'));
    const handleLogout = () => {
        alert('Đăng xuất thành công!!');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('admin');
        usenavigate('/login');
    };
    return (
        <header className={cx('header')}>
            {/* <div className={cx('grid')}>
                
            </div> */}
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
                        <Button logIn>Welcome, {userName.Ad_Username}</Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderAdmin;

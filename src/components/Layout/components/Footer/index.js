import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Heading from '../Heading';
import Button from '../Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('grid')}>
                <div className={cx('grid-row')}>
                    <div className={cx('grid-column-3')}>
                        <Heading footer>Chăm sóc khách hàng</Heading>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <Button footer>Trung tâm trợ giúp</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button footer>Hướng dẫn mua hàng</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button footer>Mall</Button>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid-column-3')}>
                        <Heading footer>Giới thiệu</Heading>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <Button footer>Giới thiệu về shop</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button footer>Tuyển dụng</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button footer>Điều khoản</Button>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid-column-3')}>
                        <Heading footer>Theo dõi</Heading>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <Button footer>Facebook</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button footer>Instagram</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button footer>Linkedln</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx('bottom')}>
                <div className={cx('grid')}>
                    <Heading text>2023 - Bản quyền thuộc về ZRT</Heading>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

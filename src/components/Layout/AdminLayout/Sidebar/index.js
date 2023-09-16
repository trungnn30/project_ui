import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faList,
    faHouse,
    faGaugeHigh,
    faMicrochip,
    faPerson,
    faTruckField,
    faClipboardUser,
} from '@fortawesome/free-solid-svg-icons';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <nav className={cx('category')}>
            <Heading category>
                <FontAwesomeIcon icon={faGaugeHigh} className={cx('category-icon')} />
                Dashboard
            </Heading>

            <ul className={cx('category-list')}>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/admin'}>
                        <FontAwesomeIcon icon={faHouse} className={cx('category-icon')} />
                        <span>Home</span>
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/ad-cate'}>
                        <FontAwesomeIcon icon={faList} className={cx('category-icon')} />
                        Danh mục
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/ad-prod'}>
                        <FontAwesomeIcon icon={faMicrochip} className={cx('category-icon')} />
                        Sản phẩm
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/ad-staff'}>
                        <FontAwesomeIcon icon={faPerson} className={cx('category-icon')} />
                        Nhân viên
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/ad-supplier'}>
                        <FontAwesomeIcon icon={faTruckField} className={cx('category-icon')} />
                        Nhà cung cấp
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/ad-user'}>
                        <FontAwesomeIcon icon={faClipboardUser} className={cx('category-icon')} />
                        Khách hàng
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

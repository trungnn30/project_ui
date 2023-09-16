import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faHouse, faReceipt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
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
                    <Button className={cx('category-link')} toCateAdmin to={'/staff'}>
                        <FontAwesomeIcon icon={faHouse} className={cx('category-icon')} />
                        Home
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/order'}>
                        <FontAwesomeIcon icon={faReceipt} className={cx('category-icon')} />
                        Phiếu xuất
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button className={cx('category-link')} toCateAdmin to={'/receipt'}>
                        <FontAwesomeIcon icon={faClipboardCheck} className={cx('category-icon')} />
                        Phiếu nhập
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <nav className={cx('category')}>
            <Heading category>
                <FontAwesomeIcon icon={faList} className={cx('category-icon')} />
                Danh mục
            </Heading>

            <ul className={cx('category-list')}>
                <li className={cx('category-item')}>
                    <Button toCate to={'/'}>
                        Home
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/CPU'}>
                        CPU - bộ vi xử lý
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/RAM'}>
                        RAM - bộ nhớ trong
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/VGA'}>
                        VGA - Card màn hình
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/PSU'}>
                        PSU - Nguồn máy tính
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/CASE'}>
                        CASE - Vỏ máy tính
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/FAN'}>
                        FAN RGB - Tản nhiệt
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

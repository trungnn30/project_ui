import classNames from 'classnames/bind';
import styles from './SearchHistory.module.scss';

const cx = classNames.bind(styles);

function SearchHistory() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <a href="" className={cx('item-link')}>
                        VGA
                    </a>
                </li>
                <li className={cx('item')}>
                    <a href="" className={cx('item-link')}>
                        Card man hinh
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SearchHistory;

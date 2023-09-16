import classNames from 'classnames/bind';
import styles from './PriceItem.module.scss';

const cx = classNames.bind(styles);

function PriceItem() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <a href="" className={cx('item-link')}>
                        Giá: thấp đến cao
                    </a>
                </li>
                <li className={cx('item')}>
                    <a href="" className={cx('item-link')}>
                        Giá: cao đến thấp
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PriceItem;

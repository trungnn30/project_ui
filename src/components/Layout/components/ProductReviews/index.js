import classNames from 'classnames/bind';
import Heading from '../Heading';
import styles from './ProductReviews.module.scss';

const cx = classNames.bind(styles);

function ProductReviews({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Heading big>Đánh giá chi tiết</Heading>
            <p className={cx('reviews')}>{children}</p>
        </div>
    );
}

export default ProductReviews;

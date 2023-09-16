import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import ProductDetail from '~/components/Layout/components/ProductDetail';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('grid')}>
            <ProductDetail />
        </div>
    );
}

export default Product;

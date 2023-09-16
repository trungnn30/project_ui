import classNames from 'classnames/bind';
import img from '~/assets/img';
import Button from '../Button';
import Heading from '../Heading';
import ProductReviews from '../ProductReviews';
import ProductSpecification from '../ProductSpecification';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-row', 'main-container')}>
                <div className={cx('grid-column-6')}>
                    <img src={img.asus_rog_strix_white} className={cx('detail-img')} />
                </div>
                <div className={cx('grid-column-6')}>
                    <div className={cx('detail-info')}>
                        <Heading big>ASUS ROG Strix GeForce RTX 4090 OC White Edition 24GB GDDR6X</Heading>
                        <div className={cx('detail-general')}>
                            <Heading text bold>
                                Thông tin chung
                            </Heading>
                            <ul className={cx('detail-list')}>
                                <li className={cx('detail-item')}>Hãng sản xuất: ASUS</li>
                                <li className={cx('detail-item')}>Mã sản phẩm: ROG-STRIX-RTX4090-O24G-WHITE</li>
                                <li className={cx('detail-item')}>Bảo hành: 36 Tháng</li>
                            </ul>
                        </div>
                        <div className={cx('detail-cart')}>
                            <p className={cx('detail-price')}>
                                <span>Giá: </span>
                                <span>999.000đ </span>
                            </p>
                            <Button sizeE disableHover>
                                Đặt hàng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('grid')}>
                <div className={cx('detail-describe')}>
                    <ProductSpecification />
                    <ProductReviews>
                        RTX 4090, một trong những GPU cao cấp nhất đến từ thế hệ RTX 40 Series của NVIDIA. Mang trong
                        mình những công nghệ xử lý đồ họa cùng cải tiến từ thế hệ tiền nhiệm, RTX 4090 tự tin xử lý mọi
                        tác vụ đồ họa từ trung bình đến cao cấp một cách suôn sẻ. Kết hợp cùng ASUS ROG, GPU cao cấp từ
                        NVIDIA hoàn thiện với phiên bản ASUS ROG Strix GeForce RTX 4090 OC White Edition 24GB GDDR6X.
                    </ProductReviews>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

import classNames from 'classnames/bind';
import Heading from '../Heading';
import styles from './ProductSpecification.module.scss';

const cx = classNames.bind(styles);

function ProductSpecification() {
    return (
        <div className={cx('wrapper')}>
            <Heading text bold>
                Thông số kỹ thuật
            </Heading>
            <table className={cx('spec')}>
                <tbody>
                    <tr>
                        <td>Nhân đồ họa</td>
                        <td>NVIDIA GeForce RTX 4090</td>
                    </tr>
                    <tr>
                        <td>Bus tiêu chuẩn</td>
                        <td>PCI Express 4.0</td>
                    </tr>
                    <tr>
                        <td>Xung nhịp</td>
                        <td>
                            Chế độ OC: 2640 MHz
                            <br />
                            Chế độ mặc định: 2610 MHz (Boost Clock)
                        </td>
                    </tr>
                    <tr>
                        <td>Nhân CUDA</td>
                        <td>16384</td>
                    </tr>
                    <tr>
                        <td>Tốc độ bộ nhớ</td>
                        <td>21 Gbps</td>
                    </tr>
                    <tr>
                        <td>OpenGL</td>
                        <td>OpenGL 4.6</td>
                    </tr>
                    <tr>
                        <td>Bộ nhớ Video</td>
                        <td>24 GB GDDR6X</td>
                    </tr>
                    <tr>
                        <td>Giao thức bộ nhớ</td>
                        <td>384-bit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductSpecification;

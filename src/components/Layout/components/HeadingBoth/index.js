import classNames from 'classnames/bind';
import Heading from '../Heading';
import styles from './HeadingBoth.module.scss';

const cx = classNames.bind(styles);

function HeadingBoth({ children }) {
    return (
        <header className={cx('header')}>
            <div className={cx('grid')}>
                <div className={cx('wrapper')}>
                    <Heading both>{children}</Heading>
                </div>
            </div>
        </header>
    );
}

export default HeadingBoth;

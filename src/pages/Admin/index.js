import styles from './Admin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Admin() {
    return <p className={cx('text')}>Chào mừng đến với page Admin</p>;
}

export default Admin;

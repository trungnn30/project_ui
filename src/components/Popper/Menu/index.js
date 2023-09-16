import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, cart }) {
    const classes = cx('wrapper', {
        cart,
    });

    return <div className={classes}>{children}</div>;
}

export default Menu;

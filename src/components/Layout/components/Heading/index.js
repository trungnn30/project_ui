import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

function Heading({ className, children, category, footer, text, both, form, big, bold }) {
    let Comp = 'h3';

    const classes = cx('wrapper', {
        [className]: className,
        category,
        footer,
        text,
        both,
        form,
        big,
        bold,
    });

    return <Comp className={classes}>{children}</Comp>;
}

export default Heading;

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    className,
    to,
    href,
    children,
    primary,
    rightBtn,
    sizeA,
    sizeB,
    sizeC,
    sizeD,
    sizeE,
    noBG,
    disableHover,
    footer,
    signUp,
    logIn,
    form,
    backHome,
    toDetail,
    toCate,
    toCateAdmin,
    onClick,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        rightBtn,
        sizeA,
        sizeB,
        sizeC,
        sizeD,
        sizeE,
        noBG,
        disableHover,
        footer,
        signUp,
        logIn,
        form,
        backHome,
        toDetail,
        toCate,
        toCateAdmin,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;

import classNames from 'classnames/bind';
import { FormSignup } from '~/components/Layout/components/Form';
import styles from './Signup.module.scss';

const cx = classNames.bind(styles);

function Signup() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <FormSignup></FormSignup>
            </div>
        </div>
    );
}

export default Signup;

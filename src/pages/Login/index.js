import classNames from 'classnames/bind';
import { FormLogin } from '~/components/Layout/components/Form';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;

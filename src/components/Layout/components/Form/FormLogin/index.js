import classNames from 'classnames/bind';
import Button from '../../Button';
import Heading from '../../Heading';
import styles from './FormLogin.module.scss';
import img from '~/assets/img';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../Image';

const cx = classNames.bind(styles);

function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usenavigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            Ad_Username: username,
            Ad_Password: password,
            Ad_Role: 'Admin',
        };

        const data2 = {
            User_Username: username,
            User_Password: password,
            User_Role: 'User',
        };

        const data3 = {
            Staff_Username: username,
            Staff_Password: password,
            Staff_Role: 'Staff',
        };

        const url2 = 'https://localhost:44397/api/ad_login';
        fetch(url2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result === 'Admin Valid') {
                    localStorage.setItem('admin', JSON.stringify(data));
                    localStorage.setItem('loggedIn', true);
                    alert('Admin Successful!!');
                    usenavigate('/admin');
                    // console.log(result);
                }
                // else if (result === 'Admin InValid') {
                //     localStorage.setItem('loggedIn', false);
                //     console.log(result);
                //     if (JSON.parse(localStorage.getItem('loggedIn')) === false) {
                //         alert('Please enter valid credentials!!');
                //     }
                // }
            })
            .catch((error) => {
                console.log(error);
                alert('Error!!');
            });

        const url3 = 'https://localhost:44397/api/user_login';
        fetch(url3, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result === 'User Valid') {
                    localStorage.setItem('user', JSON.stringify(data2));
                    localStorage.setItem('loggedIn', true);
                    alert('User Successful!!');
                    usenavigate('/user');
                    // console.log(result);
                }
                // else {
                //     alert('Please enter valid credentials!!');
                //     console.log(result);
                // }
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        const url4 = 'https://localhost:44397/api/staff_login';
        fetch(url4, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data3),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result === 'Staff Valid') {
                    localStorage.setItem('staff', JSON.stringify(data3));
                    localStorage.setItem('loggedIn', true);
                    alert('Staff Successful!!');
                    usenavigate('/staff');
                    // console.log(result);
                }
                // else {
                //     alert('Please enter valid credentials!!');
                //     console.log(result);
                // }
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        if (!username) {
            alert('Username is required!!');
            return;
        }
        if (!password) {
            alert('Password is required!!');
            return;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Button backHome to={'/'}>
                    <img src={img.logo} className={cx('img-logo')} />
                </Button>
            </div>
            <div className={cx('form-login')}>
                <Heading form>Đăng nhập</Heading>
                <div className={cx('inner')}>
                    <div className={cx('input-box')}>
                        <input
                            placeholder="Tên đăng nhập"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            placeholder="Mật khẩu"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button sizeD primary onClick={handleSubmit}>
                        Đăng nhập
                    </Button>
                    <span className={cx('under')}>
                        <span className={cx('forgot')}>Quên mật khẩu</span>
                        <span className={cx('sms')}>Đăng nhập với SMS</span>
                    </span>
                    <span className={cx('signup')}>
                        <span className={cx('title')}>Bạn mới biết đến Shop?</span>
                        <Button form to={'/signup'}>
                            Đăng ký
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Form;

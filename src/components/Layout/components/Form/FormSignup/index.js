import classNames from 'classnames/bind';
import Button from '../../Button';
import Heading from '../../Heading';
import styles from './FormSignup.module.scss';
import img from '~/assets/img';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Form() {
    const [repassword, setRePassword] = useState('');

    const iniData = Object.freeze({
        User_Username: '',
        User_Password: '',
        Name: '',
        Phone: '',
        Email: '',
        Address: '',
    });

    const [formData, setFormData] = useState(iniData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userRegis = {
            Userid: null,
            User_Username: formData.User_Username,
            User_Password: formData.User_Password,
            Name: formData.Name,
            Phone: formData.Phone,
            Email: formData.Email,
            Address: formData.Address,
            User_Role: 'User',
        };

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const number = [0 - 9];
        if (!userRegis.User_Username) {
            alert('Username is required!');
            return;
        }
        if (!repassword) {
            alert('Repassword is required!');
            return;
        }
        if (!userRegis.Address) {
            alert('Address is required!');
            return;
        }
        if (!userRegis.Phone) {
            alert('Phone is required!');
            return;
        } else if (!number.test(userRegis.Phone)) {
            alert('Phone is number!!');
        } else if (userRegis.Phone.length < 0) {
            alert('Phone must be more than 0 characters');
            return;
        } else if (userRegis.Phone.length > 10) {
            alert('Phone cannot exceed more than 10 characters');
            return;
        }
        if (!userRegis.Email) {
            alert('Email is required!');
            return;
        } else if (!regex.test(userRegis.Email)) {
            alert('This is not a valid email format!');
            return;
        }
        if (!userRegis.User_Password) {
            alert('Password is required!');
            return;
        } else if (userRegis.User_Password.length > 10) {
            alert('Password cannot exceed more than 10 characters');
            return;
        }
        if (userRegis.User_Password !== repassword) {
            alert('Password and repassword incorrect');
            return;
        }

        const url = 'https://localhost:44397/api/regis';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegis),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                alert('Đăng ký thành công!!');
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Button backHome to={'/'}>
                    <img src={img.logo} className={cx('img-logo')} />
                </Button>
            </div>
            <div className={cx('form-signup')}>
                <Heading form>Đăng ký</Heading>
                <div className={cx('inner')}>
                    <div className={cx('sub-inner')}>
                        <div className={cx('row-inner')}>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Tên đăng nhập"
                                    type="text"
                                    name="User_Username"
                                    value={formData.User_Username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Mật khẩu"
                                    type="password"
                                    name="User_Password"
                                    value={formData.User_Password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Xác nhận mật khẩu"
                                    type="password"
                                    value={repassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('row-inner')}>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Họ và tên"
                                    type="text"
                                    name="Name"
                                    value={formData.Name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Điện thoại"
                                    type="text"
                                    name="Phone"
                                    value={formData.Phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-box')}>
                                <input
                                    placeholder="Địa chỉ"
                                    type="text"
                                    name="Address"
                                    value={formData.Address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn-regis')}>
                        <Button sizeD primary onClick={handleSubmit}>
                            Đăng ký
                        </Button>
                    </div>
                    <span className={cx('login')}>
                        <span className={cx('title')}>Bạn đã có tài khoản?</span>
                        <Button form to={'/login'}>
                            Đăng nhập
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Form;

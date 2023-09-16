import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './StaffCreateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function StaffCreateForm(props) {
    const iniData = Object.freeze({
        Staffid: '',
        Staff_Username: '',
        Staff_Password: '',
        Name: '',
        Phone: '',
        Email: '',
        Address: '',
        DateStartWork: '',
    });

    const [formData, setFormData] = useState(iniData);

    // const [listCate, setListCate] = useState([{ Categoryid: '', CategoryName: '' }]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const resp = await fetch('https://localhost:44397/api/Category');
    //         const newData = await resp.json();
    //         setListCate(newData);
    //         // console.log(newData);
    //     };
    //     fetchData();
    // }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const staffToCreate = {
            Staffid: null,
            Staff_Username: formData.Staff_Username,
            Staff_Password: formData.Staff_Password,
            Name: formData.Name,
            Phone: formData.Phone,
            Email: formData.Email,
            Address: formData.Address,
            DateStartWork: formData.DateStartWork,
        };

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const number = /^[0-9]{0,10}$/;
        if (!staffToCreate.Staff_Username) {
            alert('Empty username');
            return;
        }
        if (!staffToCreate.Staff_Password) {
            alert('Empty password');
            return;
        }
        if (!staffToCreate.Name) {
            alert('Empty name');
            return;
        } else if (staffToCreate.Name < 5) {
            alert('Name must be more than 4 characters');
            return;
        } else if (staffToCreate.Name > 40) {
            alert('Name cannot exceed more than 10 characters');
            return;
        }
        if (!staffToCreate.Phone) {
            alert('Empty phone');
            return;
        } else if (!number.test(staffToCreate.Phone)) {
            alert('Phone is number!!');
            return;
        }
        if (!staffToCreate.Email) {
            alert('Empty email');
            return;
        } else if (!regex.test(staffToCreate.Email)) {
            alert('This is not a valid email format!');
            return;
        }
        if (!staffToCreate.Address) {
            alert('Empty address');
            return;
        }
        if (!staffToCreate.DateStartWork) {
            alert('Empty date start work');
            return;
        }

        const url = 'https://localhost:44397/api/Staff';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(staffToCreate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onStaffCreated(staffToCreate);
    };

    return (
        <form className={cx('create')}>
            <h1>Create New Staff</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>Username: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Staff_Username}
                        name="Staff_Username"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Password: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Staff_Password}
                        name="Staff_Password"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Name: </label>
                    <input className={cx('ip')} value={formData.Name} name="Name" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label className={cx('lbl')}>Phone: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Phone}
                        name="Phone"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Email: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Email}
                        name="Email"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Address: </label>
                    <input
                        className={cx('ip')}
                        value={formData.Address}
                        name="Address"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Date Start Work: </label>
                    <input
                        className={cx('ip')}
                        value={formData.DateStartWork}
                        name="DateStartWork"
                        type="date"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onStaffCreated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default StaffCreateForm;

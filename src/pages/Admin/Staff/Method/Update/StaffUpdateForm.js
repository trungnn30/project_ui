import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './StaffUpdateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function StaffUpdateForm(props) {
    const iniData = Object.freeze({
        Staff_Username: props.staff.Staff_Username,
        Staff_Password: props.staff.Staff_Password,
        Name: props.staff.Name,
        Phone: props.staff.Phone,
        Email: props.staff.Email,
        Address: props.staff.Address,
        DateStartWork: props.staff.DateStartWork,
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

        const staffToUpdate = {
            Staffid: props.staff.Staffid,
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
        if (!staffToUpdate.Staff_Username) {
            alert('Empty username');
            return;
        }
        if (!staffToUpdate.Staff_Password) {
            alert('Empty password');
            return;
        }
        if (!staffToUpdate.Name) {
            alert('Empty name');
            return;
        } else if (staffToUpdate.Name < 1) {
            alert('Name must be more than 4 characters');
            return;
        } else if (staffToUpdate.Name > 40) {
            alert('Name cannot exceed more than 10 characters');
            return;
        }
        if (!staffToUpdate.Phone) {
            alert('Empty phone');
            return;
        } else if (!number.test(staffToUpdate.Phone)) {
            alert('Phone is number!!');
            return;
        }
        if (!staffToUpdate.Email) {
            alert('Empty email');
            return;
        } else if (!regex.test(staffToUpdate.Email)) {
            alert('This is not a valid email format!');
            return;
        }
        if (!staffToUpdate.Address) {
            alert('Empty address');
            return;
        }
        if (!staffToUpdate.DateStartWork) {
            alert('Empty date start work');
            return;
        }

        const url = 'https://localhost:44397/api/Staff';
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(staffToUpdate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onStaffUpdated(staffToUpdate);
    };

    return (
        <form className={cx('create')}>
            <h1>Update Staff</h1>
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
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onStaffUpdated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default StaffUpdateForm;

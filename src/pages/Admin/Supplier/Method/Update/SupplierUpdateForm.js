import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SupplierUpdateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function SupplierUpdateForm(props) {
    const iniData = Object.freeze({
        ProducerId: props.staff.ProducerId,
        SName: props.staff.SName,
        Phone: props.staff.Phone,
        Address: props.staff.Address,
        PostalCode: props.staff.PostalCode,
    });

    const [formData, setFormData] = useState(iniData);

    const [listNSX, setListNSX] = useState([{ ProducerId: '', ProducerName: '' }]);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://localhost:44397/api/Producer');
            const newData = await resp.json();
            setListNSX(newData);
            // console.log(newData);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const supplierToUpdate = {
            Sid: props.staff.Sid,
            ProducerId: formData.ProducerId,
            SName: formData.SName,
            Phone: formData.Phone,
            Address: formData.Address,
            PostalCode: formData.PostalCode,
        };

        const number = /^[0-9]{0,10}$/;
        if (!supplierToUpdate.ProducerId) {
            alert('Empty producer name');
            return;
        }
        if (!supplierToUpdate.SName) {
            alert('Empty name');
            return;
        } else if (supplierToUpdate.SName > 40) {
            alert("Name cannot exceed more than 40 characters'");
            return;
        }
        if (!supplierToUpdate.Phone) {
            alert('Empty phone');
            return;
        } else if (!number.test(supplierToUpdate.Phone)) {
            alert('Phone is number');
            return;
        }
        if (!supplierToUpdate.PostalCode) {
            alert('Empty postal code');
            return;
        } else if (!number.test(supplierToUpdate.PostalCode)) {
            alert('Postal Code is number');
            return;
        }

        const url = 'https://localhost:44397/api/Supplier';
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(supplierToUpdate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onSupplierUpdated(supplierToUpdate);
    };

    return (
        <form className={cx('create')}>
            <h1>Update Supplier</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>ProducerId: </label>
                    <select
                        value={formData.ProducerId}
                        name="ProducerId"
                        onChange={handleChange}
                        className={cx('selection')}
                    >
                        <option value="" disabled>
                            -- Select --
                        </option>
                        {listNSX.map((x) => (
                            <option value={x.ProducerId} key={x.ProducerId}>
                                {x.ProducerName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={cx('lbl')}>Supplier Name: </label>
                    <input
                        className={cx('ip')}
                        value={formData.SName}
                        name="SName"
                        type="text"
                        onChange={handleChange}
                    />
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
                    <label className={cx('lbl')}>Postal Code: </label>
                    <input
                        className={cx('ip')}
                        value={formData.PostalCode}
                        name="PostalCode"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onSupplierUpdated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default SupplierUpdateForm;

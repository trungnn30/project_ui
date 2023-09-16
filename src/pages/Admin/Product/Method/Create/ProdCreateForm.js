import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProdCreateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function ProdCreateForm(props) {
    const iniData = Object.freeze({
        Sid: '',
        Categoryid: '',
        ProdName: '',
        ImagePath: '',
        Price: '',
        Quantity: '',
        Status: '',
    });

    const [formData, setFormData] = useState(iniData);

    const [listCate, setListCate] = useState([{ Categoryid: '', CategoryName: '' }]);
    const [listSupplier, setListSupplier] = useState([{ Sid: '', SName: '' }]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://localhost:44397/api/Category');
            const newData = await resp.json();
            setListCate(newData);
            // console.log(newData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://localhost:44397/api/Supplier');
            const newData = await resp.json();
            setListSupplier(newData);
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

        const prodToCreate = {
            Pid: null,
            Sid: formData.Sid,
            Categoryid: formData.Categoryid,
            ProdName: formData.ProdName,
            MetaTitle: formData.MetaTitle,
            Description: formData.Description,
            ImagePath: formData.ImagePath,
            Price: formData.Price,
            Quantity: formData.Quantity,
            Status: formData.Status,
        };

        if (!prodToCreate.ProdName) {
            alert('Empty product name!!');
            return;
        } else if (prodToCreate.ProdName.length > 100) {
            alert('Product name cannot exceed more than 100 characters!');
            return;
        } else if (prodToCreate.Price.length > 10 || prodToCreate.Price.length < 7) {
            alert('Price from 7 to 10 characters!!');
            return;
        } else if (prodToCreate.Categoryid === '') {
            alert('Category name must be selected!!');
            return;
        } else if (prodToCreate.Sid === '') {
            alert('Supplier name must be selected!!');
            return;
        }

        const url = 'https://localhost:44397/api/Product';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prodToCreate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onProdCreated(prodToCreate);
    };

    return (
        <form className={cx('create')}>
            <h1>Create New Prod</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>Supplier Name:</label>
                    <select value={formData.Sid} name="Sid" onChange={handleChange} className={cx('selection')}>
                        <option value="" disabled>
                            -- Select --
                        </option>
                        {listSupplier.map((x) => (
                            <option value={x.Sid} key={x.Sid}>
                                {x.SName}
                            </option>
                        ))}
                    </select>
                    {/* <input className={cx('ip')} value={formData.Categoryid} name="Categoryid" type="text" onChange={handleChange} /> */}
                </div>
                <div>
                    <label className={cx('lbl')}>Category Name:</label>
                    <select
                        value={formData.Categoryid}
                        name="Categoryid"
                        onChange={handleChange}
                        className={cx('selection')}
                    >
                        <option value="" disabled>
                            -- Select --
                        </option>
                        {listCate.map((x) => (
                            <option value={x.Categoryid} key={x.Categoryid}>
                                {x.CategoryName}
                            </option>
                        ))}
                    </select>
                    {/* <input className={cx('ip')} value={formData.Categoryid} name="Categoryid" type="text" onChange={handleChange} /> */}
                </div>
                <div>
                    <label className={cx('lbl')}>Prod Name:</label>
                    <input
                        className={cx('ip')}
                        value={formData.ProdName}
                        name="ProdName"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>ImagePath:</label>
                    <input
                        className={cx('ip')}
                        value={formData.ImagePath}
                        name="ImagePath"
                        type="file"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Price:</label>
                    <input
                        className={cx('ip')}
                        value={formData.Price}
                        name="Price"
                        type="number"
                        pattern="[0-9]"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Quantity:</label>
                    <input
                        className={cx('ip')}
                        value={formData.Quantity}
                        name="Quantity"
                        type="number"
                        pattern="[0-9]"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>Status:</label>
                    <input
                        className={cx('ip')}
                        value={formData.Status}
                        name="Status"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onProdCreated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default ProdCreateForm;

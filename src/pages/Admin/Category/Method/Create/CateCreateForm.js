import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CateCreateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function CateCreateForm(props) {
    const iniData = Object.freeze({
        CategoryName: '',
        MetaTitle: '',
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

        const cateToCreate = {
            Categoryid: null,
            CategoryName: formData.CategoryName,
            MetaTitle: formData.MetaTitle,
        };

        if (!cateToCreate.CategoryName) {
            alert('Empty category name!!');
            return;
        } else if (cateToCreate.CategoryName.length > 100) {
            alert('Category Name cannot exceed more than 100 characters!');
            return;
        }

        const url = 'https://localhost:44397/api/Category';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cateToCreate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onCateCreated(cateToCreate);
    };

    return (
        <form className={cx('create')}>
            <h1>Create new category</h1>
            <div className={cx('wrapper')}>
                <div>
                    <label className={cx('lbl')}>Category Name: </label>
                    <input
                        value={formData.CategoryName}
                        className={cx('ip')}
                        name="CategoryName"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={cx('lbl')}>MetaTitle: </label>
                    <input
                        value={formData.MetaTitle}
                        className={cx('ip')}
                        name="MetaTitle"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Button sizeA primary onClick={handleSubmit}>
                Submit
            </Button>
            <Button sizeA onClick={(e) => props.onCateCreated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default CateCreateForm;

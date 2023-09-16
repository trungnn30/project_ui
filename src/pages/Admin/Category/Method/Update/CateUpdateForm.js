import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CateUpdateForm.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function CateUpdateForm(props) {
    const iniData = Object.freeze({
        CategoryName: props.cate.CategoryName,
        MetaTitle: props.cate.MetaTitle,
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

        const cateToUpdate = {
            Categoryid: props.cate.Categoryid,
            CategoryName: formData.CategoryName,
            MetaTitle: formData.MetaTitle,
        };

        if (!cateToUpdate.CategoryName) {
            alert('Empty category name!!');
            return;
        } else if (cateToUpdate.CategoryName.length > 100) {
            alert('Category name cannot exceed more than 100 characters!');
            return;
        }

        const url = 'https://localhost:44397/api/Category';
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cateToUpdate),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        props.onCateUpdated(cateToUpdate);
    };

    return (
        <form className={cx('update')}>
            <h1>Update category</h1>
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
            <Button sizeA onClick={(e) => props.onCateUpdated(null)}>
                Cancel
            </Button>
        </form>
    );
}

export default CateUpdateForm;

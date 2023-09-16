import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(styles);

function Ad_User() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const url = 'https://localhost:44397/api/User';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setUsers(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);

    // function deleteSupplier(Sid) {
    //     const url = `${'https://localhost:44397/api/User.module.scss'}/${Sid}`;
    //     fetch(url, {
    //         method: 'DELETE',
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result);
    //             onSupplierDeleted(Sid);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert(error);
    //         });
    // }

    // function onSupplierCreated(createdSupplier) {
    //     setShowingSupplierCreateForm(false);

    //     if (createdSupplier === null) {
    //         return;
    //     }

    //     alert('Add successfully!!');

    //     getUsers();
    // }

    // function onSupplierUpdated(updatedSupplier) {
    //     setSupplierCurrently(null);

    //     if (updatedSupplier === null) {
    //         return;
    //     }

    //     let suppliersCopy = [...users];

    //     const index = users.findIndex((suppliersCopyProd, currentIndex) => {
    //         if (suppliersCopyProd.Sid === updatedSupplier.Sid) {
    //             return true;
    //         }
    //     });

    //     if (index !== -1) {
    //         suppliersCopy[index] = updatedSupplier;
    //     }

    //     setUsers(suppliersCopy);

    //     alert(`Update successfully!!`);
    // }

    // function onSupplierDeleted(deleteByID) {
    //     let suppliersCopy = [...users];

    //     const index = suppliersCopy.findIndex((suppliersCopyStaff, currentIndex) => {
    //         if (suppliersCopyStaff.Sid === deleteByID) {
    //             return true;
    //         }
    //     });

    //     if (index !== -1) {
    //         suppliersCopy.splice(index, 1);
    //     }

    //     setUsers(suppliersCopy);

    //     alert(`Delete successfully!!`);
    // }

    function renderUserTable() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập khách hàng cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <table className={cx('table-prod')}>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>UserName</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            .filter((item) => {
                                return search.toLowerCase() === '' ? item : item.Name.toLowerCase().includes(search);
                            })
                            .map((user) => (
                                <tr key={user.Userid}>
                                    <td>{user.Userid}</td>
                                    <td>{user.User_Username}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Phone}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Address}</td>
                                    <td>{user.Rating}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </>
        );
    }

    return <div className="grid">{users.length > 0 && renderUserTable()}</div>;
}

export default Ad_User;

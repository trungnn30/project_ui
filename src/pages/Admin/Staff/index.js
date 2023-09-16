import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Staff.module.scss';
import Button from '~/components/Layout/components/Button';
import StaffCreateForm from './Method/Create/StaffCreateForm';
import StaffUpdateForm from './Method/Update/StaffUpdateForm';

const cx = classNames.bind(styles);

function Ad_Staff() {
    const [staffs, setStaffs] = useState([]);
    const [showingStaffCreateForm, setShowingStaffCreateForm] = useState(false);
    const [staffCurrently, setStaffCurrently] = useState(null);
    const [search, setSearch] = useState('');

    function getStaffs() {
        const url = 'https://localhost:44397/api/Staff';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setStaffs(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    useEffect(() => {
        const url = 'https://localhost:44397/api/Staff';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setStaffs(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);

    function deleteStaff(StaffId) {
        const url = `${'https://localhost:44397/api/Staff'}/${StaffId}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                onStaffDeleted(StaffId);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function onStaffCreated(createdStaff) {
        setShowingStaffCreateForm(false);

        if (createdStaff === null) {
            return;
        }

        alert('Add successfully!!');

        getStaffs();
    }

    function onStaffUpdated(updatedStaff) {
        setStaffCurrently(null);

        if (updatedStaff === null) {
            return;
        }

        let staffsCopy = [...staffs];

        const index = staffs.findIndex((staffsCopyProd, currentIndex) => {
            if (staffsCopyProd.StaffId === updatedStaff.StaffId) {
                return true;
            }
        });

        if (index !== -1) {
            staffsCopy[index] = updatedStaff;
        }

        setStaffs(staffsCopy);

        alert(`Update successfully!!`);
    }

    function onStaffDeleted(deleteByID) {
        let staffsCopy = [...staffs];

        const index = staffsCopy.findIndex((staffsCopyStaff, currentIndex) => {
            if (staffsCopyStaff.StaffId === deleteByID) {
                return true;
            }
        });

        if (index !== -1) {
            staffsCopy.splice(index, 1);
        }

        setStaffs(staffsCopy);

        alert(`Delete successfully!!`);
    }

    function renderStaffTable() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập nhân viên cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <table className={cx('table-prod')}>
                    <thead>
                        <tr>
                            <th>Staff ID</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Date start work</th>
                            <th>CRUD Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffs
                            .filter((item) => {
                                return search.toLowerCase() === '' ? item : item.Name.toLowerCase().includes(search);
                            })
                            .map((staff) => (
                                <tr key={staff.Staffid}>
                                    <td>{staff.Staffid}</td>
                                    <td>{staff.Staff_Username}</td>
                                    <td>{staff.Staff_Password}</td>
                                    <td>{staff.Name}</td>
                                    <td>{staff.Phone}</td>
                                    <td>{staff.Email}</td>
                                    <td>{staff.Address}</td>
                                    <td>{staff.DateStartWork}</td>
                                    <td>
                                        <Button
                                            sizeA
                                            primary
                                            onClick={() => setStaffCurrently(staff)}
                                            className={cx('btn')}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            sizeA
                                            primary
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        `Are you sure that want to delete the product name "${staff.Name}" ?`,
                                                    )
                                                )
                                                    deleteStaff(staff.StaffId);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </>
        );
    }

    return (
        <div className="grid">
            {showingStaffCreateForm === false && staffCurrently === null && (
                <div style={{ marginBottom: '20px' }}>
                    {/* <Button sizeA primary onClick={getProds}>
                        Get Prods
                    </Button> */}
                    <Button sizeA primary onClick={() => setShowingStaffCreateForm(true)}>
                        Create New Staff
                    </Button>
                </div>
            )}

            {staffs.length > 0 && showingStaffCreateForm === false && staffCurrently === null && renderStaffTable()}

            {showingStaffCreateForm && <StaffCreateForm onStaffCreated={onStaffCreated} />}

            {staffCurrently !== null && <StaffUpdateForm staff={staffCurrently} onStaffUpdated={onStaffUpdated} />}
        </div>
    );
}

export default Ad_Staff;

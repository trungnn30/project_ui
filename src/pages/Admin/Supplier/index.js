import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Supplier.module.scss';
import Button from '~/components/Layout/components/Button';
import SupplierCreateForm from './Method/Create/SupplierCreateForm';
import SupplierUpdateForm from './Method/Update/SupplierUpdateForm';

const cx = classNames.bind(styles);

function Ad_Supplier() {
    const [suppliers, setSuppliers] = useState([]);
    const [showingSupplierCreateForm, setShowingSupplierCreateForm] = useState(false);
    const [supplierCurrently, setSupplierCurrently] = useState(null);
    const [search, setSearch] = useState('');

    function getSuppliers() {
        const url = 'https://localhost:44397/api/Supplier';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setSuppliers(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    useEffect(() => {
        const url = 'https://localhost:44397/api/Supplier';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setSuppliers(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);

    function deleteSupplier(Sid) {
        const url = `${'https://localhost:44397/api/Supplier'}/${Sid}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                onSupplierDeleted(Sid);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function onSupplierCreated(createdSupplier) {
        setShowingSupplierCreateForm(false);

        if (createdSupplier === null) {
            return;
        }

        alert('Add successfully!!');

        getSuppliers();
    }

    function onSupplierUpdated(updatedSupplier) {
        setSupplierCurrently(null);

        if (updatedSupplier === null) {
            return;
        }

        let suppliersCopy = [...suppliers];

        const index = suppliers.findIndex((suppliersCopyProd, currentIndex) => {
            if (suppliersCopyProd.Sid === updatedSupplier.Sid) {
                return true;
            }
        });

        if (index !== -1) {
            suppliersCopy[index] = updatedSupplier;
        }

        setSuppliers(suppliersCopy);

        alert(`Update successfully!!`);
    }

    function onSupplierDeleted(deleteByID) {
        let suppliersCopy = [...suppliers];

        const index = suppliersCopy.findIndex((suppliersCopyStaff, currentIndex) => {
            if (suppliersCopyStaff.Sid === deleteByID) {
                return true;
            }
        });

        if (index !== -1) {
            suppliersCopy.splice(index, 1);
        }

        setSuppliers(suppliersCopy);

        alert(`Delete successfully!!`);
    }

    function renderSupplierTable() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập nhà cung cấp cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <table className={cx('table-prod')}>
                    <thead>
                        <tr>
                            <th>Supplier ID</th>
                            <th>Producer ID</th>
                            <th>Supplier Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Postal Code</th>
                            <th>CRUD operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers
                            .filter((item) => {
                                return search.toLowerCase() === '' ? item : item.Name.toLowerCase().includes(search);
                            })
                            .map((supplier) => (
                                <tr key={supplier.Sid}>
                                    <td>{supplier.Sid}</td>
                                    <td>{supplier.ProducerId}</td>
                                    <td>{supplier.SName}</td>
                                    <td>{supplier.Phone}</td>
                                    <td>{supplier.Address}</td>
                                    <td>{supplier.PostalCode}</td>
                                    <td>
                                        <Button
                                            sizeA
                                            primary
                                            onClick={() => setSupplierCurrently(supplier)}
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
                                                        `Are you sure that want to delete the product name "${supplier.Name}" ?`,
                                                    )
                                                )
                                                    deleteSupplier(supplier.Sid);
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
            {showingSupplierCreateForm === false && supplierCurrently === null && (
                <div style={{ marginBottom: '20px' }}>
                    {/* <Button sizeA primary onClick={getProds}>
                        Get Prods
                    </Button> */}
                    <Button sizeA primary onClick={() => setShowingSupplierCreateForm(true)}>
                        Create New Supplier
                    </Button>
                </div>
            )}

            {suppliers.length > 0 && showingSupplierCreateForm === false && supplierCurrently === null && renderSupplierTable()}

            {showingSupplierCreateForm && <SupplierCreateForm onSupplierCreated={onSupplierCreated} />}

            {supplierCurrently !== null && <SupplierUpdateForm staff={supplierCurrently} onSupplierUpdated={onSupplierUpdated} />}
        </div>
    );
}

export default Ad_Supplier;

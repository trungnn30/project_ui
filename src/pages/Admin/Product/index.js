import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Layout/components/Button';
import ProdCreateForm from './Method/Create/ProdCreateForm';
import ProdUpdateForm from './Method/Update/ProdUpdateForm';
import Image from '~/components/Layout/components/Image';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Ad_Product() {
    const [prods, setProds] = useState([]);
    const [showingProdCreateForm, setShowingProdCreateForm] = useState(false);
    const [prodCurrently, setProdCurrently] = useState(null);
    const [search, setSearch] = useState('');
    const usenavigate = useNavigate();

    function getProds() {
        const url = 'https://localhost:44397/api/Product';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setProds(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    useEffect(() => {
        const url = 'https://localhost:44397/api/Product';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setProds(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);

    function deleteProd(Pid) {
        const url = `${'https://localhost:44397/api/Product'}/${Pid}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                onProdDeleted(Pid);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function onProdCreated(createdProd) {
        setShowingProdCreateForm(false);

        if (createdProd === null) {
            return;
        }

        alert('Add successfully!!');

        getProds();
    }

    function onProdUpdated(updatedProd) {
        setProdCurrently(null);

        if (updatedProd === null) {
            return;
        }

        let prodsCopy = [...prods];

        const index = prods.findIndex((prodsCopyProd, currentIndex) => {
            if (prodsCopyProd.Pid === updatedProd.Pid) {
                return true;
            }
        });

        if (index !== -1) {
            prodsCopy[index] = updatedProd;
        }

        setProds(prodsCopy);

        alert(`Update successfully!!`);
    }

    function onProdDeleted(deleteByID) {
        let prodsCopy = [...prods];

        const index = prodsCopy.findIndex((prodsCopyProd, currentIndex) => {
            if (prodsCopyProd.Pid === deleteByID) {
                return true;
            }
        });

        if (index !== -1) {
            prodsCopy.splice(index, 1);
        }

        setProds(prodsCopy);

        alert(`Delete successfully!!`);
    }

    function renderProdTable() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập sản phẩm cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <table className={cx('table-prod')}>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Supplier ID</th>
                            <th>Category ID</th>
                            <th>Prod Name</th>
                            <th>ImagePath</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>CRUD Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prods
                            .filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.ProdName.toLowerCase().includes(search);
                            })
                            .map((prod) => (
                                <tr key={prod.Pid}>
                                    <td>{prod.Pid}</td>
                                    <td>{prod.Sid}</td>
                                    <td>{prod.Categoryid}</td>
                                    <td>{prod.ProdName}</td>
                                    <td>
                                        <Image src={'assets/img/' + `${prod.ImagePath}`} className={cx('prod-img')} />
                                    </td>
                                    <td>{prod.Price}</td>
                                    <td>{prod.Quantity}</td>
                                    <td>{prod.Status}</td>
                                    <td>
                                        <Button
                                            sizeA
                                            primary
                                            onClick={() => setProdCurrently(prod)}
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
                                                        `Are you sure that want to delete the product name "${prod.ProdName}" ?`,
                                                    )
                                                )
                                                    deleteProd(prod.Pid);
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
            {showingProdCreateForm === false && prodCurrently === null && (
                <div style={{ marginBottom: '20px' }}>
                    {/* <Button sizeA primary onClick={getProds}>
                        Get Prods
                    </Button> */}
                    <Button sizeA primary onClick={() => setShowingProdCreateForm(true)}>
                        Create New Prod
                    </Button>
                </div>
            )}

            {prods.length > 0 && showingProdCreateForm === false && prodCurrently === null && renderProdTable()}

            {showingProdCreateForm && <ProdCreateForm onProdCreated={onProdCreated} />}

            {prodCurrently !== null && <ProdUpdateForm prod={prodCurrently} onProdUpdated={onProdUpdated} />}
        </div>
    );
}

export default Ad_Product;

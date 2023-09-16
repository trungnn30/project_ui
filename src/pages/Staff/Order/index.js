import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { useEffect, useState, useRef } from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const cx = classNames.bind(styles);

function Order() {
    const [orders, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const contentArea = useRef(null);
    const handleExport = (e) => {
        savePDF(contentArea.current, { paperSize: 'A4' });
    };
    useEffect(() => {
        const url = 'https://localhost:44397/api/Order';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setOrder(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);
    function renderOrder() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập phiếu cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    {orders
                        .filter((item) => {
                            return search.toLowerCase() === '' ? item : item.ProdName.toLowerCase().includes(search);
                        })
                        .map((order) => (
                            <PDFExport>
                                <div ref={contentArea}>
                                    <div key={order.OrderId}>
                                        <p>Ten san pham: {order.ProdName}</p>
                                        <p>Ngay dat hang: {order.OrderDate}</p>
                                        <p>Ngay xuat: {order.ExportDate}</p>
                                        <p>So luong dat: {order.Quantity}</p>
                                        <p>Gia: {order.UnitPrice}</p>
                                        <p>Tong: {order.Total}</p>
                                        <p>Ten khach hang: {order.Name}</p>
                                        <p>So dien thoai: {order.Phone}</p>
                                        <p>Email: {order.Email}</p>
                                        <p>Dia chi: {order.Address}</p>
                                    </div>
                                </div>
                                <Button onClick={handleExport}>Export</Button>
                                <p>------------------------------------</p>
                            </PDFExport>
                        ))}
                </div>
            </>
        );
    }
    return <div className="grid">{orders.length > 0 && renderOrder()}</div>;
}

export default Order;

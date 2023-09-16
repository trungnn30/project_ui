import classNames from 'classnames/bind';
import styles from './Receipt.module.scss';
import { useEffect, useState, useRef } from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const cx = classNames.bind(styles);

function Receipt() {
    const [receipts, setReceipt] = useState([]);
    const [search, setSearch] = useState('');
    const contentArea = useRef(null);
    const handleExport = (e) => {
        savePDF(contentArea.current, { paperSize: 'A4' });
    };
    useEffect(() => {
        const url = 'https://localhost:44397/api/Receipt';
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setReceipt(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }, []);
    function renderReceipt() {
        return (
            <>
                <div className={cx('search')}>
                    <input placeholder="Nhập phiếu cần tìm kiếm..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    {receipts
                        .filter((item) => {
                            return search.toLowerCase() === '' ? item : item.ProdName.toLowerCase().includes(search);
                        })
                        .map((receipt) => (
                            <PDFExport>
                                <div ref={contentArea}>
                                    <div key={receipt.Rid}>
                                        <p>Ten san pham: {receipt.ProdName}</p>
                                        <p>Ngay nhap: {receipt.InputDate}</p>
                                        <p>So luong nhap: {receipt.Quantity}</p>
                                        <p>Gia: {receipt.UnitPrice}</p>
                                        <p>Tong: {receipt.Total}</p>
                                        <p>Dia chi: {receipt.Address}</p>
                                        <p>Nha cung cap: {receipt.SName}</p>
                                        <p>So dien thoai: {receipt.Phone}</p>
                                        <p>Nha san xuat: {receipt.ProducerName}</p>
                                        <p>Quoc gia: {receipt.Nation}</p>
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
    return <div className="grid">{receipts.length > 0 && renderReceipt()}</div>;
}

export default Receipt;

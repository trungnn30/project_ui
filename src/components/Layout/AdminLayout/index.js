import HeaderAdmin from '~/components/Layout/components/HeaderAdmin';
import Sidebar from './Sidebar';
import Footer from '~/components/Layout/components/Footer';

function AdminLayout({ children }) {
    return (
        <div>
            <HeaderAdmin />
            <div className="container">
                <div className="max">
                    <div className="max-row main-container">
                        <div className="grid-column-2">
                            <Sidebar />
                        </div>

                        <div className="grid-column-10">
                            <div className="content">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;

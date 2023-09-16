import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import Footer from '~/components/Layout/components/Footer';
import Image from '../components/Image';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="FloatAdx-left">
                    <Image src={'assets/img/stk-bn-left.png'} />
                </div>
                <div className="FloatAdx-right">
                    <Image src={'assets/img/stk-bn-right.png'} />
                </div>

                <div className="grid">
                    <div className="grid-row main-container">
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

export default DefaultLayout;

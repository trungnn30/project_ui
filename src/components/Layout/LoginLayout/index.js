import Footer from '../components/Footer';
import HeadingBoth from '../components/HeadingBoth';

function LoginLayout({ children }) {
    return (
        <div>
            <HeadingBoth>Đăng nhập</HeadingBoth>
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginLayout;

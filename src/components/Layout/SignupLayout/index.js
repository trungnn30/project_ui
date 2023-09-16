import Footer from '../components/Footer';
import HeadingBoth from '../components/HeadingBoth';

function SignupLayout({ children }) {
    return (
        <div>
            <HeadingBoth>Đăng ký</HeadingBoth>
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default SignupLayout;

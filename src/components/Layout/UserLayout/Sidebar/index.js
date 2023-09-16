import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck, faChevronLeft, faChevronRight, faList, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <nav className={cx('category')}>
            <Heading category>
                <FontAwesomeIcon icon={faList} className={cx('category-icon')} />
                Danh mục
            </Heading>

            <ul className={cx('category-list')}>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user'}>
                        Home
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user-CPU'}>
                        CPU - bộ vi xử lý
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user-RAM'}>
                        RAM - bộ nhớ trong
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user-VGA'}>
                        VGA - Card màn hình
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user-PSU'}>
                        PSU - Nguồn máy tính
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user-CASE'}>
                        CASE - Vỏ máy tính
                    </Button>
                </li>
                <li className={cx('category-item')}>
                    <Button toCate to={'/user-FAN'}>
                        FAN RGB - Tản nhiệt
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;

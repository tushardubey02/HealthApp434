import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import './NavigationMenu.css';

function NavigationMenu({ isOpen, closeMenu }) {
    const [menuStyle, setMenuStyle] = useState({});
    const location = useLocation(); 
    const navigate = useNavigate();

    useEffect(() => {
        const updateMenuStyle = () => {
            const header = document.querySelector('.header');
            let mainContent;

            switch (location.pathname) {
                case '/':
                    mainContent = document.querySelector('.dashboard'); 
                    break;
                case '/profile':
                    mainContent = document.querySelector('.profile'); 
                    break;
                case '/healthdata':
                    mainContent = document.querySelector('.health-data'); 
                    break;
                case '/exercisedata':
                    mainContent = document.querySelector('.exercise-data'); 
                    break;
                case '/search':
                    mainContent = document.querySelector('.search-page'); 
                    break;
                case '/AddItem':
                    mainContent = document.querySelector('.addItem-data'); 
                    break;
                default:
                    mainContent = document.querySelector('.dashboard'); 
                    break;
            }

            const headerHeight = header ? header.offsetHeight : 0;
            const mainContentHeight = mainContent ? mainContent.offsetHeight : 0; 

            setMenuStyle({
                top: `${headerHeight}px`,
                height: `${mainContentHeight}px`
            });
        };

        updateMenuStyle();
        window.addEventListener('resize', updateMenuStyle);

        return () => {
            window.removeEventListener('resize', updateMenuStyle);
        };
    }, [location]);

    const menuStyles = {
        visibility: isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        ...menuStyle,
    };

    return (
        <div className={`navigation-menu ${isOpen ? 'open' : 'closed'}`} style={menuStyles}>
            <div className="menu-item" onClick={() => { navigate('/profile'); closeMenu(); }}>Profile</div>
            <hr className="section-divider"></hr>
            <div className="menu-item">Settings</div>
            <hr className="section-divider"></hr>
            <div className="menu-item">Logout</div>
        </div>
    );
}

export default NavigationMenu;
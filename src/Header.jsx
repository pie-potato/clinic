import React, {useState} from 'react';

export default function Header() {
    const [open, setOpen] = useState(false)

    const links = (
        <>
            <li><a className='nav-link' href='#about' onClick={() => setOpen(false)}>О клинике</a></li>
            <li><a className='nav-link' href='#services' onClick={() => setOpen(false)}>Услуги</a></li>
            <li><a className='nav-link' href='#drops' onClick={() => setOpen(false)}>Капельницы</a></li>
            <li><a className='nav-link' href='#specialists' onClick={() => setOpen(false)}>Специалисты</a></li>
            <li><a className='nav-link' href='#contacts' onClick={() => setOpen(false)}>Контакты</a></li>
            <li><a className='tel' href='tel:>+73462380894' style={{fontWeight: 600}} onClick={() => setOpen(false)}>+7 (3462) 38-08-94</a></li>
        </>
    )

    const mobileLink = <>
                <div className='mobile-pic'>
                    <img style={{ maxWidth: '283px'}} src="../img/logo.svg"/>
                    <img src="/img/menu.svg" className='menu-btn-mobile' width={24} height={24} alt="меню" onClick={() => setOpen(!open)}/>
                </div>
                {links}
    </>
    
    return <>
        <header>
            <img style={{ width: '330px' }} src="../img/logo.svg"/>
            <section class="top-nav">
                <img src="/img/menu.svg" className='menu-btn' width={24} height={24} alt="меню" onClick={() => setOpen(!open)}/>
                {open && <div className="mobile-menu">{mobileLink}</div>}
                <ul class="menu">{links}</ul>
            </section>
        </header>
    </>;
}
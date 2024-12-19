import React, { Fragment, useEffect, useRef, useState } from 'react';
import './HomeBanner.css';
import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import localityLogo from '../../assets/_img/locallity-logo-full-white.svg'
import logoDark from '../../assets/icon/locallity-logo-full.svg';
import { useRedirect } from '../../hooks/useRedirect';
import pathname from '../../routes';
import { useLocation } from 'react-router-dom/dist';
import { useUserAuth } from '../../context/userAuthContext';

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef();
  const { user, logOut } = useUserAuth();

  const toggleMobileNav = () => {
    setMobileNavOpen((prevState) => !prevState);
   
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (mobileNavOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setMobileNavOpen(false);
       
      }
    };

    const handleDocumentScroll = () => {
      if (mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('scroll', handleDocumentScroll);
    

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('scroll', handleDocumentScroll);
    };
  }, [mobileNavOpen]);
  
  const [showSubcategories, setShowSubcategories] = useState(null);
  const [color, setColor] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    if (currentPath !== '/') {
      setColor(false);
    } else {
      setColor(true);
    }
  }, [currentPath])

  const onCategoryHover = (category) => setShowSubcategories(category);
  const onCategoryLeave = () => setShowSubcategories(null);
  const navigate = useRedirect();

  const [category, setCategory] = useState('');


  useEffect(()=>{

    if (category){

      const onClickCategory  = (category) => navigate(`${pathname.anunciantes}?category=${category}`)
      onClickCategory(category)
  
    }

  },[category, navigate])

  const [subCategory, setsubCategory] = useState('');
  useEffect(()=>{

    if (subCategory){

      const onClickSubCategory  = (subCategory) => navigate(`${pathname.anunciantes}?subcategory=${subCategory}`)
      onClickSubCategory(subCategory)
  
    }

  },[subCategory, navigate])

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };
 
    return (
    <Fragment>
        <Container id="lg-nav">
          <Navbar expand="lg" className="bg-transparent mt-2">
            <Container fluid>
              <Navbar.Brand className="cursor-pointer" onClick={() => navigate(pathname.home)}><img height={28} src={color ? localityLogo : logoDark} alt="localityLogo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="my-2 my-lg-0 w-100 d-flex align-items-center justify-content-between"
                  navbarScroll
                >
                  <div className="d-flex">
                    <Nav.Link className={`navDesign ${color && 'text-white'}`} onClick={() => navigate(pathname.home)}>Inicio</Nav.Link>
                      <Nav.Link className={`navDesign ${color && 'text-white'}`}  href="#about" >Nosotros</Nav.Link>
                      <Nav.Link className={`navDesign ${color && 'text-white'}`}  href="#safety">Seguridad</Nav.Link>
                      <Nav.Link className={`navDesign ${color && 'text-white'}`}  href="#map">Mapa</Nav.Link>
                      <NavDropdown 
                      id="dropdownMenu" 
                      title="Categorías"
                      onMouseEnter={onCategoryHover}
                      onMouseLeave={onCategoryLeave}
                    
                      className={`${color && 'text-custom-white'}`}
                      >
                        <div className="d-flex categoriesDiv">
                          <ul className="ul-categories">
                            <li className="--comida"
                            onMouseEnter={() => onCategoryHover('comida')}
                            onClick={() => setCategory('comida')}
                            >Comida</li>
                            <li className="--infantil-bebe"
                            onMouseEnter={() => onCategoryHover('infantil-bebe')}
                            onClick={() => setCategory('infantil-bebe')}
                            >Infantil&nbsp;/&nbsp;Bebés</li>
                            <li className="--hogar"
                            onMouseEnter={()=>onCategoryHover('Hogar')}
                            onClick={() => setCategory('Hogar')}
                            >Hogar</li>
                            <li className="--papeleria"
                            onMouseEnter={()=>onCategoryHover('Papelería')}
                            onClick={() => setCategory('Papelería')}
                            >Papelería</li>
                            <li className="--eventos"
                            onMouseEnter={()=>onCategoryHover('Eventos')}
                            onClick={() => setCategory('Eventos')}
                            >Eventos</li>
                            <li className="--shopping"
                            onMouseEnter={()=>onCategoryHover('Bienestar')}
                            onClick={() => setCategory('Bienestar')}
                            >Bienestar</li>
                            <li className="--regalos"
                              onMouseEnter={()=>onCategoryHover('Regalos')}
                              onClick={() => setCategory('Regalos')}
                            >Regalos</li>
                            <li className="--regalos"
                              onMouseEnter={()=>onCategoryHover('Shopping')}
                              onClick={() => setCategory('Shopping')}
                            >Shopping</li>
                        </ul>
                        <ul className="ul-subcategories">
                            <li className="text-header-subcategories">Subcategorías</li>    
                            <hr className="mt-1 mb-2" />         
                            <div>
                                <p className={`${showSubcategories === null ? '' : 'd-none'}`}>Elige una categoría para desplegar sus respectivas subcategorías.</p>
                            </div>
                            <div className={`${showSubcategories === 'comida' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('Pasteles')}> Pasteles </li>
                                <li onClick={()=>setsubCategory('Botanas')}> Botanas </li>
                                <li onClick={()=>setsubCategory('Catering')}> Catering </li>
                                <li onClick={()=>setsubCategory('Panadería')}> Panadería </li>
                            </div>

                            <div className={`${showSubcategories === 'infantil-bebe' ? '' : 'd-none'}`}>
                                <li  onClick={()=>setsubCategory('Muebles')}> Muebles </li>
                                <li  onClick={()=>setsubCategory('Accesorios')}> Accesorios </li>
                                <li  onClick={()=>setsubCategory('Maternidad')}> Letreros&nbsp;de&nbsp;Maternidad </li>
                                <li  onClick={()=>setsubCategory('Rentas')}> Rentas </li>
                                <li  onClick={()=>setsubCategory('Clases')}> Clases </li>
                            </div>

                            <div  className={`${showSubcategories === 'Hogar' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('Muebles')}> Muebles </li>
                                <li onClick={()=>setsubCategory('Fragancias')}> Fragancias </li>
                                <li onClick={()=>setsubCategory('Decoración')}> Decoración </li>
                                <li onClick={()=>setsubCategory('Exterior')}> Cocinas&nbsp;/&nbsp;Exterior </li>
                                <li onClick={()=>setsubCategory('Interiores')}> Diseño&nbsp;de&nbsp;Interiores </li>
                                <li onClick={()=>setsubCategory('Store')}> Concept&nbsp;Store </li>
                            </div>

                            <div  className={`${showSubcategories === 'Papelería' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('Social')}> Social </li>
                                <li onClick={()=>setsubCategory('Impresiones')}> Impresiones </li>
                            </div>

                            <div  className={`${showSubcategories === 'Eventos' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('Decoración')}> Decoración </li>
                                <li onClick={()=>setsubCategory('Caterings')}> Caterings </li>
                                <li onClick={()=>setsubCategory('mobiliario')}> Renta&nbsp;de&nbsp;mobiliario </li>
                                <li onClick={()=>setsubCategory('Invitaciones')}> Invitaciones </li>
                                <li onClick={()=>setsubCategory('Shows')}> Shows </li>
                            </div>

                            <div  className={`${showSubcategories === 'Bienestar' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('SPA')}> SPA </li>
                                <li onClick={()=>setsubCategory('Aesthetic')}> Aesthetic </li>
                                <li onClick={()=>setsubCategory('Masajes')}> Masajes </li>
                                <li onClick={()=>setsubCategory('Uñas')}> Uñas </li>
                                <li onClick={()=>setsubCategory('belleza')}> Salón&nbsp;de&nbsp;belleza </li>
                            </div>

                            <div  className={`${showSubcategories === 'Regalos' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('Fragancias')}> Fragancias </li>
                                <li onClick={()=>setsubCategory('Florerías')}> Florerías </li>
                                <li onClick={()=>setsubCategory('regalo')}> Mesas&nbsp;de&nbsp;regalo </li>
                                <li onClick={()=>setsubCategory('Generales')}> Regalos&nbsp;Generales </li>
                                <li onClick={()=>setsubCategory('Store')}> Concept&nbsp;Store </li>
                            </div>

                            <div  className={`${showSubcategories === 'Shopping' ? '' : 'd-none'}`}>
                                <li onClick={()=>setsubCategory('Zapatos')}> Zapatos </li>
                                <li onClick={()=>setsubCategory('Vestidos')}> Ropa&nbsp;/&nbsp;Vestidos </li>
                                <li onClick={()=>setsubCategory('baño')}> Trajes&nbsp;de&nbsp;baño </li>
                                <li onClick={()=>setsubCategory('Accesorios')}> Accesorios </li>
                                <li onClick={()=>setsubCategory('Cosméticos')}> Cosméticos </li>
                            </div>
                        </ul>
                        </div>
                        {/* <div className="bottomNav">
                          <div className="text-div">
                              <h4 className="mb-0 text-white">¡Date a conocer!</h4>
                              <p className="mb-0">Anuncia tu negocio en Locallity.com</p>
                          </div>
                          <div className="btn-div">
                            <p onClick={() => navigate(pathname.registration)} className='btn btn-outline-light border-1 rounded-1 py-2 px-3 fw-semibold'>Registrarme</p>
                          </div>
                        </div> */}

                    </NavDropdown>
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    {
                      user ? 
                        <>
                          <Nav.Link className={`navDesign ${color && 'text-white'}`} onClick={() => navigate(pathname.registration)}>Registra tu marca</Nav.Link>
                          <p className="text-white fw-bold cursor-pointer"  onClick={handleLogout} style={{fontSize: 16, paddingTop: 15 }}>
                            Cerrar sesión
                          </p>
                        </>
                        :
                        <Nav.Link className={`navDesign ${color && 'text-white'}`} onClick={() => navigate(pathname.login)}>Iniciar sesión</Nav.Link>
                    }
                    
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <Container id="xs-nav" className="position-absolute">
          <Navbar expand="lg" className="bg-transparent">
            <Container>
            <Navbar.Brand onClick={() => navigate(pathname.home)}><img height={28} src={color ? localityLogo : logoDark} alt="localityLogo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="mbl-basic-navbar-nav" onClick={toggleMobileNav}/>
              {/*  */}
              {/* */}
              
              <Navbar.Collapse 
              id="mbl-basic-navbar-nav" 
              ref={mobileNavRef} 
              show={mobileNavOpen ? 'true' : undefined}
              className={mobileNavOpen ? 'show' : ''} >
              
              <Nav className="me-auto">

                <NavDropdown className="navDropDownXs" title="Categorías" id="mbl-basic-navbar-nav">
           
                  <ul className="navbar-nav ml-auto">
                    <span  onClick={() => setCategory('comida')}>Comida</span>
                        <li onClick={()=>setsubCategory('Pasteles')}><a className="dropdown-item" href="#action">Pasteles</a></li>
                        <li onClick={()=>setsubCategory('Botanas')}><a className="dropdown-item" href="#action">Botanas</a></li>
                        <li onClick={()=>setsubCategory('Catering')}><a className="dropdown-item" href="#action">Catering</a></li>
                        <li onClick={()=>setsubCategory('Panadería')}><a className="dropdown-item" href="#action">Panadería</a></li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <span  onClick={() => setCategory('Infantil-Bebé')}>Infantil&nbsp;/&nbsp;Bebé</span>
                        <li onClick={()=>setsubCategory('Accesorios')}><a className="dropdown-item" href="#action">Accesorios</a></li>
                        <li onClick={()=>setsubCategory('Maternidad')}><a className="dropdown-item" href="#action">Letreros&nbsp;de&nbsp;Maternidad</a></li>
                        <li onClick={()=>setsubCategory('Rentas')}><a className="dropdown-item" href="#action">Rentas</a></li>
                        <li onClick={()=>setsubCategory('Clases')}><a className="dropdown-item" href="#action">Clases</a></li>
                  </ul>
                
                  
                  <ul className="navbar-nav ml-auto">
                       <span  onClick={() => setCategory('Hogar')}>Hogar</span>
                       <li onClick={()=>setsubCategory('Muebles')}><a className="dropdown-item" href="#action">Muebles</a></li>
                        <li onClick={()=>setsubCategory('Fragancias')}><a className="dropdown-item" href="#action">Fragancias</a></li>
                        <li onClick={()=>setsubCategory('Decoración')}><a className="dropdown-item" href="#action">Decoración</a></li>
                        <li onClick={()=>setsubCategory('Exterior')}><a className="dropdown-item" href="#action">Cocinas&nbsp;/&nbsp;Exterior</a></li>
                        <li onClick={()=>setsubCategory('Interiores')}><a className="dropdown-item" href="#action">Diseño&nbsp;de&nbsp;Interiores</a></li>
                        <li onClick={()=>setsubCategory('Store')}><a className="dropdown-item" href="#action">Concept&nbsp;Store</a></li>
                    </ul>
                 
                    
                  <ul className="navbar-nav ml-auto">
                    <span onClick={() => setCategory('Papelería')}>Papelería</span>
                      <li onClick={()=>setsubCategory('Social')}><a className="dropdown-item" href="#action">Social</a></li>
                      <li onClick={()=>setsubCategory('Impresiones')}><a className="dropdown-item" href="#action">Impresiones</a></li>
                  </ul>
                
                  <ul className="navbar-nav ml-auto">
                     <span onClick={() => setCategory('Eventos')}>Eventos</span>
                      <li onClick={()=>setsubCategory('SPA')}><a className="dropdown-item" href="#action">SPA</a></li>
                      <li onClick={()=>setsubCategory('Aesthetic')}><a className="dropdown-item" href="#action">Aesthetic</a></li>
                      <li onClick={()=>setsubCategory('Masajes')}><a className="dropdown-item" href="#action">Masajes</a></li>
                      <li onClick={()=>setsubCategory('Uñas')}><a className="dropdown-item" href="#action">Uñas</a></li>
                      <li onClick={()=>setsubCategory('belleza')}><a className="dropdown-item" href="#action">Salón&nbsp;de&nbsp;belleza</a></li>
                  </ul>
            
                  <ul className="navbar-nav ml-auto">
                      <span  onClick={() => setCategory('Bienestar')}>Bienestar</span>
                      <li onClick={()=>setsubCategory('Decoración')}><a className="dropdown-item" href="#action">Decoración</a></li>
                      <li onClick={()=>setsubCategory('Caterings')}><a className="dropdown-item" href="#action">Caterings</a></li>
                      <li onClick={()=>setsubCategory('mobiliario')}><a className="dropdown-item" href="#action">Renta&nbsp;de&nbsp;mobiliario</a></li>
                      <li onClick={()=>setsubCategory('Invitaciones')}><a className="dropdown-item" href="#action">Invitaciones</a></li>
                      <li onClick={()=>setsubCategory('Shows')}><a className="dropdown-item" href="#action">Shows</a></li>
                  </ul>
                 
                  <ul className="navbar-nav ml-auto">
                    <span  onClick={() => setCategory('Regalos')}>Regalos</span>
                    <li onClick={()=>setsubCategory('Fragancias')}><a className="dropdown-item" href="#action">Fragancias</a></li>
                    <li onClick={()=>setsubCategory('Florerías')}><a className="dropdown-item" href="#action">Florerías</a></li>
                    <li onClick={()=>setsubCategory('regalo')}><a className="dropdown-item" href="#action">Mesas&nbsp;de&nbsp;regalo</a></li>
                    <li onClick={()=>setsubCategory('Generales')}><a className="dropdown-item" href="#action">Regalos&nbsp;Generales</a></li>
                    <li onClick={()=>setsubCategory('Store')}><a className="dropdown-item" href="#action">Concept&nbsp;Store</a></li>
                  </ul>

                  <ul className="navbar-nav ml-auto">
                      <span  onClick={() => setCategory('Shopping')}>Shopping</span>
                      <li onClick={()=>setsubCategory('Zapatos')}><a className="dropdown-item" href="#action">Zapatos</a></li>
                      <li onClick={()=>setsubCategory('Vestidos')}><a className="dropdown-item" href="#action">Ropa&nbsp;/&nbsp;Vestidos</a></li>
                      <li onClick={()=>setsubCategory('baño')}><a className="dropdown-item" href="#action">Trajes&nbsp;de&nbsp;baño</a></li>
                      <li onClick={()=>setsubCategory('Accesorios')}><a className="dropdown-item" href="#action">Accesorios</a></li>
                      <li onClick={()=>setsubCategory('Cosméticos')}><a className="dropdown-item" href="#action">Cosméticos</a></li>
                  </ul>

                </NavDropdown>

                    <Nav.Link className="navDesignXs"  href="#about" >Nosotros</Nav.Link>
                    <Nav.Link className="navDesignXs"  href="#safety">Seguridad</Nav.Link>
                    <Nav.Link className="navDesignXs"  href="#map">Mapa</Nav.Link>
                    {
                      user ? 
                      <>
                        <Nav.Link className="navDesignXs" onClick={() => navigate(pathname.registration)}>Registra tu marca</Nav.Link>
                        <p className="text-white fw-bold cursor-pointer ms-4"  onClick={handleLogout} style={{fontSize: 16, paddingTop: 15 }}>
                          Cerrar sesión
                        </p>
                      </>
                        :
                        <Nav.Link className="navDesignXs" onClick={() => navigate(pathname.login)}>Iniciar sesión</Nav.Link>
                    }
                    
                </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>
        </Container>

        
      </Fragment>  

    );
};

export default Navigation;
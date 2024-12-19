import React, { Fragment, useState, useEffect} from 'react';
import './HomeBanner.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from 'react-bootstrap';
// import img1 from '../../assets/_img/-01.png'
// import img2 from '../../assets/_img/-02.png'
// import img3 from '../../assets/_img/-03.png'
// import img4 from '../../assets/_img/-04.png'
// import img5 from '../../assets/_img/-05.png'
// import img6 from '../../assets/_img/-06.png'
// import img7 from '../../assets/_img/-07.png'
// import img8 from '../../assets/_img/-08.png'
// import img9 from '../../assets/_img/-09.png'
// import img10 from '../../assets/_img/-10.png'
// import img11 from '../../assets/_img/-11.png'
// import img12 from '../../assets/_img/-12.png'
// import img13 from '../../assets/_img/-13.png'
// import img14 from '../../assets/_img/-14.png'
// import img15 from '../../assets/_img/-15.png'
// import img16 from '../../assets/_img/-16.png'
// import artemisa from '../../assets/images/ARTEMISA.png';
// import koko from '../../assets/images/Koko.png';
// import plano from '../../assets/images/Plano.png';
// import artefacto from '../../assets/images/artefacto.png';
import config from '../../config';
import axios from 'axios';

const HomeSlider = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${config.base_URL}${config.selectAll}`);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

     if (loading) {
        return <div className="d-flex justify-content-center py-5 my-5">
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    return (
        <Fragment>
            <Container className="mt-5 slider-container"> 
                <Carousel responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                >
                {
                    data.map((item, idx) => (
                        item.logo_url ? (
                            <div key={idx} className="Items">
                                <img className="images" src={item.logo_url} alt={item.name} />
                            </div>
                        ) : null
                    ))
                }
                </Carousel>
            </Container>
        </Fragment>
    );
};

export default HomeSlider;
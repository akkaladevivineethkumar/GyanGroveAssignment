import { useState, useEffect } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const RecommendedShows = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const urls = [{imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711893650/Rectangle_2_qvmp8p.svg"}
    ,{imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711893570/Rectangle_4-1_ttrq9b.svg"},
    {imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711893691/Rectangle_4_aiciv1.svg"},
    {imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711893732/Rectangle_5-1_kqdfmt.svg"},
    {imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711893871/Rectangle_5-2_wjgfee.svg"},
    {imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711893929/Rectangle_5_gayj1k.svg"},
    {imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711894160/Rectangle_34_zpemi9.svg"},
    {imgUrl: "https://res.cloudinary.com/dv99nu7xv/image/upload/v1711894280/Rectangle_4_1_ulmbhn.svg"}
]

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
            const updatedData = json.events.map((item, index) => ({
                ...item,
                imgUrl: urls[index % urls.length].imgUrl
            }));
            setData(updatedData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
}, []);


    console.log(data)

    const settings = {
        dots: false,
        slidesToScroll: 2,
        slidesToShow: 4,
        prevArrow: null,
        nextArrow: null,
    };
    
    return (
        <div className="banner-container">
            <div className='banner-img'>
                <div style={{height: "60vh" , display: "flex", alignItems: "center"}}>
                    <div>
                    <h1 className="banner-heading">Discover Exciting Events Happening Near You-Stay Tuned for Updates!</h1>
                    <p className="banner-text">
                        Dorem ispum dolor sit amet, consectetur elit. Nunc Valputate libero et velit interdum , ac aliquet
                        odio matties. Class aptent taciti sociosque ad litore per conubia nostra, per
                    </p>
                    </div>
                </div>
                    <div>
                        <div className="Recommended-container">
                            <div style={{display: "flex", alignItems: "center"}}>
                                <p className="Recommended-text">Recommended shows</p>
                                <MdOutlineArrowRightAlt className="ArrowRight-icon" />
                            </div>
                            <p className="seeAll-text">See all</p>
                        </div>
                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error.message}</p>
                        ) : (
                            <Slider {...settings}>
                                {data.map((item, index) =>(
                                    <div key={index}>
                                        <div
                                        style={{
                                            backgroundImage: `url(${item.imgUrl})`,
                                            height: "300px",
                                            width: "200px",
                                            borderRadius: "6px",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            display: "flex", flexDirection:"column", justifyContent: "flex-end"
                                        }}
                                         >
                                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "0px"}}>
                                            <p className="rec-text">Make Agree</p>
                                            <p className="rec-text">{item.date.split('T')[0]}</p>
                                         </div> 
                                         <div>
                                            <div className="location-container2">
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <FaLocationDot className="location-iocn" />
                                                    <p className="rec-text">{item.cityName}</p>
                                                </div>
                                                <p className="rec-text">{item.weather}</p>
                                            </div>
                                         </div>
                                         </div>
                                         {/* </div> */}
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendedShows;
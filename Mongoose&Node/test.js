import React from "react";
import Slider from "react-slick";
import { UPLOADS_URL } from "../../../config";
import Link from "next/link";
import moment from 'moment';

const Events = ({ events }) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  }

  return (
    <div>
      <Slider {...settings} arrows={false}>
      {/*console.log('events data received in comp',events)*/}
      {/*console.log('event images data received in comp',events[1].images)*/}
      {events.slice(0, 12).map((eitem,i) => (
          <div className="item" key={i}>
            <div className="feat_property home3">
              <div className="thumb">
                {/* {eitem.images.map((image, i) => (
                  <div key={i}> */}
                 {/* { console.log('events data in event map',eitem)}
                 { console.log('events data 2 in event map',eitem.images[0].filePath) } */}
                  {(eitem.images.length>0) && (
                    <img
                      className="img-whp"
                       src={`${UPLOADS_URL}/${eitem.images[0].filePath}`} height="75"
                      alt="5.jpg"
                    />
                  )}
                  {/* </div>
                ))} */}
                {/* <img className="img-whp" src={item.img} alt="fp1.jpg" /> */}
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    <li className="list-inline-item">
                      <a href="#">Upcoming</a>
                    </li>
                  </ul>
                </div>
                </div>    {/******thumb*/}
                <div className="details">
                <div className="tc_content">
                  <p className="text-thm"></p>
                  <h4>
                    <Link href={``}>
                      <a>{eitem.title}</a>
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                     {eitem.excerpt}

                  {eitem.excerpt}
                    {/* {item.location} */}

                  </p>
                  <p>{eitem.date}</p>
                  
                  <p>{moment(eitem.date).format('DD-MM-YYYY')}</p>
                  <ul className="prop_details mb0">
                   
                  </ul>
                
              </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div> */}
      {/* {console.log('events data received in comp',events)}
                {console.log('event images data received in comp',events[1].images)} */}
      {/* {events.map((event, index) => (
                <div key={index} className="col-lg-4">
                <div>{event.title}</div>
                <div className="col-lg-8" dangerouslySetInnerHTML={{ __html: (event.description) }} />
                {event.images.map((image, i) => (
                <div key={i} className="col-lg-8">
                <img src={`${UPLOADS_URL}/${image.filePath}`} height="75"/> */}
      {/* <h1 className="legend">{each.fileCaption}</h1> */}
      {/* </div> */}
      {/* ))}
            </div>
              ))}
              */}
      {/* </div> */}
    </div>
  );
};

export default Events;
import Carousel from "nuka-carousel";

import React, { memo, useEffect } from "react";
import styles from "../assets/css/components/webEvent.module.css";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { useGetEventsQuery } from "../generated/graphql";

const WebEvent = () => {
  const router = useRouter();
  const {data,error} = useGetEventsQuery()
  useEffect(() =>{
    if(error) console.log(error)

  },[error]) 
  return (
    <>
      {isMobile ? (
        <div className={styles.containerMobile}>
          <Carousel
          speed={1000}
          autoplayInterval={3000}
          wrapAround
          autoplay
          slidesToShow={1}
          slidesToScroll={1}
          defaultControlsConfig={{
            prevButtonStyle: {
              display: "none",
            },
            nextButtonStyle: {
              display: "none",
            },

            pagingDotsStyle: {
              display: "none",
            },
          }}
          >
            {data?.getEvents.success && data.getEvents.myEvents && data.getEvents.myEvents.map(item =>{
              return (
                <img
                key={item.title}
                src={item.thumbnailForMobile}
                onClick={() => {
                  router.push(`/events/${item.title}`);
                }}
              />

              )
            })}
          
          </Carousel >
        </div>
      ) : (
        <div className={styles.containerDesktop}>
          <Carousel  speed={1000}
          autoplayInterval={3000}
          wrapAround
          autoplay
          slidesToShow={1}
          slidesToScroll={1}
          defaultControlsConfig={{
            prevButtonStyle: {
              display: "none",
            },
            nextButtonStyle: {
              display: "none",
            },

            pagingDotsStyle: {
              display: "none",
            },
          }}>
            {data?.getEvents.success && data.getEvents.myEvents && data.getEvents.myEvents.map(item =>{
              return (
                <img
                key={item.title}
                src={item.thumbnailForDesktop}
                onClick={() => {
                  router.push(`/events/${item.title}`);
                }}
              />

              )
            })}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default memo(WebEvent);

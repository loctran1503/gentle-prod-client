import { Badge } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "../assets/css/pages/events.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { isMobile } from 'react-device-detect';
import RedirectHeader, { RedirectHeaderProps } from "../components/RedirectHeader";
import {
  GetEventsDocument,
  GetEventsQuery,
  MyEventResponse
} from "../generated/graphql";
import { client } from "../utils/lib/ApolloClient";

interface Props {
  data: MyEventResponse;
  loading: boolean;
}
const item1: RedirectHeaderProps = {
  displayName: "trang chủ",
  url: "/",
};
const item2: RedirectHeaderProps = {
  displayName: "sự kiện",
  url: `/events`,
};


const list: RedirectHeaderProps[] = [item1, item2];
const Events: NextPage<Props> = ({ data }) => {

 
  return (
    <div>
      <Navbar />
      <div className={styles.distance}>
        <RedirectHeader list={list} pageName="sự kiện"/>
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className={styles.container}>
                {data.myEvents &&
                  data.myEvents.map((item) => (
                    <div className="col l-12 m-12 c-12" key={item.title}>
                      <Link href={`/event/${item.title}`} >
                      <div className={styles.eventItem}>
                        <div className="row">
                          <div className=" l-2 m-2 c-3">
                            <img src={item.thumbnailForMobile} />
                          </div>
                          <div className=" l-10 m-10 c-9">
                            <div className={styles.itemInfo}>
                              <div>
                                <h2 className={styles.title}>{item.title}</h2>
                                <p className={styles.summary} >{item.summary}</p>
                              </div>
                              <Badge colorScheme="green">Đang diễn ra</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? <Footer  /> : <Footer isFixed={true} />}
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const res = await client.query<GetEventsQuery>({
    query: GetEventsDocument,
  });

  return {
    props: {
      data: res.data.getEvents,

      loading: res.loading,
    },
  };
}

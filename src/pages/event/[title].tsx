import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../assets/css/pages/eventDetail.module.css";
import Footer from "../../components/Footer";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import RedirectHeader, {
  RedirectHeaderProps
} from "../../components/RedirectHeader";
import {
  GetEventDocument,
  GetEventQuery,
  GetEventsDocument,
  GetEventsQuery,
  MyEvent
} from "../../generated/graphql";
import { client } from "../../utils/lib/ApolloClient";
import { myDateFormat } from "../../utils/other/MyDateFormat";

interface Props {
  data: MyEvent;
}

const item1: RedirectHeaderProps = {
  displayName: "trang chủ",
  url: "/",
};

const item2: RedirectHeaderProps = {
  displayName: "sự kiện",
  url: "/events",
};

const list: RedirectHeaderProps[] = [item1, item2];

const Title: NextPage<Props> = ({ data }) => {
  const [mySpinner, setMySpinner] = useState(true);
  const router = useRouter()
  useEffect(() => {
    if (!data) {
      router.push("/page-404");
    } else {
      setMySpinner(false);
     
    
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="distance">
        <RedirectHeader list={list} pageName="ưu đãi" />
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className={styles.container}>
                <div className={styles.body}>
                  <h2 className={styles.title}>{data.title}</h2>
                  <h4 className={styles.createdAt}>{myDateFormat(data.createdAt)}</h4>
                  <div className={styles.contentContainer}>
                 
                     <h2 className={styles.contentHeading}>NỘI DUNG </h2>
                    
                    <div className={styles.contentBody}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.content,
                        }}
                        className={styles.content}
                      />
                     
                    </div>
                  </div>

                  <div className={styles.footer}>
                    ---KÍNH CHÚC BẠN CÓ THẬT NHIỀU NIỀM VUI VÀ NHIỀU ĐIỀU TÍCH CỰC TRONG CUỘC SỐNG NHA---
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {mySpinner && <MySpinner />}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetEventsQuery>({
    query: GetEventsDocument,
  });

  return {
    paths: data.getEvents.myEvents!.map((item) => ({
      params: { title: `${item.title}` },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps<
  { [key: string]: any },
  { title: string }
> = async ({ params }) => {
  const { data } = await client.query<GetEventQuery>({
    query: GetEventDocument,
    variables: { title: params?.title },
  });
  return {
    props: {
      data: data.getEvent.myEvent,
    },
  };
};

export default Title;

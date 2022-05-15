import { Button, Input, InputGroup, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/css/pages/admin/createEvent.module.css";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import { MyEventInput, useAdminCreateEventMutation } from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";
import { CLOUDINARY_URL, EVENT_THUMBNAIL } from "../../utils/other/constants";





const createEvent = () => {
  const router = useRouter()

  //CheckIsAdmin
  const { type, isAuthenticated, isLoading } = useSelector(authSelector);

  useEffect(() => {
   
    if (
      (!isLoading && !isAuthenticated) ||
      (!isLoading && isAuthenticated && type !== "admin")
    )
      router.push("/page-404");
 
  }, []);

  
    const [adminCreateEvent] = useAdminCreateEventMutation()
  const [myEvent, setMyEvent] = useState<MyEventInput>({
    title: "",
    thumbnailForDesktop: "",
    thumbnailForMobile:"",
    content: "",

  
  });

  //handle
  //Thumbnail
  const handleThumbnail = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type:string
  ) => {
    const file: File = event.target.files![0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", EVENT_THUMBNAIL);
    const result = await axios.post(
      CLOUDINARY_URL,
      formData
    );
    if(type==="desktop"){
      setMyEvent({ ...myEvent, thumbnailForDesktop: result.data.secure_url });
    }else{
      setMyEvent({ ...myEvent, thumbnailForMobile: result.data.secure_url });
    }
  };



  //submit
  const handleSubmit = async () => {

   const res = await adminCreateEvent({
     variables:{
       input:myEvent
     }
   })
   if(res.errors) console.log(res.errors)
   if(res.data?.adminCreateEvent.success) router.push("/admin/dashboard")
   if(!res.data?.adminCreateEvent.success) alert(res.data?.adminCreateEvent.message)
  };

  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className={styles.container}>
                <InputGroup>
                  <Input
                    placeholder="Tên sự kiện"
                    onChange={(event) =>
                      setMyEvent({ ...myEvent, title: event.target.value })
                    }
                  />
                </InputGroup>

               

                <h2 className={styles.text}>ThumbnailForDesktop</h2>
                <InputGroup>
                 
                  <Input
                    type="file"
                    placeholder="ThumbnailForDesktop"
                    onChange={event => handleThumbnail(event,"desktop")}
                  />
                   {myEvent.thumbnailForDesktop!=="" && <img src={myEvent.thumbnailForDesktop} />}
                </InputGroup>

                <h2 className={styles.text}>ThumbnailForMobile</h2>
                <InputGroup>
                 
                  <Input
                    type="file"
                    placeholder="ThumbnailForMobile"
                    onChange={event => handleThumbnail(event,"mobile")}
                  />
                   {myEvent.thumbnailForMobile!=="" && <img src={myEvent.thumbnailForMobile} />}
                </InputGroup>
               


                <InputGroup>
                  <Textarea value={myEvent.content} onChange={event => setMyEvent({...myEvent,content:event.target.value})}/>
                </InputGroup>
                <Button onClick={handleSubmit}>Tạo Event</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <MySpinner/>}
    </div>
  );
};

export default createEvent;

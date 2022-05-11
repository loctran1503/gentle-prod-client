import { Button, Select } from '@chakra-ui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "../../assets/css/pages/admin/createEvent.module.css";
import MySpinner from '../../components/MySpinner';
import { useAdminAddClassToBrandMutation, useAdminGetProductClassesQuery } from '../../generated/graphql';
import { authSelector } from '../../store/reducers/authSlice';

const AddClassToBrand = () => {
  //CheckAdmin
  const { type, isAuthenticated, isLoading } = useSelector(authSelector);

  useEffect(() => {
   
    if (
      (!isLoading && !isAuthenticated) ||
      (!isLoading && isAuthenticated && type !== "admin")
    )
      router.push("/page-404");
 
  }, []);
    const { data } = useAdminGetProductClassesQuery();
    const [adminAddClassToBrand] = useAdminAddClassToBrandMutation()
    const [classId,setClassId] = useState(0);
  const router = useRouter()
    // handle
    const handleSubmit =async () =>{
        const res = await adminAddClassToBrand({
          variables:{
            brandId:+router.query.brandId!,
            classId
          }
        })
        if(res.errors) alert(res.errors)
        if(!res.data?.adminAddClassToBrand.success) alert(res.data?.adminAddClassToBrand.message)
        if(res.data?.adminAddClassToBrand.success)  router.push("/admin/dashboard")
    }
  return (
    <div>
        <div className="grid wide">
            <div className="row">
                <div className="col l-12 m-12 c-12">
                <Select
                 
                 fontFamily="Roboto"
                 fontSize="1rem"
                 size="sm"
                 className={clsx("boxShadowNone", styles.input)}
                 value={classId}
                 onChange={(event) =>
                   setClassId(+event.target.value)
                 }
               >
                 {data &&
                   data.adminGetProductClasses.classes?.map((item) => (
                     <option key={item.id} value={item.id}>
                       {item.name}
                     </option>
                   ))}
               </Select>
               <Button colorScheme="green" marginTop={40} onClick={handleSubmit}> Submit</Button>
                </div>
            </div>
        </div>
        {isLoading && <MySpinner/>}
    </div>
  )
}

export default AddClassToBrand
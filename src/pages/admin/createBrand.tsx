import { Button, Input, InputGroup, Select } from "@chakra-ui/react";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/css/pages/admin/createEvent.module.css";
import LocalLoading from "../../components/LocalLoading";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import {
  BrandInput,
  useAdminCreateBrandMutation,
  useAdminGetProductClassesQuery,
} from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";

const createBrand = () => {
  const router = useRouter();

  //CheckIsAdmin
  const { type, isAuthenticated, isLoading } = useSelector(authSelector);

  useEffect(() => {
    if (
      (!isLoading && !isAuthenticated) ||
      (!isLoading && isAuthenticated && type !== "admin")
    )
      router.push("/page-404");
  }, []);
  const { data } = useAdminGetProductClassesQuery();

  const [createBrand] = useAdminCreateBrandMutation();
  const [brand, setBrand] = useState<BrandInput>({
    brandName: "",
    thumbnail: "",
    productClassId: 0,
  });
  const [localLoading,setLocalLoading] = useState(false)
  useEffect(() => {
    if (data?.adminGetProductClasses.classes && data?.adminGetProductClasses.classes.length>0) {
      setBrand({...brand,productClassId:data.adminGetProductClasses.classes[0].id})

    }
   
  }, [data]);

  const handleThumbnail = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalLoading(true)
    const file: File = event.target.files![0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "brandThumbnail");
    const result = await axios.post(
      "https://api.cloudinary.com/v1_1/perfumeblog/image/upload",
      formData
    );

    setBrand({ ...brand, thumbnail: result.data.secure_url });
    setLocalLoading(false)
  };
  const handleSubmit = async () => {
    if (brand.productClassId != 0) {
      const res = await createBrand({
        variables: {
          brandInput: brand,
        },
      });
      if (res.errors) console.log(res.errors);
      if (res.data?.adminCreateBrand.success) router.push("/admin/dashboard");
    } else {
      alert(`Class=${brand.productClassId}`);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className={styles.container}>
                <h2>Product Class</h2>
                <Select
                  fontFamily="Roboto"
                  fontSize="1rem"
                  size="sm"
                  className={clsx("boxShadowNone", styles.input)}
                  value={brand.productClassId}
                  onChange={(event) =>
                    setBrand({ ...brand, productClassId: +event.target.value })
                  }
                >
                  {data?.adminGetProductClasses.classes?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>

                <InputGroup>
                  <Input
                    placeholder="Tên thương hiệu"
                    onChange={(event) =>
                      setBrand({ ...brand, brandName: event.target.value })
                    }
                  />
                </InputGroup>

                <InputGroup>
                  <Input
                    type="file"
                    placeholder="Thumbnail"
                    onChange={handleThumbnail}
                  />
                </InputGroup>

                <Button onClick={handleSubmit}>Tạo Thương hiệu này</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <MySpinner />}
      {localLoading && <LocalLoading/>}
    </div>
  );
};

export default createBrand;

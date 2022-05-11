import { Button, Input, Select, Textarea } from "@chakra-ui/react";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "../../assets/css/pages/admin/createProduct.module.css";
import Footer from "../../components/Footer";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import {
  PriceInput,
  ProductInput,
  useAdminGetKindBrandClassQuery,
  useCreateProductMutation,
} from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";
import { AMERICA, KOREA } from "../../utils/other/constants";
import { MoneyConverter } from "../../utils/other/ConvertToMoney";

export interface PriceFieldsProps {
  id?: string;
  type: string;
  price: number;
  status: number;
  salesPercent: number;
}

const createProduct = () => {
  const router = useRouter();

  //CheckIsAdmin
  const { type, isAuthenticated, isLoading } = useSelector(authSelector);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (
      (!isLoading && !isAuthenticated) ||
      (!isLoading && isAuthenticated && type !== "admin")
    )
      router.push("/page-404");
    else {
      setLocalLoading(false);
    }
  }, []);

  const [createNewProduct] = useCreateProductMutation();
  const { data } = useAdminGetKindBrandClassQuery();

  const [product, setProduct] = useState<ProductInput>({
    productName: "",
    thumbnail: "",
    prices: [],
    description: "",
    imgDescription: [],
    brandId: 0,
    kindId: 0,
    classId: 0,
    countryName: AMERICA,
  });

  const handleSubmit = async () => {
    const graphqlResult = await createNewProduct({
      variables: {
        productInput: product,
      },
    });

    if (graphqlResult.data?.createProduct.success)
      router.push("/admin/dashboard");
    if (graphqlResult.errors) console.log(graphqlResult.errors);
    if (!graphqlResult.data?.createProduct.success)
      alert(graphqlResult!.data!.createProduct.message);
  };

  //Img Description
  const handleImgDescription = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalLoading(true);
    Promise.all(
      Array.from(event.target.files!).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "imgDescription");
        const result = await axios.post(
          "https://api.cloudinary.com/v1_1/perfumeblog/image/upload",
          formData
        );
        return result.data.secure_url;
      })
    ).then((imgList) => {
      setProduct({ ...product, imgDescription: imgList });
      setLocalLoading(false);
    });
  };
  //Thumbnail
  const handleThumbnail = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: File = event.target.files![0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "thumbnail");
    const result = await axios.post(
      "https://api.cloudinary.com/v1_1/perfumeblog/image/upload",
      formData
    );
    setProduct({
      ...product,
      thumbnail: result.data.secure_url,
    });
  };

  //Price Field
  const [priceFields, setPriceFields] = useState<PriceFieldsProps[]>([
    { id: uuidv4(), type: "", price: 0, status: 1, salesPercent: 0 },
  ]);

  useEffect(() => {
    let newPriceList: PriceInput[] = [];
    priceFields.map((field) => {
      newPriceList.push({
        type: field.type,
        price: field.price,
        status: field.status,
        salesPercent: field.salesPercent,
      });
    });
    setProduct({ ...product, prices: newPriceList });
  }, [priceFields]);

  const handleAddFields = () => {
    setPriceFields([
      ...priceFields,
      { id: uuidv4(), type: "", price: 0, status: 1, salesPercent: 0 },
    ]);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...priceFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setPriceFields(values);
  };
  const onFieldChange = (
    id?: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPriceFields = priceFields.map((field) => {
      if (field.id === id) {
        switch (event!.target.name) {
          case "type":
            field.type = event!.target.value;
            break;

          case "price":
            const price = +event!.target.value;
            field.price = price;
            break;
          case "status":
            const status = +event!.target.value;
            field.status = status;
            break;
          case "salesPercent":
            const salesPercent = +event!.target.value;
            field.salesPercent = salesPercent;
            break;
        }
      }
      return field;
    });

    setPriceFields(newPriceFields);
  };
  useEffect(() => {
    if (data) {
      const kindOne = data.adminGetKindBrandClass.kinds![0];
      const brandOne = data.adminGetKindBrandClass.brands![0];
      const classOne = data.adminGetKindBrandClass.classes![0];
      if (kindOne && brandOne && classOne)
        setProduct({
          ...product,
          kindId: kindOne.id,
          classId: classOne.id,
          brandId: brandOne.id,
        });
    }
  }, [data]);
  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className={styles.container}>
                {/* Country */}
                <Select
                  fontFamily="Roboto"
                  fontSize="1rem"
                  size="sm"
                  className={clsx("boxShadowNone", styles.input)}
                  value={product.countryName}
                  onChange={(e) =>
                    setProduct({ ...product, countryName: e.target.value })
                  }
                >
                  <option value={AMERICA}>{AMERICA}</option>
                  <option value={KOREA}>{KOREA}</option>
                 
                </Select>
                {/* Kind */}
                <Select
                  placeholder="Tên Kind"
                  fontFamily="Roboto"
                  fontSize="1rem"
                  size="sm"
                  className={clsx("boxShadowNone", styles.input)}
                  onChange={(e) =>
                    setProduct({ ...product, kindId: +e.target.value })
                  }
                  value={product.kindId}
                >
                  {data &&
                    data.adminGetKindBrandClass.kinds?.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                </Select>
                {/* Class */}
                <Select
                  placeholder="Tên Class"
                  fontFamily="Roboto"
                  fontSize="1rem"
                  size="sm"
                  className={clsx("boxShadowNone", styles.input)}
                  onChange={(e) =>
                    setProduct({ ...product, classId: +e.target.value })
                  }
                  value={product.classId}
                >
                  {data?.adminGetKindBrandClass.classes?.map((item) => {
                    if (item.kind.id === product.kindId)
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                  })}
                </Select>

                {/* Brand */}
                <Select
                  placeholder="Tên thương hiệu"
                  fontFamily="Roboto"
                  fontSize="1rem"
                  size="sm"
                  className={clsx("boxShadowNone", styles.input)}
                  value={product.brandId}
                  onChange={(event) =>
                    setProduct({ ...product, brandId: +event.target.value })
                  }
                >
                  {data?.adminGetKindBrandClass.brands?.map((item) => {
                
                      return (
                        <option value={item.id} key={item.id}>
                          {item.brandName}
                        </option>
                      );
                  })}
                </Select>

                <Input
                  placeholder="Tên sản phẩm"
                  className={styles.input}
                  onChange={(event) => {
                    setProduct({
                      ...product,
                      productName: event.target.value,
                    });
                  }}
                />
                <div>
                  Thumbnail
                  <Input
                    placeholder="Thumbnail"
                    onChange={handleThumbnail}
                    className={styles.input}
                    type="file"
                  />
                </div>

                <div className={styles.namePriceHeader}>
                  <h2>Type</h2>
                  <h2>Price</h2>
                  <h3>Status</h3>
                  <h3>SalesPercent</h3>
                </div>
                {priceFields.map((field) => (
                  <div key={field.id}>
                    <div className={styles.priceItem}>
                      <div className={styles.inputContainer}>
                        <Input
                          name="type"
                          value={field.type!}
                          placeholder="Type"
                          className={styles.inputPrice}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            onFieldChange(field.id, event);
                          }}
                        />

                        <Input
                          name="price"
                          value={field.price!}
                          placeholder="Price"
                          className={styles.inputPrice}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            onFieldChange(field.id, event);
                          }}
                        />
                        <h1>{MoneyConverter(field.price)}</h1>

                        <Input
                          name="status"
                          value={field.status!}
                          placeholder="Status"
                          className={styles.inputPrice}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            onFieldChange(field.id, event);
                          }}
                        />
                        <Input
                          name="salesPercent"
                          value={field.salesPercent!}
                          placeholder="Phần trăm giảm"
                          className={styles.inputPrice}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            onFieldChange(field.id, event);
                          }}
                        />

                        <Button
                          colorScheme="red"
                          onClick={() => handleRemoveFields(field.id!)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={styles.buttonContainer}>
                  <Button colorScheme="green" onClick={handleAddFields}>
                    Add New Type
                  </Button>
                </div>

                <div>
                  <h2 style={{ marginTop: 12 }}>Img Description</h2>
                  <Input
                    placeholder="Img Description"
                    className={styles.input}
                    type="file"
                    multiple
                    onChange={handleImgDescription}
                  />
                </div>
         

                <div className={styles.productDescription}>
                  <h2>Description</h2>
                  <Textarea
                    placeholder="Description of product"
                    onChange={(event) => {
                      setProduct({
                        ...product,
                        description: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className={styles.btnConfirm}>
                <Button colorScheme="green" onClick={handleSubmit}>
                  Create New Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {localLoading && <MySpinner />}
    </div>
  );
};

export default createProduct;

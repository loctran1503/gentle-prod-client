import { Button, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/css/pages/admin/createProduct.module.css";
import MySpinner from "../../components/MySpinner";
import { useAdminCreateCountryMutation } from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";
import { AMERICA, KOREA, VIETNAM } from "../../utils/other/constants";
const CreateCountry = () => {
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

  const [adminCreateCountry] = useAdminCreateCountryMutation();

  const [countryName, setCountryName] = useState(AMERICA);

  // handle
  const handleSubmit = async () => {
    console.log(countryName);
    if (countryName !== "") {
      const res = await adminCreateCountry({
        variables: {
          countryName,
        },
      });
      if (res.errors) alert(res.errors);
      if (res.data?.adminCreateCountry.code === 400)
        alert(res.data?.adminCreateCountry.message);
      if (res.data?.adminCreateCountry.success) router.push("/admin/dashboard");
    } else {
      alert("country null");
    }
  };
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-6 l-o-3 m-12 c-12">
          <div className={styles.containerProductKindAndClass}>
            <h1 className={styles.headingProductKindAndClass}>Country</h1>

            <Select
              marginBottom={40}
              marginTop={10}
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
            >
              <option value={AMERICA}>{AMERICA}</option>
              <option value={KOREA}>{KOREA}</option>
              <option value={VIETNAM}>{VIETNAM}</option>
            </Select>
            <Button colorScheme="green" onClick={handleSubmit}>
              Create
            </Button>
          </div>
        </div>
      </div>
      {isLoading && <MySpinner />}
    </div>
  );
};

export default CreateCountry;

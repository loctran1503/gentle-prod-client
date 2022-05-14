import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import clsx from "clsx";

import { useRouter } from "next/router";
import React from "react";

import styles from "../assets/css/components/login.module.css";
import { AuthInput, useLoginWithSocialsMutation } from "../generated/graphql";

import {
  SignInWithFirebaseFacebook,
  SignInWithFirebaseGoogle,
} from "../utils/lib/FirebaseAPI";


import { IFirebaseResponse } from "../utils/type/customType";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [userLogin] = useLoginWithSocialsMutation();
  const toast = useToast();

  //Login

  const handleFacebookLogin = async () => {
    const result: IFirebaseResponse = await SignInWithFirebaseFacebook();
    if (result.userId && result.userAvatar && result.userName) {
      const authInput: AuthInput = {
        userId: result.userId,
        userName: result.userName,
        userAvartar: result.userAvatar,
      };
      const graphqlResponse = await userLogin({
        variables: {
          authInput,
        },
      });
      if (graphqlResponse.data?.loginWithsocial.success) {
        if(typeof window!=="undefined"){
          localStorage.setItem("SESSION_TOKEN",graphqlResponse.data.loginWithsocial.token!)
        }
        router.reload();
      }
    }
    if (result.error)
      toast({
        title: "Đăng nhập",
        description: `${result.error}`,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
  };
  const handleGooleLogin = async () => {
    const result: IFirebaseResponse = await SignInWithFirebaseGoogle();
    if (result.userId && result.userAvatar && result.userName) {
      const authInput: AuthInput = {
        userId: result.userId,
        userName: result.userName,
        userAvartar: result.userAvatar,
      };
      const graphqlResponse = await userLogin({
        variables: {
          authInput,
        },
      });
      if (graphqlResponse.data?.loginWithsocial.success) {
        if(typeof window!=="undefined"){
          localStorage.setItem("SESSION_TOKEN",graphqlResponse.data.loginWithsocial.token!)
        }
        router.reload();
      }
    }
    if (result.error)
      toast({
        title: "Đăng nhập",
        description: `${result.error}`,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
  };

  return (
    <div>
      <div className={styles.loginEvent}>
        <h2 onClick={onOpen}>Đăng nhập</h2>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <div className={styles.loginContainer}>
            <h1>Đăng nhập</h1>

            <div className={styles.body}>
              <div
                className={clsx(
                  styles.loginButtonContainer,
                  styles.loginWithFacebook
                )}
                onClick={handleFacebookLogin}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.iconLogin}
                />
                Đăng nhập với Facebook
                <div></div>
              </div>
              <div
                className={clsx(
                  styles.loginButtonContainer,
                  styles.loginWithGoogle
                )}
                onClick={handleGooleLogin}
              >
                <FontAwesomeIcon icon={faGoogle} className={styles.iconLogin} />
                Đăng nhập với Google
                <div></div>
              </div>

              <div className={styles.detail}>
              <p>Tôi có nguy cơ bị lộ thông tin cá nhân khi đăng nhập vào trang web này?<span onClick={() => router.push("/policy/user-info-rule")}>Tìm hiểu thêm</span></p>
              </div>

              <p className={styles.textRule}>
                Bằng cách đăng nhập, bạn đã đồng ý với các{" "}
                <span className={styles.linkRule} onClick={() => router.push("/policy/service")}>Điều khoản dịch vụ</span> của
                chúng tôi.
              </p>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};



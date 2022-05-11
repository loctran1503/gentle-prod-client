import React, { ReactNode } from "react";
import { BillStatusType } from "../utils/type/BillStatusType";
import { Badge } from "@chakra-ui/react";

const MyBadge = ({ name }: { name: BillStatusType }) => {
  let body: ReactNode = null;

  switch (name) {
    case BillStatusType.CANCEL:
      body = <Badge>{name}</Badge>;
      break;
    case BillStatusType.COMFIRM_WAITING:
      body = <Badge  colorScheme="green" >{name}</Badge>;
      break;
    case BillStatusType.CONFIRMED:
      body = <Badge colorScheme="yellow">{name}</Badge>;
      break;
    case BillStatusType.PACKED:
      body = <Badge colorScheme="orange">{name}</Badge>;
      break;
    case BillStatusType.DELIVERING:
      body = <Badge colorScheme="red" variant="solid">{name}</Badge>;
      break;
      case BillStatusType.COMPLETED:
        body = <Badge colorScheme="green" variant="solid">{name}</Badge>;
        break;
    default:
      body = <Badge >{name}</Badge>;
      break;
  }

  return <div>{body}</div>;
};

export default MyBadge;

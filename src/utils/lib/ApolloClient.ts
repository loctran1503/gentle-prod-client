import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { User, UserComment } from "../../generated/graphql";
import JwtManager from "../other/JwtManager";

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://gentlevn.com/ecommerce"
      : "http://localhost:4000/graphql",
  credentials: "include",
});



const authMiddleware = new ApolloLink((operation, forward) => {
  const token = JwtManager.getToken();

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));
  return forward(operation);
});
export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          // getEvent: {
          //   keyArgs: false,
          //   merge(_, incoming) {
          //     return incoming;
          //   },
          // },
          // getEvents: {
          //   keyArgs: false,
          //   merge(_, incoming) {
          //     return incoming;
          //   },
          // },
          getUser: {
            keyArgs: false,
            merge(_, incoming) {
              return incoming;
            },
          },
          getProduct: {
            keyArgs: false,
            merge(_, incoming) {
              return incoming.product;
            },
          },
          getProductsForIndex:{
            keyArgs: false,
            merge(_, incoming) {
         
              return incoming.products;
            },
          },
          getBrandWithProducts:{
            keyArgs: false,
            merge(_, incoming) {
          
              return incoming.products;
            },
          },
          getProductsByKind: {
            keyArgs: false,
            merge(_, incoming) {
              return incoming.products;
            },
          },
         
          getPaginationUsers: {
            keyArgs: false,
            merge(existing, incoming) {
              let paginationsItem: User[] = [];

              if (existing && existing.users) {
                paginationsItem = paginationsItem.concat(existing.users);
              }

              if (incoming && incoming.users) {
                paginationsItem = paginationsItem.concat(incoming.users);
              }

              return { ...incoming, users: paginationsItem };
            },
          },
          getComments: {
            keyArgs: false,
            merge(existing, incoming) {
              let paginationItems: UserComment[] = [];

              if (existing && existing.comments) {
                paginationItems = paginationItems.concat(existing.comments);
              }

              if (incoming && incoming.comments) {
                paginationItems = paginationItems.concat(incoming.comments);
              }

              return { ...incoming, comments: paginationItems };
            },
          },

        },
      },
    },
  }),
  link: concat(authMiddleware, httpLink),
});

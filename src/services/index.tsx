import request, { gql } from "graphql-request"

export const getCarsList= async () => {
    const query = gql `
    query MyQuery {
  carLists {
    carAvg
    carType
    name
    seats
    image {
      url
    }
    id
    price
    createdAt
  }
}
    `

    const result = await request('https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clzr5ntyf05ln07w5mkpk6znt/master', query);
    return result;
}
import { gql } from "apollo-boost";

export const GALLERIES_PAGE = gql`
    query MyQuery($offset: Int = 0, $limit: Int = 32) {
        configs_by_pk(key: "galleries") {
            description
            key
            title
            image
        }
        images_random(limit: 16) {
            image
            id
            title
        }
        images(order_by: {updated_at: desc}, offset: $offset, limit: $limit) {
            image
            title
            id
            description
        }
        images_aggregate {
            aggregate {
                count
            }
        }
        categories {
            category
            id     
            images_aggregate {
                aggregate {
                    count
                }
            }             
        } 
        ads: ads_random(where: {pages_section: {page: {token: {_eq: "galleries"}}}}, limit: 1) {
            id
            title
            file
        }
    }
`;

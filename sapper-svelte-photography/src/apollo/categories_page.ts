import { gql } from "apollo-boost";

export const CATEGORIES_PAGE = gql`
    query MyQuery($offset: Int = 0, $category: bigint, $limit: Int = 32) {
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
        images(order_by: {updated_at: desc}, offset: $offset, limit: $limit, where: {category: {id: {_eq: $category}}}) {
            image
            title
            id
        }
        images_aggregate(where: {category: {id: {_eq: $category}}}) {
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
    }
`;

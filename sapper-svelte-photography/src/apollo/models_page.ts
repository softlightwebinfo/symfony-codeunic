import { gql } from "apollo-boost";

export const MODELS_PAGE = gql`
    query MyQuery($offset: Int = 0, $limit: Int = 32, $category: Int = 2) {
        configs_by_pk(key: "models") {
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
        }
        users_showcase_aggregate(where: {user: {fk_user_type: {_eq: $category}}}) {
            aggregate {
                count
            }
        }
        user_types {
            id
            user_type
        }
        users_showcase(where: {user: {fk_user_type: {_eq: $category}}}, order_by: {updated_at: desc}, limit: $limit, offset: $offset) {
            updated_at
            title
            description
            image
            user {
                name
                username
                user_type {
                    user_type
                }
            }
        }
    }
`;

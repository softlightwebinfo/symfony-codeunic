import { gql } from "apollo-boost";

export const PHOTOGRAPHERS_PAGE = gql`
    query MyQuery($offset: Int = 0, $limit: Int = 32) {
        configs_by_pk(key: "photographers") {
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
        users_showcase_aggregate {
            aggregate {
                count
            }
        }
        user_types {
            id
            user_type
            images_aggregate: users_aggregate {
                aggregate {
                    count
                }
            }
        }
        users_showcase(order_by: {updated_at: desc}, limit: $limit, offset: $offset) {
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
        ads: ads_random(where: {pages_section: {page: {token: {_eq: "photographers"}}}}, limit: 1) {
            id
            title
            file
        }
    }
`;

export const PHOTOGRAPHERS_PAGE_SLUG = gql`
    query MyQuery($category: Int, $offset: Int = 0, $limit: Int = 32) {
        configs_by_pk(key: "photographers") {
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
            images_aggregate: users_aggregate {
                aggregate {
                    count
                }
            }
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
        ads: ads_random(where: {pages_section: {page: {token: {_eq: "photographers"}}}}, limit: 1) {
            id
            title
            file
        }
    }
`;

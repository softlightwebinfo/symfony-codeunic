import { gql } from "apollo-boost";

export const SHOWCASE_PAGE = gql`
    query MyQuery($username: String!) {
        users_showcase(where: {user: {username: {_eq: $username}}}) {
            image
            title
            updated_at
            description
            imageByFkBanner {
                image
            }
            users_socials {
                social_name
                social_url
            }
            user {
                name
                email
                username
                created_at
                user_type {
                    user_type
                }
                ads(order_by: {updated_at: desc}, where: {expired_at: {_is_null: true}, _or: {expired_at: {}}}) {
                    file
                    title
                }
                albums {
                    id
                    title
                    photo(limit: 1) {
                        image
                        title
                    }
                }
                images {
                    image
                    description
                    title
                }
                posts {
                    message
                    updated_at
                }
            }
        }
    }
`;

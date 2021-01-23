import { gql } from "apollo-boost";

export const HOME_PAGE = gql`
	{
        configs_by_pk(key: "home_slider"){
            description,
            key,
            title
        }
        albums(limit: 6, order_by: {updated_at: desc}) {
            id
            title
            updated_at
            fk_user_id
            images(limit: 1) {
                image
                description
                title
            }
        }
        images_aggregate(limit: 12, where: {album: {id: {_is_null: false}}}) {
            nodes {
                id
                image
                title
                album {
                    title
                }
            }
        }
        view_testimonials_home {
            name
            message
        }
        about_us_list {
            description
            icon
            id
            title
        }
        images_users_home_aggregate(where: {user: {images: {id: {_is_null: false}}}}, limit: 2) {
            nodes {
                title
                description
                user {
                    images(limit: 2) {
                        id
                        image
                        title
                    }
                }
            }
        }
        images_random(limit: 16) {
            image
            id
            title
        }       
        categories {
            category
            id
            description
            images_aggregate {
                aggregate {
                    count
                }
            }
        } 
	}
`;

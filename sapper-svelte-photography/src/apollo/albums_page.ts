import { gql } from "apollo-boost";

export const ALBUMS_PAGE = gql`
	{
        configs_by_pk(key: "albums"){
            description,
            key,
            title
            image
        } 
        images_random(limit: 16) {
            image
            id
            title
        }  
         images_aggregate(limit: 10, where: {album: {id: {_is_null: false}}}) {
            nodes {
                id
                image
                title
                album {
                    title
                }
            }
        }
	}
`;

export const AlBUMS_DETAIL_PAGE = gql`
	query MyQuery($album: bigint!){
        images_random(limit: 16) {
            image
            id
            title
        }        
        album: albums_by_pk(id: $album) {
            title
            description
            updated_at
            images {
                image
                description
                title
            }
            albums_tags {
                tag
            }
            user {
                id
                name
                username    
                updated_at            
                user_type {
                    user_type
                }
                users_showcases {
                    image
                }
            }
        } 
	}
`;

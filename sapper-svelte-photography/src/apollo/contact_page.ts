import { gql } from "apollo-boost";

export const CONTACT_PAGE = gql`
	{
        configs_by_pk(key: "contact"){
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
	}
`;

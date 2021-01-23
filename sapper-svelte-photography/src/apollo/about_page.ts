import { gql } from "apollo-boost";

export const ABOUT_PAGE = gql`
	{
        configs_by_pk(key: "about"){
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
        about_us_list {
            description
            icon
            id
            title
        }    
        view_testimonials_home {
            name
            message
        }      
	}
`;

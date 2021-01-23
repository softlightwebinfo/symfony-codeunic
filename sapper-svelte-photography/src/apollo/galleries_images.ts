import { gql } from "apollo-boost";

export const GALLERIES_IMAGES = gql`
	{
        query MyQuery {
            images(order_by: {updated_at: desc}, limit: 32, offset: 0) {
                image
                title
                id
            }
        }
	}
`;

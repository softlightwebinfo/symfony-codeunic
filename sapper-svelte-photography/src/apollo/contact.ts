import { gql } from "apollo-boost";

export const MUTATION_CONTACT_CREATE = gql`
    mutation MyMutation($email: String!, $name: String!, $phone: String!, $message: String!) {
        insert_contacts_one(object: {email: $email, name: $name, phone: $phone, message: $message}) {
            id
        }
    }
`;

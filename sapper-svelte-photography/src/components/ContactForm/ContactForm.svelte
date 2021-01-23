<script>
    import {contact} from "../../store/ContactStore";
    import Container from "../Container/Container.svelte";
    import FieldTextarea from "../Field/FieldTextarea.svelte";
    import Field from "../Field/Field.svelte";
    import Button from "../Button/Button.svelte";
    import apollo from "../../apollo";
    import {MUTATION_CONTACT_CREATE} from "../../apollo/contact";

    const onSubmitContact = async (e) => {
        e.preventDefault();
        let {data} = await apollo.mutate({
            mutation: MUTATION_CONTACT_CREATE,
            variables: {
                email: $contact.email,
                name: $contact.name,
                phone: $contact.phone,
                message: $contact.message,
            },
        });
        $contact.message = "";
        $contact.phone = "";
        $contact.name = "";
        $contact.email = "";
        if (data.insert_contacts_one) {
            alert("Se ha enviado correctamente el formulario");
        }
    };
</script>

<style lang="scss">
  @import "src/style/index";
  @import "ContactForm";
</style>

<form on:submit={onSubmitContact}>
    <Container>
        <h2>Ready to work with Us? Get in Touch</h2>
        <p>We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria
            dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec,
            impetus nostrum ea eos.</p>
        <Field required bind:value={$contact.name} label="Nombre"/>
        <Field required bind:value={$contact.email} label="Email"/>
        <Field required bind:value={$contact.phone} label="Telefono"/>
        <FieldTextarea required bind:value={$contact.message} label="Mensaje"/>
        <Button text="Enviar mensaje"/>
    </Container>
</form>

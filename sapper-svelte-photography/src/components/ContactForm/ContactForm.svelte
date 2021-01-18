<script>
    import {contact} from "../../store/ContactStore";
    import Container from "../Container/Container.svelte";
    import FieldTextarea from "../Field/FieldTextarea.svelte";
    import Field from "../Field/Field.svelte";
    import Button from "../Button/Button.svelte";
</script>

<style lang="scss">
  @import "src/style/index";
  @import "ContactForm";
</style>

<form>
    <Container>
        <h2>Ready to work with Us? Get in Touch</h2>
        <p>We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.</p>
        <Field label="Nombre" bind:value={$contact.name}/>
        <Field label="Email" bind:value={$contact.email}/>
        <Field label="Telefono" bind:value={$contact.phone}/>
        <FieldTextarea label="Mensaje" bind:value={$contact.message}/>
        <Button text="Enviar mensaje"/>
    </Container>
</form>

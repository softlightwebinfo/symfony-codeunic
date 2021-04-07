<style lang="scss">
  @import "Notes";
</style>
<script>
  import Button from "../../../../components/Button/Button.svelte";
  import Directory from "../Directory/Directory.svelte";
  import Toolbar from "../Toolbar/Toolbar.svelte";
  import {onMount} from "svelte";
  import {NoteService} from "../../../../services/NoteService";
  import NotesList from "../NotesList/NotesList.svelte";

  let notes = [];
  let notesList = []

  onMount(() => {
    NoteService.GetAllUser().then(rs => rs.json()).then(rs => {
      notes = rs;
    });
  })

  let indexDirectory = 0;
  let previewNote = null;
  let newDirectory = false;
  let noteListRef = null;

  const onClickDirectory = (note, index) => () => {
    indexDirectory = index;
    previewNote = null;
  }

  const onClickPreviewNote = (note) => {
    previewNote = note.detail;
  };

  const onClickNewDirectory = () => {
    newDirectory = true;
    previewNote = null;
    indexDirectory = null;
  }

  const onEnterSaveDirectory = (evt) => {
    const {detail} = evt;
    NoteService
      .createDirectory(detail)
      .then(rs => rs.json())
      .then(rs => {
        notes = [...notes, {...rs, notes: 0}];
        newDirectory = false;
        indexDirectory = notes.length - 1;
      })
  };

  $: activeDirectory = notes[indexDirectory];

  const onCreate = () => {
    NoteService.CreateNote(activeDirectory.id)
      .then(rs => rs.json())
      .then(rs => {
        notesList = [rs, ...notesList];
        previewNote = notesList[0]
        notes[indexDirectory].notes = notesList.length;
      })
  }

  const onDelete = () => {
    if (!confirm("Quieres eliminar la nota?")) return
    NoteService.DeleteNote(previewNote.id, previewNote.fk_directory)
      .then(rs => rs.json())
      .then(rs => {
        notesList = notesList.filter(item => item.id !== rs.id)
        notes[indexDirectory].notes = notesList.length
        if (notesList.length) {
          previewNote = notesList[0]
        }
      })
  }
  const saveNotePreview = (value, column) => {
    NoteService
      .UpdateNote(
        previewNote.fk_directory,
        previewNote.id,
        value,
        column
      )
      .then(rs => rs.json())
      .then(rs => {
        const note = notesList.findIndex(i => i.id === previewNote.id)
        notesList[note] = rs
        previewNote = rs;
      })
  }
  const onChangePreviewTitle = (evt) => {
    const value = evt.target.innerText;
    saveNotePreview(value, "title");
  }

  const onChangePreviewDescription = (evt) => {
    const value = evt.target.innerText;
    saveNotePreview(value, "description");
  }

  $: description = previewNote?.description.replace(/(?:\r\n|\r|\n)/g, '<br>');
</script>
<div>
  <Toolbar
    on:create={onCreate}
    on:delete={onDelete}
  />
  <section>
    <aside>
      <ul>
        {#each notes as note, index}
          <Directory
            active="{indexDirectory === index}"
            label="{note.title}"
            length="{note.notes}"
            on:click={onClickDirectory(note,index)}
          />
        {/each}
        {#if newDirectory}
          <Directory
            on:enter={onEnterSaveDirectory}
            active="true"
            length="0"
            newDirectory
          />
        {/if}
      </ul>
      <Button on:click={onClickNewDirectory} text="Nueva carpeta"/>
    </aside>
    <div class="list-notes">
      <NotesList
        {activeDirectory}
        bind:notesList
        bind:this={noteListRef}
        on:clickNote={onClickPreviewNote}
        {previewNote}
      />
    </div>
    <div class="preview">
      {#if previewNote}
        <h3
          on:blur={onChangePreviewTitle}
          contenteditable
        >
          {previewNote.title}
        </h3>
        <p
          on:blur={onChangePreviewDescription}
          contenteditable
        >
          {@html description}
        </p>
      {/if}
    </div>
  </section>
</div>

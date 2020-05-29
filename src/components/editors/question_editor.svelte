<script>
  import debounce from 'lodash/debounce';
  import {
    EMPTY
  } from 'rxjs';
  import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from "sveltestrap";
  import Fa from 'svelte-fa'
  import {
    faCheck
  } from '@fortawesome/free-solid-svg-icons/faCheck';
  import {
    faTimes
  } from '@fortawesome/free-solid-svg-icons/faTimes';
  import {
    faTrashAlt
  } from '@fortawesome/free-regular-svg-icons/faTrashAlt';


  import MediaItemModal from 'src/components/modals/media_item_modal.svelte';
  import MediaFile from 'src/models/MediaFile';
  import Question from 'src/models/Question';

  export let question;

  let mediaItems;
  let mediaType = 'image';
  let audioFile;
  let audioFileContent;
  let audioFileName;
  let imageFileContent;
  let imageFileName;
  let videoUrl;


  let isOpen = false;
  let modalIsOpen = false;


  $: mediaItems = $question ? $question.mediaItems() : EMPTY;
  $: questionOptions = $question ? ($question.options || []) : [];


  function addMediaItemModal_cancel() {
    modalIsOpen = false;
  }

  function extractFileName(filePath) {
    return filePath.split('\\').pop().split('/').pop();
  }

  async function addMediaItemModal_confirm() {
    let mediaItemProps = {
      mediaType
    };
    let mediaFileProps = {

    }
    let fileName;

    if (mediaType === 'audio') {
      fileName = extractFileName(audioFileName);
      mediaItemProps.fileName = fileName;

      mediaFileProps.id = fileName;
      mediaFileProps.url = audioFileContent;
    }

    if (mediaType === 'image') {
      fileName = extractFileName(imageFileName);
      mediaItemProps.fileName = fileName;

      mediaFileProps.id = fileName;
      mediaFileProps.url = imageFileContent;

    }

    if (mediaType === 'video') {
      mediaItemProps.fileName = videoUrl;
      mediaItemProps.url = videoUrl;
    }

    $question.addMediaItem(mediaItemProps);

    if (mediaType === 'audio' || mediaType === 'image') {
      $question.addMediaFile(mediaFileProps);
    }

    modalIsOpen = false;
  }


  async function handleAudioFile_input(event) {
    audioFileContent = await toBase64(event.target.files[0]);
    audioFileName = event.target.value;
  }

  async function handleImageFile_input(event) {
    imageFileContent = await toBase64(event.target.files[0]);
    imageFileName = event.target.value;
  }


  const handleQuestionTextInput_input = debounce(
    function(event) {
      // $question.text = event.target.value;
      $question.update({
        text: event.target.value
      });
    },
    300
  );


  const handleQuestionrevealAnswer_change = debounce(
    function(event) {
      $question.update({
        reveal_answer: event.target.checked
      });
    },
    300
  );


  const handleOptionTextInput = debounce(
    function(event, option) {
      option.text = event.target.value;
      $question.update({
        options: $question.options
      });
    },
    300
  );


  function handleOptionCorrectChange(event, option) {

    $question.options.forEach(it => it.correct = false);
    option.correct = event.target.checked;
    $question.update({
      options: $question.options
    });
  }


  const handleAudioUrlInput_input = debounce(
    function(event) {
      $question.update({
        audio: {
          ...$question.audio,
          url: event.target.value
        }
      });
    },
    300
  );


  async function handleAudioFileInput_input(event) {
    console.log(event);
    if (event.target.files) {
      let fileContent = await toBase64(event.target.files[0]);
      $question.update({
        audio: {
          ...$question.audio,
          file: fileContent
        }
      });
    }
  }

  const handleVideoUrlInput_input = debounce(
    function(event) {
      $question.update({
        video: {
          ...$question.video,
          url: event.target.value
        }
      });
    },
    300
  );


  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


  function handleAddOption_click(event) {
    let optionIndex = $question.options.length;
    let optionValue = String.fromCharCode(65 + optionIndex)
    let options = [...$question.options, {
      text: `Option ${optionValue}`,
      value: optionValue,
      correct: false,
    }];

    $question.update({
      options: options
    });
  }


  function handleDeleteOption_click(event) {
    $question.update({
      options: $question.options.slice(0, -1)
    });
  }




  function handleAddAudio_click(event) {
    let props = {
      ...$question,
      audio: {
        url: '???'
      }
    };
    delete props.id;
    $question.update({
      audio: {
        url: '???'
      }
    });

  }

  function handleAddImage_click(event) {
    let props = {
      ...$question,
      image: {
        url: '???'
      }
    };
    delete props.id;
    $question.update(props);
  }

  function handleAddVideo_click(event) {
    let props = {
      ...$question,
      video: {
        url: '???'
      }
    };
    delete props.id;
    $question.update(props);
  }


  function handleMediaType_change(event) {

  }

  function handleDeleteMediaItem_click(event, mediaItem) {
    MediaFile.deleteById(mediaItem.fileName, {
      parent: mediaItem.parent
    });
    mediaItem.delete();
  }

</script>


<template>
  {#if $question}
    <h2>Question Editor</h2>
    <hr>

    <!-- Media Items -->
    <h3>Media Items</h3>

    <ul class="list-group">
      {#each $mediaItems as mediaItem}
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <a href="#/{$question.getDocumentPath()}/media-items/{mediaItem.id}">
          {mediaItem.fileName}
        </a>  
        <button class="btn btn-sm btn-light" on:click={(event)=>handleDeleteMediaItem_click(event,mediaItem)}>
          <Fa icon={faTrashAlt} />
        </button>
      </li>
      {/each}
    </ul>

    <Button color="danger" on:click={() => modalIsOpen = true}>
      Add Media Item
    </Button>
    <hr>

    <!-- Text -->
    <h3>Text</h3>
    <div class="form-group">
      <label for="question-text">Question Text</label>
      <input class="form-control" id="question-text" value={$question.text} on:input={handleQuestionTextInput_input}>
    </div>

    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="question-reveal-answer" checked={$question.reveal_answer} on:change={handleQuestionrevealAnswer_change}>
      <label class="form-check-label" for="question-reveal-answer">Reveal Answer</label>
    </div>
    <hr>

    <!-- Options -->
    <h3>Options</h3>

    {#each $question.options as option}

      <div class="form-group form-row">
        <div class="col-sm-8">
          <label for="option-text-{option.value}" class="small">Option {option.value}</label>
          <input 
            class="form-control" 
            id="option-text-{option.value}" 
            value={option.text} 
            on:input={ (event) => handleOptionTextInput( event, option ) }
          >
        </div>  
        <div class="col-sm-2">

        </div>
        <div class="col-sm-2">
          <label  class="small">Correct?</label>
          <div class="form-check">
            <input 
              class="form-check-input" 
              type="radio" 
              id="option-correct-{option.value}" 
              name="option-correct"
              value={option.correct} 
              checked={option.correct}
              on:change={ (event) => handleOptionCorrectChange( event, option )}
            >
            <label class="form-check-label" for="option-correct-{option.value}">
              {#if option.correct}
                <Fa icon={faCheck} color="#57AF80" />
              {:else}
                <Fa icon={faTimes} color="#E03A4C" />
              {/if}
            </label>
          </div>
        </div>
      </div>
    {/each}

    <button class="btn btn-primary" on:click={handleAddOption_click}>Add Option</button>

    <button class="btn btn-warning" on:click={handleDeleteOption_click}>Delete Option</button>



  {/if}



  <Modal isOpen={modalIsOpen} >
    <ModalHeader toggle={addMediaItemModal_cancel}>Add Media Item</ModalHeader>
    <ModalBody>
      <div class="form-group">
        <label for="media-type">Media Type</label>
        <select class="form-control" id="media-type" bind:value={mediaType}>
          <option value="audio">Audio</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>

      </div>

      {#if mediaType === 'audio'}
        <div class="form-group">
          <label for="audio-file">Upload mp3 file</label>
          <input type="file" class="form-control" id="audio-file" on:input={handleAudioFile_input}>
        </div>
      {/if}

      {#if mediaType === 'image'}
        <div class="form-group">
          <label for="image-file">Upload image file</label>
          <input type="file" class="form-control" id="image-file" on:input={handleImageFile_input}>
        </div>
      {/if}
    
      {#if mediaType === 'video'}
        <div class="form-group">
          <label for="video-url">URL</label>
          <input class="form-control" id="video-url" bind:value={videoUrl}>
        </div>
      {/if}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={(event) => addMediaItemModal_confirm(event, mediaType )}>
        OK
      </Button>
      <Button color="secondary" on:click={addMediaItemModal_cancel}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  
 
  </template>


  <style>
    .form-check,
    .form-check .form-check-input,
    .form-check .form-check-label {
      cursor: pointer;  
    }


  </style>

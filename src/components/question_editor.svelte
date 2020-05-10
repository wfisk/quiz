<script>
  import debounce from 'lodash/debounce';
  import Questions from 'src/collections/Questions';
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'sveltestrap';

  export let quiz;
  export let question;

  let isOpen = false;


  const handleQuestionTextInput_input = debounce(
    function(event) {
      // $question.text = event.target.value;
      Questions.updateBelongingTo($quiz, $question.id, {
        text: event.target.value
      });
    },
    300
  );


  const handleQuestionrevealAnswer_change = debounce(
    function(event) {
      Questions.updateBelongingTo($quiz, $question.id, {
        reveal_answer: event.target.checked
      });
    },
    300
  );


  const handleInputOption_input = debounce(
    function(event, option) {
      console.log({
        event,
        option
      });

      option.text = event.target.value;
      Questions.updateBelongingTo($quiz, $question.id, {
        options: $question.options
      });
    },
    300
  );

  const handleAudioUrlInput_input = debounce(
    function(event) {
      Questions.updateBelongingTo($quiz, $question.id, {
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
      Questions.updateBelongingTo($quiz, $question.id, {
        audio: {
          ...$question.audio,
          file: fileContent
        }
      });
    }
  }

  const handleVideoUrlInput_input = debounce(
    function(event) {
      Questions.updateBelongingTo($quiz, $question.id, {
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
      selected: false,
    }];

    Questions.updateBelongingTo($quiz, $question.id, {
      options: options
    });
  }


  function handleDeleteOption_click(event) {
    Questions.updateBelongingTo($quiz, $question.id, {
      options: $question.options.slice(0, -1)
    });
  }


  function handleDeleteAudio_click(event) {
    let props = {
      ...$question
    };
    delete props.id;
    delete props.audio;
    // Questions.setBelongingTo($quiz, $question.id, props);
    Questions.updateBelongingTo($quiz, $question.id, {
      audio: null
    });

  }

  function handleDeleteImage_click(event) {
    Questions.updateBelongingTo($quiz, $question.id, {
      image: null
    });
  }

  function handleDeleteVideo_click(event) {
    Questions.updateBelongingTo($quiz, $question.id, {
      video: null
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
    // Questions.updateBelongingTo($quiz, $question.id, props);
    Questions.updateBelongingTo($quiz, $question.id, {
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
    Questions.updateBelongingTo($quiz, $question.id, props);
  }

  function handleAddVideo_click(event) {
    let props = {
      ...$question,
      video: {
        url: '???'
      }
    };
    delete props.id;
    Questions.updateBelongingTo($quiz, $question.id, props);
  }

</script>


<template>
  {#if $question}
    <h2>Question Editor</h2>

    <div class="form-group">
      <label for="question-text">Question Text</label>
      <input class="form-control" id="question-text" value={$question.text} on:input={handleQuestionTextInput_input}>
    </div>

    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="question-reveal-answer" checked={$question.reveal_answer} on:change={handleQuestionrevealAnswer_change}>
      <label class="form-check-label" for="question-reveal-answer">Reveal Answer</label>
    </div>

    <h3>Options</h3>
    {#each $question.options as option}

      <div class="form-group">
        <label for="question-option-{option.value}">Option {option.value}</label>
        <input 
          class="form-control" 
          id="question-option-{option.value}" 
          value={option.text} 
          on:input={ (event) => handleInputOption_input( event, option ) }>
      </div>


    {/each}

    <button class="btn btn-primary" on:click={handleAddOption_click}>Add Option</button>

    <button class="btn btn-warning" on:click={handleDeleteOption_click}>Delete Option</button>

    <hr/>

    <h3>Add Media</h3>

    <Dropdown {isOpen} toggle={() => (isOpen = !isOpen)}>
      <DropdownToggle caret>Add ...</DropdownToggle>
      <DropdownMenu>
        {#if !$question.audio}
          <DropdownItem on:click={handleAddAudio_click}>Add Audio</DropdownItem>
        {/if} 

        {#if !$question.image}
          <DropdownItem on:click={handleAddImage_click}>Add Image</DropdownItem>
        {/if} 

        {#if !$question.video}
          <DropdownItem on:click={handleAddVideo_click}>Add Video</DropdownItem>
        {/if} 
      </DropdownMenu>
    </Dropdown>
    <hr/>

    <!-- Question Audio -->
    {#if $question.audio}    
      <h3>Audio</h3>
      <div class="form-group">
        <label for="audio-url">URL</label>
        <input class="form-control" id="audio-url" value={$question.audio.url} on:input={handleAudioUrlInput_input}>
      </div>
      
      <div class="form-group">
        <label for="audio-file">Upload mp3 file</label>
        <input type="file" class="form-control" id="audio-file" on:input={handleAudioFileInput_input}>
      </div>
  
      <button class="btn btn-warning" on:click={handleDeleteAudio_click}>Delete Audio</button>
      <hr/>
    {/if}


    <!-- Question Image -->
    {#if $question.image}    


      <button class="btn btn-warning" on:click={handleDeleteImage_click}>Delete Image</button>
      <hr/>
    {/if}

    
    <!-- Question Video -->
    {#if $question.video}    
      <div class="form-group">
        <label for="video-url">URL</label>
        <input class="form-control" id="video-url" value={$question.video.url} on:input={handleVideoUrlInput_input}>
      </div>
      
      <button class="btn btn-warning" on:click={handleDeleteVideo_click}>Delete Video</button>
      <hr/>
    {/if}
  {/if}
 
  </template>

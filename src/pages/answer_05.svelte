<script>
  import {
    fade
  } from 'svelte/transition';

</script>

<style>
  .title {
    font-weight: bold;
    font-size: 2rem;
  }

  .artist {
    font-weight: normal;
    font-size: 2rem;
  }

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 5</h1>

    <p style="font-size: 2rem;">
      <span class="title">Bohemian Rhapsody</span> by Queen released October 1975

    </p>


    <p style="font-size: 2rem;">
      The 10 biggest selling songs based on combined physical, download and streaming sales, as at September 2017. (source: Wikipedia)

    </p>

    <ol>
      <li>
        <span class="title">
          Something About the Way You Look Tonight /Candle in the Wind 1997
        </span>
        <span class="artist">
          Elton John
        </span>
      </li>

      <li>
        <span class="title">
          Do They Know It's Christmas?
        </span>
        <span class="artist">
          Band Aid
        </span>
      </li>

      <li>
        <span class="title">
          Shape of You
        </span>
        <span class="artist">
          Ed Sheeran
        </span>
      </li>

      <li>
        <span class="title">
          Bohemian Rhapsody
        </span>
        <span class="artist">
          Queen
        </span>
      </li>

      <li>
        <span class="title">
          Uptown Funk
        </span>
        <span class="artist">
          Mark Ronson featuring Bruno Mars
        </span>
      </li>

      <li>
        <span class="title">
          Happy
        </span>
        <span class="artist">
          Pharrell Williams
        </span>
      </li>

      <li>
        <span class="title">
          Thinking Out Loud
        </span>
        <span class="artist">
          Ed Sheeran
        </span>
      </li>

      <li>
        <span class="title">
          One Dance
        </span>
        <span class="artist">
          Drake featuring Wizkid & Kyla
        </span>
      </li>

      <li>
        <span class="title">
          Rather Be
        </span>
        <span class="artist">
          Clean Bandit featuring Jess Glynne
        </span>
      </li>

      <li>
        <span class="title">
          Sorry
        </span>
        <span class="artist">
          Justin Bieber
        </span>
      </li>
    </ol>

  </div>
</template>

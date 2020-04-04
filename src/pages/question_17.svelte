<script>
  import {
    fade
  } from 'svelte/transition';

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 7</h1>

    <p>
      Nationwide ran from 1969 to 1983.
      Name two presenters of this programme.
    </p>

    <ul>
      <li>Michael Barratt (1969–1977)
      <li>Bob Langley (1970–1972)
      <li>Esther Rantzen (1970–1972)
      <li>Bob Wellings (1971–1980)
      <li>Bernard Falk (1972–1978)
      <li>Valerie Singleton (1972–1978)
      <li>Richard Stilgoe (1972–1978)
      <li>Frank Bough (1972–1982)
      <li>James Hogg (1972–1983)
      <li>Sue Lawley (1972–1975 & 1978–1983)
      <li>John Stapleton (1975–1980)
      <li>Martin Young (1973–1979}
      <li>Hugh Scully (1978–1983)
      <li>Sue Cook (1980–1983)
      <li>Richard Kershaw (1980–1983)
      <li>David Dimbleby (1982)
      <li>Laurie Mayer
    </ul>

  </div>
</template>

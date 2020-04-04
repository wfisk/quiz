<script>
  import {
    fade
  } from 'svelte/transition';

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 2</h1>

    <h2>BBC 1 - Thursday, 6 April 1972</h2>

    <dl class="row">
      <dt class="col-3">14:25</dt>
      <dd class="col-9">Racing at Aintree</dd>

      <dt class="col-3">16:20</dt>
      <dd class="col-9">Play School</dd>

      <dt class="col-3">16:45</dt>
      <dd class="col-9">The Clangers</dd>

      <dt class="col-3">16:55</dt>
      <dd class="col-9">Blue Peter</dd>

      <dt class="col-3">17:20</dt>
      <dd class="col-9">Boss Cat</dd>

      <dt class="col-3">17:44</dt>
      <dd class="col-9">Hector's House</dd>

      <dt class="col-3">17:50</dt>
      <dd class="col-9">News</dd>

      <dt class="col-3">18:00</dt>
      <dd class="col-9">Nationwide</dd>

      <dt class="col-3">18:50</dt>
      <dd class="col-9">Tom and Jerry</dd>

      <dt class="col-3">19:00</dt>
      <dd class="col-9">Spy Trap</dd>

      <dt class="col-3">19:25</dt>
      <dd class="col-9">Top of the Pops</dd>

      <dt class="col-3">20:00</dt>
      <dd class="col-9">It's Murder, but is it art?</dd>

      <dt class="col-3">20:30</dt>
      <dd class="col-9">*The French Way</dd>

      <dt class="col-3">21:00</dt>
      <dd class="col-9">Nine O'Clock News</dd>

      <dt class="col-3">21:20</dt>
      <dd class="col-9">Emma's Time</dd>

      <dt class="col-3">22:40</dt>
      <dd class="col-9">24 Hours</dd>


    </dl>



  </div>
</template>

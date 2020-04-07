<script>
  import { fade } from "svelte/transition";
</script>

<style></style>

<template>
  <div
    in:fade="{{delay: 300, duration: 600}}"
    out:fade="{{delay: 0, duration: 300}}"
  >
    <h1>Answer 77777</h1>

    <h2>BBC 1 - Thursday, 6 April 1972</h2>

    <dl class="row">
      <dt class="col-3">14:25</dt>
      <dd class="col-9">Racing at Aintree</dd>

      <dt class="col-3">16:20</dt>
      <dd class="col-9" style="color: red;">Play School</dd>

      <dt class="col-3">16:45</dt>
      <dd class="col-9" style="color: red;">The Clangers</dd>

      <dt class="col-3">16:55</dt>
      <dd class="col-9" style="color: red;">Blue Peter</dd>

      <dt class="col-3">17:20</dt>
      <dd class="col-9" style="color: red;">Boss Cat</dd>

      <dt class="col-3">17:44</dt>
      <dd class="col-9" style="color: red;">Hector's House</dd>

      <dt class="col-3">17:50</dt>
      <dd class="col-9" style="color: red;">News</dd>

      <dt class="col-3">18:00</dt>
      <dd class="col-9" style="color: red;">Nationwide</dd>

      <dt class="col-3">18:50</dt>
      <dd class="col-9" style="color: red;">Tom and Jerry</dd>

      <dt class="col-3">19:00</dt>
      <dd class="col-9" style="color: red;">Spy Trap</dd>

      <dt class="col-3">19:25</dt>
      <dd class="col-9" style="color: red;">Top of the Pops</dd>

      <dt class="col-3">20:00</dt>
      <dd class="col-9" style="color: red;">It's Murder, but is it art?</dd>

      <dt class="col-3">20:30</dt>
      <dd class="col-9" style="color: red;">The French Way</dd>

      <dt class="col-3">21:00</dt>
      <dd class="col-9" style="color: red;">Nine O'Clock News</dd>

      <dt class="col-3">21:20</dt>
      <dd class="col-9">Emma's Time</dd>

      <dt class="col-3">22:40</dt>
      <dd class="col-9">24 Hours</dd>
    </dl>
  </div>
</template>

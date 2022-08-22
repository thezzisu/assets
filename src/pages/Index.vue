<template>
  <q-page padding class="row">
    <div class="col">
      <q-card>
        <article v-html="rendered" class="markdown-body q-pa-lg" />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import 'github-markdown-css/github-markdown.css'
import rendered from 'src/../README.md'
</script>

<template>
  <div>Hello</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  public result = 0;

  public ready = false;

public myMethod(promise: Promise<void>) {
  return promise
    .then(() => {
      this.result = 1;
    })
    .catch(() => {
      this.result = 2;
    })
    .finally(() => {
      this.ready = true;
    });
}
}
</script>
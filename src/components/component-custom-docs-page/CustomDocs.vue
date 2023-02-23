<template>
  <custom-docs :size="size" :color="color" :variant="variant">
    <slot></slot>
</custom-docs>
</template>

<script>


export default {
  props: {
    variant: String,
    color: String,
    size: String,
  },
};
</script>

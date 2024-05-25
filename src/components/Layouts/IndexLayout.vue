<template>
    <header-component />
    <slot></slot>
    <footer-component />
</template>
<script lang="ts" setup>
import HeaderComponent from "../../components/Header.vue"
import FooterComponent from "../../components/Footer.vue"
</script>
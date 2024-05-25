<template>
<header id="header" class="scroll">
    <div class="header-wrapper">
        <div class="logo-cntnr">
            <a href="/"><img class="logo" src="/src/assets/images/logo.svg" alt="logo"></a>
        </div
        ><div class="hdr-menu">
            <div class="hdr-menu__link">
                <a href="/#about">About</a>
            </div>
            <div class="hdr-menu__link">
                <a href="/#experience">Experience</a>
            </div>
            <div class="hdr-menu__link">
                <a href="/#work">Work</a>
            </div>
            <div class="hdr-menu__link">
                <a href="/#contact">Contact</a>
            </div>
            <div class="resume-btn btn">
                <a href="/src/assets/images/cv.pdf" target="__blank">
                    <button>
                        Resume
                    </button>
                </a>
            </div>
        </div
        ><div class="mobile-menu">
            <div @click="openMenu = !openMenu" id="nav-icon" :class="openMenu ? 'open' : ''">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</header>
<div class="menu-nav" :class="openMenu ? 'open' : ''">
    <div class="menu-nav__wrapper inlineBlock-parent">
        <div class="transparent"></div
        ><div class="menu-hldr" @click="openMenu = false">
            <div class="menu-links">
                <a href="/#about">About</a>
            </div>
            <div class="menu-links">
                <a href="/#work">Work</a>
            </div>
            <div class="menu-links">
                <a href="/#experience">Experience</a>
            </div>
            <div class="menu-links">
                <a href="/#contact">Contact</a>
            </div>
            <div class="menu-links btn">
                <a href="/src/assets/images/cv.pdf" target="__blank">
                    <button>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const openMenu = ref(false);
</script>
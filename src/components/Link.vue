<template>
  <router-link
    tag='h1' 
    :to='"/" + text.toLowerCase()'
    :class='pageName === text.toLowerCase() ? "currentLink" : "link"'
  >
    <mu-icon :value='iconName' class='icon'></mu-icon>
    <span>{{text | displayText}}</span>
  </router-link>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['pageName', 'text', 'iconName'],
  data() {
    return {
      store: store.data,
    }
  },
  filters: {
    displayText(text) {
      if (store.data.pageWidth >= 800) {
        return text
      } else {
        return ''
      }
    },
  }
}
</script>

<style scoped>
  .icon {
    font-size: 36px;
    margin-right: 5px;
  }

  .link, .currentLink {
    margin: 0 0 0 50px;
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .currentLink {
    color: #c42c00;
  }

  /* CREDITS: https://stackoverflow.com/questions/44673496/how-to-animate-a-link-underline-with-border-bottom-so-that-there-is-space-betwe */
  .link {
    position: relative;
    text-decoration: none;
  }

  .link:hover {
    color: #c42c00;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  .link:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #c42c00;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  .link:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .none {
    display: none !important;
  }
</style>
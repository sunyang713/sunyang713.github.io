<template>
  <div>

    <!-- NAVBAR
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
            Jsun
          </a>
        </div>

        <div class="nav-center">
          <a class="nav-item">
            <span class="icon">
              <i class="fa fa-github"></i>
              yang symbol?
            </span>
          </a>
        </div>

        <span class="nav-toggle" :class="navMenu" @click="toggleNavMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right nav-menu" :class="navMenu">
          <router-link class="nav-item"
            v-for="route in routes"
            v-if="route.showInNav"
            :key="route.path"
            :to="route.path"
            :exact="route.path === '/'"
            @click.native="deactivateNavMenu">
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </nav>


    <!-- PAGE VIEW
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <router-view></router-view>


    <!-- FOOTER
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <footer class="footer">
      <div class="container">
        <div class="is-pulled-left">
          <p>&copy; Copyright 2017 Jonathan Sun. All Rights Reserved.</p>
        </div>
        <div class="is-pulled-right">
          <a href="https://twitter.com/sunyang713">
            <i class="fa fa-lg fa-fw fade-on-hover fa-twitter"></i>
          </a>
          <a href="https://instagram.com/sunyang713">
            <i class="fa fa-lg fa-fw fade-on-hover fa-instagram "></i>
          </a>
          <a href="https://github.com/sunyang713/sunyang713.github.io">
            <i class="fa fa-lg fa-fw fade-on-hover fa-github"></i>
          </a>
          <span>Created by <a href="https://www.linkedin.com/in/jonathansun0/">Jonathan Sun</a></span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { routes } from 'router'

export default {
  data () {
    return {
      navMenu: { 'is-active': false },
      routes
    }
  },
  methods: {
    toggleNavMenu () {
      this.navMenu['is-active'] = !this.navMenu['is-active']
    },
    activateNavMenu () {
      this.navMenu['is-active'] = true
    },
    deactivateNavMenu () {
      this.navMenu['is-active'] = false
    }
  }
}

</script>

<style>

.formatted-text {
  white-space: pre-wrap;
}

.parallax-image {
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: transparent;
  height: 20rem;
}

.btn-transparent {
  color: inherit;
  background-color: transparent;
  border-color: inherit;
}

.btn-transparent:hover {
  color: inherit;
  filter: invert(15%);
}

.fade-on-hover {
  opacity: 1;
  transition: opacity .25s ease-in-out;
}

.fade-on-hover:hover {
  opacity: 0.5;
}

/* Vuejs css fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Vuejs css fade overlay transition */
.fade-overlay-enter-active, .fade-overlay-leave-active {
  transition: opacity 2s;
}
.fade-overlay-enter, .fade-overlay-leave-to {
  opacity: 0;
  position: absolute;
}

</style>

<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="app-header">
      <q-toolbar class="q-px-none">
        <q-btn
          stretch
          flat
          icon="mdi-menu"
          text-color="black"
          @click="nav = !nav"
        />
        <q-btn
          stretch
          flat
          no-caps
          no-wrap
          text-color="black"
          to="/"
          class="app-logo font-juliamo"
        >
          <div class="app-logo_container">
            <div class="text-h6 app-logo_title">ZISU.dev</div>
            <div class="app-logo_subtitle">Assets</div>
          </div>
        </q-btn>
        <q-space />
        <q-btn
          stretch
          flat
          icon="mdi-github"
          text-color="black"
          target="_blank"
          href="https://github.com/thezzisu/assets"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="nav"
      class="app-nav"
      side="left"
      show-if-above
      :width="220"
      :breakpoint="540"
    >
      <q-list>
        <q-item href="https://zisu.dev">
          <q-item-section avatar>
            <img src="/svg/logo.svg" width="24" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 font-juliamo">
              ZISU.dev
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="(item, i) of menu" :key="i" :to="item.to" exact>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 font-juliamo">
              {{ item.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="router" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer elevated>
      <div class="row justify-center">
        <div>
          <code>&copy; thezzisu {{ new Date().getFullYear() }}</code>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nav = ref<boolean | undefined>(undefined)
const menu = [{ icon: 'mdi-home', label: 'Home', to: '/' }]
</script>

<style lang="scss">
.app-header {
  background-color: #e4eef3bf;
  backdrop-filter: blur(10px);
}

.app-logo {
  &_container {
    text-align: left;
  }
  &_title {
    margin-top: -10px;
    margin-bottom: -10px;
  }
  &_subtitle {
    margin-top: -10px;
    margin-bottom: -10px;
  }
}

.app-nav {
  background: #f2f2f2cc;
  backdrop-filter: blur(10px);
}
</style>

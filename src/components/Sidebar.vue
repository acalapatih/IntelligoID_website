<template>
    <div>
        <div class="sidebar hide-mobile">
            <div class="logo-details">
                <img src="../assets/images/logo.png" class="logo_name">
            </div>
            <ul class="nav-links">
                <span class="title-link">Event</span>
                <li :class="`${$route.name == 'user-booth-index' || $route.name == 'user-booth-id-slug' ? 'active'  : ''}`">
                    <router-link to="/user/booth/">
                        <span class="link_name">Bootcamp</span>
                    </router-link>
                </li>
                <li>
                    <a href="#">
                        <span class="link_name">Mini Boothcamp</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="link_name">Kursus 1 on 1</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="link_name">Mini Class</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="link_name">Workshop</span>
                    </a>
                </li>
                <li class="mb-5">
                    <a href="#">
                        <span class="link_name">Webinar</span>
                    </a>
                </li>
                <span class="title-link mt-3">IT Service</span>
                <li>
                    <a href="#">
                        <span class="link_name">Data Science</span>
                    </a>
                </li>
                <li class="mb-5">
                    <a href="#">
                        <span class="link_name">Web Development</span>
                    </a>
                </li>
                <span class="title-link mt-3">For You</span>
                <li :class="`${$route.name == 'user-history-transaction' ? 'active'  : ''}`">
                    <router-link to="//user/history-transaction">
                        <span class="link_name">History Transaction</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="nav-mobile">
            <div class="sidebar-mobile">
                <img src="/assets/images/logo.png" class="logo-mobile">
                <a class="s-sidebar__trigger-show" href="#0">
                    <i class="fa fa-bars"></i>
                </a>
                <a class="s-sidebar__trigger-hide d-none" href="#0">
                    <i class="fa fa-x"></i>
                </a>
            </div>
            <div class="sidebar nav-side d-none">
                <ul class="nav-links">
                    <span class="title-link">Event</span>
                    <li class="active">
                        <a href="index.html">
                            <span class="link_name">Bootcamp</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="link_name">Mini Boothcamp</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="link_name">Kursus 1 on 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="link_name">Mini Class</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="link_name">Workshop</span>
                        </a>
                    </li>
                    <li class="mb-5">
                        <a href="#">
                            <span class="link_name">Webinar</span>
                        </a>
                    </li>
                    <span class="title-link mt-3">IT Service</span>
                    <li>
                        <a href="#">
                        <span class="link_name">Data Science</span>
                        </a>
                    </li>
                    <li class="mb-5">
                        <a href="#">
                            <span class="link_name">Web Development</span>
                        </a>
                    </li>
                    <span class="title-link mt-3">For You</span>
                    <li>
                        <router-link to="/user/history-transaction">
                            <span class="link_name">History Transaction</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './sidebarState'

export default {
  name: `Sidebar`,
  props: {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
};
</script>
<style>
  @import '../assets/css/style.css';
</style>
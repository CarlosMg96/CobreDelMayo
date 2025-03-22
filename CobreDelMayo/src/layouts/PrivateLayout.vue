<template>
    <div>
      <Navbar @toggle-sidebar="handleToggleSidebar" />
      <div class="d-flex">
        <Sidebar :visible="isSidebarVisible" @update:visible="isSidebarVisible = $event" />
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Sidebar from '@/components/Sidebar.vue';
  import Navbar from '@/components/Navbar.vue';
  
  export default defineComponent({
    name: "privateLayout",
    components: {
      Sidebar,
      Navbar
    },
    data() {
      return {
        isSidebarVisible: false, // Control del sidebar
      };
    },
    methods: {
      handleToggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; 
    },
    }
  });
  
  </script>
  
  <style scoped>
  .content{
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    width: 100%;
    overflow: auto;
    height: 92vh;
    margin-top: 16px;
  }
  </style>
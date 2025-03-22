<template>
    <div :class="['custom-sidebar', { open: visible, closed: !visible }]">
      <div @click="openUserModal" class="sidebar-header item-avatar">
        <div class="avatar">{{ charName }}</div>
        <div class="user-info">
          <h2 class="user-sidebar">{{ full_name }}</h2>
          <p class="role">{{ user_role }}</p>
        </div>
      </div>
      <div class="w-100">
        <ul>
        <li class="item" v-for="(item, index) in filteredRoutes" :key="index" @click="navigate(item.route)">
            <span class="sidebar-icon"><i :class="item.icon"></i></span>
            <span class="sidebar-text">{{ item.label }}</span>
        </li>
        </ul>
      </div>
      <UserModal v-model="showModal" @close="closeUserModal" />
    </div>
  </template>
  
  <script>
    import { getRoleByToken, getUserInfoByToken } from "@/kernel/utils"
    import UserModal from "@/components/UserModal.vue";

    export default {
        name: 'PrivateSidebar',
        components: {
        UserModal,
        },
        props: {
        visible: {
            type: Boolean,
            required: true
        }
        },
        data() {
            return {
                showModal: false,
                menuItems: [
                    { label: 'Inicio', icon: 'fa-solid fa-house', route: 'start', roles: ['MASTER', 'ADMIN'] },
                    { label: 'Noticias', icon: 'fa-solid fa-newspaper', route: 'list-news', roles: ['MASTER', 'ADMIN'] },
                    { label: 'Usuarios', icon: 'fa-solid fa-user-plus', route: 'users', roles: ['MASTER'] },
                ],
                filteredRoutes: [], 
                charName: '',
                user_role: '',
                full_name: ''
            };
            },
            async mounted() {
                await this.updateFilteredRoutes(); 
                await this.getAvatarLetter();
                await this.getName();
                await this.getRole();
            },
            methods: {
            async updateFilteredRoutes() {
                const role = await getRoleByToken();
                this.filteredRoutes = this.menuItems.filter(item => item.roles.includes(role));
            },
            openUserModal() {
                this.showModal = true;
            },
            closeUserModal() {
                this.showModal = false;
            },
            async getAvatarLetter() {
                const userInfo = await getUserInfoByToken();
                this.charName = userInfo.fullname.charAt(0);
            },
            async getName() {
                const userInfo = await getUserInfoByToken();
                this.full_name = userInfo.fullname;
            },
            async getRole() {
                const role = await getRoleByToken();
                const app_role = role === 'MASTER' ? 'Administrador' : 'Usuario';
                this.user_role = app_role;
            },
            navigate(route) {
                const currentRoute = this.$route.name;
                if (route !== currentRoute) {
                this.$router.push({ name: route }).then(() => {
                    if (window.innerWidth <= 768) {
                    this.$emit('update:visible', false); // Emitir evento para actualizar visibilidad
                    }
                }).catch(err => {
                    if (err.name !== 'NavigationDuplicated') {
                    console.error('Navigation error:', err);
                    }
                });
                } else if (window.innerWidth <= 768) {
                this.$emit('update:visible', false); // Emitir evento para actualizar visibilidad
                }
            },
        },
  }
  </script>
  
  <style scoped>
  
  .custom-sidebar {
    width: 250px;
    height: 100vh;
    transition: width 0.3s;
    background-color: white;
    color: #333;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  
    @media (max-width: 768px) {
      width: 100%;
      position: absolute;
      z-index: 1000;
      left: 0;
      transform: translateX(-100%);
    }
  
    &.closed {
      width: 100px;
  
      @media (max-width: 768px) {
        transform: translateX(-100%);
      }
    }
  
    &.open {
      @media (max-width: 768px) {
        transform: translateX(0);
      }
    }
  }
  
  .sidebar-header {
    margin-top: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    transition: justify-content 0.3s;
    margin-left: 16px;
  }
  
  .avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #333;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    transition: transform 0.3s, margin-left 0.3s;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  
  .user-sidebar {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    color: #333;
  }
  
  .role {
    margin: 0;
    font-size: 13px;
    color: #555;
  }
  
  .sidebar-icon {
    font-size: 24px;
    transition: transform 0.3s, box-shadow 0.3s;
    color: #333;
  }
  
  .sidebar-text {
    font-size: 14px;
    font-weight: 500;
    margin-left: 16px;
    transition: opacity 0.3s;
    color: #333;
    display: inline-flex;
    align-items: center;
  }
  
  ul {
    padding: 0;
    list-style-type: none;
  }
  
  .item {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 18px 15px;
    width: 100%;
    background-color: transparent;
    border-radius: 9px;
    color: #333;
    margin-bottom: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .item-avatar {
    color: #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .item:hover {
    border-radius: 9px;
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(72, 70, 70, 0.3);
    cursor: pointer;
  }

  .item.active {
    background-color: #f0f0f0;
    color: #000;
  }

  
  .custom-sidebar.closed .sidebar-text {
    opacity: 0;
    visibility: hidden;
  }
  
  .custom-sidebar.closed .sidebar-icon {
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    color: #333;
    font-size: 24px;
    padding: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .custom-sidebar.closed .item:hover .sidebar-icon {
    box-shadow: none;
  }
  
  .custom-sidebar.closed .sidebar-header {
    justify-content: center;
  }
  
  .custom-sidebar.closed .avatar {
    transform: translateX(0);
    margin-left: 0;
  }
  
  .custom-sidebar.closed .user-sidebar,
  .custom-sidebar.closed .role {
    display: none;
  }
  </style>
  
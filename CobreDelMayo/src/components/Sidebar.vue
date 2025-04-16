<template>
  <div class="layout-container">
    <!-- Overlay para móviles -->
    <div 
      v-if="visible && isMobile" 
      class="sidebar-overlay"
      @click="$emit('update:visible', false)"
    ></div>
    
    <!-- Sidebar -->
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
          <li 
            class="item" 
            v-for="(item, index) in filteredRoutes" 
            :key="index" 
            @click="navigate(item.route)"
            :class="{ active: isActive(item.route) }"
          >
            <span class="sidebar-icon"><i :class="item.icon"></i></span>
            <span class="sidebar-text">{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <UserModal v-model="showModal" @close="closeUserModal" />
    </div>

    <!-- Contenido principal -->
    <main class="content-area">
      <slot></slot>
    </main>
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
                { label: 'Inicio', icon: 'fa-solid fa-house', route: 'start', roles: [ 'ADMIN'] },
                { label: 'Noticias', icon: 'fa-solid fa-newspaper', route: 'list-news', roles: [ 'ADMIN'] },
                { label: 'Usuarios', icon: 'fa-solid fa-user-plus', route: 'users', roles: ['MASTER'] },
            ],
            filteredRoutes: [], 
            charName: '',
            user_role: '',
            full_name: '',
            isMobile: window.innerWidth <= 768
        };
    },
    async mounted() {
        await this.updateFilteredRoutes(); 
        await this.getAvatarLetter();
        await this.getName();
        await this.getRole();
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.isMobile = window.innerWidth <= 768;
      },
      isActive(route) {
        return this.$route.name === route;
      },
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
      logout() {
        // Lógica para cerrar sesión
      },
      navigate(route) {
          const currentRoute = this.$route.name;
          if (route !== currentRoute) {
            this.$router.push({ name: route }).then(() => {
                if (this.isMobile) {
                  this.$emit('update:visible', false);
                }
            }).catch(err => {
                if (err.name !== 'NavigationDuplicated') {
                  console.error('Navigation error:', err);
                }
            });
          } else if (this.isMobile) {
            this.$emit('update:visible', false);
          }
      },
    },
}
</script>

<style scoped>
.layout-container {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.custom-sidebar {
  width: 280px;
  background: #ffffff8a;
  color: #333333;
  padding: 20px 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  border-right: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    width: 55%;
    top: 0;
    transform: translateX(-100%);
    box-shadow: 8px 0 30px rgba(0, 0, 0, 0.15);
  }

  &.open {
    @media (max-width: 768px) {
      transform: translateX(0);
    }
  }
}

.content-area {
  flex: 1;
  background: #ffffff;
  transition: margin-left 0.3s ease;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 99;
  transition: opacity 0.3s ease;
}

.sidebar-header {
  margin: 20px 0 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    .avatar {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 149, 0, 0.4);
    }
  }
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FF9500, #FF2D00);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 10px rgba(255, 149, 0, 0.3);
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow: hidden;
}

.user-sidebar {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #333333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.role {
  margin: 5px 0 0;
  font-size: 14px;
  color: #FF9500;
  font-weight: 500;
}

.sidebar-icon {
  font-size: 18px;
  min-width: 24px;
  color: #666666;
  transition: all 0.3s ease;
}

.sidebar-text {
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
  color: #333333;
  transition: all 0.3s ease;
  white-space: nowrap;
}

ul {
  padding: 0;
  list-style-type: none;
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 5px 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f8f8f8;
    
    .sidebar-icon {
      color: #FF9500;
    }
    
    .sidebar-text {
      color: #FF2D00;
    }
  }
  
  &.active {
    background-color: #fff5f0;
    
    .sidebar-icon {
      color: #FF2D00;
    }
    
    .sidebar-text {
      color: #FF2D00;
      font-weight: 600;
    }
  }
}

/* Estilos para cuando está cerrado (opcional) */
.custom-sidebar.closed {
  width: 80px;
  
  .sidebar-text, .user-info {
    display: none;
  }
  
  .sidebar-header {
    justify-content: center;
    padding: 0;
  }
  
  .item {
    justify-content: center;
    padding: 15px 0;
  }
  
  .sidebar-icon {
    margin: 0;
    font-size: 20px;
  }
}
</style>
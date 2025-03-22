<template>
    <!-- <div>
        <h1>Products</h1>
        <table class="table">
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
                <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div> -->
    <v-card
    class="mx-auto"
    elevation="16"
    max-width="100hv"
  >
    <v-card-item>
      <v-card-title>
        Productos
      </v-card-title>

      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="serverItems"
            :items-length="totalItems"
            :loading="loading"
            :search="search"
            item-value="name"
            @update:options="loadItems"
        ></v-data-table-server>

    </v-card-text>
  </v-card>
</template>

<script>
import { getProductsService } from '../services/products-service';
export default {
    data() {
        return {
            products: []
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            try {
                const result = await getProductsService();
                this.products = result;
                console.log(this.products);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteProduct(id) {
            try {
                console.log(id);
                this.getProducts();
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

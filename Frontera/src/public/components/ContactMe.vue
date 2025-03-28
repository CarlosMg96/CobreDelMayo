<template>
    <div>
      <section id="home_04" class="py-5">
        <div class="container py-5">
          <v-row>
            <v-col cols="12" md="4">
              <h1 class="text-center">Contáctanos</h1>
              <p>Teléfono: 55 5540 - 4040</p>
            </v-col>
            <v-col cols="12" md="8">
              <form action="mail.php">
                <div class="form-group">
                  <input
                    type="text"
                    class="custom-input mt-2"
                    placeholder="Nombre completo"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="custom-input mt-2"
                    placeholder="Teléfono"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="custom-input mt-2"
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="custom-input mt-2"
                    id="Textarea1"
                    placeholder="Escribe tus comentarios"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div class="col-lg-12">
                    <button class="btnenviar" type="submit">Enviar</button>
                  </div>
              </form>
            </v-col>
          </v-row>    
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .custom-input {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    width: 100%; /* Asegura que el input ocupe todo el ancho disponible */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  
  .custom-input:focus {
    border-color: #ff6347; /* Un color llamativo */
    box-shadow: 0 0 8px rgba(255, 99, 71, 0.5);
    outline: none;
  }
  
  form .form-group {
    margin-bottom: 1rem; /* Añade espacio entre los inputs */
  }
  .btnenviar {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 8px !important;
    height: 42px !important;
  }
  </style>
  
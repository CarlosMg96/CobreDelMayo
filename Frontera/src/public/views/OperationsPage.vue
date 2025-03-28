<template>
  <div class="background">
    <div class="contact-page">
      <div
        class="contactTitleStyles"
        :style="{
          backgroundImage: 'url(' + BASEURL + '/misc/img/site/bg-contact.jpg)',
        }"
      >
        <h1 class="contact-title">Contact</h1>
      </div>
      <div class="contact-emails">
        <div class="email-item">
          <h2>Suppliers Office</h2>
          <p>suppliers@cobredelmayo.com</p>
        </div>

        <div class="email-item">
          <h2>Human Resources Office</h2>
          <p>hr@cobredelmayo.com</p>
        </div>

        <div class="email-item">
          <h2>Investor Relations Office</h2>
          <p>ir@cobredelmayo.com.mx</p>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="contact-form-container">
        <p class="form-description">
          Thank you for visiting our website. To contact us, please fill the
          short form below.
        </p>

        <form @submit.prevent="submitForm" class="contact-form">
          <!-- Campo Send to -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="tomail">Send to</label>
              <select
                v-model="formData.tomail"
                id="tomail"
                class="form-control"
                required
              >
                <option value="0">Select recipient</option>
                <option value="1">Potential Employment</option>
                <option value="2">Potential Supplier</option>
                <option value="3">Other Inquiry</option>
                <option value="inv">Access to Investors</option>
              </select>
            </div>
          </div>

          <!-- Campos de nombre -->
          <div class="form-row">
            <div class="form-group">
              <label for="tit">Title</label>
              <select v-model="formData.tit" id="tit" class="form-control">
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
            </div>

            <div class="form-group">
              <label for="name">First Name</label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                class="form-control"
                placeholder="First Name"
                required
              />
            </div>

            <div class="form-group">
              <label for="lastname">Last Name</label>
              <input
                v-model="formData.lastname"
                type="text"
                id="lastname"
                class="form-control"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <!-- Campos de email y compañía -->
          <div class="form-row">
            <div class="form-group half-width">
              <label for="email">Email</label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                class="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div class="form-group half-width">
              <label for="company">Company</label>
              <input
                v-model="formData.company"
                type="text"
                id="company"
                class="form-control"
                placeholder="Company"
                required
              />
            </div>
          </div>

          <!-- Campos de ubicación -->
          <div class="form-row">
            <div class="form-group third-width">
              <label for="zip">Zip Code</label>
              <input
                v-model="formData.zip"
                type="text"
                id="zip"
                class="form-control"
                placeholder="Zip Code"
                required
              />
            </div>

            <div class="form-group third-width">
              <label for="city">City</label>
              <input
                v-model="formData.city"
                type="text"
                id="city"
                class="form-control"
                placeholder="City"
                required
              />
            </div>

            <div class="form-group third-width">
              <label for="country">Country</label>
              <input
                v-model="formData.country"
                type="text"
                id="country"
                class="form-control"
                placeholder="Country"
                required
              />
            </div>
          </div>

          <!-- Campo de asunto -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="subject">Subject</label>
              <input
                v-model="formData.subject"
                type="text"
                id="subject"
                class="form-control"
                placeholder="Subject"
                required
              />
            </div>
          </div>

          <!-- Campo de mensaje -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="message">Message</label>
              <textarea
                v-model="formData.message"
                id="message"
                class="form-control"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <!-- Botón de envío -->
          <div class="form-row">
            <div class="form-group full-width text-center">
              <button type="submit" class="btn submit-btn">SEND</button>
            </div>
          </div>
        </form>

        <!-- Mensaje de confirmación -->
        <div v-if="message" class="message-container">
          <p class="message-text">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BASEURL } from "@/kernel/utils";
export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        tomail: "0",
        tit: "Mr.",
        name: "",
        lastname: "",
        email: "",
        company: "",
        zip: "",
        city: "",
        country: "",
        subject: "",
        message: "",
      },
      message: "",
      filledInputs: false,
      BASEURL,
    };
  },
  methods: {
    validateForm() {
      if (this.formData.tomail < 1) {
        this.message = "Error, You must fill all required fields!";
        this.filledInputs = true;
        return false;
      }

      const requiredFields = [
        "name",
        "lastname",
        "email",
        "company",
        "zip",
        "city",
        "country",
        "subject",
        "message",
      ];

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          this.message = "Error, You must fill all required fields!";
          this.filledInputs = true;
          return false;
        }
      }

      return true;
    },
    async submitForm() {
      this.message = "";
      this.filledInputs = false;

      if (!this.validateForm()) {
        return;
      }

      try {
        const response = await fetch(
          "https://www.generadorestudio.com/proyectos/med/senCobconta.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          }
        );

        const data = await response.json();

        if (data.response === "OK") {
          this.message = data.message;
          document.querySelector(".contact-form").style.display = "none";
        } else if (data.response === "Error") {
          this.message =
            data.message || "Error, You must fill all required fields!";
          this.filledInputs = true;
        }
      } catch (error) {
        console.error("Error:", error);
        this.message = "Something went wrong, your message couldn't be sent";
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #fffdfd;
}
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contactTitleStyles {
  background-size: cover;
  background-position: center;
  height: 400px; /* Ajusta el tamaño según lo que necesites */
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 140%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 64px;
  margin-bottom: 2rem;
  border-radius: 16px;
}

.contact-title {
  margin-top: 54px;
  text-align: center;
  font-size: 4.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  font-weight: bold;
}

.contact-emails {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.email-item {
  flex: 1;
  min-width: 250px;
  background-color: #da302b;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.email-item h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.email-item p {
  font-size: 1rem;
  margin: 0;
}

.contact-form-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-description {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.form-group {
  flex: 1;
  min-width: 200px;
}

.form-group.half-width {
  flex: 1;
  min-width: calc(50% - 0.5rem);
}

.form-group.third-width {
  flex: 1;
  min-width: calc(33.333% - 0.666rem);
}

.form-group.full-width {
  flex: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #da302b;
  outline: none;
}

.submit-btn {
  background-color: #da302b;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-transform: uppercase;
  font-weight: bold;
}

.submit-btn:hover {
  background-color: #b82622;
}

.message-container {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 4px;
}

.message-text {
  text-align: center;
  font-size: 1.1rem;
  color: #da302b;
  font-weight: bold;
}

@media (max-width: 768px) {
  .email-item {
    min-width: 100%;
  }

  .form-group.half-width,
  .form-group.third-width {
    min-width: 100%;
  }

  .contactTitleStyles {
    height: 300px;
  }
}
</style>

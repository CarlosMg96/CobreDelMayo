<template>
    <div class="about-page">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-overlay">
          <div v-if="languaje == 'EN'"> 
            <h1>Location</h1>
          </div>
            <div v-else>
                <h1>Ubicación y acceso</h1>
            </div>
        </div>
      </section>

      <!-- Historia del Hotel -->
      <section class="history-section container">
        <div class="section-header">
          <div v-if="languaje == 'EN'">
            <h2>The Piedras Verdes Mine is located near Alamos and Navojoa towns in Sonora, in a safe, politically stable, and developed historic mining region.</h2>
          </div>
          <div v-else>
            <h2>La mina Piedras Verdes está situada cerca de las localidades de Álamos y Navojoa en Sonora, es segura, políticamente estable y desarrollo histórico en una región minera.</h2>
          </div>
          <div class="divider"></div>
        </div>
        


       <!-- History -->
      <section class="philosophy-section">
        <div class="container">
          <div class="philosophy-grid">
            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>It benefits from several direct access roads to public highways, and the proximity to the main north-south railway and two deep-water ports (Guaymas 255 km and Topolobampo 248 km).</p>
              </div>
              <div v-else>
                <p>Se beneficia de varias vías de acceso directo a las carreteras públicas y de la proximidad a la principal línea ferroviaria norte-sur y a dos puertos de agua profunda (Guaymas 255 km y Topolobampo 248 km)</p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>Mexico is a member of the Organization for Economic Cooperation and Development (“OECD”) and the World Trade Organization and has free trade agreements in place with 48 countries (including the EU and all TPP member countries).</p>
              </div>
              <div v-else>
                <p>México es miembro de la Organización para la Cooperación y el Desarrollo Económico ("OCDE") y de la Organización Mundial del Comercio y tiene acuerdos de libre comercio con 48 países (incluyendo la UE y todos los países miembros del TPP)</p>
              </div>
            </div>
           
            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>Mexico is a stable mining jurisdiction with a modern legal and regulatory framework. These factors differentiate Mexico from other major copper-producing countries that have experienced greater economic, political, and labor relations and similar risks.</p>
              </div>
              <div v-else>
                <p>México es estable a la jurisdicción minera con un marco legal y regulatorio moderno. Estos factores diferencian a México de otros grandes países productores de cobre que han experimentado mayores riesgos económicos, políticos, laborales y similares</p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>Its advantaged location allows our management and front-line employees to live in attractive surroundings with access to excellent schools and universities. This provides a significant competitive advantage in recruiting and retaining competent management and a skilled labor force.</p>
              </div>
              <div v-else>
                <p>Su ventajosa ubicación ofrece a nuestros directivos y empleados de primera línea la oportunidad de vivir en un entorno atractivo con acceso a excelentes escuelas y universidades. Esto nos proporciona una importante ventaja competitiva a la hora de contratar y retener a directivos competentes y a una mano de obra cualificada.</p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>Sonora is the largest copper-producing state in Mexico, accounting for 75.6% of copper production in 2022. Total copper production in Mexico was ~ 753 kt in 2022.</p>
              </div>
              <div v-else>
                <p>Sonora es el mayor estado productor de cobre en México, con el 81% de la producción de cobre en 2020. La producción de cobre en México fue de ~ 730kt en 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>

  
      <!-- Equipo -->
      <section class="team-section container">
        <div class="section-header">
          <h2>Conoce a Nuestro Equipo</h2>
          <div class="divider"></div>
          <p class="section-description">
            Profesionales apasionados que hacen de tu estancia una experiencia memorable
          </p>
        </div>
  
        <div class="team-grid">
          <div class="team-member" v-for="member in teamMembers" :key="member.id">
            <div class="member-image">
              <div class="image-placeholder">
                <span>[Foto de {{ member.name }}]</span>
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="bio">{{ member.bio }}</p>
              <div class="member-contact">
                <span>✉️ {{ member.email }}</span>
                <span>📞 {{ member.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonios -->
      <section class="testimonials-section">
        <div class="container">
          <div class="section-header">
            <h2>Lo que dicen nuestros huéspedes</h2>
            <div class="divider"></div>
          </div>
  
          <div class="testimonials-grid">
            <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="testimonial-content">
                <p class="quote">"{{ testimonial.quote }}"</p>
                <div class="rating">
                  <span v-for="n in 5" :key="n">⭐</span>
                </div>
              </div>
              <div class="author-info">
                <p class="author-name">{{ testimonial.author }}</p>
                <p class="author-details">{{ testimonial.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Final -->
      <section class="about-cta">
        <div class="container">
          <h2>¿Listo para vivir la experiencia Villa Internacional del Tenis?</h2>
          <router-link to="/reservaciones" class="cta-button">Reserva ahora</router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getLanguage } from '@/kernel/utils';

  const languaje = ref(getLanguage());
  
  // Datos del equipo
  const teamMembers = ref([
    {
      id: 1,
      name: 'Carlos Méndez',
      position: 'Fundador y Director General',
      bio: 'Ex-tenista profesional con más de 40 años de experiencia en el mundo del tenis. Creador de la filosofía única del hotel.',
      email: 'carlos@hoteltenis.com',
      phone: '777 123 4567'
    },
    {
      id: 2,
      name: 'Ana Rodríguez',
      position: 'Gerente de Hospedaje',
      bio: 'Especialista en hospitalidad con 15 años garantizando la comodidad de nuestros huéspedes.',
      email: 'ana@hoteltenis.com',
      phone: '777 234 5678'
    },
    {
      id: 3,
      name: 'Miguel Torres',
      position: 'Director Deportivo',
      bio: 'Entrenador certificado por la ITF. A cargo de nuestros programas de entrenamiento y clínicas.',
      email: 'miguel@hoteltenis.com',
      phone: '777 345 6789'
    }
  ]);
  
  // Testimonios
  const testimonials = ref([
    {
      id: 1,
      quote: "El mejor lugar para combinar vacaciones con tenis. Las canchas son excelentes y el personal te hace sentir como en casa.",
      author: "Roberto Sánchez",
      details: "Huésped frecuente desde 2015"
    },
    {
      id: 2,
      quote: "Increíble la atención a detalle. Vine para un torneo y la organización fue impecable. Volveré sin duda.",
      author: "María González",
      details: "Participante Torneo Nacional 2022"
    },
    {
      id: 3,
      quote: "Nuestra familia viene cada verano. Los niños aprenden tenis mientras nosotros disfrutamos la alberca y los jardines.",
      author: "Familia López",
      details: "Visitantes anuales desde 2018"
    }
  ]);
  </script>
  
  <style scoped>
  /* Estilos base */
  .about-page {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
    color: #2c3e50;
  }
  
  .divider {
    width: 80px;
    height: 3px;
    background-color: #e67e22;
    margin: 15px auto 20px;
  }
  
  .section-description {
    max-width: 700px;
    margin: 0 auto;
    color: #7f8c8d;
  }
  
  /* Hero Section */
  .about-hero {
    height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url('http://localhost:3000/api/public/img/bg-location.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
  }
  
  .hero-overlay {
    z-index: 1;
  }
  
  .about-hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  /* Historia Section */
  .history-section {
    padding: 80px 0;
  }
  
  .history-content {
    display: flex;
    gap: 50px;
    align-items: center;
  }
  
  .history-text {
    flex: 1;
  }
  
  .history-image {
    flex: 1;
  }
  
  .history-highlights {
    margin-top: 30px;
    list-style-type: none;
    padding: 0;
  }
  
  .history-highlights li {
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
  }
  
  .highlight-year {
    font-weight: bold;
    color: #e67e22;
  }
  
  .image-placeholder {
    background-color: #eee;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    border-radius: 8px;
  }
  
  /* Filosofía Section */
  .philosophy-section {
    background-color: #f9f9f9;
    padding: 80px 0;
  }
  
  .philosophy-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  
  .philosophy-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .philosophy-card:hover {
    transform: translateY(-10px);
  }
  
  .philo-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .values-list {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
  
  .values-list li {
    padding: 8px 0;
    position: relative;
    padding-left: 25px;
  }
  
  .values-list li:before {
    content: '•';
    color: #e67e22;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  /* Equipo Section */
  .team-section {
    padding: 80px 0;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }
  
  .team-member {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  
  .member-image .image-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  
  .member-info {
    flex: 1;
  }
  
  .position {
    color: #e67e22;
    font-weight: bold;
    margin: 5px 0 10px;
  }
  
  .bio {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .member-contact {
    font-size: 0.8rem;
    color: #7f8c8d;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  /* Testimonios Section */
  .testimonials-section {
    background-color: #34495e;
    color: white;
    padding: 80px 0;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .testimonial-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 30px;
    transition: all 0.3s ease;
  }
  
  .testimonial-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
  
  .quote {
    font-style: italic;
    margin-bottom: 15px;
    position: relative;
  }
  
  .quote:before {
    content: '"';
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.2);
    position: absolute;
    left: -15px;
    top: -20px;
  }
  
  .rating {
    margin-bottom: 15px;
  }
  
  .author-name {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .author-details {
    font-size: 0.8rem;
    opacity: 0.8;
  }
  
  /* CTA Section */
  .about-cta {
    padding: 80px 0;
    text-align: center;
    background: linear-gradient(135deg, #e67e22, #d35400);
    color: white;
  }
  
  .about-cta h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  
  .cta-button {
    background-color: white;
    color: #e67e22;
    padding: 15px 40px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: inline-block;
  }
  
  .cta-button:hover {
    background-color: #f5f5f5;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .history-content {
      flex-direction: column;
    }
    
    .philosophy-grid {
      grid-template-columns: 1fr;
    }
    
    .team-member {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .member-contact {
      align-items: center;
    }
  }
  
  @media (max-width: 480px) {
    .about-hero h1 {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
    
    .section-header h2 {
      font-size: 1.8rem;
    }
  }
  </style>
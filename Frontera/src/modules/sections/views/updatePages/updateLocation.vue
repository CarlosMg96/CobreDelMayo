<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> Location / Ubicación </v-card-title>
      <v-card-subtitle>
        <div v-if="language == 'EN'">
          <h2>You are in the section to update in</h2>
          <h1>English</h1>
          <button @click="changeLanguage()" class="action-btn secondary-btn">
            <span class="language-tag">Change Language</span>
            {{ language == "EN" ? "ES" : "EN" }}
          </button>
        </div>

        <div v-else>
          <h2>Estas actualizando la sección en</h2>
          <h1>Español</h1>
          <button @click="changeLanguage()" class="action-btn secondary-btn">
            <span class="language-tag">Cambiar idioma</span>
            {{ language == "ES" ? "EN" : "ES" }}
          </button>
        </div>
        <div class="divider"></div>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-row class="gap-y-6">
        <div class="location-page">
          <!-- Hero Section -->
          <section class="about-hero">
            <div class="hero-overlay">
              <div>
                <h1
                  style="color: white !important"
                  @dblclick="openEditModal('LOCATION_01_' + language)"
                >
                  <span v-html="filterData('LOCATION_01_' + language)"></span>
                </h1>
              </div>
            </div>
          </section>

          <!-- Cards -->
          <section class="history-section container">
            <div class="section-header">
              <div>
                <h2 @dblclick="openEditModal('LOCATION_02_' + language)">
                  <span v-html="filterData('LOCATION_02_' + language)"></span>
                </h2>
              </div>
              <div class="divider"></div>
            </div>

            <!-- History -->
            <section class="philosophy-section">
              <div class="container">
                <div class="philosophy-grid">
                  <div class="philosophy-card">
                    <div>
                      <p @dblclick="openEditModal('LOCATION_03_' + language)">
                        <span
                          v-html="filterData('LOCATION_03_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="philosophy-card">
                    <div>
                      <p @dblclick="openEditModal('LOCATION_04_' + language)">
                        <span
                          v-html="filterData('LOCATION_04_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="philosophy-card">
                    <div>
                      <p @dblclick="openEditModal('LOCATION_05_' + language)">
                        <span
                          v-html="filterData('LOCATION_05_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="philosophy-card">
                    <div>
                      <p @dblclick="openEditModal('LOCATION_06_' + language)">
                        <span
                          v-html="filterData('LOCATION_06_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="philosophy-card">
                    <div>
                      <p @dblclick="openEditModal('LOCATION_07_' + language)">
                        <span
                          v-html="filterData('LOCATION_07_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section class="image-section">
            <div class="image-content-blue">
              <img
                :src="`${BASEURL}/img/bg-location.jpg`"
                alt="Location Map"
                class="location-map"
              />
            </div>
          </section>

          <section>
            <div>
              <div class="location-info">
                <div class="location-header">
                  <h3 @dblclick="openEditModal('LOCATION_08_' + language)">
                    <span v-html="filterData('LOCATION_08_' + language)"></span>
                  </h3>
                </div>

                <div class="transport-grid">
                  <div class="transport-item">
                    <div class="icon-container">
                      <svg
                        class="svg__location"
                        xmlns="http://www.w3.org/2000/svg"
                        width="140.193"
                        height="116.197"
                        viewBox="0 0 140.193 116.197"
                      >
                        <g
                          id="noun-airport-3587599"
                          transform="translate(-45.284 -80.079)"
                        >
                          <path
                            id="Trazado_62"
                            data-name="Trazado 62"
                            d="M268.025,150a7.344,7.344,0,0,0-2.365-2.322l-31.715-18.148v-9.718h-.108a5.014,5.014,0,0,0-1.935-3.011,7.668,7.668,0,0,0-4.945-1.634,7.833,7.833,0,0,0-5.054,1.634,4.543,4.543,0,0,0-1.827,3.011h-.107v1.548l-7.1-3.956q.108-8.085,0-15.4a37.972,37.972,0,0,0-.43-6.279A21.489,21.489,0,0,0,207.6,84.38a11.3,11.3,0,0,0-8.709-4.3,11.015,11.015,0,0,0-8.709,4.387,20.722,20.722,0,0,0-4.838,11.353,36.375,36.375,0,0,0-.43,6.193v15.4l-6.988,3.956v-.774a5.494,5.494,0,0,0-2.15-3.44,8.479,8.479,0,0,0-9.891.085,4.6,4.6,0,0,0-1.935,3.355l-.108,8.859-31.715,18.32A6.361,6.361,0,0,0,129.659,150a5.157,5.157,0,0,0-.86,2.753,5.573,5.573,0,0,0,2.795,4.9,9.044,9.044,0,0,0,6.451,1.461l46.874-6.02v8.17a41.114,41.114,0,0,0,1.5,9.977l-16.341,7.225a8.034,8.034,0,0,0-2.795,2.237,5.379,5.379,0,0,0-1.183,3.011,5.751,5.751,0,0,0,2.8,4.73,8.372,8.372,0,0,0,6.128,1.29l17.631-2.58q2.151,4.645,4.086,8a2.726,2.726,0,0,0,.86.86,2.962,2.962,0,0,0,1.29.258,2.708,2.708,0,0,0,1.29-.344,1.462,1.462,0,0,0,.752-.774q1.829-3.353,4.194-8l17.524,2.58a8.495,8.495,0,0,0,6.235-1.375,5.587,5.587,0,0,0,2.688-4.645,4.523,4.523,0,0,0-1.182-3.011,6.069,6.069,0,0,0-2.8-2.237l-16.341-7.225a35.868,35.868,0,0,0,1.721-10.062V153.1l46.874,6.02a8.651,8.651,0,0,0,6.236-1.461,5.47,5.47,0,0,0,2.9-4.816,4.631,4.631,0,0,0-.967-2.839m-4.086,1.634a2.4,2.4,0,0,1,.323,1.118,2.421,2.421,0,0,1-1.075,2.064,3.938,3.938,0,0,1-2.688.6l-47.627-6.106.108-27.35,49.992,28.812a11.86,11.86,0,0,1,.967.86M191.262,91a27.278,27.278,0,0,1,2.8-4.645,6.764,6.764,0,0,1,4.838-2.495,6.416,6.416,0,0,1,4.3,1.979,15.683,15.683,0,0,1,3.333,5.247,18.5,18.5,0,0,0-7.634-1.634A17.55,17.55,0,0,0,191.262,91m-1.5,5.848a12.557,12.557,0,0,1,4.3-2.666,12.85,12.85,0,0,1,9.676,0,13.219,13.219,0,0,1,4.192,2.666,16.233,16.233,0,0,1,.216,2.495q.106,1.461,0,6.88v54.959a34.587,34.587,0,0,1-1.935,10.923,112.24,112.24,0,0,1-7.311,17.373,117.2,117.2,0,0,1-7.418-17.545,38.826,38.826,0,0,1-1.935-10.751q.108-13.848,0-54.959v-6.88q.108-1.118.215-2.495m38.811,22.62a1.63,1.63,0,0,1,.752,1.2v6.107l-4.838-2.666v-.431h.107v-2.838a1.459,1.459,0,0,1,.646-1.376,2.966,2.966,0,0,1,1.721-.516,2.5,2.5,0,0,1,1.613.516m-60.1,7.311v-5.677a1.586,1.586,0,0,1,.646-1.29,2.965,2.965,0,0,1,1.719-.516,2.52,2.52,0,0,1,2.473,1.719l-.107,3.1-4.731,2.666m-31.285,28.64a3.353,3.353,0,0,1-2.581-.688,1.89,1.89,0,0,1-1.075-1.892,1.819,1.819,0,0,1,.215-1.2,7.075,7.075,0,0,1,1.075-.86l50.1-28.9v27.437l-47.734,6.106M171.265,182.6a3.545,3.545,0,0,1,1.075-.86l15.374-6.622q1.4,3.87,3.332,8.429l-16.771,2.493a3.543,3.543,0,0,1-2.366-.43,2.278,2.278,0,0,1-1.075-1.892,1.713,1.713,0,0,1,.431-1.118m54.185-.86a2.482,2.482,0,0,1,.968.86,1.622,1.622,0,0,1,.538,1.2,2.269,2.269,0,0,1-.968,1.806,3.308,3.308,0,0,1-2.473.43l-16.771-2.408q1.935-4.644,3.332-8.514Z"
                            transform="translate(-83.514)"
                            fill="#F07E35"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="transport-details">
                      <h4 @dblclick="openEditModal('LOCATION_09_' + language)">
                        <span
                          v-html="filterData('LOCATION_09_' + language)"
                        ></span>
                      </h4>
                      <p @dblclick="openEditModal('LOCATION_10_' + language)">
                        <span
                          v-html="filterData('LOCATION_10_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="transport-item">
                    <div class="icon-container">
                      <svg
                        class="svg__location"
                        xmlns="http://www.w3.org/2000/svg"
                        width="94.533"
                        height="122.188"
                        viewBox="0 0 94.533 122.188"
                      >
                        <g
                          id="noun-rail-1692819"
                          transform="translate(-137.485 -109.503)"
                        >
                          <path
                            id="Trazado_71"
                            data-name="Trazado 71"
                            d="M226.714,309.207a6.628,6.628,0,1,1-6.652-6.652A6.629,6.629,0,0,1,226.714,309.207Zm0,0"
                            transform="translate(-51.717 -124.654)"
                            fill="none"
                            stroke="#D32A28"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_72"
                            data-name="Trazado 72"
                            d="M330.86,309.207a6.628,6.628,0,1,1-6.652-6.652A6.629,6.629,0,0,1,330.86,309.207Zm0,0"
                            transform="translate(-119.847 -124.654)"
                            fill="none"
                            stroke="#D32A28"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_73"
                            data-name="Trazado 73"
                            d="M264.387,119.325a7.322,7.322,0,0,1-7.322,7.322H230.887a7.323,7.323,0,0,1,0-14.645h26.179a7.323,7.323,0,0,1,7.323,7.322Zm0,0"
                            transform="translate(-58.329 0)"
                            fill="none"
                            stroke="#F07E35"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_74"
                            data-name="Trazado 74"
                            d="M231.4,125.767a7.269,7.269,0,0,1-6.836,9.883H198.384a7.269,7.269,0,0,1-6.836-9.883,26.851,26.851,0,0,0-17.667,25.215V210.85h75.185V150.981A26.851,26.851,0,0,0,231.4,125.766Zm0,0"
                            transform="translate(-25.827 -9.003)"
                            fill="none"
                            stroke="#F07E35"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_75"
                            data-name="Trazado 75"
                            d="M257.9,189.431v25.748a3.308,3.308,0,0,1-3.3,3.3H205.828a3.308,3.308,0,0,1-3.3-3.3V189.432a3.268,3.268,0,0,1,3.3-3.256H254.6a3.269,3.269,0,0,1,3.3,3.256Zm0,0"
                            transform="translate(-44.566 -48.522)"
                            fill="none"
                            stroke="#D32A28"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_76"
                            data-name="Trazado 76"
                            d="M173.88,398.151,192.909,371.8h37.125l19.029,26.353"
                            transform="translate(-25.826 -169.95)"
                            fill="none"
                            stroke="#F07E35"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_77"
                            data-name="Trazado 77"
                            d="M180.4,401.779H249.29"
                            transform="translate(-30.094 -189.563)"
                            fill="none"
                            stroke="#D32A28"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                          <path
                            id="Trazado_78"
                            data-name="Trazado 78"
                            d="M150.549,428.883h89.533"
                            transform="translate(-10.564 -207.294)"
                            fill="none"
                            stroke="#D32A28"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="transport-details">
                      <h4 @dblclick="openEditModal('LOCATION_11_' + language)">
                        <span
                          v-html="filterData('LOCATION_11_' + language)"
                        ></span>
                      </h4>
                      <p @dblclick="openEditModal('LOCATION_12_' + language)">
                        <span
                          v-html="filterData('LOCATION_12_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="transport-item">
                    <div class="icon-container">
                      <svg
                        class="svg__location"
                        xmlns="http://www.w3.org/2000/svg"
                        width="111.239"
                        height="117"
                        viewBox="0 0 111.239 117"
                      >
                        <g
                          id="noun-road-2665679"
                          transform="translate(-88.201 -17.497)"
                        >
                          <path
                            id="Trazado_63"
                            data-name="Trazado 63"
                            d="M341.25,420h3.9v7.8h-3.9Z"
                            transform="translate(-199.381 -312.802)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_64"
                            data-name="Trazado 64"
                            d="M341.25,472.5h3.9v7.8h-3.9Z"
                            transform="translate(-199.381 -353.602)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_65"
                            data-name="Trazado 65"
                            d="M341.25,315h3.9v7.8h-3.9Z"
                            transform="translate(-199.381 -231.202)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_66"
                            data-name="Trazado 66"
                            d="M341.25,367.5h3.9v7.8h-3.9Z"
                            transform="translate(-199.381 -272.002)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_67"
                            data-name="Trazado 67"
                            d="M100.43,292.36l28.749-68.25,3.594,1.514-28.749,68.25Z"
                            transform="translate(-12.229 -160.567)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_68"
                            data-name="Trazado 68"
                            d="M454.43,225.621l3.594-1.514,28.753,68.248-3.594,1.514Z"
                            transform="translate(-287.338 -160.565)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_69"
                            data-name="Trazado 69"
                            d="M212.985,63.618a1.95,1.95,0,0,0-1.829-1.271H207.7c4.878-7.433,9.308-15.748,9.308-21.45a23.4,23.4,0,1,0-46.8,0c0,5.7,4.43,14.017,9.308,21.45h-3.458a1.95,1.95,0,0,0-1.827,1.271l-25.35,68.25a1.95,1.95,0,0,0,1.827,2.629h85.8a1.95,1.95,0,0,0,1.829-2.629ZM193.606,21.4a19.521,19.521,0,0,1,19.5,19.5c0,8.43-12.928,25.972-19.5,34-6.572-8.03-19.5-25.571-19.5-34a19.521,19.521,0,0,1,19.5-19.5Zm-40.1,109.2,23.91-64.35h4.752c4.906,6.995,9.555,12.48,9.956,12.964a1.951,1.951,0,0,0,2.972,0c.409-.481,5.051-5.969,9.956-12.964h4.752L233.7,130.6Z"
                            transform="translate(-49.786 0)"
                            fill="#F07E35"
                          ></path>
                          <path
                            id="Trazado_70"
                            data-name="Trazado 70"
                            d="M311.2,68.1a15.619,15.619,0,1,0-4.575,11.025A15.6,15.6,0,0,0,311.2,68.1Zm-27.3,0a11.711,11.711,0,1,1,3.43,8.27A11.7,11.7,0,0,1,283.9,68.1Z"
                            transform="translate(-151.781 -27.202)"
                            fill="#D32A28"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="transport-details">
                      <h4 @dblclick="openEditModal('LOCATION_13_' + language)">
                        <span
                          v-html="filterData('LOCATION_13_' + language)"
                        ></span>
                      </h4>
                      <p @dblclick="openEditModal('LOCATION_14_' + language)">
                        <span
                          v-html="filterData('LOCATION_14_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>

                  <div class="transport-item">
                    <div class="icon-container">
                      <svg
                        class="svg__location"
                        xmlns="http://www.w3.org/2000/svg"
                        width="87.018"
                        height="117"
                        viewBox="0 0 87.018 117"
                      >
                        <g
                          id="noun-port-3786309"
                          transform="translate(-119.744 -48.475)"
                        >
                          <path
                            id="Trazado_79"
                            data-name="Trazado 79"
                            d="M277.038,193.54h-5.5a2.122,2.122,0,1,0,0,4.244h5.5a2.122,2.122,0,0,0,0-4.244Z"
                            transform="translate(-126.499 -108.424)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_80"
                            data-name="Trazado 80"
                            d="M277.038,220.59h-5.5a2.121,2.121,0,1,0,0,4.243h5.5a2.121,2.121,0,1,0,0-4.243Z"
                            transform="translate(-126.499 -128.641)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_81"
                            data-name="Trazado 81"
                            d="M330.453,197.783H335.9a2.122,2.122,0,0,0,0-4.244h-5.446a2.122,2.122,0,0,0,0,4.244Z"
                            transform="translate(-170.536 -108.423)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_82"
                            data-name="Trazado 82"
                            d="M338.045,222.7a2.121,2.121,0,0,0-2.122-2.121h-5.474a2.121,2.121,0,1,0,0,4.243h5.446a2.121,2.121,0,0,0,2.15-2.121Z"
                            transform="translate(-170.533 -128.635)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_83"
                            data-name="Trazado 83"
                            d="M389.423,197.783h5.432a2.122,2.122,0,1,0,0-4.244h-5.432a2.122,2.122,0,0,0,0,4.244Z"
                            transform="translate(-214.611 -108.423)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_84"
                            data-name="Trazado 84"
                            d="M389.423,224.826h5.432a2.121,2.121,0,1,0,0-4.243h-5.432a2.121,2.121,0,0,0,0,4.243Z"
                            transform="translate(-214.611 -128.636)"
                            fill="#D32A28"
                          ></path>
                          <path
                            id="Trazado_85"
                            data-name="Trazado 85"
                            d="M262.637,161.172c-6.592,0-11.684-4.625-11.684-8.6h0a2.12,2.12,0,0,0-.368-1.189l9.265-31.626a2.136,2.136,0,0,0-1.061-2.489l-9.9-5.163V80.986a2.121,2.121,0,0,0-2.122-2.121H236.385v-12.6a2.122,2.122,0,0,0-2.122-2.121H223.174V60.42l8.26-3.635h0a2.136,2.136,0,0,0,0-3.889l-9.519-4.244a2.149,2.149,0,0,0-2.023.17,2.121,2.121,0,0,0-.962,1.768V64.111H206.906a2.122,2.122,0,0,0-2.121,2.122V78.851H196.3a2.122,2.122,0,0,0-2.121,2.122v31.119l-9.9,5.233a2.121,2.121,0,0,0-1.047,2.476l9.109,31.119a2.153,2.153,0,0,0-.835,1.656c0,3.974-5.106,8.6-11.7,8.6h0a2.122,2.122,0,1,0,0,4.244,17.242,17.242,0,0,0,13.819-6.648,14.006,14.006,0,0,0,2.121,2.391,17.87,17.87,0,0,0,11.542,4.243,17.183,17.183,0,0,0,13.919-6.633,17.186,17.186,0,0,0,13.805,6.648,17.512,17.512,0,0,0,12.872-5.516c.311-.353.623-.707.891-1.075a17.184,17.184,0,0,0,13.805,6.648,2.122,2.122,0,0,0,0-4.244ZM223.173,53.884l2.15.948-2.15.948Zm-14.145,14.5h23.113v10.5H209.028Zm-10.595,14.74H244.6V109.9l-22.42-11.656a2.107,2.107,0,0,0-1.966,0l-21.782,11.542Zm-1.6,32.321a1.991,1.991,0,0,0,.863-.467l23.508-12.463,34.074,17.724-4.37,15.148-28.53-12.023a2.1,2.1,0,0,0-1.655,0l-28.459,12.023-4.442-15.163Zm38.191,45.731c-6.577,0-11.684-4.625-11.684-8.6h0a2.122,2.122,0,1,0-4.244,0c0,3.974-5.106,8.6-11.684,8.6a13.464,13.464,0,0,1-8.486-2.928l-5.474-18.755,28.09-11.854,28.105,11.854L244.4,157.382a13.28,13.28,0,0,1-9.392,3.791Z"
                            transform="translate(-57.939 0)"
                            fill="#F07E35"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="transport-details">
                      <h4 @dblclick="openEditModal('LOCATION_15_' + language)">
                        <span
                          v-html="filterData('LOCATION_15_' + language)"
                        ></span>
                      </h4>
                      <p @dblclick="openEditModal('LOCATION_16_' + language)">
                        <span
                          v-html="filterData('LOCATION_16_' + language)"
                        ></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container_infrastructure">
              <div>
                <div class="text-section_infrastructure">
                  <h1 @dblclick="openEditModal('LOCATION_17_' + language)">
                    <span v-html="filterData('LOCATION_17_' + language)"></span>
                  </h1>
                  <p @dblclick="openEditModal('LOCATION_18_' + language)">
                    <span v-html="filterData('LOCATION_18_' + language)"></span>
                  </p>
                </div>
              </div>
              <div class="image-section_infrastructure">
                <img
                  :src="`${BASEURL}/img/location-infrastructure.png`"
                  alt="Infrastructure"
                />
              </div>
            </div>
          </section>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
  <UpdateModal
    :visible="dialogVisible"
    :current-text="currentText"
    current-page="LOCATION"
    :text-id="currentTextId"
    @update:visible="updateDialogVisible"
    @save-text="updateText"
  />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import {
  BASEURL,
  getLanguageForUpdateContent,
  setLanguageForUpdateContent,
} from "@/kernel/utils";
import { showInfoToast } from "@/kernel/alerts";
import UpdateModal from "../../components/UpdateModal.vue";
import { getSectionByPageandlanguage } from "../../services/sections-service";

export default defineComponent({
  name: "UpdateAboutEn",
  components: {
    UpdateModal,
  },
  setup() {
    const dataLocation = ref([
      {
        section_id: `LOCATION_01_EN`,
        description: `Location and Access`,
      },
      {
        section_id: `LOCATION_01_ES`,
        description: `Ubicación y acceso`,
      },
      {
        section_id: `LOCATION_02_EN`,
        description: `The Piedras Verdes Mine is located near Alamos and Navojoa towns in Sonora, in a safe, politically stable, and developed historic mining region.`,
      },
      {
        section_id: `LOCATION_02_ES`,
        description: `La mina Piedras Verdes está situada cerca de las localidades de Álamos y Navojoa en Sonora, es segura, políticamente estable y desarrollo histórico en una región minera.`,
      },
      {
        section_id: `LOCATION_03_EN`,
        description: `It benefits from several direct access roads to public highways, and the proximity to the main north-south railway and two deep-water ports (Guaymas 255 km and Topolobampo 248 km).`,
      },
      {
        section_id: `LOCATION_03_ES`,
        description: `Se beneficia de varias vías de acceso directo a las carreteras públicas y de la proximidad a la principal línea ferroviaria norte-sur y a dos puertos de agua profunda (Guaymas 255 km y Topolobampo 248 km)`,
      },
      {
        section_id: `LOCATION_04_EN`,
        description: `Mexico is a member of the Organization for Economic Cooperation and Development (“OECD”) and the World Trade Organization and has free trade agreements in place with 48 countries (including the EU and all TPP member countries).`,
      },
      {
        section_id: `LOCATION_04_ES`,
        description: `México es miembro de la Organización para la Cooperación y el Desarrollo Económico ("OCDE") y de la Organización Mundial del Comercio y tiene acuerdos de libre comercio con 48 países (incluyendo la UE y todos los países miembros del TPP)`,
      },
      {
        section_id: `LOCATION_05_EN`,
        description: `Mexico is a stable mining jurisdiction with a modern legal and regulatory framework. These factors differentiate Mexico from other major copper-producing countries that have experienced greater economic, political, and labor relations and similar risks.`,
      },
      {
        section_id: `LOCATION_05_ES`,
        description: `México es estable a la jurisdicción minera con un marco legal y regulatorio moderno. Estos factores diferencian a México de otros grandes países productores de cobre que han experimentado mayores riesgos económicos, políticos, laborales y similares`,
      },
      {
        section_id: `LOCATION_06_EN`,
        description: `Its advantaged location allows our management and front-line employees to live in attractive surroundings with access to excellent schools and universities. This provides a significant competitive advantage in recruiting and retaining competent management and a skilled labor force.`,
      },
      {
        section_id: `LOCATION_06_ES`,
        description: `Su ventajosa ubicación ofrece a nuestros directivos y empleados de primera línea la oportunidad de vivir en un entorno atractivo con acceso a excelentes escuelas y universidades. Esto nos proporciona una importante ventaja competitiva a la hora de contratar y retener a directivos competentes y a una mano de obra cualificada.`,
      },
      {
        section_id: `LOCATION_07_EN`,
        description: `Sonora is the largest copper-producing state in Mexico, accounting for 75.6% of copper production in 2022. Total copper production in Mexico was ~ 753 kt in 2022.`,
      },
      {
        section_id: `LOCATION_07_ES`,
        description: `Sonora es el mayor estado productor de cobre en México, con el 81% de la producción de cobre en 2020. La producción de cobre en México fue de ~ 730kt en 2020`,
      },
      {
        section_id: `LOCATION_08_EN`,
        description: `21 km from Alamos and 50 km from Navojoa`,
      },
      {
        section_id: `LOCATION_08_ES`,
        description: `A 21 km de Álamos y a 50 km de Navojoa`,
      },
      {
        section_id: `LOCATION_09_EN`,
        description: `Air`,
      },
      {
        section_id: `LOCATION_09_ES`,
        description: `Aire`,
      },
      {
        section_id: `LOCATION_10_EN`,
        description: `Ciudad Obregón International Airport is located 111 km (~75 min drive) from the mine`,
      },
      {
        section_id: `LOCATION_10_ES`,
        description: `El aeropuerto internacional de Ciudad Obregón se encuentra a 111 km (~75 minutos en coche) del sitio`,
      },
      {
        section_id: `LOCATION_11_EN`,
        description: `Rail`,
      },
      {
        section_id: `LOCATION_11_ES`,
        description: `Ferrocarril`,
      },
      {
        section_id: `LOCATION_12_EN`,
        description: `50 km to the mainline north-south railway in Navojoa`,
      },
      {
        section_id: `LOCATION_12_ES`,
        description: `A 50 km de la línea principal de ferrocarril norte-sur en Navojoa`,
      },
      {
        section_id: `LOCATION_13_EN`,
        description: `Road`,
      },
      {
        section_id: `LOCATION_13_ES`,
        description: `Carretera`,
      },
      {
        section_id: `LOCATION_14_EN`,
        description: `Connected by a 14 km access road to a paved highway`,
      },
      {
        section_id: `LOCATION_14_ES`,
        description: `Conectado por una carretera de acceso de 14 km a una autopista pavimentada`,
      },
      {
        section_id: `LOCATION_15_EN`,
        description: `Port`,
      },
      {
        section_id: `LOCATION_15_ES`,
        description: `Puerto`,
      },
      {
        section_id: `LOCATION_16_EN`,
        description: `Approximately ~250 km from the deep-water ports of Guaymas and Topolobampo`,
      },
      {
        section_id: `LOCATION_16_ES`,
        description: `A unos ~250 km de los puertos de aguas profundas de Guaymas y Topolobampo`,
      },
      {
        section_id: `LOCATION_17_EN`,
        description: `Infrastructure`,
      },
      {
        section_id: `LOCATION_17_ES`,
        description: `Infraestructura`,
      },
      {
        section_id: `LOCATION_18_EN`,
        description: `All infrastructure is in place and located close to the mine. PV is easily accessible by all modes of transport, including air transport from the Ciudad Obregón International Airport and Alamos domestic airport, road transport, rail transport through Sonora’s mainline north-south railway that passes through Navojoa, and ocean transport at the port of Guaymas and Topolobampo from which copper concentrate is blended and exported by both trading and mining companies. The PV Mine has ten titled water concessions that grant its access to water resources. It has direct access to the Mexican Federal Electricity Commission (Comisión Federal de Electricidad) high-voltage grid, with a continuous capacity of 25 MW of electricity at a current cost of approximately $0.06/kWh purchased on the renewable Wholesale Electricity Market. Sulfuric acid used for heap leaching is purchased from the Grupo México smelter, but it is also available from other sources.`,
      },
      {
        section_id: `LOCATION_18_ES`,
        description: `Toda la infraestructura está en su sitio y se encuentra cerca de la mina. PV es fácilmente accesible por todos los medios de transporte, incluido el transporte aéreo desde el Aeropuerto Internacional de Ciudad Obregón y el aeropuerto nacional de Álamos, el transporte por carretera, el transporte ferroviario a través de la línea principal de ferrocarril norte-sur de Sonora que pasa por Navojoa, y el transporte marítimo en el puerto de Guaymas y Topolobampo desde donde se mezcla el concentrado de cobre y se exporta tanto por las empresas comerciales como por las mineras. La mina PV cuenta con 10 concesiones de agua tituladas que le dan acceso a los recursos hídricos. Tiene acceso directo a la red de alta tensión de la Comisión Federal de Electricidad (CFE), con una capacidad continua de 25 MW de electricidad a un costo corriente de aproximadamente 0,04 $/kWh comprados en el Mercado Mayorista de Electricidad renovable. El ácido sulfúrico utilizado para la lixiviación en pilas se adquiere de la compra de Grupo México en Navojoa, Sonora. El ácido sulfúrico también puede obtenerse de otras fuentes`,
      },
    ]);

    const fetchData = async () => {
      try {
        const dataForm = {
          page: "LOCATION",
          language: getLanguageForUpdateContent(),
        };
        const response = await getSectionByPageandlanguage(dataForm);
        if (response.status === 200) {
          if (parseInt(response.data.length) !== 0) {
            dataLocation.value = response.data;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const filterData = (found_id) => {
      const filteredData = dataLocation.value.filter(
        (item) => item.section_id === found_id
      );
      return filteredData.length > 0 ? filteredData[0].description : null;
    };

    const changeLanguage = () => {
      const lang = getLanguageForUpdateContent() === "EN" ? "ES" : "EN";
      setLanguageForUpdateContent(lang);
      showInfoToast(
        `Language changed to ${lang === "EN" ? "English" : "Spanish"}`
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    const dialogVisible = ref(false);
    const currentText = ref("");
    const currentTextId = ref("");

    const updateDialogVisible = (visible) => {
      dialogVisible.value = visible;
    };

    const updateText = ({ id, text }) => {
      const index = dataLocation.value.findIndex(
        (item) => item.section_id === id
      );
      if (index !== -1) {
        dataLocation.value[index].description = text;
      }
    };

    const openEditModal = (textId) => {
      showInfoToast(`Double click to edit the text: ${textId}`);
      const textToEdit = filterData(textId);
      currentText.value = textToEdit;
      currentTextId.value = textId;
      dialogVisible.value = true;
    };

    onMounted(() => {
      fetchData();
    });

    return {
      BASEURL,
      language: getLanguageForUpdateContent(),
      changeLanguage,
      filterData,
      openEditModal,
      updateDialogVisible,
      updateText,
      dialogVisible,
      currentText,
      currentTextId,
    };
  },
});
</script>

<style scoped>
.location-map {
  width: 100%;
  height: 100%;
}
/* Estilos base */
.location-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

/* Hero Section */
.about-hero {
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("http://localhost:3000/api/public/img/bg-history.jpg") center/cover
      no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white !important;
  position: relative;
}

.hero-overlay {
  z-index: 1;
}

.about-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.operations-container {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 92px !important;
}

h1 {
  font-size: 2.2rem;
  font-style: bold;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  color: orange;
}

/* Historia Section */
.history-section {
  padding: 80px 0;
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

/* Image Section */
.image-content-blue {
  height: 80%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Location Info */
.location-info {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}

.location-header h3 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: #555;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.transport-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.icon-container {
  background-color: #f0f0f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon {
  font-size: 24px;
}

.transport-details h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #222;
}

.transport-details p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
  }

  .transport-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-hero h1 {
    font-size: 2.5rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}

.container_infrastructure {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  padding-left: 200px;
  padding-right: 200px;
}

.text-section_infrastructure {
  margin-right: 100px;
  font-family: Arial, sans-serif;
  color: #333;
}

.text-section_infrastructure h1 {
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: bold;
}

.text-section_infrastructure p {
  font-size: 1rem;
  line-height: 1.5;
}

.highlight_infrastructure {
  color: red !important;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 16px 0;
}

.image-section_infrastructure {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-section_infrastructure img {
  width: 400px;
}

.image-section_infrastructure img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media screen and (max-width: 768px) {
  .container_infrastructure {
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .text-section_infrastructure,
  .image-section_infrastructure {
    width: 100%;
    padding: 0 20px;
  }

  .image-section_infrastructure img {
    margin-top: 36px;
  }
}

/* Estilos de la tarjeta */
.language-tag {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
}
.action-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.secondary-btn {
  background: #f59e0b;
  color: white;
}

.secondary-btn:hover {
  background: #d97706;
  box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
}
</style>

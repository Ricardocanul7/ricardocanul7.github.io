<template>
  <div>
    <section class="intro-section bg-slate-900 pt-16 pb-10 text-center md:text-left">
      <LayoutContainer>
        <LayoutRow>
          <LayoutColumn span="8" class="flex flex-col justify-center">
            <div class="content">
              <h1 class="font-plus-jakarta-sans font-extrabold text-4xl lg:text-5xl text-indigo-100 mb-5">
                Construyendo el futuro, <br>
                <span class="text-violet-300">línea a línea.</span>
              </h1>
              <p class="font-inter text-lg text-slate-300 mb-5">
                Soy un desarrollador apasionado por la arquitectura limpia y la resolución de
                problemas complejos. Mi enfoque se centra en crear soluciones escalables
                que impacten positivamente en la experiencia del usuario.
              </p>
            </div>
          </LayoutColumn>

          <LayoutColumn span="4">
            <div class="photo-container">
              <img src="https://picsum.photos/400/400" class="rounded-lg border-2 border-violet-300/20">
            </div>
          </LayoutColumn>
        </LayoutRow>
      </LayoutContainer>
    </section>

    <section class="interests-section bg-slate-900 pt-16 pb-10 text-center md:text-left">
      <LayoutContainer>
        <h2 class="font-plus-jakarta-sans font-bold text-2xl text-indigo-100 mb-10">Intereses en tecnología</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <InterestCard
            accentColor="emerald"
            category="En Aprendizaje"
            title="Python para Inteligencia Artificial"
            description="Explorando el ecosistema de PyTorch y TensorFlow para integrar modelos predictivos en
            aplicaciones web modernas. Mi objetivo es transformar datos crudos en experiencias
            interactivas inteligentes.",
            :tags="['PyTorch', 'Data Science', 'Machine Learning']"
            class="col-span-2"
          />
          <InterestCard
            accentColor="violet"
            category="Experiencia"
            title="Migración PHP Legacy"
            description="Modernización de sistemas críticos a
            arquitecturas basadas en servicios,
            asegurando la integridad del negocio
            mientras se mejora el rendimiento
            drásticamente."
            :tags=null
            class="col-span-1"
          />
          <InterestCard
            accentColor="sky"
            category="Enfoque"
            title="Web Performance"
            description="Obsesionado con los Core Web Vitals
            y la carga progresiva. Menos de 1s de
            LCP es mi estándar personal."
            :tags=null
            class="col-span-1"
          />
          <InterestCard
            accentColor="indigo"
            category="Filosofía"
            title="Networking Profesional"
            description="Valoro profundamente las conexiones significativas. Creo que el código es solo una
            herramienta, y las personas son quienes construyen las soluciones reales. Siempre
            abierto a discutir sobre arquitectura, open source o nuevas tendencias en el sector."
            :tags=null
            class="col-span-2"
          />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
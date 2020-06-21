<template>
  <div class="site">
    <div class="container">
      <section class="heroPost">
        <h1 class="heroTitle">Vytvořte si stránku pro vaši událost</h1>
        <img class="heroImg" src="../assets/schedule2.svg" />
      </section>

      <p
        class="homepageP"
      >Vyrobte si vlastní stránku pro vaši akci! Není třeba se nijak registrovat. Jednoduše zadejte všechny údaje a nazpět dostanete stránku s unikátní URL, kterou můžete snadno sdílet se všemi účastníky.</p>

      <section class="post">
        <img class="homepageCheckbox" src="../assets/checkmark.svg" />
        <div class="homepageBody">
          <p>Žádné registrace</p>
        </div>
      </section>

      <section class="post">
        <img class="homepageCheckbox" src="../assets/checkmark.svg" />
        <div class="homepageBody">
          <p>Rychlé vytvoření</p>
        </div>
      </section>

      <section class="post">
        <img class="homepageCheckbox" src="../assets/checkmark.svg" />
        <div class="homepageBody">
          <p>Jednoduché sdílení</p>
        </div>
      </section>

      <router-link to="/" class="homepageLink">
        <div class="buttonDiv">
          <button class="homepageBtn">Vytvoř svou první událost</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  }
};
</script>

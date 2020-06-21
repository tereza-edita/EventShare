<template>
  <div class="site">
    <div class="container homepage">
      <h1>Vytvořte si stránku pro vaši událost</h1>
      <img class="homepageImg" src="../assets/schedule2.svg" />
      <p
        class="homepageP"
      >Vyrobte si vlastní stránku pro vaši akci! Není třeba se nijak registrovat. Jednoduše zadejte všechny údaje a nazpět dostanete stránku s unikátní URL, kterou můžete snadno sdílet se všemi účastníky.</p>

      <section class="post">
        <img class="homepagePicture" src="../assets/checkmark.svg" />
        <div class="homepageBody">
          <p class="homepageTitle">Žádné registrace</p>
        </div>
      </section>

      <section class="post">
        <img class="homepagePicture" src="../assets/checkmark.svg" />
        <div class="homepageBody">
          <p class="homepageTitle">Rychlé vytvoření</p>
        </div>
      </section>

      <section class="post">
        <img class="homepagePicture" src="../assets/checkmark.svg" />
        <div class="homepageBody">
          <p class="homepageTitle">Jednoduché sdílení</p>
        </div>
      </section>

      <a href="./" class="homepageLink">
        <div class="buttonDiv">
          <button class="homepageBtn">Vytvoř svou první událost</button>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      event: null
    };
  }
};
</script>

<template>
  <div class="site">
    <div class="container">
      <section class="heroPost">
        <h1 class="heroTitle">Vytvořte si virtuální pozvánku</h1>
        <router-link class="heroRouter" to="/">
          <img class="heroImg" src="../assets/schedule2.svg" />
        </router-link>
      </section>

      <p
        class="homepageP"
      >Vyrobte si vlastní stránku pro vaši akci! Není třeba se nijak registrovat. Jednoduše zadejte všechny údaje a nazpět dostanete stránku s unikátní URL, kterou můžete snadno sdílet se všemi účastníky.</p>

      <section class="post">
        <img
          class="homepageCheckbox"
          src="../assets/checkmark.svg"
          alt="Icon provided by Freepik on Flaticon.com"
        />
        <div class="homepageBody">
          <p>Žádné registrace</p>
        </div>
      </section>

      <section class="post">
        <img
          class="homepageCheckbox"
          src="../assets/checkmark.svg"
          alt="Icon provided by Pixel perfect on Flaticon.com"
        />
        <div class="homepageBody">
          <p>Rychlé vytvoření</p>
        </div>
      </section>

      <section class="post">
        <img
          class="homepageCheckbox"
          src="../assets/checkmark.svg"
          alt="Icon provided by Pixel perfect on Flaticon.com"
        />
        <div class="homepageBody">
          <p>Jednoduché sdílení</p>
        </div>
      </section>

      <div class="buttonDiv">
        <router-link to="/edit" class="homepageLink">
          <button class="homepageBtn">Vytvoř svou první událost</button>
        </router-link>
      </div>
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

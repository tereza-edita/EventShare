<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="text" v-on:blur="showMapResult()" required v-model="value" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
    <p v-else>{{ value }}</p>

    <div class="mapRender" v-show="display">
      <div ref="mapa" class="mapa"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isEditable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
      if (!this.isEditable) {
        this.showMapResult();
      }
    }
  },
  data() {
    return {
      map: null,
      layer: null,
      display: false,
      initilized: false
    };
  },
  methods: {
    mapResult(response) {
      let results = response.getResults()[0].results;
      const cordX = results[0].coords.x;
      const cordY = results[0].coords.y;
      let center = SMap.Coords.fromWGS84(cordX, cordY);
      this.map.setCenterZoom(center, 14);
      let marker = new SMap.Marker(center);
      this.layer.addMarker(marker);
    },
    showMapResult() {
      this.display = true;
      this.$nextTick(() => {
        this.initilizeMap();
        const address = this.value;
        new SMap.Geocoder(address, this.mapResult);
      });
    },
    initilizeMap() {
      if (!this.initilized) {
        let main = this.$refs.mapa;
        let center = SMap.Coords.fromWGS84(14.4179, 50.12655);
        this.map = new SMap(main, center, 13);
        this.map.addDefaultLayer(SMap.DEF_BASE).enable();
        this.map.addDefaultControls();

        window.addEventListener("resize", () => this.map.syncPort());

        this.layer = new SMap.Layer.Marker();
        this.map.addLayer(this.layer);
        this.layer.enable();
        this.initilized = true;
      }
    }
  }
};
</script>

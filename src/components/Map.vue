<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="text" ref="mapInput" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
    <div v-else>
      <h4 class="h4map">Místo</h4>
      <p class="location-display">{{ location }}</p>
    </div>

    <div class="mapRender" v-show="display">
      <div ref="map" class="map"></div>
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
      this.location = this.value;
      if (!this.isEditable) {
        this.showMapResult();
      }
    },
    location() {
      this.$emit("input", this.location);
    }
  },
  data() {
    return {
      map: null,
      layer: null,
      display: false,
      initilized: false,
      location: this.value
    };
  },
  methods: {
    mapResult(response) {
      const results = response.getResults()[0].results;
      const cordX = results[0].coords.x;
      const cordY = results[0].coords.y;
      const center = SMap.Coords.fromWGS84(cordX, cordY);
      this.map.setCenterZoom(center, 15);
      let marker = new SMap.Marker(center);
      this.layer.addMarker(marker);
    },
    showMapResult() {
      this.display = true;
      this.$nextTick(() => {
        this.initilizeMap();
        const address = this.location;
        new SMap.Geocoder(address, this.mapResult);
      });
    },
    initilizeMap() {
      if (!this.initilized) {
        const main = this.$refs.map;
        const center = SMap.Coords.fromWGS84(14.4179, 50.12655);
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
  },
  mounted() {
    if (this.isEditable) {
      const suggest = new SMap.Suggest(this.$refs.mapInput);
      suggest.urlParams({
        // omezeni pro celou CR
        bounds: "48.5370786,12.0921668|51.0746358,18.8927040"
      });
      suggest.addListener("suggest", suggestData => {
        // vyber polozky z naseptavace
        this.location = suggestData.phrase;
        this.showMapResult();
      });
    }
  }
};
</script>

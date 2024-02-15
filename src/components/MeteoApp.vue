<template>
  <div class="container">
    <div id="openweathermap-widget-15"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Définition des paramètres du widget
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
      id: 15,
      cityid: '3003603', // ID de la ville pour laquelle vous souhaitez afficher la météo
      appid: '740ecf1f34a8de40fb609316e481a77e', // Votre clé API openweathermap.org
      units: 'metric', // Unités de mesure (métriques dans ce cas)
      containerid: 'openweathermap-widget-15', // ID du conteneur pour le widget
    });

    // Insertion du script du widget
    (function() {
      var script = document.createElement('script');
      script.async = true;
      script.charset = "utf-8";
      script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
    })();
  }
};
</script>

<style>
.container
{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
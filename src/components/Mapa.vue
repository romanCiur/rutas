<template>
    <div id="map">
        <div id="mapid"></div>
    </div>
</template>
<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default {
    name: "Mapa",
    props:{
        locations:Array
        },
    data(){},
    mounted(){

        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });

        L.Marker.prototype.options.icon = DefaultIcon;

        var mymap = L.map("mapid").setView([19.42847, -99.12766], 12);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYWxlY2l1ciIsImEiOiJjanc0aGtma3owb2FyNGJzMGgxZjZmZ2d2In0._dPeczf3fJ9xap5iSU0xdw'}).addTo(mymap);

            //var marker = L.marker([19.42847, -99.12766]).addTo(mymap);
            
        this.locations.forEach(s => {
        let globo = L.marker([s.Latitude, s.Longitude]).addTo(mymap);
            globo.bindPopup(`<b>${s["Store Name"]}<b></br><b>${s["Street Address"]}</b>`).openPopup();
        });
    }
};
</script>
<style lang="scss">
    #map{
        #mapid{
            background-color: #ccd5b6;
            height: 100vh;
        }
    }
</style>



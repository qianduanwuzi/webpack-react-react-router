function jzezMap(){ }

jzezMap.prototype.init = function(dom, options,radius,city) {
        this.dom = dom;
        this.options = options;
         this.city = city;
        this.radius = radius;
        this.map = new AMap.Map(dom,options);
        this.geocoder = new AMap.Geocoder(city,radius);
}

jzezMap.prototype.addMarker = function() {
    console.log("--> mark");
    console.log(this);
}

// jzezMap.prototype.initGeocoder = function(radius,city){
//     this.city = city;
//     this.radius = radius;
// }

// jzezMap.prototype.geocoder = function() {
//     console.log('geocoder')
//     this.geocoder.getLocation = (param, function(status, result) {
//         console.log('getlocation')
//         if (status === 'complete' && result.info === 'OK') {
//             this.geocoder_CallBack(result);
//         }
//     });
// }

// jzezMap.prototype.geocoder_CallBack = function(data) {
//      var resultStr = "";
//     //地理编码结果数组
//     var geocode = data.geocodes;
//     for (var i = 0; i < geocode.length; i++) {
//         //拼接输出html
//         resultStr += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" + "<b>地址</b>：" + geocode[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" + geocode[i].location.getLng() + ", " + geocode[i].location.getLat() + "" + "<b>&nbsp;&nbsp;&nbsp;&nbsp;匹配级别</b>：" + geocode[i].level + "</span>";
//         addMarker(i, geocode[i]);
//     }
//     map.setFitView();
//     document.getElementById("result").innerHTML = resultStr;
// }




module.exports= jzezMap;
    // getAmapLocation(){
    //     var map = new AMap.Map("container", {
    //             resizeEnable: true
    //         });
    //         function geocoder() {
    //             var geocoder = new AMap.Geocoder({
    //                 city: "010",
    //                 radius: 1000 //范围，默认：500
    //             });
    //             //地理编码,返回地理编码结果
    //             geocoder.getLocation('asdasdasdasdasd', function(status, result) {
    //                 if (status === 'complete' && result.info === 'OK') {
    //                     geocoder_CallBack(result);
    //                 }
    //             });
    //         }
    //         function addMarker(i, d) {
    //             var marker = new AMap.Marker({
    //                 map: map,
    //                 position: [ d.location.getLng(),  d.location.getLat()]
    //             });
    //             var infoWindow = new AMap.InfoWindow({
    //                 content: d.formattedAddress,
    //                 offset: {x: 0, y: -30}
    //             });
    //             marker.on("mouseover", function(e) {
    //                 infoWindow.open(map, marker.getPosition());
    //             });
    //         }
    //         //地理编码返回结果展示
    //         function geocoder_CallBack(data) {
    //             var resultStr = "";
    //             //地理编码结果数组
    //             var geocode = data.geocodes;
    //             for (var i = 0; i < geocode.length; i++) {
    //                 //拼接输出html
    //                 resultStr += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" + "<b>地址</b>：" + geocode[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" + geocode[i].location.getLng() + ", " + geocode[i].location.getLat() + "" + "<b>&nbsp;&nbsp;&nbsp;&nbsp;匹配级别</b>：" + geocode[i].level + "</span>";
    //                 addMarker(i, geocode[i]);
    //             }
    //             map.setFitView();
    //             document.getElementById("result").innerHTML = resultStr;
    //         }
    // }
// }
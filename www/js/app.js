console.log('JS loaded');

document.addEventListener('deviceready', function(){
  console.log('Device ready, all ready...');


    $(document).ready(function(){
      console.log('DOM ready');
      // $('<div>').html('Error no position').appendTo('body')
      $('<div>').html('<svg id="cestino"height="50px" viewBox="0 0 450 450" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="m41.253906 250.347656 13.273438 165.046875c1.390625 17.285157 15.824218 30.609375 33.167968 30.609375h274.605469c17.34375 0 31.777344-13.320312 33.167969-30.609375l27.539062-342.394531h-396.019531l12.007813 149.277344zm0 0" fill="#8ac6dd"/><path d="m362.300781 449h-274.601562c-18.769531 0-34.65625-14.65625-36.160157-33.367188l-13.273437-165.046874c-.132813-1.652344 1.097656-3.097657 2.75-3.230469 1.65625-.140625 3.097656 1.097656 3.230469 2.75l13.273437 165.046875c1.257813 15.617187 14.511719 27.847656 30.179688 27.847656h274.605469c15.664062 0 28.921874-12.230469 30.175781-27.847656l27.277343-339.152344h-389.515624l11.746093 146.035156c.132813 1.652344-1.097656 3.097656-2.75 3.230469-1.648437.128906-3.097656-1.097656-3.230469-2.75l-12.007812-149.277344c-.066406-.832031.21875-1.660156.785156-2.273437.570313-.613282 1.367188-.964844 2.207032-.964844h396.019531c.835937 0 1.632812.351562 2.203125.964844.566406.617187.851562 1.441406.785156 2.273437l-27.539062 342.394531c-1.503907 18.710938-17.386719 33.367188-36.160157 33.367188zm0 0" fill="#3a312a"/><path d="m108.277344 35h-67.277344c-20.984375 0-38 17.015625-38 38h444c0-20.984375-17.015625-38-38-38zm0 0" fill="#f16c7a"/><path d="m447 76h-444c-1.65625 0-3-1.34375-3-3 0-22.609375 18.390625-41 41-41h67.277344c1.660156 0 3 1.34375 3 3s-1.339844 3-3 3h-67.277344c-18.289062 0-33.347656 14.101562-34.875 32h437.746094c-1.527344-17.898438-16.582032-32-34.871094-32h-273.941406c-1.660156 0-3-1.34375-3-3s1.339844-3 3-3h273.941406c22.609375 0 41 18.390625 41 41 0 1.65625-1.34375 3-3 3zm0 0" fill="#3a312a"/><path d="m239.300781 3h-28.605469c-12.535156 0-22.699218 10.160156-22.699218 22.699219v9.300781h74v-9.300781c.003906-12.539063-10.15625-22.699219-22.695313-22.699219zm0 0" fill="#d7e057"/><path d="m262 38h-74c-1.65625 0-3-1.34375-3-3v-9.300781c0-14.171875 11.527344-25.699219 25.699219-25.699219h28.605469c14.167968 0 25.699218 11.527344 25.699218 25.699219v9.300781c-.003906 1.65625-1.347656 3-3.003906 3zm-71-6h68v-6.300781c0-10.863281-8.835938-19.699219-19.699219-19.699219h-28.605469c-10.859374 0-19.699218 8.835938-19.699218 19.699219v6.300781zm0 0" fill="#3a312a"/><path d="m118 412c-13.253906 0-24-10.746094-24-24v-256c0-13.253906 10.746094-24 24-24s24 10.746094 24 24v256c0 13.253906-10.746094 24-24 24zm0 0" fill="#87796f"/><path d="m118 415c-14.886719 0-27-12.113281-27-27v-256c0-14.886719 12.113281-27 27-27s27 12.113281 27 27v256c0 14.886719-12.113281 27-27 27zm0-304c-11.578125 0-21 9.421875-21 21v256c0 11.578125 9.421875 21 21 21s21-9.421875 21-21v-256c0-11.578125-9.421875-21-21-21zm0 0" fill="#3a312a"/><path d="m225 412c-13.253906 0-24-10.746094-24-24v-256c0-13.253906 10.746094-24 24-24s24 10.746094 24 24v256c0 13.253906-10.746094 24-24 24zm0 0" fill="#87796f"/><path d="m225 415c-14.886719 0-27-12.113281-27-27v-256c0-14.886719 12.113281-27 27-27s27 12.113281 27 27v256c0 14.886719-12.113281 27-27 27zm0-304c-11.578125 0-21 9.421875-21 21v256c0 11.578125 9.421875 21 21 21s21-9.421875 21-21v-256c0-11.578125-9.421875-21-21-21zm0 0" fill="#3a312a"/><path d="m332 412c-13.253906 0-24-10.746094-24-24v-256c0-13.253906 10.746094-24 24-24s24 10.746094 24 24v256c0 13.253906-10.746094 24-24 24zm0 0" fill="#87796f"/><path d="m332 415c-14.886719 0-27-12.113281-27-27v-256c0-14.886719 12.113281-27 27-27s27 12.113281 27 27v256c0 14.886719-12.113281 27-27 27zm0-304c-11.578125 0-21 9.421875-21 21v256c0 11.578125 9.421875 21 21 21s21-9.421875 21-21v-256c0-11.578125-9.421875-21-21-21zm0 0" fill="#3a312a"/><path d="m389.761719 76-27.28125 339.160156c-1.261719 15.601563-14.519531 27.839844-30.179688 27.839844h30c15.660157 0 28.917969-12.238281 30.179688-27.839844l27.28125-339.160156zm0 0" fill="#6ca8bf"/><path d="m443.878906 70h-30c-1.539062-17.898438-16.597656-32-34.878906-32h30c18.28125 0 33.339844 14.101562 34.878906 32zm0 0" fill="#d34e5c"/></svg>').appendTo('body')

      $('<div>').html('<img src="save.png" id="salva" height="50px" viewBox="0 0 450 450" width="50px">').appendTo('body')

      $('#stage').attr({
        width:$(window).width()-30,
        height:$(window).height()
    })
      $('canvas').on('click',function() {
        var ctx = $('canvas').get(0).getContext('2d');
        ctx.moveTo(0,0);
        ctx.lineTo(1000,2000);
        ctx.stroke();
      })
      // per il touch
      //drawModus:'dot',
      // drawStart: function(e){
      //   superPaint.draw(e);
      // }
      // draw:function(e){
      //   var x = e.touches[0].pageX;
      //   var y = e.touches[0].pageY;
      //   var ctx = superpaint.ctx;
      //    ctx.fillStyle = superPaint.color;
      //    ctx.beginPath();
      // if(superPaint.drawModus=='dot'){
      //     ctx.arc(x,y,10,0,2*Math.PI);
      //      ctx.fill();
      // }
      // }
      // $('canvas')
      // .on('touchstart', this.drawStart)
      // .on('touchsmove', this.draw)


     $('#cestino').click(function(){
       // ctx = contesto
        var ctx = $('#stage').get(0).getContext('2d');
        ctx.clearRect(0,0,1000,2000);
      })
      $('#salva').click(function onDeviceReady(){
        alert('are you sure?')

        window.canvas2ImagePlugin.saveImageDataToLibrary(
                function(msg){
                    alert( msg);
                },
                function(err){
                    alert(err);
                },
                document.getElementById('stage')
            );

       })
       $('<div>').html('<img src="photo-camera.png" id="camera" height="50px" viewBox="0 0 450 450" width="50px">').appendTo('body')
       function addPhoto2Canvas(image){
         var bg = new Image();
         bg.src = image;
         bg.onload = function() {
           var ctx = $('#stage').get(0).getContext('2d');
           ctx.drawImage(bg,0,0)
         }



       }
       $('#camera').click( function openCam(e){
              e.preventDefault();
              navigator.camera.getPicture(
                  addPhoto2Canvas,
                  function(){alert('error camera');},{}
                 )
            }
          )
    });

});

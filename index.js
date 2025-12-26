 const grnPlyBtn = document.querySelectorAll('.greenPlybtn');
 const singersBox = document.querySelector('.singersBox');
 const songs = document.querySelectorAll('.songs');
 const searchBtn = document.querySelector('.Search-icon');
 const searchInput = document.querySelector('.search-input');
 const cross = document.querySelector('.cross');
 const homebannerCross = document.querySelector('.home-banner-main')
 const hamburger = document.querySelector('.hamburger');
 const sidenav = document.querySelector('.sidenav')
 const sidenavRefresh = document.querySelector('.sidenavRefresh');


 songs.forEach((song)=>{
    song.addEventListener('mouseenter', () =>{
    
      const btn = song.querySelector('.greenPlybtn');

      grnPlyBtn.forEach(btn =>{
         btn.classList.remove('open')
      });

         btn.classList.add('open');
      
    });
    
    song.addEventListener('mouseleave', () =>{
      const btn = song.querySelector('.greenPlybtn');
      btn.classList.remove('open');
    })
    
 })

 songs.forEach(song =>{
   song.addEventListener('click', () =>{
      const link= song.dataset.spotify;
      window.open(link);
   })
 })

 searchBtn.addEventListener('click', () =>{
   window.open("https://open.spotify.com/album/2u4Yp2ADTKYPwFSBFL4ffa?si=1lFCfdqNQPCuhmcU8UtWQQ")
 })

 // cross bar click remove the div // 
 cross.addEventListener('click', () =>{
  homebannerCross.classList.add('touch')
 })

 // hamburger touch // 
 hamburger.addEventListener('click', () =>{
 sidenav.classList.toggle('open')
 })
 sidenavRefresh.addEventListener('click', () =>{
  sidenav.classList.toggle('open')
 })
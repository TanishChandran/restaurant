var tl=gsap.timeline();

tl.to("#fs",{
        height: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    }) 
tl.to("#element",{
        height: "100%",
        duration: 2,
        delay:-2,
        ease: Expo.easeInOut
    })
tl.to("#white",{
        height: "100%",
        duration: 2,
        delay:-1.8,
        ease: Expo.easeInOut
    })
    
    // Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
    
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
    gsap.to(".child",{
        y: "0%",
        duration: 2,
        delay:1.5,
        ease: Expo.easeInOut
    })    
    gsap.to(".fs1 .child",{
        y: "-100%",
        duration: 1,
        delay:0.2,
        ease: Expo.easeInOut
    })    
    gsap.to(".fs2 .child",{
        y: "-100%",
        duration: 1,
        delay:0.2,
        ease: Expo.easeInOut
    })  
    gsap.to("main .child",{
        y: "-100%",
        duration: 0,
    })

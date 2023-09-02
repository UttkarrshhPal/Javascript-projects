// gsap.to("#nav", {
//     opacity: 0.5, // Change the opacity value
//     duration: 0.5,
//     scrollTrigger: {
//         trigger: "#nav",
//         scroller: "body",
//         start: "top -10%",
//         end: "top -11%",
//         scrub: 1,
//     },
// });

// gsap.to("#nav",{
//     backgroundColor : "#000",
//     duration:0.5,
//     height : "120px",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         markers:true,
//         start:"top -50%",
//         end:"top 1%",
//         scrub:1,
//     },
// });

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  gsap.to("#main", {
    backgroundColor: "#000",
    duration: 2,
    
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
import{g as i,S as y}from"./hoisted.B40IQGiN.js";import"./_commonjsHelpers.Cpj98o6Y.js";typeof window<"u"&&(window.addEventListener("load",()=>{window.scrollTo(0,0)}),window.addEventListener("pageshow",r=>{r.persisted&&window.scrollTo(0,0)}));window.addEventListener("load",()=>{i.registerPlugin(y);function r(e){document.querySelectorAll(`.${e}`).forEach((n,t)=>{i.fromTo(n,{opacity:0,y:50,x:20},{opacity:1,y:0,x:0,duration:.8,delay:t*.1,scrub:!0,ease:"power2.out"})})}function c(e,o){y.create({trigger:`.${e}`,start:"top center",end:"bottom top",onEnter:()=>r(o)})}c("blog","blog-path");const l=document.querySelector(".blog__text .layer-open"),s=document.querySelector(".blog-open"),d=document.querySelectorAll(".blog-path"),f=document.querySelector("#blogLayer");document.querySelectorAll(".blog-trigger").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),f.classList.add("active"),document.body.classList.add("no-scroll")})});function u(e,o,n){e.addEventListener("mouseenter",()=>{d.forEach((t,a)=>{t.style.transition=`fill 0.5s ease ${a*.05}s`,t.style.fill=o}),s.classList.add("hover")}),e.addEventListener("mouseleave",()=>{d.forEach((t,a)=>{t.style.transition=`fill 0.5s ease ${a*.05}s`,t.style.fill=n}),s.classList.remove("hover")})}u(l,"#ff9326","#000"),u(s,"#ff9326","#000")});window.addEventListener("load",()=>{i.registerPlugin(y);function r(e){document.querySelectorAll(`.${e}`).forEach((n,t)=>{i.fromTo(n,{opacity:0,y:50,x:20},{opacity:1,y:0,x:0,duration:.8,delay:t*.1,scrub:!0,ease:"power2.out"})})}function c(e,o){y.create({trigger:`.${e}`,start:"80% top",end:"bottom top",onEnter:()=>r(o)})}c("service","service-path");const l=document.querySelector(".service__text .layer-open"),s=document.querySelector(".service-open"),d=document.querySelectorAll(".service-path"),f=document.querySelector("#serviceLayer");document.querySelectorAll(".service-trigger").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),f.classList.add("active"),document.body.classList.add("no-scroll")})});function u(e,o,n){e.addEventListener("mouseenter",()=>{d.forEach((t,a)=>{t.style.transition=`fill 0.5s ease ${a*.05}s`,t.style.fill=o}),s.classList.add("hover")}),e.addEventListener("mouseleave",()=>{d.forEach((t,a)=>{t.style.transition=`fill 0.5s ease ${a*.05}s`,t.style.fill=n}),s.classList.remove("hover")})}u(l,"#27d3ff","#000"),u(s,"#27d3ff","#000")});window.addEventListener("load",()=>{i.registerPlugin(y);function r(e){document.querySelectorAll(`.${e}`).forEach((n,t)=>{i.fromTo(n,{opacity:0,y:50,x:20},{opacity:1,y:0,x:0,duration:.8,delay:t*.1,scrub:!0,ease:"power2.out"})})}function c(e,o){y.create({trigger:`.${e}`,start:"top 60%",end:"bottom top",onEnter:()=>r(o)})}c("about","about-path");const l=document.querySelector(".about__text .layer-open"),s=document.querySelector(".about-open"),d=document.querySelectorAll(".about-path"),f=document.querySelector("#aboutLayer");document.querySelectorAll(".about-trigger").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),f.classList.add("active"),document.body.classList.add("no-scroll")})});function u(e,o,n){e.addEventListener("mouseenter",()=>{d.forEach((t,a)=>{t.style.transition=`fill 0.5s ease ${a*.05}s`,t.style.fill=o}),s.classList.add("hover")}),e.addEventListener("mouseleave",()=>{d.forEach((t,a)=>{t.style.transition=`fill 0.5s ease ${a*.05}s`,t.style.fill=n}),s.classList.remove("hover")})}u(l,"#c13332","#000"),u(s,"#c13332","#000")});let g=!1;function m(){if(g)return;i.registerPlugin(y);const r=i.timeline();r.fromTo(".line",{scaleX:0,transformOrigin:"right center"},{scaleX:1,duration:1,ease:"power2.inOut"}).to(".top-half",{y:"-50vh",duration:1,ease:"power2.inOut"},"+=0.2").to(".bottom-half",{y:"50vh",duration:1,ease:"power2.inOut"},"<").to(".line",{opacity:0,duration:.5},"<").to(".mv",{opacity:1,duration:.5}).to("#animation-container",{display:"none"},">").fromTo(".cls",{opacity:0,yPercent:100,xPercent:40,scale:.1,skewX:50,skewY:50},{opacity:1,xPercent:0,yPercent:0,scale:1,skewX:0,skewY:0,duration:.7,stagger:.1,ease:"power2.out"},"-=0.5").add(()=>{const c=document.querySelector(".hmb-btn__hmb span:nth-child(1)"),l=document.querySelector(".hmb-btn__hmb span:nth-child(2)"),s=document.querySelector(".hmb-btn__hmb span:nth-child(3)");i.set([c,l,s],{width:"0%",opacity:1}),r.to(c,{width:"100%",duration:.3,ease:"power2.out"},"-=0.2"),r.to(l,{width:"100%",duration:.3,ease:"power2.out"},"-=0.2"),r.to(s,{width:"100%",duration:.3,ease:"power2.out"},"-=0.2")}).add(()=>{const c=document.querySelector(".mv svg");c.style.overflow="visible",[{selector:".cls01",y:-200},{selector:".cls02",y:60},{selector:".cls03",y:0},{selector:".cls04",y:-80},{selector:".cls05",y:-170},{selector:".cls06",y:-50},{selector:".cls07",y:-120},{selector:".cls08",y:40},{selector:".cls09",y:-150}].forEach(s=>{i.to(s.selector,{yPercent:s.y,ease:"none",scrollTrigger:{trigger:".mv",start:"top top",end:"bottom top",scrub:1}})})}),g=!0}function h(){i.set([".line",".top-half",".bottom-half",".mv","#animation-container",".cls"],{clearProps:"all"}),y.getAll().forEach(r=>r.kill()),g=!1}function v(r){r.persisted&&(h(),m())}window.addEventListener("pageshow",v);window.addEventListener("load",()=>{m()});window.addEventListener("pageshow",function(r){r.persisted&&m()});document.addEventListener("astro:after-swap",()=>{h(),m()});

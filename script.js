document.documentElement.classList.add('motion-ready');
requestAnimationFrame(()=>document.documentElement.classList.add('loaded'));
const revealTargets=document.querySelectorAll('.section-head,.case,.process h2,.process-grid>div,.about>*,.contact>*');
revealTargets.forEach((element)=>element.classList.add('reveal'));
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -7%'});
revealTargets.forEach((element)=>observer.observe(element));
const glow=document.querySelector('.cursor-glow');
if(matchMedia('(pointer:fine)').matches){document.addEventListener('pointermove',(event)=>{glow.animate({left:`${event.clientX}px`,top:`${event.clientY}px`},{duration:700,fill:'forwards'});});}
const consolePanel=document.querySelector('.design-console');
const stage=consolePanel.querySelector('.console-stage');
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){consolePanel.addEventListener('pointermove',(event)=>{const rect=consolePanel.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;stage.style.transform=`rotateX(${y*-5}deg) rotateY(${x*7}deg)`;stage.style.setProperty('--mx',`${x*12}px`);stage.style.setProperty('--my',`${y*12}px`);});consolePanel.addEventListener('pointerleave',()=>{stage.style.transform='rotateX(0) rotateY(0)';stage.style.setProperty('--mx','0px');stage.style.setProperty('--my','0px');});}
consolePanel.querySelectorAll('.logic-card').forEach((card)=>card.addEventListener('click',()=>{consolePanel.querySelectorAll('.logic-card').forEach((item)=>item.classList.remove('active'));card.classList.add('active');consolePanel.querySelector('.console-output small span').textContent=card.dataset.step;consolePanel.querySelector('.console-output p').textContent=card.dataset.output;consolePanel.querySelector('.console-output').animate([{transform:'translateY(6px)',opacity:.45},{transform:'translateY(0)',opacity:1}],{duration:320,easing:'ease-out'});}));

document.documentElement.classList.add('motion-ready');
requestAnimationFrame(()=>document.documentElement.classList.add('loaded'));
const targets=document.querySelectorAll('.chapter>div,.stats,.insights,.visual,.step,.outcome-grid,.next>*');
targets.forEach((element)=>element.classList.add('motion-reveal'));
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -8%'});
targets.forEach((element)=>observer.observe(element));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.addEventListener('scroll',()=>{const mark=document.querySelector('.hero-mark');if(mark)mark.style.translate=`0 ${scrollY*.07}px`;},{passive:true});}

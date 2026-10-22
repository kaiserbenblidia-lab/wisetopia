(function(){
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.card img,.paper,.motw-img').forEach(function(i){i.addEventListener('click',function(){li.src=i.src;li.alt=i.alt;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
var c=document.getElementById('cnt');
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){var n=0,t=1015,s=performance.now();(function f(now){var p=Math.min(1,(now-s)/1800);n=Math.round(t*(1-Math.pow(1-p,3)));c.textContent=n.toLocaleString('en-US');if(p<1)requestAnimationFrame(f)})(s)}
if(matchMedia('(hover:hover)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
document.querySelectorAll('.card').forEach(function(d){d.addEventListener('pointermove',function(e){var r=d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;d.style.transform='perspective(800px) rotateY('+x*8+'deg) rotateX('+-y*8+'deg)'});d.addEventListener('pointerleave',function(){d.style.transform=''})});}
})();

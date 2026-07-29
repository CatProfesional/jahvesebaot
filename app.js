
const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const box=document.querySelector('.lightbox'), boxImg=box.querySelector('img');
document.querySelectorAll('.gallery img,.products img').forEach(img=>{
  img.addEventListener('click',()=>{boxImg.src=img.src;box.classList.add('open')});
});
box.addEventListener('click',e=>{if(e.target===box||e.target.tagName==='BUTTON')box.classList.remove('open')});

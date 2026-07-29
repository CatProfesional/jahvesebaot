
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.catalog-section').forEach(section=>{
  const buttons=[...section.querySelectorAll('.tab-btn')];
  const panels=[...section.querySelectorAll('.tab-panel')];
  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const panel=section.querySelector('#'+btn.dataset.target);
      if(panel) panel.classList.add('active');
    });
  });
});

const modal=document.querySelector('.service-modal');
const modalImg=modal.querySelector('.modal-image img');
const modalTitle=modal.querySelector('.modal-title');
const modalDesc=modal.querySelector('.modal-desc');
const modalNote=modal.querySelector('.modal-note');
const modalCategory=modal.querySelector('.modal-category');
const modalWa=modal.querySelector('.modal-wa');

document.querySelectorAll('.service-card').forEach(card=>{
  card.querySelector('button').addEventListener('click',()=>{
    modalImg.src=card.dataset.image;
    modalImg.alt=card.dataset.title;
    modalTitle.textContent=card.dataset.title;
    modalDesc.textContent=card.dataset.desc;
    modalNote.textContent=card.dataset.note;
    modalCategory.textContent=card.dataset.category;
    const message=encodeURIComponent(`Hola Yahvé Sebaot Studio, quiero información sobre: ${card.dataset.title}`);
    modalWa.href=`https://wa.me/529988442561?text=${message}`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
modal.querySelector('.modal-close').addEventListener('click',closeModal);
modal.querySelector('.modal-backdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

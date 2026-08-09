// nav.js - simple dropdown handling
document.addEventListener('click', function(e){
  const toggle = e.target.closest('.drop-toggle');
  if(toggle){
    const parent = toggle.closest('.dropdown');
    parent.classList.toggle('open');
    // close others
    document.querySelectorAll('.dropdown').forEach(d=>{ if(d!==parent) d.classList.remove('open') })
    return;
  }
  // click outside - close all
  if(!e.target.closest('.dropdown')){
    document.querySelectorAll('.dropdown').forEach(d=>d.classList.remove('open'))
  }
});

// close on escape
window.addEventListener('keydown', function(e){ if(e.key==='Escape') document.querySelectorAll('.dropdown').forEach(d=>d.classList.remove('open')) });

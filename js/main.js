document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('menuBtn').addEventListener('click',()=>{
  const m=document.getElementById('mobileNav');
  m.classList.toggle('hidden');
});
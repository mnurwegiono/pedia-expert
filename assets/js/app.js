


// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const newsletter = document.getElementById('newsletter-form');
  if (newsletter){
    newsletter.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Terima kasih! Kami akan menghubungi Anda untuk akses beta.');
    });
  }

});

<script>
(() => {
  const btn = document.getElementById('backToTop');
  if(!btn) return;
  const onScroll = () => {
    (window.scrollY > 300) ? btn.classList.add('show') : btn.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
</script>

		
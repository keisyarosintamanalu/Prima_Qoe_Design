// Format angka menjadi Rp 45.000
function formatRupiahDot(amount) {
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Format angka menjadi Rp 45,000
function formatRupiahComma(amount) {
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Menampilkan notifikasi pop-up elegan di pojok kanan bawah
function showToast(title, message, type = 'gold') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const borderClass = type === 'red' ? 'border-red-500/40' : 'border-gold-400/40';
  const dotClass = type === 'red' ? 'bg-red-400' : 'bg-gold-400';

  toast.className = `pointer-events-auto max-w-sm rounded-2xl bg-[#191919] ${borderClass} border px-4 py-3.5 shadow-2xl flex items-start gap-3 view-fade`;
  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full ${dotClass} mt-1.5 shrink-0"></span>
    <div>
      <p class="text-xs font-bold text-white">${title}</p>
      <p class="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">${message}</p>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(6px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 3400);
}

// Menyalin teks ke clipboard pengguna
function copyTextToClipboard(text, label = 'Copied to clipboard') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(label, `${text} has been copied to your clipboard.`))
      .catch(() => fallbackCopyText(text, label));
  } else {
    fallbackCopyText(text, label);
  }
}

function fallbackCopyText(text, label) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.select();

  try {
    document.execCommand('copy');
    showToast(label, `${text} has been copied to your clipboard.`);
  } catch (err) {
    showToast('Copy Ready', text);
  }
  document.body.removeChild(tempInput);
}

// Membuka link WhatsApp Concierge dengan pesan otomatis terenkode
function openWhatsAppConcierge(customMessage) {
  const phone = '6281288997700';
  const defaultMsg = 'Hello PRIMA QOE Concierge, I would like to inquire about your artisanal Sambal Kecombrang & gourmet snacks.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage || defaultMsg)}`;
  showToast('Opening WhatsApp Concierge', 'Connecting to Official Kitchen Line (+62 812-8899-7700)...');
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Helper Order WhatsApp dari Kartu Katalog
function orderCatalogProductViaWhatsApp(productId) {
  const item = state.products.find(p => p.id === productId);
  if (!item) return;
  openWhatsAppConcierge(`Hello PRIMA QOE, I would like to order ${item.name} (${formatRupiahDot(item.price)}).`);
}

// Helper Order WhatsApp dari Halaman Detail Produk
function orderCurrentProductViaWhatsApp() {
  const product = state.products.find(p => p.id === state.selectedProductId) || state.products[0];
  const totalAmount = product.price * state.detailQuantity;
  const formattedTotalDot = formatRupiahDot(totalAmount);
  const msg = `Hello, I would like to order the following product:\nProduct: ${product.detailTitle}\nQuantity: ${state.detailQuantity} pcs\nOrder Total: ${formattedTotalDot}\nPlease provide further information about delivery and payment. Thank you!`;
  openWhatsAppConcierge(msg);
}

// Navigasi SPA antar halaman
function navigate(route, params = {}) {
  if (params.productId) {
    state.selectedProductId = params.productId;
    state.detailQuantity = 2;
  }
  if (params.category) {
    state.catalogCategory = params.category;
  }
  state.currentRoute = route;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

// Toggle Drawer Menu Navigasi Mobile
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!drawer) return;
  drawer.classList.toggle('hidden');
}

// Kontrol Modal Konfirmasi Log Out
function openLogoutModal() {
  const modal = document.getElementById('logout-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLogoutModal() {
  const modal = document.getElementById('logout-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function confirmLogout() {
  closeLogoutModal();
  showToast('Session Ended', 'You have safely logged out of the Admin Workspace.');
  navigate('login');
}
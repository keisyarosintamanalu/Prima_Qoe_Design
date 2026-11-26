// 1. Logo Bulat PRIMA QOE
function renderBrandLogoSVG(sizeClass = 'w-10 h-10') {
  return `
    <div class="${sizeClass} rounded-full bg-white border-2 border-gold-400 flex items-center justify-center shadow-md shrink-0 overflow-hidden p-0.5">
      <svg viewBox="0 0 64 64" class="w-full h-full">
        <circle cx="32" cy="32" r="29" fill="#FFFFFF" stroke="#E5B535" stroke-width="2.5"/>
        <path d="M22 20c5-4 14-3 17 2 3 5-1 11-7 12h-5v8h-5V20z" fill="#F59E0B"/>
        <circle cx="37" cy="34" r="6" fill="none" stroke="#DC2626" stroke-width="2.5"/>
        <text x="32" y="49" text-anchor="middle" font-size="5.5" font-weight="700" fill="#1F2937" font-family="Inter, sans-serif">produk by</text>
        <text x="32" y="55" text-anchor="middle" font-size="6.2" font-weight="800" fill="#111827" font-family="Inter, sans-serif">PRIMA - Qoe</text>
      </svg>
    </div>
  `;
}

// 2. Header & Navigasi Publik (Desktop & Mobile)
function renderPublicNavbar(activeTab = 'home', options = {}) {
  const showTopAnnouncement = options.showTopAnnouncement || false;
  const adminBtnLabel = options.adminBtnLabel || 'Admin Portal';
  const showAdminAvatar = options.showAdminAvatar || false;
  const productsLabel = options.productsLabel || 'Products';

  return `
    ${showTopAnnouncement ? `
      <div class="bg-[#121212] border-b border-white/5 text-[11px] text-neutral-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span><strong class="text-gold-400 font-semibold">Direct Concierge Service:</strong> No impersonal checkout carts. Fresh batch hand-bottling on order.</span>
          </div>
          <div class="hidden md:flex items-center gap-5">
            <span class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>
              Jakarta &amp; Nationwide Dispatch
            </span>
            <button type="button" onclick="openWhatsAppConcierge()" class="flex items-center gap-1.5 text-neutral-300 hover:text-gold-400 transition cursor-pointer">
              <svg class="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
              WhatsApp: +62 812-8899-7700
            </button>
          </div>
        </div>
      </div>
    ` : ''}

    <header class="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[72px] py-3.5 flex items-center justify-between gap-4">
        <!-- Brand Identity -->
        <button type="button" onclick="navigate('home')" class="flex items-center gap-3 text-left group cursor-pointer">
          ${renderBrandLogoSVG('w-9 h-9')}
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm sm:text-base font-extrabold tracking-wide text-gold-400 group-hover:text-gold-300 transition">PRIMA QOE</span>
              ${options.showArtisanalPill ? `<span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-400 text-obsidian-950">ARTISANAL</span>` : ''}
            </div>
            <p class="text-[10px] tracking-[0.14em] uppercase text-neutral-400">
              ${options.brandSubtext || 'SAMBAL KECOMBRANG & GOURMET SNACKS'}
            </p>
          </div>
        </button>

        <!-- Center Pill Nav (Desktop) -->
        <nav class="hidden md:flex items-center gap-1 bg-[#1A1A1A] border border-white/10 rounded-full p-1">
          <button type="button" onclick="navigate('home')" class="px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${activeTab === 'home' ? 'bg-gold-400/15 text-gold-400 border border-gold-400/30 font-semibold' : 'text-neutral-300 hover:text-white'}">
            Home
          </button>
          <button type="button" onclick="navigate('products')" class="px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${activeTab === 'products' ? 'bg-gold-400/15 text-gold-400 border border-gold-400/30 font-semibold' : 'text-neutral-300 hover:text-white'}">
            ${productsLabel}
          </button>
          <button type="button" onclick="navigate('about')" class="px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${activeTab === 'about' ? 'bg-gold-400/15 text-gold-400 border border-gold-400/30 font-semibold' : 'text-neutral-300 hover:text-white'}">
            About Us
          </button>
          <button type="button" onclick="navigate('contact')" class="px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${activeTab === 'contact' ? 'bg-gold-400/15 text-gold-400 border border-gold-400/30 font-semibold' : 'text-neutral-300 hover:text-white'}">
            Contact
          </button>
        </nav>

        <!-- Right Admin Portal CTA & Mobile Menu Button -->
        <div class="flex items-center gap-2.5">
          <button type="button" onclick="navigate('login')" class="px-4 py-2 rounded-full bg-[#1C1C1C] hover:bg-[#262626] border border-white/10 hover:border-gold-400/40 text-xs font-semibold text-neutral-200 hover:text-gold-400 inline-flex items-center gap-2 transition cursor-pointer">
            <svg class="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>
            <span>${adminBtnLabel}</span>
          </button>

          ${showAdminAvatar ? `<div class="hidden sm:block">${renderBrandLogoSVG('w-8 h-8')}</div>` : ''}

          <!-- Hamburger Button for Mobile -->
          <button type="button" onclick="toggleMobileMenu()" aria-label="Toggle Menu" class="md:hidden p-2 rounded-xl bg-[#1A1A1A] border border-white/10 text-neutral-300 hover:text-gold-400 cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-drawer" class="hidden md:hidden border-t border-white/10 bg-[#141414] px-4 py-3 space-y-1.5">
        <button type="button" onclick="navigate('home')" class="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold ${activeTab === 'home' ? 'bg-gold-400/15 text-gold-400' : 'text-neutral-300'}">
          Home
        </button>
        <button type="button" onclick="navigate('products')" class="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold ${activeTab === 'products' ? 'bg-gold-400/15 text-gold-400' : 'text-neutral-300'}">
          ${productsLabel}
        </button>
        <button type="button" onclick="navigate('about')" class="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold ${activeTab === 'about' ? 'bg-gold-400/15 text-gold-400' : 'text-neutral-300'}">
          About Us
        </button>
        <button type="button" onclick="navigate('contact')" class="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold ${activeTab === 'contact' ? 'bg-gold-400/15 text-gold-400' : 'text-neutral-300'}">
          Contact
        </button>
      </div>
    </header>
  `;
}

// 3. Footer Publik Standar (4 Kolom)
function renderPublicFooter() {
  return `
    <footer class="mt-auto border-t border-white/10 bg-[#0D0D0D]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Col 1: Brand -->
          <div class="space-y-3.5">
            <div class="flex items-center gap-2.5">
              ${renderBrandLogoSVG('w-8 h-8')}
              <span class="text-sm font-extrabold tracking-wide text-gold-400">PRIMA QOE</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Handcrafted authentic Sambal Kecombrang and premium heritage snacks made with honest ingredients, slow-cooked aromatics, and timeless Indonesian culinary mastery.
            </p>
            <p class="text-[11px] font-semibold text-gold-400">
              ✦ Authentic Heritage Recipe
            </p>
          </div>

          <!-- Col 2: Direct Concierge -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold tracking-wider uppercase text-white">DIRECT CONCIERGE</h4>
            <p class="text-xs text-neutral-400 leading-relaxed">
              We deliberately offer no impersonal automated cart. Every jar is made fresh and curated through personalized direct messaging.
            </p>
            <button type="button" onclick="openWhatsAppConcierge()" class="w-full text-left rounded-2xl bg-[#161616] hover:bg-[#1E1E1E] border border-gold-400/25 p-3.5 transition cursor-pointer">
              <p class="text-xs font-bold text-gold-400">💬 WhatsApp Direct Order</p>
              <p class="text-[10px] text-neutral-400 mt-0.5">Zero credit card fees. Direct chat with our culinary concierge.</p>
            </button>
          </div>

          <!-- Col 3: Quick Navigation -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold tracking-wider uppercase text-white">QUICK NAVIGATION</h4>
            <ul class="space-y-2 text-xs text-neutral-400">
              <li><button type="button" onclick="navigate('home')" class="hover:text-gold-400 transition cursor-pointer">→ Home</button></li>
              <li><button type="button" onclick="navigate('products')" class="hover:text-gold-400 transition cursor-pointer">→ Gourmet Catalog</button></li>
              <li><button type="button" onclick="navigate('about')" class="hover:text-gold-400 transition cursor-pointer">→ Heritage &amp; Story</button></li>
              <li><button type="button" onclick="navigate('contact')" class="hover:text-gold-400 transition cursor-pointer">→ Contact &amp; Ordering</button></li>
              <li><button type="button" onclick="navigate('design-system')" class="hover:text-gold-400 transition cursor-pointer">❖ MD3 Design System</button></li>
              <li><button type="button" onclick="navigate('login')" class="hover:text-gold-400 transition cursor-pointer">🔒 Admin Workspace</button></li>
            </ul>
          </div>

          <!-- Col 4: Kitchen & Operations -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold tracking-wider uppercase text-white">KITCHEN &amp; OPERATIONS</h4>
            <div class="space-y-2 text-xs text-neutral-400">
              <p><strong class="text-neutral-200">Operating Hours:</strong> Mon – Sat: 08:00 – 18:00 WIB</p>
              <p><strong class="text-neutral-200">Direct Dispatch:</strong> Jakarta &amp; Nationwide Express</p>
              <p><strong class="text-neutral-200">Policy:</strong> WhatsApp Concierge Only</p>
            </div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-white/10 text-[10px] font-semibold text-neutral-300">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              No Automated Cart • 100% Bespoke
            </div>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© 2025 PRIMA QOE Artisanal Gourmet. All rights reserved.</p>
          <p>Google Material Design 3 Obsidian Edition</p>
        </div>
      </div>
    </footer>
  `;
}

// 4. Sidebar Navigasi Admin Workspace / Admin Suite
function renderAdminSidebar(activeMenu = 'dashboard', variant = 'dashboard') {
  const isSuite = variant === 'suite';

  return `
    <aside class="w-full lg:w-64 bg-[#121212] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between shrink-0">
      <div class="p-5 space-y-6">
        <!-- Brand Header -->
        <div class="flex items-center justify-between lg:justify-start gap-3">
          <button type="button" onclick="navigate('admin-dashboard')" class="flex items-center gap-3 text-left cursor-pointer">
            ${renderBrandLogoSVG('w-9 h-9')}
            <div>
              <p class="text-sm font-extrabold tracking-wide text-gold-400">PRIMA QOE</p>
              <p class="text-[10px] tracking-[0.14em] uppercase text-neutral-400">
                ${isSuite ? 'ADMIN SUITE' : 'ADMIN WORKSPACE'}
              </p>
            </div>
          </button>

          <!-- Mobile Quick Actions -->
          <div class="flex lg:hidden items-center gap-2">
            <button type="button" onclick="navigate('home')" class="px-3 py-1.5 rounded-xl bg-[#1C1C1C] border border-white/10 text-[11px] font-semibold text-neutral-300 cursor-pointer">
              Storefront
            </button>
            <button type="button" onclick="openLogoutModal()" class="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/25 text-[11px] font-semibold text-red-400 cursor-pointer">
              Log Out
            </button>
          </div>
        </div>

        ${!isSuite ? `
          <div class="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#181818] border border-white/5 text-[11px] text-neutral-300">
            <span class="w-2 h-2 rounded-full bg-gold-400"></span>
            <span>Kitchen Operational</span>
          </div>
        ` : ''}

        <!-- Navigation Links -->
        <div class="space-y-1.5">
          ${isSuite ? `<p class="px-3 text-[10px] font-bold tracking-widest uppercase text-neutral-500 mb-2">OPERATIONS</p>` : ''}

          <div class="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            <button type="button" onclick="navigate('admin-dashboard')" class="whitespace-nowrap w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition cursor-pointer ${activeMenu === 'dashboard' ? 'bg-gold-400 text-obsidian-950 font-bold shadow-md shadow-gold-400/15' : 'text-neutral-300 hover:bg-white/5 hover:text-white'}">
              <span>⊞</span>
              <span>${isSuite ? 'Executive Desk' : 'Dashboard Overview'}</span>
            </button>

            <button type="button" onclick="navigate('admin-catalog')" class="whitespace-nowrap w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition cursor-pointer ${activeMenu === 'catalog' ? 'bg-gold-400 text-obsidian-950 font-bold shadow-md shadow-gold-400/15' : 'text-neutral-300 hover:bg-white/5 hover:text-white'}">
              <span>📦</span>
              <span>${isSuite ? 'Catalog Control' : 'Batch & Products'}</span>
            </button>

            ${isSuite ? `
              <button type="button" onclick="navigate('admin-add-product')" class="whitespace-nowrap w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition cursor-pointer ${activeMenu === 'add-product' ? 'bg-gold-400 text-obsidian-950 font-bold shadow-md shadow-gold-400/15' : 'text-neutral-300 hover:bg-white/5 hover:text-white'}">
                <span>✎</span>
                <span>Item Form</span>
              </button>
            ` : ''}

            <button type="button" onclick="showToast('WhatsApp Leads', '142 verified concierge inquiries synced.')" class="whitespace-nowrap w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:bg-white/5 hover:text-white flex items-center gap-2.5 transition cursor-pointer">
              <span>💬</span>
              <span>${isSuite ? 'Orders Audit' : 'WhatsApp Leads'}</span>
            </button>

            ${!isSuite ? `
              <button type="button" onclick="showToast('Kitchen Settings', 'Operational hours & dispatch cutoff active (15:00 WIB).')" class="whitespace-nowrap w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:bg-white/5 hover:text-white flex items-center gap-2.5 transition cursor-pointer">
                <span>⚙</span>
                <span>Kitchen Settings</span>
              </button>
            ` : ''}
          </div>
        </div>

        ${isSuite ? `
          <div class="hidden lg:block space-y-1.5 pt-2 border-t border-white/5">
            <p class="px-3 text-[10px] font-bold tracking-widest uppercase text-neutral-500 mb-2">DIRECT NAVIGATION</p>
            <button type="button" onclick="navigate('home')" class="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:bg-white/5 hover:text-white flex items-center gap-2.5 transition cursor-pointer">
              <span>🏪</span>
              <span>Live Storefront</span>
            </button>
            <button type="button" onclick="openLogoutModal()" class="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 flex items-center gap-2.5 transition cursor-pointer">
              <span>↪</span>
              <span>Sign Out</span>
            </button>
          </div>
        ` : ''}
      </div>

      <!-- Sidebar Footer -->
      <div class="hidden lg:block p-5 border-t border-white/5">
        ${isSuite ? `
          <div class="px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/5 flex items-center gap-2 text-[11px] text-neutral-300">
            <span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span>Concierge Server Online</span>
          </div>
        ` : `
          <button type="button" onclick="navigate('home')" class="w-full py-2.5 px-4 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] border border-white/10 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-2 transition cursor-pointer">
            <span>🏪</span>
            <span>View Storefront</span>
          </button>
        `}
      </div>
    </aside>
  `;
}
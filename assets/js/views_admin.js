// 1. Halaman Login Admin
function handleAdminLogin(e) {
  e.preventDefault();
  showToast('Authenticated', 'Welcome back, Head Chef. Entering PRIMA QOE Admin Workspace...');
  navigate('admin-dashboard');
}

function renderAdminLoginPage() {
  return `
    <div class="view-fade min-h-screen flex items-center justify-center bg-[#0B0B0B] p-4">
      <div class="w-full max-w-md rounded-3xl bg-[#161616] border border-gold-400/30 p-7 sm:p-10 shadow-2xl space-y-6">
        <div class="text-center space-y-3">
          <div class="flex justify-center">
            ${renderBrandLogoSVG('w-20 h-20')}
          </div>
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222018] border border-gold-400/25 text-[10px] font-bold tracking-widest uppercase text-gold-400">
              • MASTER PORTAL
            </span>
          </div>
          <h1 class="text-2xl font-bold text-white tracking-tight">Prima_Qoe Administrasi Access</h1>
          <p class="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
            Enter authorized credentials to manage kitchen inventory, batches, and order logs.
          </p>
        </div>

        <form onsubmit="handleAdminLogin(event)" class="space-y-4">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs">
              <label class="font-semibold text-neutral-200">Username</label>
              <span class="text-[11px] text-neutral-400">Atelier SSO</span>
            </div>
            <div class="relative">
              <input
                type="text"
                required
                value="headchef@primaqoe.com"
                placeholder="Enter username"
                class="w-full rounded-xl bg-[#0E0E0E] border border-white/10 focus:border-gold-400/60 focus:outline-none pl-10 pr-4 py-3 text-xs text-white"
              />
              <svg class="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
            </div>
          </div>

          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs">
              <label class="font-semibold text-neutral-200">Password</label>
              <button type="button" onclick="showToast('Atelier IT Support', 'Credential reset link sent to concierge@primaqoe.com')" class="text-[11px] text-gold-400 hover:underline cursor-pointer">
                Forgot Credentials?
              </button>
            </div>
            <div class="relative">
              <input
                type="password"
                required
                value="••••••••••••"
                placeholder="Enter password"
                class="w-full rounded-xl bg-[#0E0E0E] border border-white/10 focus:border-gold-400/60 focus:outline-none pl-10 pr-4 py-3 text-xs text-white"
              />
              <svg class="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>
            </div>
          </div>

          <label class="flex items-center gap-2.5 text-xs text-neutral-300 pt-1 cursor-pointer select-none">
            <input type="checkbox" checked class="w-4 h-4 rounded accent-gold-400" />
            <span>Remember this workstation</span>
          </label>

          <button type="submit" class="w-full py-3.5 px-5 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-gold-400/15 cursor-pointer">
            <span>🛡</span>
            <span>Sign In To Dashboard</span>
          </button>
        </form>

        <div class="rounded-2xl bg-[#111111] border border-white/5 p-3.5 flex items-start gap-3 text-[11px] text-neutral-400">
          <span class="text-neutral-300 mt-0.5">🛡</span>
          <p>Authorized personnel only. Sessions are logged and protected with end-to-end operational verification.</p>
        </div>

        <div class="text-center pt-1">
          <button type="button" onclick="navigate('home')" class="text-xs font-semibold text-neutral-300 hover:text-gold-400 transition cursor-pointer">
            ← Return to Public Storefront
          </button>
        </div>
      </div>
    </div>
  `;
}

// 2. Halaman Operations Dashboard Overview
function renderAdminDashboardPage() {
  return `
    <div class="view-fade min-h-screen flex flex-col lg:flex-row bg-[#0E0E0E]">
      ${renderAdminSidebar('dashboard', 'dashboard')}

      <div class="flex-1 flex flex-col min-w-0">
        <header class="bg-[#121212] border-b border-white/10 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
            <span class="text-gold-400">⌘</span>
            <span>ADMINISTRATIVE SECURE ENVIRONMENT</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right">
              <p class="text-xs font-bold text-white">Kitchen Manager</p>
              <p class="text-[10px] text-neutral-400">concierge@primaqoe.com</p>
            </div>
            ${renderBrandLogoSVG('w-8 h-8')}
          </div>
        </header>

        <main class="p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div>
              <p class="text-[10px] font-bold tracking-widest uppercase text-gold-400 mb-1">ADMIN SUITE › STORE OPERATIONS &amp; INVENTORY</p>
              <div class="flex items-center gap-3">
                <h1 class="text-2xl sm:text-3xl font-bold text-white">Operations Workspace</h1>
                <span class="px-2.5 py-0.5 rounded-full bg-[#1E1E1E] border border-white/10 text-[10px] text-neutral-300">v2.4 Live</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <div class="relative">
                <input type="text" placeholder="Search SKU, batch, order #..." class="rounded-xl bg-[#171717] border border-white/10 pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400/50" />
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">🔍</span>
              </div>
              <span class="px-3 py-2 rounded-xl bg-[#171717] border border-white/10 text-xs text-neutral-200 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-gold-400"></span>
                Concierge: <strong class="text-gold-400">Online</strong>
              </span>
              <div class="px-3 py-1.5 rounded-xl bg-[#171717] border border-white/10 flex items-center gap-2">
                ${renderBrandLogoSVG('w-6 h-6')}
                <div class="text-[10px]">
                  <p class="font-bold text-white">Head Chef</p>
                  <p class="text-neutral-400">Super Admin</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-[#161616] border border-white/10 p-2 flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="navigate('admin-dashboard')" class="px-4 py-2 rounded-xl bg-gold-400/15 border border-gold-400/30 text-xs font-bold text-gold-400 cursor-pointer">
                ⊞ Dashboard Overview
              </button>
              <button type="button" onclick="showToast('Recorded Orders', 'Viewing 4 newly verified WhatsApp orders.')" class="px-4 py-2 rounded-xl hover:bg-white/5 text-xs font-semibold text-neutral-300 flex items-center gap-2 cursor-pointer">
                <span>📋 Recorded Orders</span>
                <span class="px-2 py-0.5 rounded-full bg-gold-400 text-obsidian-950 text-[10px] font-extrabold">4 New</span>
              </button>
              <button type="button" onclick="navigate('admin-catalog')" class="px-4 py-2 rounded-xl hover:bg-white/5 text-xs font-semibold text-neutral-300 cursor-pointer">
                🗂 Products Catalog
              </button>
            </div>
            <button type="button" onclick="openLogoutModal()" class="px-4 py-2 rounded-xl hover:bg-red-500/10 text-xs font-semibold text-red-400 transition cursor-pointer">
              ↪ Log Out
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">TOTAL PRODUCTS</span>
                <span class="w-8 h-8 rounded-lg bg-gold-400/15 text-gold-400 flex items-center justify-center text-xs">📦</span>
              </div>
              <p class="text-2xl sm:text-3xl font-extrabold text-white">18 Active</p>
              <p class="text-[11px] text-gold-400">⚗ +2 In Development Batch</p>
            </div>

            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">RECORDED ORDERS</span>
                <span class="w-8 h-8 rounded-lg bg-gold-400/15 text-gold-400 flex items-center justify-center text-xs">📋</span>
              </div>
              <p class="text-2xl sm:text-3xl font-extrabold text-white">142 Inquiries</p>
              <p class="text-[11px] text-gold-400">✓ Verified via WhatsApp Concierge</p>
            </div>

            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">ESTIMATED REVENUE</span>
                <span class="w-8 h-8 rounded-lg bg-gold-400/15 text-gold-400 flex items-center justify-center text-xs">💳</span>
              </div>
              <p class="text-2xl sm:text-3xl font-extrabold text-gold-400">Rp 14,850,000</p>
              <p class="text-[11px] text-neutral-400">↗ Based on recorded orders</p>
            </div>

            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">REGISTERED PATRONS</span>
                <span class="w-8 h-8 rounded-lg bg-gold-400/15 text-gold-400 flex items-center justify-center text-xs">👥</span>
              </div>
              <p class="text-2xl sm:text-3xl font-extrabold text-white">96 Buyers</p>
              <p class="text-[11px] text-gold-400">🛡 +14% repeat loyalty this mo.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-8 card-surface rounded-3xl p-6 space-y-4">
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 class="text-base sm:text-lg font-bold text-white">Weekly WhatsApp Order Cadence</h2>
                  <p class="text-xs text-neutral-400">Dispatched jar volume over the current 7-day culinary cycle</p>
                </div>
                <div class="flex items-center gap-4 text-[11px]">
                  <span class="px-2.5 py-1 rounded-lg bg-[#222222] text-neutral-300">Live Sync</span>
                  <span class="flex items-center gap-1.5 text-neutral-200"><span class="w-2.5 h-2.5 rounded-full bg-gold-400"></span> Artisanal Sambal</span>
                  <span class="flex items-center gap-1.5 text-neutral-400"><span class="w-2.5 h-2.5 rounded-full bg-gold-400/40"></span> Crispy Snacks</span>
                </div>
              </div>

              <div class="pt-2">
                <svg viewBox="0 0 640 210" class="w-full h-48 overflow-visible">
                  <defs>
                    <linearGradient id="goldAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#F5C84C" stop-opacity="0.28"/>
                      <stop offset="100%" stop-color="#F5C84C" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <line x1="20" y1="30" x2="620" y2="30" stroke="#262626" stroke-dasharray="4 4"/>
                  <line x1="20" y1="85" x2="620" y2="85" stroke="#262626" stroke-dasharray="4 4"/>
                  <line x1="20" y1="140" x2="620" y2="140" stroke="#262626" stroke-dasharray="4 4"/>

                  <path d="M 30 148 C 90 120, 140 112, 200 120 C 260 128, 320 118, 380 65 C 440 15, 490 22, 530 62 C 565 92, 590 65, 610 28 L 610 175 L 30 175 Z" fill="url(#goldAreaGrad)"/>
                  <path d="M 30 162 C 95 138, 150 132, 210 142 C 270 152, 330 135, 390 105 C 450 80, 500 92, 545 112 C 575 122, 595 102, 610 82" fill="none" stroke="#B69130" stroke-width="2" stroke-dasharray="5 5"/>
                  <path d="M 30 148 C 90 120, 140 112, 200 120 C 260 128, 320 118, 380 65 C 440 15, 490 22, 530 62 C 565 92, 590 65, 610 28" fill="none" stroke="#F5C84C" stroke-width="3" stroke-linecap="round"/>

                  <circle cx="30" cy="148" r="4.5" fill="#F5C84C"/>
                  <circle cx="200" cy="120" r="4.5" fill="#F5C84C"/>
                  <circle cx="380" cy="65" r="4.5" fill="#F5C84C"/>
                  <circle cx="610" cy="28" r="5.5" fill="#F5C84C" stroke="#121212" stroke-width="2"/>

                  <text x="30" y="198" fill="#737373" font-size="11" text-anchor="middle">Mon</text>
                  <text x="125" y="198" fill="#737373" font-size="11" text-anchor="middle">Tue</text>
                  <text x="220" y="198" fill="#737373" font-size="11" text-anchor="middle">Wed</text>
                  <text x="315" y="198" fill="#737373" font-size="11" text-anchor="middle">Thu</text>
                  <text x="410" y="198" fill="#737373" font-size="11" text-anchor="middle">Fri</text>
                  <text x="505" y="198" fill="#737373" font-size="11" text-anchor="middle">Sat</text>
                  <text x="600" y="198" fill="#F5C84C" font-size="11" font-weight="700" text-anchor="middle">Sun (Today)</text>
                </svg>
              </div>
            </div>

            <div class="lg:col-span-4 card-surface rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div class="space-y-5">
                <div class="flex items-center justify-between">
                  <h2 class="text-base font-bold text-white">Kitchen Dispatch Status</h2>
                  ${renderBrandLogoSVG('w-9 h-9')}
                </div>

                <div class="space-y-2.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-neutral-300">Daily Capacity</span>
                    <span class="font-bold text-gold-400">82% Utilized</span>
                  </div>
                  <div class="w-full h-2.5 rounded-full bg-[#242424] overflow-hidden">
                    <div class="h-full bg-gold-400 rounded-full" style="width: 82%"></div>
                  </div>
                  <div class="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                    <span>68 Jars Prepped</span>
                    <span>14 Reserved for Delivery</span>
                  </div>
                </div>
              </div>

              <button type="button" onclick="navigate('admin-add-product')" class="w-full py-3.5 px-5 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-gold-400/15 cursor-pointer">
                <span>⊕</span>
                <span>Record New Product SKU</span>
              </button>
            </div>
          </div>

          <div class="card-surface rounded-3xl p-6 space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-base font-bold text-white">📋 High-Priority Concierge Logs</h2>
              <button type="button" onclick="showToast('Concierge Ledger', 'Displaying all 142 recorded WhatsApp orders.')" class="text-xs font-semibold text-gold-400 hover:underline cursor-pointer">
                View All 142 Records →
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="rounded-2xl bg-[#121212] border border-white/5 p-4 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gold-400/15 text-gold-400 font-bold text-xs flex items-center justify-center">BS</div>
                  <div>
                    <p class="text-xs font-bold text-white">Budi Santoso</p>
                    <p class="text-[11px] text-neutral-400">Order #PQ-8841 • WhatsApp VIP</p>
                    <p class="text-[11px] text-neutral-300 mt-0.5">2x Sambal Kecombrang Original</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold">Dispatched</span>
                  <p class="text-xs font-extrabold text-gold-400 mt-1.5">Rp 90,000</p>
                </div>
              </div>

              <div class="rounded-2xl bg-[#121212] border border-white/5 p-4 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gold-400/15 text-gold-400 font-bold text-xs flex items-center justify-center">CP</div>
                  <div>
                    <p class="text-xs font-bold text-white">Clarissa Putri</p>
                    <p class="text-[11px] text-neutral-400">Order #PQ-8840 • Corporate Gift</p>
                    <p class="text-[11px] text-neutral-300 mt-0.5">1x Cumi Asin, 1x Mustofa</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="px-2.5 py-0.5 rounded-full bg-gold-400/15 text-gold-400 text-[10px] font-semibold">Payment Verified</span>
                  <p class="text-xs font-extrabold text-gold-400 mt-1.5">Rp 93,000</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `;
}

// 3. Halaman Catalog Control (Manajemen Produk & Stok)
function deleteAdminSku(id) {
  const target = state.products.find(p => p.id === id);
  if (!target) return;
  state.products = state.products.filter(p => p.id !== id);
  showToast('SKU Removed', `${target.name} (${target.sku}) has been removed from active catalog.`, 'red');
  render();
}

function renderAdminCatalogPage() {
  const filtered = state.products.filter(p => {
    const catOk = state.adminCategoryFilter === 'all' || p.category === state.adminCategoryFilter;
    const q = state.adminSearch.toLowerCase();
    const searchOk = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  return `
    <div class="view-fade min-h-screen flex flex-col lg:flex-row bg-[#0E0E0E]">
      ${renderAdminSidebar('catalog', 'suite')}

      <div class="flex-1 flex flex-col min-w-0">
        <header class="bg-[#121212] border-b border-white/10 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
            <span class="text-gold-400">▣</span>
            <span>SECURE ADMIN CONSOLE</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full bg-[#191919] border border-white/10 text-[11px] text-neutral-300">
              🔒 Role: <strong class="text-white">Master Chef &amp; Operations</strong>
            </span>
            ${renderBrandLogoSVG('w-8 h-8')}
          </div>
        </header>

        <main class="p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div class="space-y-1">
              <p class="text-[10px] font-bold tracking-widest uppercase text-gold-400">ADMIN WORKSPACE › CATALOG MANAGEMENT › CULINARY INVENTORY</p>
              <div class="flex flex-wrap items-center gap-3">
                <h1 class="text-2xl sm:text-3xl font-bold text-white">Manage Products &amp; Culinary SKUs</h1>
                <span class="px-3 py-1 rounded-full bg-[#1E1E1E] border border-white/10 text-[11px] text-gold-400 font-semibold">18 Active Formulations</span>
              </div>
              <p class="text-xs text-neutral-400">Supervise handcrafted artisanal batches, inspect lead velocity from WhatsApp concierge, and update recipe specs directly to the storefront.</p>
            </div>

            <div class="flex flex-wrap items-center gap-3 shrink-0">
              <button type="button" onclick="navigate('admin-dashboard')" class="px-4 py-3 rounded-2xl bg-[#1A1A1A] hover:bg-[#242424] border border-white/10 text-xs font-semibold text-white cursor-pointer">
                ⊞ Dashboard Overview
              </button>
              <button type="button" onclick="navigate('admin-add-product')" class="px-5 py-3 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-gold-400/15 cursor-pointer">
                <span>⊕</span>
                <span>+ Add New Product SKU</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div class="card-surface rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p class="text-[10px] font-bold uppercase text-neutral-400">LIVE INVENTORY</p>
                <p class="text-xl font-extrabold text-gold-400 mt-1">177 Units</p>
                <p class="text-[11px] text-neutral-400 mt-0.5">Across 4 key culinary ranges</p>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center">📦</div>
            </div>

            <div class="card-surface rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p class="text-[10px] font-bold uppercase text-neutral-400">LOW STOCK BATCHES</p>
                <p class="text-xl font-extrabold text-white mt-1">2 SKUs Alert</p>
                <p class="text-[11px] text-neutral-400 mt-0.5">Cumi Asin &amp; Royal Hampers</p>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center">⚠</div>
            </div>

            <div class="card-surface rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p class="text-[10px] font-bold uppercase text-neutral-400">DIRECT WHATSAPP ORDERS</p>
                <p class="text-xl font-extrabold text-white mt-1">142 Leads</p>
                <p class="text-[11px] text-gold-400 mt-0.5">+18% this harvest week</p>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center">💬</div>
            </div>

            <div class="card-surface rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p class="text-[10px] font-bold uppercase text-neutral-400">AVG. BATCH FRESHNESS</p>
                <p class="text-xl font-extrabold text-white mt-1">5.4 Days</p>
                <p class="text-[11px] text-neutral-400 mt-0.5">Daily kitchen turnover</p>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center">✓</div>
            </div>
          </div>

          <div class="card-surface rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="state.adminCategoryFilter='all'; render();" class="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer ${state.adminCategoryFilter === 'all' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#222222] text-neutral-300'}">All SKUs (18)</button>
              <button type="button" onclick="state.adminCategoryFilter='sambal'; render();" class="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer ${state.adminCategoryFilter === 'sambal' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#222222] text-neutral-300'}">Artisanal Sambal (6)</button>
              <button type="button" onclick="state.adminCategoryFilter='snacks'; render();" class="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer ${state.adminCategoryFilter === 'snacks' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#222222] text-neutral-300'}">Crispy Snacks (8)</button>
              <button type="button" onclick="state.adminCategoryFilter='bundles'; render();" class="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer ${state.adminCategoryFilter === 'bundles' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#222222] text-neutral-300'}">Gift Bundles (4)</button>
            </div>

            <div class="flex flex-wrap items-center gap-2.5">
              <input
                type="text"
                value="${state.adminSearch}"
                oninput="state.adminSearch = this.value; render();"
                placeholder="Search SKU name, code, recipe..."
                class="rounded-xl bg-[#101010] border border-white/10 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400/50"
              />
              <select class="rounded-xl bg-[#101010] border border-white/10 px-3 py-2 text-xs text-neutral-300">
                <option>Status: All Inventory</option>
                <option>Active / In Stock</option>
                <option>Low Batch Alert</option>
              </select>
            </div>
          </div>

          <div class="card-surface rounded-3xl overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-white/10 text-[10px] font-bold tracking-wider uppercase text-neutral-400 bg-[#131313]">
                    <th class="py-4 px-5">PRODUCT / VISUAL</th>
                    <th class="py-4 px-4">CATEGORY</th>
                    <th class="py-4 px-4">UNIT PRICE</th>
                    <th class="py-4 px-4">KITCHEN BATCH STOCK</th>
                    <th class="py-4 px-4">WHATSAPP DEMAND</th>
                    <th class="py-4 px-4">STATUS</th>
                    <th class="py-4 px-5 text-right">QUICK ACTIONS</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-xs">
                  ${filtered.map(item => `
                    <tr class="hover:bg-white/[0.02] transition">
                      <td class="py-4 px-5">
                        <div class="flex items-center gap-3.5">
                          <img src="${item.image}" onerror="this.src='${item.fallbackImage}'" alt="${item.name}" class="w-11 h-11 rounded-xl object-cover border border-white/10 shrink-0" />
                          <div>
                            <p class="font-bold text-white">${item.name}</p>
                            <p class="text-[10px] text-gold-400 font-mono mt-0.5">${item.sku} <span class="text-neutral-500">• ${item.weight}</span></p>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-4">
                        <span class="px-2.5 py-1 rounded-lg bg-[#202020] text-[11px] text-neutral-300">${item.categoryLabel}</span>
                      </td>
                      <td class="py-4 px-4 font-bold text-white">${formatRupiahComma(item.price)}</td>
                      <td class="py-4 px-4">
                        <div class="w-32 space-y-1.5">
                          <div class="flex items-center justify-between text-[10px]">
                            <span class="text-neutral-200 font-semibold">${item.stockUnits} Jars</span>
                            <span class="text-neutral-400">${item.stockCapPercent}% cap</span>
                          </div>
                          <div class="w-full h-1.5 rounded-full bg-[#262626] overflow-hidden">
                            <div class="h-full bg-gold-400 rounded-full" style="width: ${item.stockCapPercent}%"></div>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-4 text-neutral-300 font-medium">💬 ${item.whatsappLeads} Leads</td>
                      <td class="py-4 px-4">
                        <span class="px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-[10px] font-semibold text-gold-400 whitespace-nowrap">
                          • ${item.statusLabel}
                        </span>
                      </td>
                      <td class="py-4 px-5 text-right">
                        <div class="inline-flex items-center gap-1.5">
                          <button type="button" onclick="navigate('admin-add-product')" title="Edit SKU" class="p-2 rounded-lg bg-[#202020] hover:bg-gold-400 hover:text-obsidian-950 text-neutral-300 transition cursor-pointer">✎</button>
                          <button type="button" onclick="navigate('detail', { productId: '${item.id}' })" title="Preview on Storefront" class="p-2 rounded-lg bg-[#202020] hover:bg-gold-400 hover:text-obsidian-950 text-neutral-300 transition cursor-pointer">👁</button>
                          <button type="button" onclick="deleteAdminSku('${item.id}')" title="Delete SKU" class="p-2 rounded-lg bg-[#202020] hover:bg-red-500/20 text-neutral-400 hover:text-red-400 transition cursor-pointer">🗑</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="px-5 py-3.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-neutral-400">
              <span>Showing ${filtered.length} of 18 Master Culinary Formulations</span>
              <div class="flex items-center gap-2">
                <button type="button" class="px-3 py-1 rounded-lg bg-[#1E1E1E] text-neutral-500">Previous</button>
                <span class="text-gold-400 font-semibold">Page 1 of 5</span>
                <button type="button" class="px-3 py-1 rounded-lg bg-[#1E1E1E] text-neutral-300 hover:text-white cursor-pointer">Next</button>
              </div>
            </div>
          </div>

          <div class="card-surface rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-gold-400/15 text-gold-400 flex items-center justify-center text-xs">↻</div>
              <div>
                <p class="text-xs font-bold text-white">Automated Omnichannel Synchronization</p>
                <p class="text-[11px] text-neutral-400">Changes saved here reflect instantly on the Live WhatsApp Concierge catalog and Customer Storefront.</p>
              </div>
            </div>
            <span class="text-[10px] font-mono font-bold text-gold-400">• LATENCY: 12ms TO EDGE</span>
          </div>
        </main>
      </div>
    </div>
  `;
}

// 4. Halaman Create New Culinary SKU (Tambah Produk Baru)
function handlePublishNewSku(e) {
  e.preventDefault();
  const title = document.getElementById('new-sku-title').value.trim() || 'Sambal Kecombrang Reserve';
  const subtitle = document.getElementById('new-sku-subtitle').value.trim() || 'Crispy golden anchovies slow-infused with wild torch ginger';
  const notes = document.getElementById('new-sku-notes').value.trim();
  const priceVal = parseInt(document.getElementById('new-sku-price').value.replace(/\D/g, ''), 10) || 50000;
  const stockVal = parseInt(document.getElementById('new-sku-stock').value, 10) || 48;

  const newProduct = {
    id: 'sku-' + Date.now(),
    sku: 'SKU-KC-04',
    name: title,
    detailTitle: title,
    category: 'sambal',
    categoryLabel: 'Artisanal Sambal',
    homeTag: 'ARTISANAL SAMBAL',
    catalogTag: 'NEW MASTER FORMULATION',
    topBadge: 'SIGNATURE RECIPE',
    homeBadge: 'Fresh Batch',
    weight: '200g Glass Jar',
    netWt: '200g Net Wt',
    packaging: 'Airtight Gold Lid Glass',
    spicePill: `Level 3 • ${state.selectedHeatRating}`,
    heatLevel: 'Level 3 of 5',
    price: priceVal,
    rating: '5.0',
    reviews: 1,
    stockText: 'In Stock (Kitchen Ready)',
    homeStockText: 'Ready for Dispatch',
    stockUnits: stockVal,
    stockCapPercent: 85,
    whatsappLeads: 1,
    statusLabel: 'Active / In Stock',
    shortDesc: subtitle,
    subtitle: `${subtitle} • Premium 200g Reusable Vacuum Glass Jar`,
    composition: notes,
    shelfLifeSealed: '3 months ambient dark room storage.',
    shelfLifeOpened: '3-4 weeks chilled, use clean dry spoon.',
    terroir: 'Harvested daily from volcanic hill soil farms in West Java.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85',
    fallbackImage: 'https://placehold.co/800x800/1c1c1c/f5c84c?text=New+PRIMA+QOE+SKU'
  };

  state.products.unshift(newProduct);
  showToast('Published to Storefront', `${title} is now live on both Storefront & WhatsApp Concierge!`);
  navigate('admin-catalog');
}

function renderAdminAddProductPage() {
  const heatLevels = ['Mild', 'Medium', 'Spicy', 'Extra Hot'];

  return `
    <div class="view-fade min-h-screen flex flex-col lg:flex-row bg-[#0E0E0E]">
      ${renderAdminSidebar('add-product', 'suite')}

      <div class="flex-1 flex flex-col min-w-0 pb-24">
        <header class="bg-[#121212] border-b border-white/10 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
            <span class="text-gold-400">▣</span>
            <span>SECURE ADMIN CONSOLE</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full bg-[#191919] border border-white/10 text-[11px] text-neutral-300">
              🔒 Role: <strong class="text-white">Master Chef &amp; Operations</strong>
            </span>
            ${renderBrandLogoSVG('w-8 h-8')}
          </div>
        </header>

        <form onsubmit="handlePublishNewSku(event)" class="p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p class="text-[10px] font-bold tracking-widest uppercase text-gold-400 mb-1">Admin Suite › Catalog Management › Add New Product SKU</p>
              <h1 class="text-2xl sm:text-3xl font-bold text-white">Create New Culinary SKU</h1>
              <p class="text-xs text-neutral-400 mt-1">Define handcrafted recipe specifications, packaging dimensions, batch stock limits, and storefront visibility for PRIMA QOE artisanal specialties.</p>
            </div>
            <div class="flex items-center gap-3 shrink-0">
              <button type="button" onclick="navigate('admin-catalog')" class="px-4 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] border border-white/10 text-xs font-semibold text-neutral-300 cursor-pointer">
                ✕ Discard Draft
              </button>
              <button type="submit" class="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold shadow-lg shadow-gold-400/15 cursor-pointer">
                📤 Publish to Storefront
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div class="lg:col-span-8 space-y-6">
              <div class="card-surface rounded-3xl p-6 space-y-4">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-bold text-white flex items-center gap-2">
                    <span class="text-gold-400">🍴</span> Recipe &amp; Formulation Details
                  </h2>
                  <span class="px-2.5 py-1 rounded-full bg-[#222018] border border-gold-400/25 text-[10px] font-mono text-gold-400">
                    • AUTO-CODE: SKU-KC-03
                  </span>
                </div>

                <div class="space-y-1.5">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">CULINARY TITLE &amp; SKU NAME *</label>
                  <input id="new-sku-title" type="text" required value="Sambal Kecombrang Teri Medan" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">SKU REFERENCE</label>
                    <input type="text" readonly value="SKU-KC-03" class="w-full rounded-xl bg-[#101010] border border-white/10 px-4 py-3 text-xs font-mono text-gold-400" />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">SENSORY STOREFRONT SUBTITLE</label>
                    <input id="new-sku-subtitle" type="text" value="Crispy golden anchovies slow-infused with wild torch ginger" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white" />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">DETAILED CULINARY NOTES &amp; TASTING PROFILE</label>
                    <span class="text-[10px] text-neutral-500">Rich Description for Concierge Sheet</span>
                  </div>
                  <textarea id="new-sku-notes" rows="4" class="w-full rounded-2xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none p-4 text-xs text-neutral-200 leading-relaxed">Handcrafted using premium sun-dried North Sumatran Teri Medan crisped to perfection, paired with wild-harvested Kecombrang (torch ginger inflorescence) blossoms for an unmatched citrus-floral tang. Simmered over 4 hours with cold-pressed shallot reduction and farm-fresh bird's eye chillies.

Pairing Suggestion: Elevates warm fragrant Jasmine rice, crispy tempeh mendoan.</textarea>
                </div>
              </div>

              <div class="card-surface rounded-3xl p-6 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">CONCIERGE UNIT PRICE (IDR) *</label>
                    <div class="relative">
                      <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gold-400">Rp</span>
                      <input id="new-sku-price" type="text" value="50.000" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none pl-10 pr-4 py-3 text-xs font-bold text-white" />
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">NET WEIGHT &amp; PACKAGING FORMAT</label>
                    <select class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white">
                      <option>200g Airtight Hexagonal Glass Jar</option>
                      <option>180g Stand-Up Foil Ziplock Pouch</option>
                      <option>4-Piece Magnetic Royal Gift Box</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">KITCHEN BATCH INITIAL STOCK *</label>
                    <div class="relative">
                      <input id="new-sku-stock" type="number" value="48" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs font-bold text-white" />
                      <span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-neutral-500">Jars</span>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">LOW STOCK WARNING THRESHOLD</label>
                    <div class="relative">
                      <input type="number" value="10" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs font-bold text-white" />
                      <span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-neutral-500">Jars</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-surface rounded-3xl p-6 space-y-4">
                <div>
                  <h2 class="text-sm font-bold text-white flex items-center gap-2">
                    <span class="text-gold-400">🍃</span> Storage &amp; Preservation Standards
                  </h2>
                  <p class="text-[11px] text-neutral-400">Customer guidance printed on gold-foil back labels</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">AMBIENT SHELF LIFE (SEALED)</label>
                    <input type="text" value="3 months ambient dark room storage" class="w-full rounded-xl bg-[#101010] border border-white/10 px-3.5 py-2.5 text-xs text-neutral-200" />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">CHILLED CARE (POST-OPENING)</label>
                    <input type="text" value="3-4 weeks chilled, use clean dry spoon" class="w-full rounded-xl bg-[#101010] border border-white/10 px-3.5 py-2.5 text-xs text-neutral-200" />
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-6">
              <div class="card-surface rounded-3xl p-5 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-xs font-bold text-white">🖼 Product Media</h3>
                  <span class="text-[10px] text-gold-400">Primary + 3 Sub</span>
                </div>

                <div class="relative rounded-2xl overflow-hidden aspect-square bg-[#101010] border border-white/10">
                  <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=85" onerror="this.src='https://placehold.co/600x600/1c1c1c/f5c84c?text=Hero+Media'" alt="Active Hero Media" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 left-3 right-3 text-center space-y-1.5">
                    <span class="px-2.5 py-0.5 rounded bg-gold-400/20 text-gold-400 text-[9px] font-bold uppercase">ACTIVE HERO IMAGE</span>
                    <p class="text-[10px] font-mono text-neutral-300 truncate">prima-qoe-kecombrang-hero-2024.webp</p>
                    <button type="button" onclick="showToast('Media Picker', 'Hero asset verified (1:1 studio lighting).')" class="px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-[10px] font-semibold text-white cursor-pointer">
                      ↻ Replace
                    </button>
                  </div>
                </div>

                <p class="text-[10px] text-neutral-400 leading-relaxed">
                  ⓘ Recommended 1:1 or 4:3 ratio with rich dark backdrop (#131313) and warm gold rim lighting. Max 10MB (PNG, JPG, WebP).
                </p>
              </div>

              <div class="card-surface rounded-3xl p-5 space-y-4">
                <h3 class="text-xs font-bold text-white">❖ Channel &amp; Categorization</h3>

                <div class="space-y-1.5">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">CULINARY CATEGORY *</label>
                  <select class="w-full rounded-xl bg-[#101010] border border-white/10 px-3.5 py-2.5 text-xs text-white">
                    <option>Artisanal Sambal &amp; Condiments</option>
                    <option>Crispy Savory Snacks</option>
                    <option>Signature Royal Bundles</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[10px]">
                    <span class="font-bold uppercase text-neutral-400">SENSORY HEAT RATING</span>
                    <span class="text-gold-400 font-semibold">Level 3 • ${state.selectedHeatRating}</span>
                  </div>
                  <div class="grid grid-cols-4 gap-1.5">
                    ${heatLevels.map(lvl => `
                      <button type="button" onclick="state.selectedHeatRating='${lvl}'; render();" class="py-2 px-1 rounded-xl text-[10px] font-bold transition cursor-pointer ${state.selectedHeatRating === lvl ? 'bg-gold-400 text-obsidian-950' : 'bg-[#111111] border border-white/10 text-neutral-300 hover:border-gold-400/40'}">
                        ${lvl}
                      </button>
                    `).join('')}
                  </div>
                </div>

                <div class="rounded-2xl bg-[#111111] border border-white/5 p-3.5 flex items-start justify-between gap-3">
                  <div>
                    <p class="text-xs font-bold text-white">Active on Public Storefront</p>
                    <p class="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">Instantly syncs this recipe formulation to the live client digital menu and WhatsApp Concierge formulizer.</p>
                  </div>
                  <button type="button" onclick="state.newProductActive = !state.newProductActive; render();" class="w-11 h-6 rounded-full p-0.5 transition shrink-0 cursor-pointer ${state.newProductActive ? 'bg-gold-400' : 'bg-neutral-700'}">
                    <div class="w-5 h-5 rounded-full bg-obsidian-950 transition transform ${state.newProductActive ? 'translate-x-5' : 'translate-x-0'}"></div>
                  </button>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[10px] text-neutral-400">
                    <span class="font-bold uppercase">BADGE TAGGING</span>
                    <span>PREVIEW</span>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-[10px] font-semibold text-gold-400">• Signature Recipe</span>
                    <span class="px-2.5 py-1 rounded-full bg-[#222222] text-[10px] text-neutral-300">✓ Fresh Batch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="fixed bottom-0 left-0 lg:left-64 right-0 z-30 bg-[#141414]/95 backdrop-blur-md border-t border-white/10 px-6 py-3.5">
            <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2 text-[11px] text-neutral-400">
                <span class="w-2 h-2 rounded-full bg-gold-400"></span>
                <span>Formulation Autosaved to Master Chef Session cache (11:42 AM)</span>
              </div>
              <div class="flex flex-wrap items-center gap-2.5">
                <button type="button" onclick="showToast('Draft Saved', 'Formulation saved to Master Chef session cache.')" class="px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#2A2A2A] border border-white/10 text-xs font-semibold text-neutral-200 cursor-pointer">
                  Save as Draft
                </button>
                <button type="button" onclick="navigate('admin-catalog')" class="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer">
                  Cancel &amp; Return
                </button>
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-extrabold cursor-pointer">
                  Save &amp; Publish Product SKU →
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}
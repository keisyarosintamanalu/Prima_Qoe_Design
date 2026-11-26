// 1. Halaman Utama (Public Home)
function renderHomePage() {
  const filteredProducts = state.products.filter(p =>
    p.name.toLowerCase().includes(state.homeSearch.toLowerCase()) ||
    p.shortDesc.toLowerCase().includes(state.homeSearch.toLowerCase())
  );

  return `
    <div class="view-fade flex-1 flex flex-col">
      ${renderPublicNavbar('home', {
        showTopAnnouncement: true,
        showArtisanalPill: true,
        adminBtnLabel: 'Admin Portal',
        productsLabel: 'Products'
      })}

      <!-- HERO SECTION -->
      <section class="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#15130E] via-[#101010] to-[#0E0E0E]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/25 text-[11px] font-semibold tracking-wider uppercase text-gold-400">
                <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                HERITAGE INDONESIAN GASTRONOMY <span class="text-neutral-500">•</span> <span class="text-neutral-300">Small Batch No. 24</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
                Artisanal Sambal Kecombrang &amp; Handcrafted Gourmet Delicacies
              </h1>

              <p class="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                Authentic Indonesian culinary heritage elevated through contemporary gastronomy and premium ingredients. Hand-picked wild torch ginger flowers, slow-cooked in small copper kettles with zero artificial preservatives.
              </p>

              <div class="flex flex-wrap items-center gap-3.5 pt-1">
                <button type="button" onclick="navigate('products')" class="px-6 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition shadow-lg shadow-gold-400/15 cursor-pointer">
                  <span>Explore Products</span>
                  <span>→</span>
                </button>
                <button type="button" onclick="openWhatsAppConcierge()" class="px-6 py-3.5 rounded-full bg-[#19221C] hover:bg-[#1F2C24] border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition cursor-pointer">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>
                  <span>Direct WhatsApp Concierge</span>
                </button>
              </div>

              <!-- 4 Trust Pillars -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">✦</div>
                  <div>
                    <p class="text-xs font-bold text-white">100% Fresh</p>
                    <p class="text-[11px] text-neutral-400">Wild Torch Ginger</p>
                  </div>
                </div>
                <div class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">♨</div>
                  <div>
                    <p class="text-xs font-bold text-white">Small Batch</p>
                    <p class="text-[11px] text-neutral-400">Slow-Cooked Daily</p>
                  </div>
                </div>
                <div class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">◈</div>
                  <div>
                    <p class="text-xs font-bold text-white">Airtight Glass</p>
                    <p class="text-[11px] text-neutral-400">Food-Grade Seal</p>
                  </div>
                </div>
                <div class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">❖</div>
                  <div>
                    <p class="text-xs font-bold text-white">Zero Auto-Cart</p>
                    <p class="text-[11px] text-neutral-400">Pure Concierge Chat</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Circular Showcase -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-3 bg-gradient-to-tr from-gold-400/20 via-white/5 to-gold-400/30 gold-glow">
                <div class="w-full h-full rounded-full overflow-hidden border-2 border-gold-400/40 relative">
                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85"
                    onerror="this.src='https://placehold.co/700x700/1c1c1c/f5c84c?text=PRIMA+QOE+Reserve'"
                    alt="Direct Reserve Sambal"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[82%] rounded-2xl bg-[#161616]/95 backdrop-blur-md border border-gold-400/35 px-4 py-2.5 flex items-center justify-between gap-2 shadow-xl">
                    <div>
                      <p class="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                        Direct Reserve Sambal
                      </p>
                      <p class="text-[10px] text-neutral-400">Net Wt. 200g • Handcrafted in Jakarta</p>
                    </div>
                    <span class="text-xs sm:text-sm font-extrabold text-gold-400 shrink-0">Rp 45.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CURATED ARTISANAL COLLECTION SECTION -->
      <section class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-9">
          <div>
            <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400 mb-1.5">❖ ARTISANAL PANTRY</p>
            <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">Curated Artisanal Collection</h2>
            <p class="text-xs sm:text-sm text-neutral-400 mt-1">Select any gourmet item to inspect full aromatic profiles or trigger instant custom WhatsApp booking with live quantity calculations.</p>
          </div>
          <div class="w-full md:w-72 relative">
            <input
              type="text"
              value="${state.homeSearch}"
              oninput="state.homeSearch = this.value; render();"
              placeholder="Search gourmet sambal or snack..."
              class="w-full rounded-full bg-[#171717] border border-white/10 focus:border-gold-400/50 focus:outline-none pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500"
            />
            <svg class="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredProducts.map(item => `
            <article class="card-surface card-surface-hover rounded-3xl overflow-hidden flex flex-col">
              <div class="relative h-56 overflow-hidden bg-[#121212]">
                <img
                  src="${item.image}"
                  onerror="this.src='${item.fallbackImage}'"
                  alt="${item.name}"
                  class="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/30"></div>
                <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-gold-400 text-obsidian-950 text-[10px] font-bold shadow">
                  ${item.homeBadge}
                </span>
                <span class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-medium text-neutral-200">
                  ${item.id === 'sambal-cumi-asin' ? '180g Glass Jar' : item.id === 'signature-royal-hamper' ? '4-Piece Hamper' : item.weight}
                </span>
              </div>

              <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-gold-400 mb-1.5">
                    <span>${item.homeTag}</span>
                    <span class="text-gold-400 tracking-normal">★★★★★</span>
                  </div>
                  <h3 class="text-base font-bold text-white mb-1.5">
                    ${item.id === 'signature-royal-hamper' ? 'Signature Royal Gourmet Bundle' : item.name}
                  </h3>
                  <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed">${item.shortDesc}</p>
                </div>

                <div class="pt-3 border-t border-white/5 space-y-3.5">
                  <div class="flex items-center justify-between">
                    <span class="text-base font-extrabold text-gold-400">${formatRupiahComma(item.price)}</span>
                    <span class="text-[11px] text-neutral-400">${item.homeStockText}</span>
                  </div>
                  <button type="button" onclick="navigate('detail', { productId: '${item.id}' })" class="w-full py-2.5 px-4 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold transition cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- HERITAGE STORY SECTION -->
      <section class="border-t border-white/5 bg-[#121212]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-5">
              <div class="relative rounded-3xl overflow-hidden border border-white/10 h-80 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85"
                  onerror="this.src='https://placehold.co/800x700/1c1c1c/f5c84c?text=Wild+Torch+Ginger'"
                  alt="Wild Torch Ginger West Java"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div class="absolute bottom-5 left-5 right-5">
                  <p class="text-[10px] font-bold tracking-widest uppercase text-gold-400 mb-1">AUTHENTIC BOTANICAL SOURCING</p>
                  <h4 class="text-base font-bold text-white">Highland Volcanic Soil, West Java</h4>
                  <p class="text-[11px] text-neutral-300 mt-0.5">Harvested at first morning bloom for maximal essential oils.</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 space-y-6">
              <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400">❖ CULINARY LINEAGE</p>
              <h2 class="text-2xl sm:text-4xl font-bold text-white leading-tight">
                The Craft of Torch Ginger: Indonesian Culinary Excellence
              </h2>
              <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                At PRIMA QOE, we elevate <strong class="text-gold-400">Bunga Kecombrang</strong> (Torch Ginger / <em>Etlingera elatior</em>)—an aromatic jewel that has crowned Archipelago feasts for centuries. Its unmistakable floral-citrus vibrancy cuts through rich gravies, transforming traditional condiment making into fine gastronomy.
              </p>
              <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Every batch begins with hand-sliced blossoms harvested from smallholder agroforestry plots in the cool elevations of West Java. We slow-simmer the petals alongside sun-dried sea salt, cold-pressed seed pressed oils, no MSG, no synthetic colorings, and no artificial thickeners. Only pure culinary craft, prepared in hygienic small quantities to preserve aromatic freshness until the jar reaches your table.
              </p>

              <div class="grid grid-cols-3 gap-3.5 pt-2">
                <div class="rounded-2xl bg-[#181818] border border-white/10 p-4">
                  <p class="text-xl sm:text-2xl font-extrabold text-gold-400">0%</p>
                  <p class="text-[11px] text-neutral-400 mt-1">Artificial Additives</p>
                </div>
                <div class="rounded-2xl bg-[#181818] border border-white/10 p-4">
                  <p class="text-xl sm:text-2xl font-extrabold text-gold-400">4h</p>
                  <p class="text-[11px] text-neutral-400 mt-1">Low-Heat Simmer</p>
                </div>
                <div class="rounded-2xl bg-[#181818] border border-white/10 p-4">
                  <p class="text-xl sm:text-2xl font-extrabold text-gold-400">100%</p>
                  <p class="text-[11px] text-neutral-400 mt-1">Artisan Handcrafted</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            <div class="card-surface rounded-2xl p-6 space-y-2.5">
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm font-bold">✦</div>
              <h3 class="text-sm font-bold text-white">Culinary Authenticity</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">
                Time-honored family recipes crafted without chemical emulsifiers, real shallots, authentic bird's eye chilies, and full floral torch ginger petals.
              </p>
            </div>
            <div class="card-surface rounded-2xl p-6 space-y-2.5">
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm font-bold">✓</div>
              <h3 class="text-sm font-bold text-white">Hygienic Production</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">
                Every jar undergoes hot-vacuum sealing in sanitized, food-grade glass containers, ensuring 3 months of sealed shelf life without chemical stabilizers.
              </p>
            </div>
            <div class="card-surface rounded-2xl p-6 space-y-2.5">
              <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm font-bold">⚡</div>
              <h3 class="text-sm font-bold text-white">Fresh On-Demand</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">
                By avoiding impersonal cart warehouses, your order is bottled fresh from our weekly small-batch production and directly coordinated via WhatsApp concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- PRE-FOOTER ADMIN BAR -->
      <div class="border-t border-white/10 bg-[#141414]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2 text-xs text-neutral-400">
            <span class="w-2 h-2 rounded-full bg-gold-400"></span>
            <span>PRIMA QOE Internal Production Management Suite</span>
          </div>
          <button type="button" onclick="navigate('login')" class="px-4 py-2 rounded-full bg-[#1E1E1E] hover:bg-[#262626] border border-gold-400/30 text-xs font-semibold text-gold-400 transition cursor-pointer">
            🔑 Kitchen Staff • Admin Sign-In Portal
          </button>
        </div>
      </div>

      ${renderPublicFooter()}
    </div>
  `;
}

// 2. Halaman Katalog Produk & Filter Kategori
function renderProductsCatalogPage() {
  const counts = {
    all: state.products.length,
    sambal: state.products.filter(p => p.category === 'sambal').length,
    snacks: state.products.filter(p => p.category === 'snacks').length,
    bundles: state.products.filter(p => p.category === 'bundles').length,
  };

  const visibleProducts = state.products.filter(p => {
    const matchesCat = state.catalogCategory === 'all' || p.category === state.catalogCategory;
    const q = state.catalogSearch.toLowerCase();
    const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.topBadge.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return `
    <div class="view-fade flex-1 flex flex-col">
      ${renderPublicNavbar('products', {
        showArtisanalPill: true,
        adminBtnLabel: 'Admin Portal',
        productsLabel: 'Product'
      })}

      <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        <div class="flex items-center gap-2 text-xs text-neutral-400">
          <button type="button" onclick="navigate('home')" class="hover:text-gold-400 transition cursor-pointer">⌂ Home</button>
          <span>/</span>
          <span class="text-gold-400 font-medium">Products Catalog</span>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400">• ARTISANAL RESERVE • BATCH NO. 04</p>
            <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Artisanal Culinary Catalog &amp; Pantry Reserve</h1>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Hand-crafted torch ginger sambals, caramelized shoestring potatoes, and small-batch heritage delicacies delivered fresh daily directly from our kitchen.
            </p>
          </div>
          <div class="flex flex-col sm:items-end gap-2">
            <span class="px-3.5 py-1.5 rounded-full bg-[#191919] border border-gold-400/25 text-[11px] font-medium text-neutral-200 inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-gold-400"></span>
              100% Natural Kecombrang
            </span>
            <span class="px-3.5 py-1.5 rounded-full bg-[#191919] border border-white/10 text-[11px] font-medium text-neutral-300 inline-flex items-center gap-2">
              <span class="text-gold-400">✓</span>
              0 Preservatives (Glass-Jar Fresh Seal)
            </span>
          </div>
        </div>

        <!-- Search & Filter Tabs -->
        <div class="rounded-2xl bg-[#161616] border border-white/10 p-4 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="relative flex-1 max-w-md">
              <input
                type="text"
                value="${state.catalogSearch}"
                oninput="state.catalogSearch = this.value; render();"
                placeholder="Search torch ginger, crispy tempeh, gift hampers..."
                class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500"
              />
              <svg class="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
            </div>
            <p class="text-[11px] text-neutral-400">Sort: <strong class="text-neutral-200">Kitchen Favorite &amp; Freshness</strong></p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button type="button" onclick="state.catalogCategory='all'; render();" class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${state.catalogCategory === 'all' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#202020] text-neutral-300 hover:bg-[#282828] border border-white/5'}">
              All Creations (${counts.all})
            </button>
            <button type="button" onclick="state.catalogCategory='sambal'; render();" class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${state.catalogCategory === 'sambal' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#202020] text-neutral-300 hover:bg-[#282828] border border-white/5'}">
              Artisanal Sambal (${counts.sambal})
            </button>
            <button type="button" onclick="state.catalogCategory='snacks'; render();" class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${state.catalogCategory === 'snacks' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#202020] text-neutral-300 hover:bg-[#282828] border border-white/5'}">
              Crispy Savory Snacks (${counts.snacks})
            </button>
            <button type="button" onclick="state.catalogCategory='bundles'; render();" class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${state.catalogCategory === 'bundles' ? 'bg-gold-400 text-obsidian-950 font-bold' : 'bg-[#202020] text-neutral-300 hover:bg-[#282828] border border-white/5'}">
              Signature Bundles (${counts.bundles})
            </button>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${visibleProducts.map(item => `
            <article class="card-surface card-surface-hover rounded-3xl overflow-hidden flex flex-col">
              <div class="relative h-60 overflow-hidden bg-[#111111]">
                <img
                  src="${item.image}"
                  onerror="this.src='${item.fallbackImage}'"
                  alt="${item.name}"
                  class="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/35"></div>
                <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full ${item.topBadge === 'BESTSELLER' ? 'bg-gold-400 text-obsidian-950 font-extrabold' : 'bg-black/75 text-gold-300 border border-gold-400/30 font-bold'} text-[10px] tracking-wide uppercase">
                  ${item.topBadge}
                </span>
                <span class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-medium text-neutral-200">
                  ${item.weight}
                </span>
                <span class="absolute bottom-3 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-neutral-200">
                  🔥 ${item.spicePill}
                </span>
              </div>

              <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-gold-400 mb-1.5">
                    <span>${item.catalogTag}</span>
                    <span class="text-neutral-300 font-semibold">★ ${item.rating} <span class="text-neutral-500">(${item.reviews})</span></span>
                  </div>
                  <h3 class="text-base font-bold text-white mb-1.5">${item.name}</h3>
                  <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed">${item.shortDesc}</p>
                </div>

                <div class="pt-3 border-t border-white/5 space-y-3.5">
                  <div class="flex items-end justify-between">
                    <div>
                      <p class="text-[9px] font-bold tracking-wider uppercase text-neutral-500">
                        ${item.category === 'bundles' ? 'SPECIAL HAMPER BUNDLE' : 'DIRECT CONCIERGE PRICE'}
                      </p>
                      <p class="text-lg font-extrabold text-gold-400">${formatRupiahDot(item.price)}</p>
                    </div>
                    <span class="text-[11px] font-medium ${item.stockText.includes('Few') || item.stockText.includes('Ribbon') ? 'text-gold-400' : 'text-neutral-400'}">
                      ${item.stockText}
                    </span>
                  </div>

                  <div class="grid grid-cols-2 gap-2.5">
                    <button type="button" onclick="navigate('detail', { productId: '${item.id}' })" class="py-2.5 px-3 rounded-xl bg-[#252525] hover:bg-[#303030] border border-white/10 text-xs font-semibold text-white transition cursor-pointer">
                      Details
                    </button>
                    <button type="button" onclick="orderCatalogProductViaWhatsApp('${item.id}')" class="py-2.5 px-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer">
                      <span>💬</span>
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Concierge Dispatch Banner -->
        <section class="rounded-3xl bg-gradient-to-r from-[#1A1813] via-[#171717] to-[#1D1A12] border border-gold-400/20 p-6 sm:p-8 space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="space-y-2.5 max-w-2xl">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25 text-[11px] font-semibold text-gold-400">
                🚚 Kitchen Direct Dispatch
              </span>
              <h2 class="text-2xl sm:text-3xl font-bold text-white">Personalized Concierge Dispatch, Zero Cold Fees &amp; Guaranteed Freshness</h2>
              <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We slow-cook every batch in small pots without chemical preservatives or artificial fillers. Orders confirmed via WhatsApp are packed within airtight thermal wraps and couriered immediately to lock in maximum kecombrang fragrance.
              </p>
            </div>
            <button type="button" onclick="openWhatsAppConcierge()" class="px-6 py-3.5 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 shrink-0 transition shadow-lg shadow-gold-400/15 cursor-pointer">
              <span>💬</span>
              <span>Start WhatsApp Concierge Order</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div class="rounded-2xl bg-[#121212]/90 border border-white/10 p-4 flex items-start gap-3">
              <span class="text-gold-400 text-base">🏺</span>
              <div>
                <h4 class="text-xs font-bold text-white">Glass-Jar Sealed</h4>
                <p class="text-[11px] text-neutral-400 mt-0.5">Industrial vapor vacuum sealed at 85°C to preserve natural aromatics up to 3 months.</p>
              </div>
            </div>
            <div class="rounded-2xl bg-[#121212]/90 border border-white/10 p-4 flex items-start gap-3">
              <span class="text-gold-400 text-base">⚡</span>
              <div>
                <h4 class="text-xs font-bold text-white">Same-Day Express</h4>
                <p class="text-[11px] text-neutral-400 mt-0.5">Instant courier available across Jabodetabek; reliable thermal express nationwide.</p>
              </div>
            </div>
            <div class="rounded-2xl bg-[#121212]/90 border border-white/10 p-4 flex items-start gap-3">
              <span class="text-gold-400 text-base">🌶</span>
              <div>
                <h4 class="text-xs font-bold text-white">Custom Spice Tuning</h4>
                <p class="text-[11px] text-neutral-400 mt-0.5">Request custom spice levels or bulk hampers directly with our kitchen culinary lead.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      ${renderPublicFooter()}
    </div>
  `;
}

// 3. Halaman Detail Produk & Kalkulator WhatsApp Concierge
function renderProductDetailPage() {
  const product = state.products.find(p => p.id === state.selectedProductId) || state.products[0];
  const totalAmount = product.price * state.detailQuantity;
  const formattedTotalDot = formatRupiahDot(totalAmount);

  return `
    <div class="view-fade flex-1 flex flex-col">
      ${renderPublicNavbar('products', {
        brandSubtext: 'ARTISANAL GASTRONOMY',
        adminBtnLabel: 'Admin Suite',
        showAdminAvatar: true,
        productsLabel: 'Product'
      })}

      <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2 text-xs">
            <button type="button" onclick="navigate('products')" class="text-neutral-400 hover:text-gold-400 transition cursor-pointer">Products</button>
            <span class="text-neutral-600">›</span>
            <span class="text-gold-400 font-semibold">${product.name}</span>
            <span class="px-2 py-0.5 rounded bg-gold-400/15 border border-gold-400/30 text-[10px] font-bold text-gold-400">RESERVE EDITION</span>
          </div>
          <button type="button" onclick="navigate('products')" class="px-4 py-2 rounded-full bg-[#181818] hover:bg-[#222222] border border-white/10 text-xs font-medium text-neutral-300 transition cursor-pointer">
            ← Return to Catalog
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Left Visual Column -->
          <div class="lg:col-span-5 space-y-5">
            <div class="rounded-3xl bg-[#161616] border border-white/10 p-4 space-y-4">
              <div class="flex items-center justify-between text-[11px]">
                <span class="px-2.5 py-1 rounded-full bg-[#222018] border border-gold-400/25 text-gold-400 font-medium">
                  ✓ ${product.packaging}
                </span>
                <span class="text-neutral-300 font-semibold">⏳ ${product.netWt}</span>
              </div>

              <div class="relative rounded-2xl overflow-hidden aspect-square bg-[#101010]">
                <img
                  src="${product.image}"
                  onerror="this.src='${product.fallbackImage}'"
                  alt="${product.detailTitle}"
                  class="w-full h-full object-cover"
                />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-400 text-obsidian-950 text-[10px] font-extrabold uppercase">
                  ${product.topBadge}
                </span>
                <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-neutral-200 font-medium">
                  ${product.weight}
                </span>
                <span class="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-neutral-200">
                  🔥 ${product.spicePill}
                </span>
              </div>

              <div class="grid grid-cols-3 gap-2.5 text-center">
                <div class="rounded-xl bg-[#121212] border border-white/5 p-2.5">
                  <p class="text-xs font-bold text-gold-400">Zero</p>
                  <p class="text-[10px] text-neutral-400 mt-0.5">Chemical Additives</p>
                </div>
                <div class="rounded-xl bg-[#121212] border border-white/5 p-2.5">
                  <p class="text-xs font-bold text-gold-400">Cold-Pressed</p>
                  <p class="text-[10px] text-neutral-400 mt-0.5">Coconut Oil Infused</p>
                </div>
                <div class="rounded-xl bg-[#121212] border border-white/5 p-2.5">
                  <p class="text-xs font-bold text-gold-400">${product.heatLevel}</p>
                  <p class="text-[10px] text-neutral-400 mt-0.5">Sensory Heat Scale</p>
                </div>
              </div>
            </div>

            <div class="rounded-3xl bg-[#161616] border border-white/10 p-5 flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-2xl bg-gold-400/15 text-gold-400 flex items-center justify-center shrink-0 text-base">🌿</div>
              <div>
                <h4 class="text-xs font-bold text-white">Artisanal Botanical Terroir</h4>
                <p class="text-[11px] text-neutral-400 mt-1 leading-relaxed">${product.terroir}</p>
              </div>
            </div>
          </div>

          <!-- Right Specs & Order Formulizer Column -->
          <div class="lg:col-span-7 space-y-6">
            <div class="rounded-3xl bg-[#161616] border border-white/10 p-6 sm:p-7 space-y-5">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-1.5">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25 text-[10px] font-semibold text-gold-400">
                    • Batch #24 • Small Batch Cooked Daily
                  </span>
                  <h1 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">${product.detailTitle}</h1>
                  <p class="text-xs text-neutral-400">${product.subtitle}</p>
                </div>
                <div class="text-left sm:text-right">
                  <p class="text-[10px] font-bold tracking-wider uppercase text-neutral-400">DIRECT CONCIERGE PRICE</p>
                  <p class="text-2xl sm:text-3xl font-extrabold text-gold-400">${formatRupiahComma(product.price)}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-full bg-[#1E1E1E] border border-white/10 text-[11px] text-neutral-300">✓ 100% Natural Botanicals</span>
                <span class="px-3 py-1 rounded-full bg-[#1E1E1E] border border-white/10 text-[11px] text-neutral-300">⊘ Zero Preservatives &amp; MSG</span>
                <span class="px-3 py-1 rounded-full bg-[#1E1E1E] border border-white/10 text-[11px] text-neutral-300">♨ Cooked in Small Copper Woks</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div class="rounded-2xl bg-[#121212] border border-white/5 p-4 space-y-1.5">
                  <h3 class="text-xs font-bold text-gold-400">🌿 Culinary Composition</h3>
                  <p class="text-[11px] text-neutral-300 leading-relaxed">${product.composition}</p>
                </div>
                <div class="rounded-2xl bg-[#121212] border border-white/5 p-4 space-y-1.5">
                  <h3 class="text-xs font-bold text-gold-400">❄ Shelf Life &amp; Care</h3>
                  <p class="text-[11px] text-neutral-300 leading-relaxed">
                    <strong class="text-white">Sealed:</strong> ${product.shelfLifeSealed}<br/>
                    <strong class="text-white">Opened:</strong> ${product.shelfLifeOpened}
                  </p>
                </div>
              </div>
            </div>

            <!-- Concierge Order Formulizer -->
            <div class="rounded-3xl bg-[#161616] border border-gold-400/25 p-6 sm:p-7 space-y-5">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-base">💬</div>
                  <div>
                    <h2 class="text-sm font-bold text-white">Concierge Order Formulizer</h2>
                    <p class="text-[11px] text-neutral-400">Instant WhatsApp checkout with no cumbersome cart registrations</p>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg bg-[#222222] text-[10px] font-semibold text-neutral-300">Step 1 of 1</span>
              </div>

              <div class="rounded-2xl bg-[#121212] border border-white/10 p-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p class="text-[11px] text-neutral-400 mb-2">Select Order Quantity:</p>
                  <div class="inline-flex items-center gap-4 bg-[#1A1A1A] border border-white/10 rounded-full px-2.5 py-1.5">
                    <button type="button" onclick="if(state.detailQuantity > 1){ state.detailQuantity--; render(); }" class="w-7 h-7 rounded-full bg-[#262626] hover:bg-gold-400 hover:text-obsidian-950 text-white font-bold flex items-center justify-center transition cursor-pointer">−</button>
                    <span class="text-sm font-extrabold text-white min-w-[20px] text-center">${state.detailQuantity}</span>
                    <button type="button" onclick="state.detailQuantity++; render();" class="w-7 h-7 rounded-full bg-[#262626] hover:bg-gold-400 hover:text-obsidian-950 text-white font-bold flex items-center justify-center transition cursor-pointer">+</button>
                  </div>
                </div>

                <div class="text-left sm:text-right">
                  <p class="text-[11px] text-neutral-400">Order Total (Excl. Shipping):</p>
                  <p class="text-2xl font-extrabold text-gold-400">${formattedTotalDot}</p>
                  <p class="text-[10px] text-neutral-500">(${state.detailQuantity} pcs × ${formatRupiahComma(product.price)})</p>
                </div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="text-gold-400 font-semibold">📋 Real-Time Concierge Message Dispatch Preview</span>
                  <span class="text-emerald-400 font-mono text-[10px]">Syncs Live</span>
                </div>
                <div class="rounded-2xl bg-[#0D0D0D] border border-white/10 p-4 font-mono text-xs text-neutral-300 relative space-y-1">
                  <span class="sm:absolute sm:top-3 sm:right-3 inline-block mb-2 sm:mb-0 px-2.5 py-0.5 rounded bg-[#1B1B1B] border border-white/10 text-[10px] text-neutral-400">
                    🔒 Encrypted wa.me Dispatch
                  </span>
                  <p class="text-neutral-200">Hello, I would like to order the following product:</p>
                  <p><span class="text-gold-400">Product:</span> ${product.detailTitle}</p>
                  <p><span class="text-gold-400">Quantity:</span> ${state.detailQuantity} pcs</p>
                  <p><span class="text-gold-400">Order Total:</span> ${formattedTotalDot}</p>
                  <p class="text-neutral-400 pt-1">Please provide further information about delivery and payment. Thank you!</p>
                </div>
              </div>

              <button
                type="button"
                onclick="orderCurrentProductViaWhatsApp()"
                class="w-full py-4 px-6 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-sm font-extrabold flex items-center justify-center gap-2.5 transition shadow-lg shadow-gold-400/20 cursor-pointer"
              >
                <span>▷ Order via WhatsApp Now</span>
                <span class="px-2 py-0.5 rounded-md bg-obsidian-950/15 text-[11px] font-mono">wa.me</span>
              </button>

              <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-400 pt-1">
                <button type="button" onclick="navigate('products')" class="hover:text-gold-400 transition cursor-pointer">← Back to Complete Catalog</button>
                <span class="text-gold-400/90">⚡ Instant Kitchen Dispatch Verification</span>
              </div>

              <div class="rounded-xl bg-[#121212] border border-white/5 p-3.5 text-[11px] text-neutral-400 leading-relaxed">
                <strong class="text-neutral-200">Zero internal cart friction.</strong> All orders are verified directly by our kitchen concierge. Courier options (Instant, Same-Day, or Next-Day chilled cargo) calculated during WhatsApp chat based on your delivery postal code.
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-[#161616] border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-start sm:items-center gap-3.5">
            <div class="w-10 h-10 rounded-full bg-gold-400/15 text-gold-400 flex items-center justify-center shrink-0">🍃</div>
            <div>
              <h4 class="text-sm font-bold text-white">Prima Qoe Slow-Craft Guarantee</h4>
              <p class="text-xs text-neutral-400 mt-0.5">Every jar is vacuum sealed immediately following small-batch wok reduction. Unopened jars retain fresh botanical aroma for 90 days at ambient room temperature.</p>
            </div>
          </div>
          <button type="button" onclick="navigate('about')" class="px-4 py-2.5 rounded-xl bg-[#242424] hover:bg-[#2F2F2F] border border-white/10 text-xs font-semibold text-white shrink-0 transition cursor-pointer">
            Read Our Heritage
          </button>
        </div>
      </main>

      ${renderPublicFooter()}
    </div>
  `;
}

// 4. Halaman About Us & Heritage Story
function renderAboutPage() {
  return `
    <div class="view-fade flex-1 flex flex-col">
      ${renderPublicNavbar('about', {
        showArtisanalPill: true,
        adminBtnLabel: 'Admin Portal',
        productsLabel: 'Products'
      })}

      <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        <div class="space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
              <button type="button" onclick="navigate('home')" class="hover:text-gold-400 cursor-pointer">HOME</button>
              <span class="mx-1.5">›</span>
              <span class="text-gold-400">HERITAGE &amp; LINEAGE</span>
            </div>
            <span class="px-3.5 py-1 rounded-full bg-[#191919] border border-gold-400/25 text-[10px] font-bold tracking-wider uppercase text-gold-400">
              EST. 2018 • WEST JAVA HERITAGE
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8 space-y-4">
              <h1 class="text-3xl sm:text-5xl font-bold text-white leading-[1.15]">
                The Art of <span class="font-serif italic text-gold-400 font-normal">Torch Ginger</span>:<br/>
                Honouring Indonesian Lineage
              </h1>
              <p class="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Born from a passion for native botanicals, spice terroir, and slow-simmered craft, PRIMA QOE elevates traditional West Javanese culinary heritage into contemporary artisanal gastronomy.
              </p>
            </div>

            <div class="lg:col-span-4">
              <div class="rounded-2xl bg-[#161616] border border-white/10 p-5 space-y-2">
                <div class="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-gold-400">
                  <span>BOTANICAL PROFILE</span>
                  <span>EST. 2018</span>
                </div>
                <h3 class="text-base font-bold text-white">Etlingera elatior</h3>
                <p class="text-[11px] text-neutral-400 leading-relaxed">
                  Harvested at dawn from volcanic highland plots for maximum citrus-floral essential oils.
                </p>
                <button type="button" onclick="navigate('products')" class="text-[11px] font-semibold text-gold-400 hover:underline pt-1 inline-block cursor-pointer">
                  View Sourcing Provenance →
                </button>
              </div>
            </div>
          </div>
        </div>

        <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 relative">
            <div class="rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#161616]">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85"
                onerror="this.src='https://placehold.co/800x600/1c1c1c/f5c84c?text=Hand+Bottled+Kecombrang'"
                alt="West Javanese Kecombrang Jar"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-right-4 rounded-2xl bg-gold-400 text-obsidian-950 px-4 py-3 shadow-xl">
              <p class="text-xs font-extrabold">100% Pure</p>
              <p class="text-[10px] font-semibold">Kecombrang Petals</p>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-5">
            <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400">BOTANICAL HERITAGE</p>
            <h2 class="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Honouring the Fragile Petal that Defined West Javanese Royalty
            </h2>
            <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              In the mist-draped highlands of Sunda, <strong class="text-gold-400">Bunga Kecombrang</strong> has long been revered as an aristocratic culinary jewel. Its crisp, jewel-toned petals release an intoxicating bouquet of wild ginger, green mango, and delicate rose water.
            </p>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Rather than masking this delicate aroma with industrial vinegar or artificial concentrates, our master chefs hand-slice each blossom and fold it gently into slow-caramelized shallots and cold-pressed coconut oil.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="rounded-2xl bg-[#161616] border border-white/10 p-4">
                <p class="text-xl font-extrabold text-gold-400">0%</p>
                <p class="text-[11px] text-neutral-400 mt-1">Synthetic preservatives, MSG, or artificial food coloring</p>
              </div>
              <div class="rounded-2xl bg-[#161616] border border-white/10 p-4">
                <p class="text-xl font-extrabold text-gold-400">25 Jam</p>
                <p class="text-[11px] text-neutral-400 mt-1">Maximum harvest-to-jar window for peak botanical oil</p>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-8">
          <div class="space-y-2">
            <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400">QUALITY ARCHITECTURE</p>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">Four Pillars of Artisanal Integrity</h2>
            <p class="text-xs sm:text-sm text-neutral-400">Our culinary framework respects the temperament of native spices, ensuring every jar reflects unhurried craftsmanship.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm">🌱</div>
                <h3 class="text-base font-bold text-white">Botanical Terroir</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">Direct-trade partnerships with West Java highland growers cultivating mineral-rich volcanic soil plots.</p>
              </div>
              <div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span class="text-neutral-500 uppercase">STANDARD</span>
                <span class="text-gold-400 font-bold">SINGLE ORIGIN</span>
              </div>
            </div>

            <div class="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm">🛡</div>
                <h3 class="text-base font-bold text-white">Zero Chemical Preservation</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">Preserved naturally through precise oil-to-spice balance and high-temperature vacuum sealing.</p>
              </div>
              <div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span class="text-neutral-500 uppercase">PURITY</span>
                <span class="text-gold-400 font-bold">100% CLEAN LABEL</span>
              </div>
            </div>

            <div class="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm">♨</div>
                <h3 class="text-base font-bold text-white">Small-Batch Copper Woks</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">Cooked in 15kg micro-batches for even heat distribution and deep aromatic caramelization.</p>
              </div>
              <div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span class="text-neutral-500 uppercase">METHOD</span>
                <span class="text-gold-400 font-bold">SLOW REDUCTION</span>
              </div>
            </div>

            <div class="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div class="space-y-3">
                <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm">💬</div>
                <h3 class="text-base font-bold text-white">Direct WhatsApp Concierge</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">Bespoke order coordination, custom heat tuning, and direct thermal courier dispatch from our kitchen.</p>
              </div>
              <div class="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span class="text-neutral-500 uppercase">SERVICE</span>
                <span class="text-gold-400 font-bold">BESPOKE DISPATCH</span>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400 mb-1">PRODUCTION CADENCE</p>
              <h2 class="text-2xl sm:text-3xl font-bold text-white">From Volcanic Dawn to Dining Table</h2>
            </div>
            <p class="text-xs text-neutral-400 max-w-md">A four-stage culinary protocol designed to lock delicate volatile floral oils inside every sealed jar.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between text-[10px] font-bold text-gold-400">
                <span>PHASE 01</span>
                <span class="text-neutral-500">05:30 WIB</span>
              </div>
              <h3 class="text-sm font-bold text-white">Dawn Harvest</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">Hand-selecting tight, dew-kissed kecombrang buds before midday sun volatilizes their essential oils.</p>
              <p class="text-[10px] text-gold-400 pt-2">📍 Highland Ciwidey</p>
            </div>

            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between text-[10px] font-bold text-gold-400">
                <span>PHASE 02</span>
                <span class="text-neutral-500">10:00 WIB</span>
              </div>
              <h3 class="text-sm font-bold text-white">Slow Wok Simmer</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">Four hours of patient low-flame reduction infusing shallots, bird’s eye chillies, and pure coconut oil.</p>
              <p class="text-[10px] text-gold-400 pt-2">♨ Low-Flame Copper Wok</p>
            </div>

            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between text-[10px] font-bold text-gold-400">
                <span>PHASE 03</span>
                <span class="text-neutral-500">14:30 WIB</span>
              </div>
              <h3 class="text-sm font-bold text-white">Vacuum Hot-Bottling</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">Immediate transfer into sterilized 200g hexagonal glass jars with tamper-evident gold lids.</p>
              <p class="text-[10px] text-gold-400 pt-2">🏺 Sterile Thermal Seal</p>
            </div>

            <div class="card-surface rounded-2xl p-5 space-y-3">
              <div class="flex items-center justify-between text-[10px] font-bold text-gold-400">
                <span>PHASE 04</span>
                <span class="text-neutral-500">16:00 WIB</span>
              </div>
              <h3 class="text-sm font-bold text-white">Direct Courier Dispatch</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">Hand-labeled and dispatched via instant or insulated express courier straight to your dining table.</p>
              <p class="text-[10px] text-gold-400 pt-2">🚚 Same-Day Concierge</p>
            </div>
          </div>
        </section>

        <section class="rounded-3xl bg-[#161616] border border-white/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5">
            <div class="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=85"
                onerror="this.src='https://placehold.co/800x600/1c1c1c/f5c84c?text=Kentang+Mustofa'"
                alt="Artisanal Kentang Mustofa"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="lg:col-span-7 space-y-4">
            <p class="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400">SIGNATURE ACCOMPANIMENT</p>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">The Crispy Harmony: Artisanal Kentang Mustofa</h2>
            <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Beyond our signature sambals, PRIMA QOE celebrates the textural contrast of heritage Indonesian dining. Our Dieng highland potatoes are julienned to uniform 2mm threads, rinsed of excess starch, and glazed in caramelized palm sugar and aromatic kaffir lime.
            </p>
            <div class="flex flex-wrap gap-5 pt-2 text-xs text-gold-400 font-semibold">
              <span>✦ Zero-Oil-Soggy Technique</span>
              <span>✦ Double-Caramelized Palm Glaze</span>
            </div>
          </div>
        </section>

        <section class="text-center max-w-3xl mx-auto space-y-6 py-4">
          <div class="flex justify-center">
            ${renderBrandLogoSVG('w-16 h-16')}
          </div>
          <p class="text-gold-400 text-2xl font-serif">”</p>
          <blockquote class="font-serif italic text-xl sm:text-2xl text-neutral-100 leading-relaxed">
            “Every jar tells a story of fragrant Indonesian soil, volcanic mist, and uncompromised culinary patience. We do not rush nature, and we will never dilute our craft.”
          </blockquote>
          <p class="text-[11px] font-bold tracking-[0.16em] uppercase text-gold-400">PRIMA QOE CULINARY ATELIER</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div class="rounded-xl bg-[#161616] border border-white/10 py-3 px-4 text-[11px] text-neutral-300 font-semibold">100% Halal Certified</div>
            <div class="rounded-xl bg-[#161616] border border-white/10 py-3 px-4 text-[11px] text-neutral-300 font-semibold">P-IRT Registered</div>
            <div class="rounded-xl bg-[#161616] border border-white/10 py-3 px-4 text-[11px] text-neutral-300 font-semibold">Small-Batch Daily</div>
            <div class="rounded-xl bg-[#161616] border border-white/10 py-3 px-4 text-[11px] text-neutral-300 font-semibold">Vacuum Sealed</div>
          </div>
        </section>

        <section class="rounded-3xl bg-gradient-to-r from-[#1A1813] to-[#231E12] border border-gold-400/25 p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="space-y-2 max-w-xl">
            <p class="text-[10px] font-bold tracking-widest uppercase text-gold-400">TASTE THE HERITAGE</p>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">Experience Our Artisanal Relishes &amp; Crispy Delicacies</h2>
            <p class="text-xs text-neutral-400">Order fresh small-batch jars directly from our South Jakarta kitchen for same-day courier delivery.</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <button type="button" onclick="navigate('products')" class="px-6 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-bold transition cursor-pointer">
              Explore Product Catalog →
            </button>
            <button type="button" onclick="openWhatsAppConcierge()" class="px-6 py-3.5 rounded-full bg-[#191919] hover:bg-[#232323] border border-white/15 text-xs font-semibold text-white transition cursor-pointer">
              💬 WhatsApp Concierge
            </button>
          </div>
        </section>
      </main>

      ${renderPublicFooter()}
    </div>
  `;
}

// 5. Halaman Contact & Culinary Concierge
function getJarTierLabel(jars) {
  if (jars === 1) return '1 Jar • Single Taster';
  if (jars <= 10) return `${jars} Jars • Family & Gifting`;
  if (jars <= 40) return `${jars} Jars • Hamper Tier`;
  return `${jars} Jars • Atelier Bulk`;
}

function handleContactFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim() || 'Valued Guest';
  const phone = document.getElementById('contact-phone').value.trim() || '-';
  const category = document.getElementById('contact-category').value;
  const details = document.getElementById('contact-details').value.trim();

  showToast('Priority Inquiry Logged', `Thank you, ${name}. Connecting to our WhatsApp Kitchen Concierge...`);
  const waText = `Hello PRIMA QOE Concierge,\nName: ${name}\nPhone: ${phone}\nCategory: ${category}\nEstimated Quantity: ${state.contactJarEstimate} Jars\nNotes: ${details || 'Standard bespoke order'}`;
  openWhatsAppConcierge(waText);
}

function renderContactPage() {
  const faqs = [
    {
      q: 'How long does PRIMA QOE Sambal Kecombrang stay fresh?',
      a: 'Unopened vacuum-sealed glass jars retain peak botanical aroma for up to 3 months in a cool, dark pantry. Once opened, store refrigerated and always use a clean, dry spoon for up to 3–4 weeks.'
    },
    {
      q: 'Can I request personalized label branding for hampers?',
      a: 'Yes! For corporate gifts, weddings, and private events (minimum 12 hampers), our atelier provides custom wax-sealed calligraphy tags, satin ribbon color matching, and bespoke greeting cards.'
    },
    {
      q: 'Do you dispatch across Indonesia and overseas?',
      a: 'We offer Same-Day Instant Courier across Jabodetabek (for orders confirmed before 15:00 WIB) and insulated Next-Day / Express air cargo to major cities across Indonesia and Singapore.'
    }
  ];

  return `
    <div class="view-fade flex-1 flex flex-col">
      ${renderPublicNavbar('contact', {
        showArtisanalPill: true,
        adminBtnLabel: 'Admin Portal',
        productsLabel: 'Products'
      })}

      <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
        <div class="space-y-4">
          <div class="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
            <button type="button" onclick="navigate('home')" class="hover:text-gold-400 cursor-pointer">HOME</button>
            <span class="mx-1.5">›</span>
            <span class="text-gold-400">CONTACT &amp; CONCIERGE</span>
          </div>

          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div class="space-y-2.5 max-w-2xl">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25 text-[10px] font-bold tracking-wider uppercase text-gold-400">
                👨‍🍳 DIRECT KITCHEN ATELIER
              </span>
              <h1 class="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
                CULINARY CONCIERGE &amp; ATELIER CONTACT
              </h1>
              <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Connect directly with our master kitchen team for direct orders, bespoke hamper curation, and private culinary inquiries. Zero automated bots—every jar is tailored with meticulous care.
              </p>
            </div>

            <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#171717] border border-white/10 text-[10px] font-bold tracking-wider uppercase text-neutral-300 self-start lg:self-end">
              <span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              KITCHEN ACTIVE • DISPATCHING TODAY'S SMALL BATCHES
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          <div class="lg:col-span-5 space-y-6">
            <div class="rounded-3xl bg-[#161616] border border-white/10 p-6 space-y-4">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-2xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-lg">💬</div>
                  <div>
                    <h3 class="text-sm font-bold text-white">Direct WhatsApp Concierge</h3>
                    <p class="text-[11px] text-neutral-400">Private Line &amp; Personalized Dispatch</p>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-[9px] font-bold uppercase text-gold-400">
                  • ACTIVE ONLINE
                </span>
              </div>

              <div class="rounded-2xl bg-[#101010] border border-white/10 p-3.5 flex items-center justify-between gap-2">
                <div>
                  <p class="text-[9px] font-bold tracking-wider uppercase text-neutral-500">OFFICIAL CONCIERGE LINE</p>
                  <p class="text-base font-extrabold text-gold-400 font-mono mt-0.5">+62 812-8899-7700</p>
                </div>
                <button type="button" onclick="copyTextToClipboard('+62 812-8899-7700', 'Concierge Number Copied')" class="px-3 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-white/10 text-xs font-medium text-neutral-200 transition cursor-pointer">
                  📋 Copy
                </button>
              </div>

              <div class="flex items-center justify-between text-[11px] text-neutral-400">
                <span>⏱ Avg. Response: &lt; 15 mins</span>
                <span class="text-gold-400">✓ Verified Chef Line</span>
              </div>

              <button type="button" onclick="openWhatsAppConcierge()" class="w-full py-3.5 px-5 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-extrabold tracking-wide uppercase transition cursor-pointer">
                INITIATE WHATSAPP CHAT →
              </button>
            </div>

            <div class="rounded-3xl bg-[#161616] border border-white/10 p-6 space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm">🏛</div>
                <div>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-white">KITCHEN ATELIER &amp; DISPATCH HUB</h3>
                  <p class="text-[11px] text-neutral-400">Central Culinary Studio Jakarta</p>
                </div>
              </div>

              <div class="text-xs text-neutral-300 space-y-0.5">
                <p class="font-semibold text-white">Jl. Senopati Raya No. 42, Kebayoran Baru</p>
                <p class="text-neutral-400">Jakarta Selatan, DKI Jakarta 12190 • Indonesia</p>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="rounded-xl bg-[#111111] border border-white/5 p-3">
                  <p class="text-[9px] font-bold uppercase text-neutral-500">HOURS</p>
                  <p class="text-[11px] font-bold text-white mt-0.5">Mon – Sat: 08:00 – 18:00 WIB</p>
                </div>
                <div class="rounded-xl bg-[#111111] border border-white/5 p-3">
                  <p class="text-[9px] font-bold uppercase text-neutral-500">SAME-DAY CUTOFF</p>
                  <p class="text-[11px] font-bold text-gold-400 mt-0.5">15:00 WIB Daily</p>
                </div>
              </div>

              <div class="relative rounded-2xl overflow-hidden h-36 bg-[#1C242B] border border-white/10">
                <svg viewBox="0 0 400 160" class="w-full h-full opacity-80">
                  <rect width="400" height="160" fill="#18222C"/>
                  <path d="M0 40 L400 95 M60 0 L150 160 M260 0 L210 160 M0 120 L400 60" stroke="#2D3D4E" stroke-width="6"/>
                  <path d="M120 0 L290 160" stroke="#F5C84C" stroke-opacity="0.35" stroke-width="3" stroke-dasharray="6 4"/>
                  <circle cx="195" cy="78" r="18" fill="#F5C84C" fill-opacity="0.2"/>
                  <circle cx="195" cy="78" r="6" fill="#F5C84C"/>
                  <text x="200" y="55" text-anchor="middle" fill="#94A3B8" font-size="11" font-family="Inter, sans-serif">South Jakarta • Senopati</text>
                </svg>
                <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                  <span class="px-2.5 py-1 rounded-lg bg-black/80 text-[10px] font-semibold text-gold-400">📍 Kebayoran Baru Atelier</span>
                  <span class="px-2.5 py-1 rounded-lg bg-gold-400 text-obsidian-950 text-[10px] font-bold">Pick-up Available</span>
                </div>
              </div>
            </div>

            <div class="rounded-3xl bg-[#161616] border border-white/10 p-6 space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center text-sm">🎁</div>
                <div>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-white">CORPORATE &amp; BESPOKE EVENTS</h3>
                  <p class="text-[11px] text-neutral-400">Customized Gifting &amp; Bulk Jars</p>
                </div>
              </div>
              <p class="text-xs text-neutral-400 leading-relaxed">
                Curate signature wooden boxes, custom wax-sealed labels, and custom spice-level selections for executive gifts, weddings, and premium gatherings.
              </p>
              <div class="flex flex-wrap gap-4 text-[11px] font-semibold text-gold-400 pt-1">
                <span>✦ Custom Ribbon &amp; Tag</span>
                <span>✦ Bulk Invoicing</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <form onsubmit="handleContactFormSubmit(event)" class="rounded-3xl bg-[#161616] border border-white/10 p-6 sm:p-8 space-y-5">
              <div>
                <p class="text-[10px] font-bold tracking-[0.14em] uppercase text-gold-400 mb-1">PRIORITY DISPATCH FORM</p>
                <h2 class="text-xl sm:text-2xl font-bold text-white">SEND A DIRECT CULINARY INQUIRY</h2>
                <p class="text-xs text-neutral-400 mt-1">Share your desired quantities or bespoke requirements. Our concierge contacts you personally via WhatsApp within operational hours.</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">FULL NAME *</label>
                  <input id="contact-name" type="text" required placeholder="e.g. Raden Ayu" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white placeholder-neutral-600" />
                </div>
                <div class="space-y-1.5">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">WHATSAPP / PHONE NUMBER *</label>
                  <input id="contact-phone" type="tel" required placeholder="e.g. +62 812 3456 7890" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white placeholder-neutral-600" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">EMAIL ADDRESS (OPTIONAL)</label>
                  <input id="contact-email" type="email" placeholder="name@domain.com" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white placeholder-neutral-600" />
                </div>
                <div class="space-y-1.5">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">INQUIRY CATEGORY *</label>
                  <select id="contact-category" class="w-full rounded-xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none px-4 py-3 text-xs text-white">
                    <option>Direct Jar Order (Ready Stock)</option>
                    <option>Signature Royal Gourmet Hamper</option>
                    <option>Corporate &amp; Event Bulk Gifting</option>
                    <option>Custom Spice Level Batch</option>
                  </select>
                </div>
              </div>

              <div class="rounded-2xl bg-[#101010] border border-white/10 p-4 space-y-3">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">ESTIMATED JARS NEEDED</span>
                  <span id="jar-estimate-pill" class="px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-[11px] font-bold text-gold-400">
                    ${getJarTierLabel(state.contactJarEstimate)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="${state.contactJarEstimate}"
                  oninput="state.contactJarEstimate = parseInt(this.value, 10); document.getElementById('jar-estimate-pill').textContent = getJarTierLabel(state.contactJarEstimate);"
                  class="w-full gold-slider cursor-pointer"
                />
                <div class="flex items-center justify-between text-[10px] text-neutral-500">
                  <span>1 Jar (Single Taster)</span>
                  <span>25 Jars (Hamper Tier)</span>
                  <span>100+ Jars (Atelier Bulk)</span>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">MESSAGE &amp; CUSTOMIZATION DETAILS *</label>
                <textarea id="contact-details" rows="4" required placeholder="Detail your flavor preferences, delivery date expectations, or custom packaging instructions..." class="w-full rounded-2xl bg-[#101010] border border-white/10 focus:border-gold-400/50 focus:outline-none p-4 text-xs text-white placeholder-neutral-600"></textarea>
              </div>

              <p class="text-[11px] text-neutral-400 flex items-center gap-1.5">
                <span class="text-gold-400">🛡</span>
                We respect your privacy. No spam. Direct personal responses only.
              </p>

              <button type="submit" class="w-full py-4 px-6 rounded-2xl bg-gold-400 hover:bg-gold-300 text-obsidian-950 text-xs font-extrabold uppercase tracking-wider transition shadow-lg shadow-gold-400/15 cursor-pointer">
                SUBMIT INQUIRY TO CONCIERGE ▷
              </button>
            </form>

            <div class="rounded-3xl bg-[#161616] border border-white/10 p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                <span class="text-gold-400">?</span> CONCIERGE &amp; ORDER FAQ
              </h3>
              ${faqs.map((faq, idx) => `
                <div class="rounded-2xl bg-[#111111] border border-white/5 overflow-hidden">
                  <button type="button" onclick="state.openFaqIndex = state.openFaqIndex === ${idx} ? -1 : ${idx}; render();" class="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-xs font-semibold text-neutral-200 hover:text-gold-400 transition cursor-pointer">
                    <span>${faq.q}</span>
                    <span class="text-gold-400">${state.openFaqIndex === idx ? '▴' : '▾'}</span>
                  </button>
                  ${state.openFaqIndex === idx ? `
                    <div class="px-4 pb-3.5 text-[11px] text-neutral-400 leading-relaxed border-t border-white/5 pt-2.5">
                      ${faq.a}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <section class="space-y-6 pt-4">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p class="text-[10px] font-bold tracking-[0.14em] uppercase text-gold-400 mb-1">KITCHEN TRACEABILITY</p>
              <h2 class="text-2xl font-bold text-white">THE CRAFT BEHIND EVERY BATCH</h2>
              <p class="text-xs text-neutral-400 mt-1">Peek inside our pristine South Jakarta atelier. Micro-batch kettle cooking ensures untouched botanical aroma and uncompromising sanitation standards.</p>
            </div>
            <span class="text-[10px] font-bold tracking-wider uppercase text-gold-400">✓ BATCH CERTIFIED ARTISANAL QUALITY</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-surface rounded-3xl overflow-hidden">
              <div class="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" onerror="this.src='https://placehold.co/600x400/1c1c1c/f5c84c?text=Raw+Flora'" alt="Wild Torch Ginger Petals" class="w-full h-full object-cover"/>
              </div>
              <div class="p-5 space-y-1.5">
                <p class="text-[10px] font-bold uppercase tracking-wider text-gold-400">STEP 01 • RAW FLORA</p>
                <h3 class="text-sm font-bold text-white">Wild Torch Ginger Petals</h3>
                <p class="text-xs text-neutral-400">Sourced directly from highland plantations within 24 hours of morning harvest.</p>
              </div>
            </div>

            <div class="card-surface rounded-3xl overflow-hidden">
              <div class="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" onerror="this.src='https://placehold.co/600x400/1c1c1c/f5c84c?text=Copper+Wok+Simmering'" alt="Slow Copper Simmering" class="w-full h-full object-cover"/>
              </div>
              <div class="p-5 space-y-1.5">
                <p class="text-[10px] font-bold uppercase tracking-wider text-gold-400">STEP 02 • SLOW EXTRACTION</p>
                <h3 class="text-sm font-bold text-white">Slow Copper Simmering</h3>
                <p class="text-xs text-neutral-400">Reduced for 4 continuous hours over low fire to infuse deep caramelized citrus warmth.</p>
              </div>
            </div>

            <div class="card-surface rounded-3xl overflow-hidden">
              <div class="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80" onerror="this.src='https://placehold.co/600x400/1c1c1c/f5c84c?text=Thermal+Sealing'" alt="Aseptic Thermal Sealing" class="w-full h-full object-cover"/>
              </div>
              <div class="p-5 space-y-1.5">
                <p class="text-[10px] font-bold uppercase tracking-wider text-gold-400">STEP 03 • BESPOKE FINISH</p>
                <h3 class="text-sm font-bold text-white">Aseptic Thermal Sealing</h3>
                <p class="text-xs text-neutral-400">Sealed under sterile vacuum with wax-finished tamper tags for guaranteed purity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      ${renderPublicFooter()}
    </div>
  `;
}

// 6. Halaman Dokumentasi Material Design 3 Obsidian Edition
function renderDesignSystemPage() {
  const tokens = [
    { name: 'Obsidian Base', hex: '#0E0E0E', role: 'Background Surface' },
    { name: 'Surface Card', hex: '#171717', role: 'Elevated Container' },
    { name: 'Charcoal Border', hex: '#2A2A2A', role: 'Outline / Divider' },
    { name: 'Champagne Gold', hex: '#F5C84C', role: 'Primary Action Accent' },
    { name: 'Light Gold', hex: '#FCE08B', role: 'Hover / Highlight' },
    { name: 'Deep Amber', hex: '#C4941E', role: 'Pressed / Border Tone' },
  ];

  return `
    <div class="view-fade flex-1 flex flex-col">
      ${renderPublicNavbar('home', { showArtisanalPill: true })}

      <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8">
          <div class="space-y-2 max-w-2xl">
            <p class="text-[11px] font-bold tracking-widest uppercase text-gold-400">PRIMA QOE UI TOKEN ARCHITECTURE</p>
            <h1 class="text-3xl sm:text-4xl font-bold text-white">Premium Black &amp; Gold <span class="text-gold-400">Modern Material Design 3</span></h1>
            <p class="text-xs sm:text-sm text-neutral-400">Unified design tokens powering the PRIMA QOE Public Storefront, Concierge Formulizer, and Kitchen Admin Workspace.</p>
          </div>
          <button type="button" onclick="navigate('home')" class="px-5 py-2.5 rounded-full bg-gold-400 text-obsidian-950 text-xs font-bold cursor-pointer">
            ← Back to Storefront
          </button>
        </div>

        <section class="space-y-4">
          <h2 class="text-xl font-bold text-white">Color Palette &amp; MD3 Token Matrix</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            ${tokens.map(t => `
              <div class="card-surface rounded-2xl overflow-hidden">
                <div class="h-24" style="background-color: ${t.hex}"></div>
                <div class="p-3.5 space-y-1">
                  <p class="text-xs font-bold text-white">${t.name}</p>
                  <p class="text-[11px] font-mono text-gold-400">${t.hex}</p>
                  <p class="text-[10px] text-neutral-400">${t.role}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="card-surface rounded-3xl p-6 sm:p-8 space-y-5">
          <h2 class="text-xl font-bold text-white">Typography System (Inter &amp; Roboto Scale)</h2>
          <div class="divide-y divide-white/5 space-y-4">
            <div class="pt-3 flex flex-wrap items-baseline justify-between gap-4">
              <span class="text-xs font-mono text-gold-400">Display Large</span>
              <span class="text-3xl sm:text-4xl font-extrabold text-white">PRIMA QOE</span>
              <span class="text-xs text-neutral-400">48px / Bold / -0.02em</span>
            </div>
            <div class="pt-3 flex flex-wrap items-baseline justify-between gap-4">
              <span class="text-xs font-mono text-gold-400">Headline Medium</span>
              <span class="text-2xl font-bold text-white">Artisanal Sambal Kecombrang</span>
              <span class="text-xs text-neutral-400">28px / Bold / -0.01em</span>
            </div>
            <div class="pt-3 flex flex-wrap items-baseline justify-between gap-4">
              <span class="text-xs font-mono text-gold-400">Title Medium</span>
              <span class="text-lg font-semibold text-white">Concierge Order Formulizer</span>
              <span class="text-xs text-neutral-400">18px / SemiBold</span>
            </div>
            <div class="pt-3 flex flex-wrap items-baseline justify-between gap-4">
              <span class="text-xs font-mono text-gold-400">Body Medium</span>
              <span class="text-sm text-neutral-300">Hand-picked wild torch ginger flowers slow-cooked in small copper kettles.</span>
              <span class="text-xs text-neutral-400">14px / Regular</span>
            </div>
          </div>
        </section>
      </main>

      ${renderPublicFooter()}
    </div>
  `;
}
function render() {
  const app = document.getElementById('app');

  switch (state.currentRoute) {
    case 'home':
      app.innerHTML = renderHomePage();
      break;
    case 'products':
      app.innerHTML = renderProductsCatalogPage();
      break;
    case 'detail':
      app.innerHTML = renderProductDetailPage();
      break;
    case 'about':
      app.innerHTML = renderAboutPage();
      break;
    case 'contact':
      app.innerHTML = renderContactPage();
      break;
    case 'login':
      app.innerHTML = renderAdminLoginPage();
      break;
    case 'admin-dashboard':
      app.innerHTML = renderAdminDashboardPage();
      break;
    case 'admin-catalog':
      app.innerHTML = renderAdminCatalogPage();
      break;
    case 'admin-add-product':
      app.innerHTML = renderAdminAddProductPage();
      break;
    case 'design-system':
      app.innerHTML = renderDesignSystemPage();
      break;
    default:
      app.innerHTML = renderHomePage();
  }
}

// Jalankan aplikasi saat dokumen selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
  render();
});
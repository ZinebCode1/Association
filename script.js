document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const closeMenuButton = document.getElementById("close-menu-button")
  const mobileMenuLinks = mobileMenu.querySelectorAll("a")

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden")
  }

  menuButton.addEventListener("click", toggleMobileMenu)
  closeMenuButton.addEventListener("click", toggleMobileMenu)

  // Close menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", toggleMobileMenu)
  })

  // Close menu when clicking outside (on the overlay)
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      toggleMobileMenu()
    }
  })
})

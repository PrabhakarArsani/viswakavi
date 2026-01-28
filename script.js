document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  // Always ensure page scrolling is enabled on load
  document.body.style.overflow = '';

  if (!navToggle || !navLinks || !navOverlay) {
    return;
  }

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking overlay
  navOverlay.addEventListener('click', function() {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking on a nav link
  const navLinkItems = document.querySelectorAll('.nav-links a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Simple content reveal: mark key elements visible once DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.card, .program-card, .gallery-item, .timeline-item, .achievement-card');
  reveals.forEach(el => el.classList.add('visible'));
});

// Animate timeline dots
window.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.timeline-dot');
  dots.forEach((dot, i) => {
    setTimeout(() => dot.classList.add('pop'), 200 + i * 200);
  });
});

const galleryManifest = {
  celebrations: {
    folder: 'celebrations',
    images: [
      'WhatsApp Image 2025-11-12 at 11.33.18_5199e696.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.19_17b8bbb3.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.20_66d6cd60.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.21_6ada94a2.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.22_34adcda7.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.23_9502f2dd.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.24_7abb7246.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.25_ad040f08.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.26_afe126ae.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.27_1032e0f1.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.28_f089c4a6.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.29_260340e2.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.31_da3e72ea.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.32_cdbcb38a.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.33_81ebe70e.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.34_6e32feb5.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.35_21f9107d.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.37_fa5ff06e.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.38_66c68211.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.38_a75b39e4.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.39_3c4fe22d.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.41_b310ab3c.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.42_8e162080.jpg',
      'WhatsApp Image 2025-11-12 at 11.33.42_c342b88f.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.05_6fd7628e.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.49_246a4c00.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.52_3dfc4021.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.54_b30ea5a6.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.01_56f896aa.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.09_b640301d.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.13_77d7ee0c.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.15_48cca202.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.17_034b50d7.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.19_f9f3021c.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.21_34be7ae3.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.24_35ed9697.jpg'
    ]
  },
  classes: {
    folder: 'classes',
    images: [
      'WhatsApp Image 2025-11-12 at 11.35.10_365d7db1.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.22_d0dae80e.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.27_0c4225f9.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.29_45233fd7.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.48_d6abde2d.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.49_3aa82be0.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.55_96f33db8.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.05_0a48372b.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.10_b490fced.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.11_f0b4c20d.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.15_41319b0f.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.16_7d0180a2.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.18_8c3e4687.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.45_e3312871.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.48_0bf83884.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.51_88c8573b.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.59_45f48768.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.11_271916ae.jpg'
    ]
  },
  'dancing-stars': {
    folder: 'dancing stars',
    images: [
      'WhatsApp Image 2025-11-12 at 11.38.42_77b89ef7.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.43_4b86d085.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.45_22ae3b51.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.46_18c0dfee.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.51_18d5b22c.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.53_04544310.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.13_e24fde47.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.46_96b588ef.jpg'
    ]
  },
  school: {
    folder: 'school',
    images: [
      'WhatsApp Image 2025-11-12 at 11.35.13_59d59718.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.16_318eb28b.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.18_47a292d5.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.20_242f8aec.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.24_70bd1210.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.26_b6bf1806.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.31_f751b552.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.33_68ee276f.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.55_a239c2bd.jpg',
      'WhatsApp Image 2025-11-12 at 11.41.58_d1c19d9b.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.03_5d31f8de.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.05_b0959baf.jpg',
      'WhatsApp Image 2025-11-12 at 11.42.07_8ff13cad.jpg'
    ]
  },
  sports: {
    folder: 'sports',
    images: [
      'WhatsApp Image 2025-11-12 at 11.35.40_b348c2bc.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.42_b2e1333f.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.43_298655ba.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.45_3cc32962.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.47_64fe17db.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.57_c9228c39.jpg',
      'WhatsApp Image 2025-11-12 at 11.38.58_647e6424.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.00_69913b9a.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.02_6d1c0291.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.03_d60fc11d.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.07_27794c09.jpg',
      'WhatsApp Image 2025-11-12 at 11.39.08_536d96d4.jpg'
    ]
  },
  yoga: {
    folder: 'yoga',
    images: [
      'WhatsApp Image 2025-11-12 at 11.35.08_825b26c5.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.12_503e233c.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.35_8f3ff6bf.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.37_8e8295e6.jpg',
      'WhatsApp Image 2025-11-12 at 11.35.38_dd30205f.jpg'
    ]
  }
};

function populateGallerySections() {
  const sections = document.querySelectorAll('[data-gallery]');
  sections.forEach(section => {
    const key = section.dataset.gallery;
    const config = galleryManifest[key];
    const grid = section.querySelector('.gallery-grid');
    if (!config || !grid) {
      return;
    }
    grid.innerHTML = '';
    const encodedFolder = config.folder.split('/').map(encodeURIComponent).join('/');
    const titleText = section.querySelector('.gallery-section-title')?.textContent?.trim() || key;

    config.images.forEach((fileName, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = `images/${encodedFolder}/${encodeURIComponent(fileName)}`;
      img.alt = `${titleText} image ${index + 1}`;
       img.dataset.galleryKey = key;
       img.dataset.imageIndex = String(index);
      item.appendChild(img);
      grid.appendChild(item);
    });
  });
}

function setupGalleryShowMore() {
  const sections = document.querySelectorAll('[data-gallery]');
  sections.forEach(section => {
    const items = Array.from(section.querySelectorAll('.gallery-item'));
    const toggleBtn = section.querySelector('.show-more-btn');
    const initialVisible = parseInt(section.dataset.initialVisible || '', 10);
    const visibleCount = Number.isFinite(initialVisible) ? initialVisible : 8;

    if (!toggleBtn || items.length <= visibleCount) {
      if (toggleBtn) {
        toggleBtn.setAttribute('hidden', '');
      }
      return;
    }

    items.forEach((item, index) => {
      if (index >= visibleCount) {
        item.classList.add('is-hidden');
      }
    });

    toggleBtn.addEventListener('click', () => {
      const expanded = section.classList.toggle('is-expanded');
      toggleBtn.textContent = expanded ? 'Show Less' : 'Show More';
      toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');

      items.forEach((item, index) => {
        if (index >= visibleCount) {
          item.classList.toggle('is-hidden', !expanded);
        }
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', function() {
  populateGallerySections();
  setupGalleryShowMore();
  setupGalleryLightbox();
});

// Gallery "Show More" toggles
// (legacy hook removed in favor of populateGallerySections + setupGalleryShowMore)

// Contact form validation and WhatsApp redirect
window.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      
      // Validation
      if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
      
      // Format message for WhatsApp
      const whatsappMessage = `Hello! I would like to get in touch with Viswakavi Concept School.

*Contact Details:*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

*Message:*
${message}

Thank you!`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // WhatsApp number from contact page
      const whatsappNumber = '9000313823';
      
      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}); 

function setupGalleryLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const counter = lightbox.querySelector('.lightbox-counter');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentKey = null;
  let currentIndex = 0;

  const encodePath = (folder, file) =>
    `images/${folder.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(file)}`;

  function updateLightbox() {
    if (!currentKey) return;
    const config = galleryManifest[currentKey];
    if (!config) return;
    const fileName = config.images[currentIndex];
    lightboxImage.src = encodePath(config.folder, fileName);
    lightboxImage.alt = `${config.folder} image ${currentIndex + 1}`;
    counter.textContent = `${currentIndex + 1} / ${config.images.length}`;
    prevBtn.disabled = config.images.length <= 1;
    nextBtn.disabled = config.images.length <= 1;
  }

  function openLightbox(key, index) {
    const config = galleryManifest[key];
    if (!config) return;
    currentKey = key;
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    currentKey = null;
  }

  function changeImage(delta) {
    if (!currentKey) return;
    const config = galleryManifest[currentKey];
    if (!config) return;
    currentIndex = (currentIndex + delta + config.images.length) % config.images.length;
    updateLightbox();
  }

  document.querySelectorAll('[data-gallery] .gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const key = img.dataset.galleryKey;
      const index = Number(img.dataset.imageIndex || 0);
      openLightbox(key, index);
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => changeImage(-1));
  nextBtn?.addEventListener('click', () => changeImage(1));

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (event.key === 'ArrowRight') {
      changeImage(1);
    }
  });
}
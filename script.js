document.addEventListener('DOMContentLoaded', () => {
    const leafContainer = document.querySelector('.falling-leaves');
    const leafTypes = [
        'img1.webp', 'img2.png', 'img3.png', 
        'img4.webp', 'img5.png', 'img6.png', 
        'img7.webp', 'img8.png'
    ];
    
    // פונקציה ליצירת עלה חדש
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // בחירה אקראית של תמונת עלה
        const randomLeaf = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        const leafIndex = leafTypes.indexOf(randomLeaf) + 1;
        
        leaf.classList.add('leaf' + leafIndex); // הוספת מחלקה מותאמת לכל עלה
        leaf.style.left = `${Math.random() * 100}%`; // מיקום אקראי ב-X
        leaf.style.animationDuration = `${Math.random() * 7 + 12}s`; // משך אנימציה אקראי בין 7 ל-12 שניות
        leaf.style.animationDelay = `${Math.random() * 5}s`; // עיכוב אקראי בין 0 ל-5 שניות
        
        // הוספת העלה לאלמנט של העלים
        leafContainer.appendChild(leaf);
        
        // הסרת העלה אחרי סיום האנימציה
        leaf.addEventListener('animationend', () => {
            leaf.remove();
        });
    }
  
    // יצירת עלה כל 150 מילישניות
    setInterval(createLeaf, 3600);
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector('.side-image img');
  
    // יצירת פונקציה שתפעיל את האנימציה כאשר האלמנט נכנס לתצוגה
    function triggerAnimation() {
      const rect = profileImage.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // אם התמונה נמצאת בתוך חלון התצוגה
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        profileImage.classList.add("hover"); // מוסיף את האנימציה של "עליית עלה"
      }
    }
  
    // ביצוע האנימציה בעת גלילה
    window.addEventListener("scroll", triggerAnimation);
  
    // גם בהעלאת העמוד, לבצע את הבדיקה
    triggerAnimation();
  });
  
  // הוספת אירוע למעקב אחרי הלחיצה על החץ
  document.querySelector(".scroll-down").addEventListener("click", function() {
    // גלילה למטה לפי גובה המסך
    window.scrollTo({
      top: window.innerHeight, // הגלילה תהיה בגובה המסך הנוכחי
      behavior: "smooth" // גלילה חלקה
    });
  });




/*                      תצוגת תמונות                              */


class Carousel {
  constructor(container, items) {
    this.carouselContainer = container;
    this.carouselItems = [...items];
    this.currentIndex = 0; // משתנה לשמירת המיקום הנוכחי
  }

  // עדכון מצב הגלריה
  updateGallery() {
    // הסרת כל המחלקות של התמונות הנוכחיות
    this.carouselItems.forEach((el) => {
      el.classList.remove(
        "gallery-item-1",
        "gallery-item-2",
        "gallery-item-3",
        "gallery-item-4",
        "gallery-item-5",
        "gallery-item-6",
        "gallery-item-7",
        "gallery-item-8",
        "gallery-item-9",
        "gallery-item-10"
      );
    });

    // הוספת מחלקות עם התמונות הנכונות לפי האינדקס הנוכחי
    this.carouselItems.slice(this.currentIndex, this.currentIndex + 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  }

  // שינוי התמונות כל מספר שניות (דינמיות)
  autoChange() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length; // מחשב את האינדקס הבא בצורה מעגלית
      this.updateGallery(); // עדכון התמונות
    }, 3000); // עדכון כל 3 שניות (ניתן לשנות לפי הצורך)
  }
}

// בחירת אלמנטים
const galleryContainer = document.querySelector(".gallery-container");
const galleryItems = document.querySelectorAll(".gallery-item");

// יצירת אובייקט של הגלריה
const exampleCarousel = new Carousel(galleryContainer, galleryItems);

// הפעלת הגלריה עם שינוי אוטומטי
exampleCarousel.autoChange();










/*                              התמונות הגדלה בעת לחיצה                                     */





// פתיחה של תמונה בלחיצה
const images = document.querySelectorAll(".clickable-image");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

images.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = image.src;
  });
});

// סגירת המודאל
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// סגירה בלחיצה מחוץ לתמונה
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


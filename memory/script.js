const board = document.getElementById("gameBoard");
const titleEl = document.getElementById("gameTitle"); // عنصر العنوان
let cards = [];
let flipped = [];
let matched = [];

async function loadData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    if (!data.cards || !Array.isArray(data.cards)) {
      throw new Error("❌ data.json must contain a 'cards' array.");
    }

    // 🔤 إعداد اللغة والاتجاه
    document.documentElement.lang = data.lang || "en";
    document.documentElement.dir = data.lang === "ar" ? "rtl" : "ltr";

    // 🎨 الخلفية الديناميكية
    if (data.background) {
      document.body.style.backgroundImage = `url(${data.background})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }

    // 🏷️ العنوان الديناميكي
    if (data.title && titleEl) {
      titleEl.textContent = data.title;
    }

    // 💳 صورة ظهر الكارت الديناميكية
    window.cardBackImage = data.cardBack || "";

    // 🂡 إنشاء الكروت
    cards = [...data.cards, ...data.cards]; // تكرار للأزواج
    shuffle(cards);
    createCards();
  } catch (err) {
    console.error("Error loading JSON:", err);
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createCards() {
  board.innerHTML = "";
  cards.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    if (window.cardBackImage) {
      cardBack.style.backgroundImage = `url(${window.cardBackImage})`;
      cardBack.style.backgroundSize = "cover";
      cardBack.style.backgroundPosition = "center";
    } else {
      cardBack.textContent = "🎯";
    }

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      cardFront.appendChild(img);
    } else if (item.type === "text") {
      const p = document.createElement("p");
      p.textContent = item.value;
      cardFront.appendChild(p);
    } else if (item.type === "mix") {
      const img = document.createElement("img");
      img.src = item.src;
      const p = document.createElement("p");
      p.textContent = item.value;
      cardFront.appendChild(img);
      cardFront.appendChild(p);
    }

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    card.appendChild(cardInner);
    board.appendChild(card);

    gsap.from(card, {
      y: -150,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: Math.random() * 0.3,
    });

    card.addEventListener("click", () => flipCard(card, item));
  });
}

function flipCard(card, item) {
  if (flipped.length < 2 && !card.classList.contains("flipped")) {
    card.classList.add("flipped");
    flipped.push({ card, item });

    gsap.to(card.querySelector(".card-inner"), {
      rotationY: 180,
      duration: 0.5,
      ease: "power2.inOut",
    });

    if (flipped.length === 2) checkMatch();
  }
}

function checkMatch() {
  const [first, second] = flipped;
  if (JSON.stringify(first.item) === JSON.stringify(second.item)) {
    matched.push(first, second);
    gsap.to([first.card, second.card], {
      scale: 1.1,
      yoyo: true,
      repeat: 1,
      duration: 0.3,
    });

    flipped = [];
    if (matched.length === cards.length) {
      setTimeout(() => alert("🎉 فزت!"), 500);
    }
  } else {
    setTimeout(() => {
      flipped.forEach(({ card }) => {
        card.classList.remove("flipped");
        gsap.to(card.querySelector(".card-inner"), {
          rotationY: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
      flipped = [];
    }, 1000);
  }
}

loadData();

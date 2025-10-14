const state = {
  currentCompany: "Open to mission-driven teams",
};

const selectors = {
  glow: document.querySelector(".page-glow"),
  currentCompany: document.querySelector("[data-current-company]"),
  year: document.querySelector("[data-year]"),
  modal: document.querySelector("[data-modal]"),
  modalOpeners: document.querySelectorAll("[data-modal-open]"),
  modalCloser: document.querySelector("[data-modal-close]"),
  chatWindow: document.querySelector("[data-chat-window]"),
  chatForm: document.querySelector("[data-chat-form]"),
  experienceCards: document.querySelectorAll("[data-experience-card]"),
  experienceModal: document.querySelector("[data-experience-modal]"),
  experienceClose: document.querySelector("[data-experience-close]"),
  experienceImage: document.querySelector("[data-modal-experience-image]"),
  experienceCompany: document.querySelector("[data-modal-experience-company]"),
  experienceRole: document.querySelector("[data-modal-experience-role]"),
  experienceSummary: document.querySelector("[data-modal-experience-summary]"),
  experienceLink: document.querySelector("[data-modal-experience-link]"),
  experienceYear: document.querySelector("[data-modal-experience-year]"),
};

const experienceData = {
  shopify: {
    year: "Sep 2025 - Dec 2025, Bellevue WA",
    company: "Shopify",
    role: "Machine Learning Engineering Intern",
    summary:
      "Currently building transformer-based recommendation models and a context-aware tokenizer that powers richer product discovery for millions of users.",
    image: "assets/shopify_20stores_1cb40842-dab6-4920-a234-4da36e79fc8a.webp",
    alt: "Shopify storefront collage",
    link: "https://www.shopify.com/",
  },
  telus: {
    year: "Jan 2025 - Apr 2025, Toronto ON",
    company: "TELUS",
    role: "ML & Software Intern",
    summary:
      "Worked on generative and computer vision systems using LLaMA-3 and SAM to optimize wildfire detection and reduce compute costs across large-scale AI infrastructure.",
    image: "assets/Screenshot 2025-10-09 at 10.08.01 PM.png",
    alt: "Telus digital experience visual",
    link: "https://www.telus.com/",
  },
  vitala: {
    year: "May 2023 - Aug 2023, Toronto ON",
    company: "Vitala Global",
    role: "Founding Engineering Intern",
    summary:
      "Built the backend of a women's pregnancy care app enabling secure, offline access to maternal health support in low-connectivity regions.",
    image: "assets/0daeee_64565c181d674f4684ce628048272081~mv2.png",
    alt: "Vitala Global founders speaking on stage",
    link: "https://www.vitalaglobal.org/",
  },
  microsoft: {
    year: "Summer 2022, Redmond WA",
    company: "Microsoft",
    role: "Software Engineering Research Intern",
    summary:
      "Developed predictive models on maternal health data and deployed them as fast, scalable microservices on Azure using Docker and Kubernetes.",
    image: "assets/644fb7a564b6606e4e19dcf8_20230501T1259-f0aff0ab-6aef-4f8a-b039-fad01f658205.jpg",
    alt: "Microsoft campus skyline",
    link: "https://www.microsoft.com/",
  },
  pg: {
    year: "Nov 2022 - Feb 2023, Remote",
    company: "Procter & Gamble",
    role: "Application & Software Engineering Intern",
    summary:
      "Created data-driven ad and partnership tools with Python, Vue.js, and AWS that improved user engagement and drove measurable revenue growth.",
    image: "assets/644fb7a6e9fe28755bd56399_20230501T1259-9841d46c-efcb-4b42-9d1a-1a80ea1d48e3.jpg",
    alt: "P&G laboratory workspace",
    link: "https://www.pg.com/",
  },
  mit: {
    year: "Sep 2022 - Dec 2022, Cambridge MA",
    company: "MIT AI Lab",
    role: "ML Research Assistant",
    summary:
      "Collaborated with PhD researchers to train deep learning models on 12,000+ microbiome samples, achieving 84% accuracy in predicting schizophrenia risk.",
    image: "assets/MIT-lockup-3line-red.png",
    alt: "MIT AI Lab logo",
    link: "https://www.csail.mit.edu/",
  },
};
const chatKnowledge = [
  {
    prompt: ["who", "you", "alisha", "intro", "about"],
    response:
      "Hi, I’m Alisha — a Systems Design Engineering student at the University of Waterloo. I build at the intersection of AI systems, software, and impact. Currently at Shopify working on transformer-based recommendation models, recognized as one of Canada’s Top 100 Most Powerful Women and a Rising Star in AI by Women in AI North America.",
  },
  {
    prompt: ["goal", "dream", "future", "vision", "mission"],
    response:
      "My mission is to build intelligent systems that push what’s possible — from agents and inference models to technologies that serve people in health, climate, and beyond. Long term, I want to lead AI innovation that scales safely and meaningfully.",
  },
  {
    prompt: ["project", "work", "build", "ship", "portfolio"],
    response:
      "You can explore my projects below — I’ve built everything from JobMatch AI (a full-stack COT reasoning platform) and Project Flourish (a Microsoft-supported model detecting suicidal ideation) to LLM optimization pipelines, multi-agent climate systems, and EmotionNet for brainwave emotion detection.",
  },
  {
    prompt: ["skills", "tech", "languages", "stack", "tools"],
    response:
      "Alisha’s technical toolkit includes Python, Java, C++, TypeScript, and SQL. She works across AWS, Azure, React, Flask, FastAPI, Docker, Kubernetes, MongoDB, and Redis — with strong experience in PyTorch, TensorFlow, NumPy, and Pandas.",
  },
  {
    prompt: ["experience", "internship", "resume", "jobs", "companies", "work"],
    response:
      "Alisha’s interned across Shopify (MLE), TELUS (ML & Software), Microsoft, MIT AI Lab, Vitala Global, and Procter & Gamble — shipping ML models, recommendation systems, and scalable backend infrastructure at every stage.",
  },
  {
    prompt: ["unicef", "wef", "hopesisters", "leadership", "beyond"],
    response:
      "Beyond engineering, Alisha serves as a UNICEF Youth Ambassador shaping global AI & policy conversations, a World Economic Forum AI Council Member judging the Smart Toy Awards alongside will.i.am, and Founder of The HopeSisters — a Forbes-recognized nonprofit delivering hope to thousands across Canada.",
  },
  {
    prompt: ["contact", "connect", "reach", "email", "linkedin"],
    response:
      "You can reach Alisha at alisha.arora@uwaterloo.ca or connect on LinkedIn — links are in the footer. She loves meeting other builders, founders, and curious minds.",
  },
  {
    prompt: ["fun", "outside", "life", "balance", "hobbies"],
    response:
      "Outside of engineering, Alisha enjoys listening to music, going on runs, and reading articles on everything from travel and philosophy to technology.",
  },
];

const starterMessages = [
  {
    author: "alisha",
    text: "Hey there! I’m Alisha’s curated AI twin. Ask about her experience, projects, or what’s inspiring her lately.",
  },
  {
    author: "alisha",
    text: "Try asking: “What are Alisha's technical skills? ”",
  },
];

function handleCursorGlow(event) {
  if (!selectors.glow) return;
  const xPercent = (event.clientX / window.innerWidth) * 100;
  const yPercent = (event.clientY / window.innerHeight) * 100;
  selectors.glow.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 180, 198, 0.4), transparent 65%)`;
}

function setCurrentCompany() {
  if (!selectors.currentCompany) return;
  selectors.currentCompany.textContent = state.currentCompany;
}

function setYear() {
  if (selectors.year) {
    selectors.year.textContent = new Date().getFullYear();
  }
}

function getExperienceDetails(card) {
  if (!card) return null;
  const id = card.dataset.experienceCard;
  const base = experienceData[id] || {};
  const imageEl = card.querySelector("img");
  const titleEl = card.querySelector(".experience-card__overlay h3");
  const roleEl = card.querySelector(".experience-card__overlay p");

  const details = {
    year: card.dataset.experienceYear || base.year || "",
    company:
      card.dataset.experienceCompany ||
      base.company ||
      titleEl?.textContent?.trim() ||
      "",
    role:
      card.dataset.experienceRole ||
      base.role ||
      roleEl?.textContent?.trim() ||
      "",
    summary: card.dataset.experienceSummary || base.summary || "",
    image:
      card.dataset.experienceImage ||
      base.image ||
      imageEl?.getAttribute("src") ||
      "",
    alt:
      card.dataset.experienceAlt ||
      base.alt ||
      imageEl?.getAttribute("alt") ||
      "",
    link: card.dataset.experienceLink || base.link || "#",
  };

  // Persist merged values back onto the card for future reads.
  card.dataset.experienceYear = details.year;
  card.dataset.experienceCompany = details.company;
  card.dataset.experienceRole = details.role;
  card.dataset.experienceSummary = details.summary;
  card.dataset.experienceImage = details.image;
  card.dataset.experienceAlt = details.alt;
  card.dataset.experienceLink = details.link;

  return details;
}

function openExperienceModal(card) {
  if (!selectors.experienceModal) return;
  const data = getExperienceDetails(card);
  if (!data) return;

  if (selectors.experienceImage) {
    selectors.experienceImage.src = data.image;
    selectors.experienceImage.alt = data.alt;
  }
  if (selectors.experienceCompany) {
    selectors.experienceCompany.textContent = data.company;
  }
  if (selectors.experienceRole) {
    selectors.experienceRole.textContent = data.role;
  }
  if (selectors.experienceSummary) {
    selectors.experienceSummary.textContent = data.summary;
  }
  if (selectors.experienceLink) {
    selectors.experienceLink.href = data.link;
  }
  if (selectors.experienceYear) {
    selectors.experienceYear.textContent = data.year;
  }

  selectors.experienceModal.setAttribute("data-open", "true");
  document.body.style.overflow = "hidden";
}

function closeExperienceModal() {
  if (!selectors.experienceModal) return;
  selectors.experienceModal.setAttribute("data-open", "false");
  document.body.style.overflow = "";
}

function toggleModal(open) {
  if (!selectors.modal) return;
  selectors.modal.setAttribute("data-open", open ? "true" : "false");
  document.body.style.overflow = open ? "hidden" : "";
  if (open) {
    selectors.chatForm?.querySelector("input")?.focus();
  }
}

function addChatMessage(author, text) {
  if (!selectors.chatWindow) return;
  const wrapper = document.createElement("div");
  wrapper.className = "chat-message";
  wrapper.dataset.author = author;
  wrapper.innerHTML = `
    <span class="author">${author === "user" ? "You" : "Alisha.ai"}</span>
    <div class="bubble">${text}</div>
  `;
  selectors.chatWindow.appendChild(wrapper);
  selectors.chatWindow.scrollTo({
    top: selectors.chatWindow.scrollHeight,
    behavior: "smooth",
  });
}

function getChatResponse(prompt) {
  const normalized = prompt.toLowerCase();

  // Split input into individual words for better matching
  const words = normalized.split(/\s+/);

  for (const item of chatKnowledge) {
    if (
      item.prompt.some(
        (keyword) =>
          words.includes(keyword) || normalized === keyword || normalized.includes(" " + keyword + " ")
      )
    ) {
      return item.response;
    }
  }

  return "That’s a great question! I don’t have that in my current dataset, but Alisha probably does — feel free to reach out at alisha.arora@uwaterloo.ca or connect on LinkedIn!";
}

function initChat() {
  if (!selectors.chatForm || !selectors.chatWindow) return;
  selectors.chatWindow.innerHTML = "";
  starterMessages.forEach((msg) => addChatMessage(msg.author, msg.text));

  selectors.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.prompt;
    const value = input.value.trim();
    if (!value) return;
    addChatMessage("user", value);
    input.value = "";

    setTimeout(() => {
      addChatMessage("alisha", getChatResponse(value));
    }, 260);
  });
}

function initModal() {
  selectors.modalOpeners.forEach((btn) =>
    btn.addEventListener("click", () => toggleModal(true))
  );
  selectors.modalCloser?.addEventListener("click", () => toggleModal(false));
  selectors.modal?.addEventListener("click", (event) => {
    if (event.target === selectors.modal) {
      toggleModal(false);
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleModal(false);
      closeExperienceModal();
    }
  });
}

function initExperiences() {
  if (!selectors.experienceCards || !selectors.experienceModal) return;

  selectors.experienceCards.forEach((card) => {
    card.addEventListener("click", () => {
      openExperienceModal(card);
    });
  });

  selectors.experienceClose?.addEventListener("click", closeExperienceModal);

  selectors.experienceModal.addEventListener("click", (event) => {
    if (event.target === selectors.experienceModal) {
      closeExperienceModal();
    }
  });
}

function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll("[data-scroll]");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("data-scroll");
      const target = targetSelector
        ? document.querySelector(targetSelector)
        : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("pointermove", handleCursorGlow);
  setCurrentCompany();
  setYear();
  initModal();
  initChat();
  initExperiences();
  initSmoothScroll();
});

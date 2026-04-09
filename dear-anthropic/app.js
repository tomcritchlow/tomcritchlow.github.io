function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setupReveals() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

function setupCitations() {
  const $ = window.jQuery;

  if (!$ || typeof $.bigfoot !== "function") {
    return;
  }

  const groups = [...document.querySelectorAll(".inline-citation-group")];

  if (!groups.length) {
    return;
  }

  const footnotes = document.createElement("div");
  footnotes.className = "footnotes footnotes--generated";

  const list = document.createElement("ol");
  footnotes.appendChild(list);

  let citationIndex = 0;
  const citationNumbers = [];

  groups.forEach((group) => {
    const triggers = [...group.querySelectorAll("[data-citation-trigger]")];

    if (!triggers.length) {
      return;
    }

    const fragment = document.createDocumentFragment();

    triggers.forEach((trigger) => {
      citationIndex += 1;

      const number = trigger.textContent?.trim() || String(citationIndex);
      const label = trigger.dataset.citationLabel ?? "";
      const url = trigger.dataset.citationUrl ?? "";
      const footnoteId = `fn:generated-${citationIndex}`;
      const refId = `fnref:generated-${citationIndex}`;

      citationNumbers.push(number);

      const sup = document.createElement("sup");
      sup.className = "inline-citation-ref";
      sup.id = refId;
      sup.dataset.citationNumber = number;
      sup.dataset.footnoteNumber = number;
      sup.dataset.footnoteBacklinkRef = refId;

      const link = document.createElement("a");
      link.className = "inline-citation-link";
      link.href = `#${footnoteId}`;
      link.rel = "footnote";
      link.dataset.citationNumber = number;
      link.dataset.footnoteNumber = number;
      link.dataset.footnoteBacklinkRef = refId;
      link.setAttribute("aria-label", `Open source ${number}`);
      link.textContent = number;

      sup.appendChild(link);
      fragment.appendChild(sup);

      const item = document.createElement("li");
      item.className = "footnote";
      item.id = footnoteId;
      item.innerHTML = `<p><span class="generated-footnote-label">Source ${escapeHtml(number)}</span><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a></p>`;
      list.appendChild(item);
    });

    group.replaceWith(fragment);
  });

  document.body.appendChild(footnotes);

  $.bigfoot({
    actionOriginalFN: "hide",
    activateOnHover: true,
    allowMultipleFN: false,
    appendPopoversTo: "body",
    deleteOnUnhover: false,
    hoverDelay: 80,
    numberResetSelector: ".section, .closing",
    popoverCreateDelay: 40,
    positionContent: true,
    preventPageScroll: false,
    scope: "#app",
    useFootnoteOnlyOnce: false,
    buttonMarkup: `
      <div class="bigfoot-footnote__container">
        <button type="button" class="bigfoot-footnote__button" rel="footnote"
          id="{{SUP:data-footnote-backlink-ref}}-button"
          data-footnote-number="{{FOOTNOTENUM}}"
          data-footnote-identifier="{{FOOTNOTEID}}"
          data-bigfoot-footnote="{{FOOTNOTECONTENT}}">
          <span class="bigfoot-footnote__button__label">{{FOOTNOTENUM}}</span>
        </button>
      </div>
    `,
    contentMarkup: `
      <aside class="bigfoot-footnote is-positioned-bottom"
        data-footnote-number="{{FOOTNOTENUM}}"
        data-footnote-identifier="{{FOOTNOTEID}}"
        aria-label="Source {{BUTTON:data-citation-number}}">
        <div class="bigfoot-footnote__wrapper">
          <div class="bigfoot-footnote__content">
            {{FOOTNOTECONTENT}}
          </div>
        </div>
        <div class="bigfoot-footnote__tooltip"></div>
      </aside>
    `,
  });

  document.querySelectorAll(".bigfoot-footnote__button").forEach((button, index) => {
    const number = citationNumbers[index] ?? String(index + 1);
    button.dataset.citationNumber = number;
    button.setAttribute("aria-label", `See source ${number}`);

    const label = button.querySelector(".bigfoot-footnote__button__label");

    if (label) {
      label.textContent = number;
    }
  });
}

function setupBBCChart() {
  if (typeof window.Chart !== "function") {
    return;
  }

  const canvas = document.querySelector("#bbc-accuracy-chart");

  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const labels = ["Overall", "Copilot", "ChatGPT", "Perplexity", "Gemini"];
  const significant = [20, 18.4, 23, 20, 21];
  const some = [35, 27.0, 35, 33, 39];

  new window.Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Significant",
          data: significant,
          backgroundColor: "rgba(17, 17, 17, 0.68)",
          borderWidth: 0,
          stack: "issues",
          barThickness: 34,
        },
        {
          label: "Some",
          data: some,
          backgroundColor: "#02AD28",
          borderWidth: 0,
          stack: "issues",
          barThickness: 34,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            boxWidth: 12,
            boxHeight: 12,
            padding: 20,
            color: "rgba(17, 17, 17, 0.64)",
            font: {
              family: "Libre Franklin",
              size: 12,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            color: "rgba(17, 17, 17, 0.64)",
            font: {
              family: "Libre Franklin",
              size: 11,
            },
            maxRotation: 0,
            autoSkip: false,
            padding: 8,
          },
          border: {
            display: true,
            color: "rgba(17, 17, 17, 0.12)",
          },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            color: "rgba(17, 17, 17, 0.5)",
            font: {
              family: "Libre Franklin",
              size: 11,
            },
            padding: 8,
          },
          grid: {
            color: "rgba(17, 17, 17, 0.08)",
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
      },
    },
  });
}

function setupCompanionModal() {
  const DEFAULT_COMPANION_URL = "https://claude-search-grader.replit.app/";
  const app = document.querySelector("#app");
  const form = document.querySelector("[data-companion-form]");
  const modal = document.querySelector("[data-companion-modal]");
  const iframe = document.querySelector("[data-companion-iframe]");
  const queryDisplay = document.querySelector("[data-companion-query-display]");
  const openNew = document.querySelector("[data-companion-open-new]");
  const note = document.querySelector("[data-companion-note]");
  const closeButtons = [...document.querySelectorAll("[data-companion-close]")];

  if (
    !(app instanceof HTMLElement) ||
    !(form instanceof HTMLFormElement) ||
    !(modal instanceof HTMLElement) ||
    !(iframe instanceof HTMLIFrameElement) ||
    !(queryDisplay instanceof HTMLElement) ||
    !(openNew instanceof HTMLAnchorElement)
  ) {
    return;
  }

  const input = form.elements.namedItem("q");

  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const companionUrl =
    app.getAttribute("data-companion-url")?.trim() ||
    DEFAULT_COMPANION_URL;

  if (note) {
    note.textContent = "The query opens in a modal so the essay remains in view.";
  }

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("is-modal-open");
    iframe.removeAttribute("src");
    openNew.hidden = true;
    queryDisplay.textContent = "";
  };

  const openModal = (query) => {
    const trimmedQuery = query.trim();

    queryDisplay.textContent = trimmedQuery;
    modal.hidden = false;
    document.body.classList.add("is-modal-open");

    const target = new URL(companionUrl, window.location.href);
    target.searchParams.set("q", trimmedQuery);
    target.searchParams.set("embedded", "1");

    iframe.src = target.toString();
    openNew.href = target.toString();
    openNew.hidden = false;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!input.value.trim()) {
      input.focus();
      return;
    }

    openModal(input.value);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

setupReveals();
setupCitations();
setupBBCChart();
setupCompanionModal();

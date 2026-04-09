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
  if (typeof window.tippy !== "function") {
    return;
  }

  window.tippy("[data-citation-trigger]", {
    allowHTML: true,
    interactive: true,
    animation: "shift-away",
    theme: "light-border citations",
    maxWidth: 280,
    trigger: "mouseenter focus click",
    hideOnClick: true,
    delay: [80, 40],
    content(reference) {
      const label = escapeHtml(reference.dataset.citationLabel ?? "");
      const url = escapeHtml(reference.dataset.citationUrl ?? "");
      const number = escapeHtml(reference.textContent?.trim() ?? "");

      return `<span class="tippy-source-label">Source ${number}</span><a class="tippy-source-link" href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
    },
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

setupReveals();
setupCitations();
setupBBCChart();

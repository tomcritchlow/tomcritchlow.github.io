const hero = {
  kicker: "Open letter / Head of Search & Knowledge",
  title: "Dear Anthropic.",
  dek: "Searching is thinking. The search experience is where a model becomes a habit, where an answer becomes believable, and where an AI company earns the right to become a daily interface to reality.",
  intro:
    "If Anthropic wants to own trusted research, it should treat search and knowledge retrieval as a first-order product surface, not a backend utility. This is the layer where truth, confidence, and user behavior are actually negotiated.",
  thesis: "Search is not a feature layer. It is the trust layer.",
  railNote:
    "The opportunity is larger than ranking links. It is about building a reliable knowledge engine that people return to when the stakes are real.",
};

// Replace the copy below with final language once the narrative is locked.
// Replace the visual specs with final charts, stats, or custom SVGs once the story is final.
const sections = [
  {
    id: "shift",
    kicker: "01 / The shift",
    title: "Search is becoming the interface to reality.",
    paragraphs: [
      {
        text: "Classic search trained people to ask, scan, compare, and decide. AI compresses those steps into one conversation, but the underlying job has not changed. People still need grounding. They still need to know what is current, what is contested, and what deserves action.",
        refs: [1, 2],
      },
      {
        text: "That means the retrieval experience is no longer a thin wrapper around the model. It is the product surface where users decide whether the system is useful enough for daily habit and trustworthy enough for consequential work.",
        refs: [2, 3],
      },
      {
        text: "The company that gets this layer right will not just answer questions more elegantly. It will become the default environment for research, judgment, and high-intent decision making.",
        refs: [1],
      },
    ],
    visual: {
      type: "pathway",
      label: "Key visual / Interface shift",
      title: "From retrieval to judgment",
      caption:
        "Swap in a cleaner systems graphic later if needed. The right rail should stay visual-first.",
      stat: "Search is where models meet reality.",
      steps: ["Question", "Evidence", "Synthesis", "Decision"],
    },
    footnotes: [
      {
        label: "The Anthropic Economic Index",
        url: "https://www.anthropic.com/economic-index",
      },
      {
        label: "Using Research on Claude",
        url: "https://support.anthropic.com/en/articles/11088861-using-research-on-claude",
      },
      {
        label: "Enabling and Using Web Search",
        url: "https://support.anthropic.com/en/articles/10684626-enabling-and-using-web-search",
      },
    ],
  },
  {
    id: "wedge",
    kicker: "02 / The wedge",
    title: "Anthropic should own trusted research.",
    paragraphs: [
      {
        text: "The strongest wedge is not generic assistant utility. It is becoming the place people go when they need to investigate something that matters: a market, a medical question, a regulation, a vendor, a paper trail, a confusing claim.",
        refs: [1],
      },
      {
        text: "Trusted research is where Anthropic can differentiate structurally. Claude already signals care, caution, and depth. Search can turn those qualities into a durable behavior by making research feel comprehensive, transparent, and calm under pressure.",
        refs: [1, 2],
      },
      {
        text: "This is also the right wedge because it compounds. Better retrieval improves answer quality, which improves trust, which improves repeat usage, which creates the data and feedback loops needed to sharpen the system further.",
        refs: [2, 3],
      },
    ],
    visual: {
      type: "rings",
      label: "Key visual / Strategic wedge",
      title: "Habit compounds through trust",
      caption: "Use this as a placeholder for a tighter loop diagram or flywheel.",
      center: "Trusted research",
      nodes: ["Daily habit", "Reliable answers", "Return behavior"],
    },
    footnotes: [
      {
        label: "Using Research on Claude",
        url: "https://support.anthropic.com/en/articles/11088861-using-research-on-claude",
      },
      {
        label: "Introducing Citations on the Anthropic API",
        url: "https://www.anthropic.com/news/introducing-citations-api",
      },
      {
        label: "Web Search Tool Documentation",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/web-search-tool",
      },
    ],
  },
  {
    id: "open-web",
    kicker: "03 / The information ecosystem",
    title: "Anthropic should think about the information ecosystem in two layers: access and structure.",
    paragraphs: [
      {
        text: "The first layer is information access. AI responses are only as trustworthy as the material they can reach. That means publisher relationships, crawl permissions, provenance, and the broader media landscape matter directly to model quality. The BBC and EBU's 2025 work is useful here because it frames the problem as systemic: when assistants mishandle news, the issue is not just reasoning quality, but access to trustworthy information and the standards used to present it.",
        refs: [1, 2],
      },
      {
        text: "The second layer is structured data. Many of the most valuable AI use cases do not depend on prose alone. Maps, local discovery, product inventory, reviews, pricing, schedules, availability, and other machine-readable sources are what make agentic commerce and high-intent task completion possible. Without structured data, the assistant can sound fluent while remaining operationally weak.",
        refs: [3, 4],
      },
      {
        text: "These two layers reinforce each other. Access determines whether the assistant can reach high-quality information in the first place. Structure determines whether it can act on that information reliably. Anthropic should treat both as strategic infrastructure: one for trusted answers, the other for useful action.",
        refs: [1, 3],
      },
    ],
    visual: {
      type: "duo",
      label: "Key visual / Ecosystem layers",
      title: "Access + structure",
      caption:
        "Use the left side for your media-site bot-blocking research and the right side for the structured-data layer behind maps, local, and agentic commerce.",
      panels: [
        {
          title: "Information access",
          stat: "Bot blocking across media sites",
          note: "Publisher access, crawl rights, provenance, trust",
        },
        {
          title: "Structured data",
          stat: "Maps, inventory, reviews, availability",
          note: "Machine-readable layers for action and transactions",
        },
      ],
      footer: "Trusted answers need access. Useful agents need structure.",
    },
    footnotes: [
      {
        label: "BBC / EBU News Integrity in AI Assistants report",
        url: "https://www.bbc.co.uk/mediacentre/documents/news-integrity-in-ai-assistants-report.pdf",
      },
      {
        label: "BBC News Integrity in AI Assistants toolkit",
        url: "https://www.bbc.co.uk/aboutthebbc/documents/news-integrity-in-ai-assistants-toolkit.pdf",
      },
      {
        label: "Google LocalBusiness structured data documentation",
        url: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
      },
      {
        label: "Schema.org LocalBusiness",
        url: "https://schema.org/LocalBusiness",
      },
    ],
  },
  {
    id: "ux",
    kicker: "04 / The UX of search",
    title: "People do not experience search as a text box. They experience it as a rich results environment.",
    paragraphs: [
      {
        text: "User expectations were trained by modern search engines, not by chat alone. People expect images, videos, maps, recipes, product panels, local results, and other result types that help them choose the right mode of attention quickly. A strong search experience is multimodal and situational by default.",
        refs: [1, 2],
      },
      {
        text: "That matters because format is part of trust. A recipe query should not look like a market research query. A local intent query should surface place data and availability. A how-to query may need video or stepwise structure. The interface should signal what kind of knowledge is being returned, not just paraphrase everything into the same block of prose.",
        refs: [1, 3, 4],
      },
      {
        text: "Anthropic should treat this as a UX discipline, not a garnish layer. The winner in search will not just have the best model underneath. It will know when to answer with text, when to show a map, when to foreground an image, and when to preserve the source format because that is what the user actually needs to decide.",
        refs: [2, 4],
      },
    ],
    visual: {
      type: "image",
      label: "Key visual / Search UX",
      title: "Rich results environment",
      caption:
        "Google's anatomy-of-search-results image is a useful shorthand for the idea that search UX is a system of result types, not a single answer block.",
      src: "https://developers.google.com/search/docs/images/anatomy-of-search-results-page.png",
      alt: "Annotated anatomy of a search results page showing multiple result types and layout regions.",
    },
    footnotes: [
      {
        label: "Google Search visual elements gallery",
        url: "https://developers.google.com/search/docs/appearance/visual-elements-gallery",
      },
      {
        label: "Google Search structured data gallery",
        url: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery",
      },
      {
        label: "Recipe structured data",
        url: "https://developers.google.com/search/docs/appearance/structured-data/recipe",
      },
      {
        label: "Local business structured data",
        url: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
      },
    ],
  },
  {
    id: "metrics",
    kicker: "05 / Metrics, evals, provenance",
    title: "Search quality should be measured like a trust system, not just a relevance system.",
    paragraphs: [
      {
        text: "The usual search metrics still matter: coverage, freshness, latency, answer relevance, abandonment, task completion. But AI search adds a more important layer. You need evals for confidence calibration, source diversity, citation usefulness, update sensitivity, and whether users can meaningfully inspect why an answer should be believed.",
        refs: [1, 2],
      },
      {
        text: "This is where provenance stops being a UI garnish and becomes a product discipline. The ideal experience does not merely attach links after the fact. It surfaces evidence in the rhythm of the interaction, with enough clarity that users can inspect, compare, and continue thinking.",
        refs: [1, 3],
      },
      {
        text: "A serious search organization at Anthropic would treat evals, provenance design, and knowledge partnerships as one operating system. The point is not to maximize visible citations. The point is to make truth-seeking behavior easier than bluffing.",
        refs: [1, 2],
      },
    ],
    visual: {
      type: "scorecard",
      label: "Key visual / Operating metrics",
      title: "Trust system scorecard",
      caption: "Good place for a real eval dashboard screenshot or a sharper provenance score model.",
      metrics: [
        { label: "Habit", value: "67", max: "100" },
        { label: "Trust", value: "81", max: "100" },
        { label: "Coverage", value: "74", max: "100" },
        { label: "Provenance", value: "88", max: "100" },
      ],
    },
    footnotes: [
      {
        label: "Introducing Citations on the Anthropic API",
        url: "https://www.anthropic.com/news/introducing-citations-api",
      },
      {
        label: "Search Results Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/search-results",
      },
      {
        label: "Claude can provide incorrect or misleading responses",
        url: "https://support.anthropic.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on",
      },
    ],
  },
  {
    id: "why-me",
    kicker: "06 / Why me",
    title: "I sit at the intersection of search strategy, knowledge systems, and product judgment.",
    paragraphs: [
      {
        text: "My angle is not just SEO, not just product, and not just editorial. It is the connective tissue between how information is discovered, how it is structured, how people trust it, and how organizations turn that into a differentiated user experience.",
        refs: [1, 2],
      },
      {
        text: "I think in wedges, interfaces, supply dynamics, incentives, and operating systems. I know how to build narratives internally, translate strategic ambiguity into programs, and make search legible across product, partnerships, policy, and go-to-market functions.",
        refs: [1],
      },
      {
        text: "For this role, the job is not merely improving retrieval quality. It is helping Anthropic define what trusted knowledge looks like as a product category and then organizing the company around it.",
        refs: [2, 3],
      },
    ],
    visual: {
      type: "pillars",
      label: "Key visual / Fit",
      title: "The overlap I bring",
      caption: "Could become a cleaner three-circle or triangle graphic later.",
      items: [
        { title: "Search", text: "Demand, discovery, and retrieval strategy" },
        { title: "Knowledge", text: "Structure, provenance, and information trust" },
        { title: "Product", text: "Narrative, execution, and operating cadence" },
      ],
    },
    footnotes: [
      {
        label: "The Anthropic Economic Index",
        url: "https://www.anthropic.com/economic-index",
      },
      {
        label: "Using Research on Claude",
        url: "https://support.anthropic.com/en/articles/11088861-using-research-on-claude",
      },
      {
        label: "RAG for Projects",
        url: "https://support.anthropic.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects",
      },
    ],
  },
  {
    id: "first-90",
    kicker: "07 / First 90 days",
    title: "Start with the product truth, then build the operating system behind it.",
    paragraphs: [
      {
        text: "The first 90 days should not begin with a grand reorg or an abstract strategy deck. They should begin with product truth: where Claude search is already strong, where it breaks trust, what user behaviors are forming, and which strategic bets are being underexploited.",
        refs: [1, 2, 3],
      },
    ],
    visual: {
      type: "roadmap",
      label: "Key visual / 90-day plan",
      title: "30 / 60 / 90",
      caption: "Swap for a final roadmap graphic if you want tighter sequencing.",
      phases: [
        { range: "1-30", title: "Audit", text: "Map stack, users, failures" },
        { range: "31-60", title: "Define", text: "Set wedge and scorecard" },
        { range: "61-90", title: "Operate", text: "Stand up cross-functional cadence" },
      ],
    },
    footnotes: [
      {
        label: "BBC News Integrity in AI Assistants toolkit",
        url: "https://www.bbc.co.uk/aboutthebbc/documents/news-integrity-in-ai-assistants-toolkit.pdf",
      },
      {
        label: "Introducing Citations on the Anthropic API",
        url: "https://www.anthropic.com/news/introducing-citations-api",
      },
      {
        label: "Introducing Anthropic's Transparency Hub",
        url: "https://www.anthropic.com/news/introducing-anthropic-transparency-hub",
      },
    ],
  },
];

const closing = {
  kicker: "08 / Closing statement",
  title: "Anthropic has a credible path to become the trusted layer between people and the world they need to understand.",
  paragraphs: [
    {
      text: "That path runs through search. Not search as ten blue links. Not search as a backend connector. Search as a deliberate knowledge product: careful retrieval, legible evidence, calm confidence, and repeatable trust.",
      refs: [1, 2],
    },
    {
      text: "If the thesis is right, then this role is not support for the roadmap. It is part of defining the roadmap. I’d like to help Anthropic build that category.",
      refs: [1],
    },
  ],
  signature: {
    name: "Tom Critchlow",
    meta: "Pitch prototype for Head of Search & Knowledge",
  },
  visual: {
    type: "signal",
    label: "Key visual / Closing signal",
    title: "Trusted research can be a category.",
    caption: "Replace with a stronger closing mark, chart, or proof point if needed.",
    stat: "Search is thinking.",
    substat: "Trust is the product.",
  },
  footnotes: [
    {
      label: "The Anthropic Economic Index",
      url: "https://www.anthropic.com/economic-index",
    },
    {
      label: "Introducing Anthropic's Transparency Hub",
      url: "https://www.anthropic.com/news/introducing-anthropic-transparency-hub",
    },
  ],
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInlineRefs(refs = [], footnotes = [], footnoteKeyPrefix = "") {
  if (!refs.length) {
    return "";
  }

  const joined = refs
    .map((ref) => {
      const note = footnotes[ref - 1];

      if (!note) {
        return "";
      }

      const content = escapeHtml(note.label);
      const url = escapeHtml(note.url);

      return `
        <span class="inline-citation" data-citation>
          <button
            class="inline-citation-trigger"
            type="button"
            data-citation-trigger
            data-tippy-content="<span class='tippy-source-label'>Source ${ref}</span><a class='tippy-source-link' href='${url}' target='_blank' rel='noreferrer'>${content}</a>"
            aria-label="Open source ${ref}"
          >
            ${ref}
          </button>
        </span>
      `;
    })
    .join(",");

  return `<sup class="inline-citation-group">${joined}</sup>`;
}

function renderParagraphs(paragraphs, footnotes = [], footnoteKeyPrefix = "") {
  return paragraphs
    .map((paragraph) => {
      if (typeof paragraph === "string") {
        return `<p>${paragraph}</p>`;
      }

      return `<p>${paragraph.text}${renderInlineRefs(paragraph.refs, footnotes, footnoteKeyPrefix)}</p>`;
    })
    .join("");
}

function renderStackVisual(visual) {
  return `
    <div class="visual-frame visual-stack">
      <div class="stack-list">
        ${visual.items
          .map(
            (item) => `
              <div class="stack-item">${item}</div>
            `,
          )
          .join("")}
      </div>
      <p class="stack-footer">${visual.footer}</p>
    </div>
  `;
}

function renderImageVisual(visual) {
  return `
    <div class="visual-frame visual-image">
      <img class="visual-image-asset" src="${visual.src}" alt="${visual.alt}" />
    </div>
  `;
}

function renderPathwayVisual(visual) {
  return `
    <div class="visual-frame visual-pathway">
      <div class="pathway-steps">
        ${visual.steps
          .map(
            (step, index) => `
              <div class="pathway-step">
                <span class="pathway-index">0${index + 1}</span>
                <span class="pathway-name">${step}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <p class="visual-stat">${visual.stat}</p>
    </div>
  `;
}

function renderRingsVisual(visual) {
  return `
    <div class="visual-frame visual-rings">
      <div class="rings-core">${visual.center}</div>
      <div class="rings-node rings-node-a">${visual.nodes[0]}</div>
      <div class="rings-node rings-node-b">${visual.nodes[1]}</div>
      <div class="rings-node rings-node-c">${visual.nodes[2]}</div>
    </div>
  `;
}

function renderTrendVisual(visual) {
  return `
    <div class="visual-frame visual-trend">
      ${visual.rows
        .map(
          (row) => `
            <div class="trend-row">
              <div class="trend-meta">
                <span class="trend-label">${row.label}</span>
                <span class="trend-value">${row.value}</span>
              </div>
              <div class="trend-bar">
                <span class="trend-fill trend-fill-${row.tone}" style="width: ${row.value}%"></span>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDuoVisual(visual) {
  return `
    <div class="visual-frame visual-duo">
      <div class="duo-grid">
        ${visual.panels
          .map(
            (panel) => `
              <article class="duo-panel">
                <p class="duo-title">${panel.title}</p>
                <p class="duo-stat">${panel.stat}</p>
                <p class="duo-note">${panel.note}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <p class="duo-footer">${visual.footer}</p>
    </div>
  `;
}

function renderScorecardVisual(visual) {
  return `
    <div class="visual-frame visual-scorecard">
      ${visual.metrics
        .map(
          (metric) => `
            <div class="score-row">
              <span class="score-label">${metric.label}</span>
              <span class="score-value">${metric.value}<small>/${metric.max}</small></span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPillarsVisual(visual) {
  return `
    <div class="visual-frame visual-pillars">
      ${visual.items
        .map(
          (item) => `
            <article class="pillar">
              <h3 class="pillar-title">${item.title}</h3>
              <p class="pillar-copy">${item.text}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRoadmapVisual(visual) {
  return `
    <div class="visual-frame visual-roadmap">
      ${visual.phases
        .map(
          (phase) => `
            <article class="roadmap-phase">
              <p class="roadmap-range">${phase.range}</p>
              <h3 class="roadmap-title">${phase.title}</h3>
              <p class="roadmap-copy">${phase.text}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSignalVisual(visual) {
  return `
    <div class="visual-frame visual-signal">
      <p class="signal-stat">${visual.stat}</p>
      <p class="signal-substat">${visual.substat}</p>
    </div>
  `;
}

function renderVisualFrame(visual) {
  if (!visual) {
    return "";
  }

  const visuals = {
    pathway: renderPathwayVisual,
    rings: renderRingsVisual,
    trend: renderTrendVisual,
    duo: renderDuoVisual,
    stack: renderStackVisual,
    image: renderImageVisual,
    scorecard: renderScorecardVisual,
    pillars: renderPillarsVisual,
    roadmap: renderRoadmapVisual,
    signal: renderSignalVisual,
  };

  const renderInner = visuals[visual.type];

  if (!renderInner) {
    return "";
  }

  return `
    <figure class="section-visual">
      <p class="figure-label">${visual.label}</p>
      <h3 class="visual-title">${visual.title}</h3>
      ${renderInner(visual)}
      <figcaption class="figure-note">${visual.caption}</figcaption>
    </figure>
  `;
}

function renderSection(section) {
  return `
    <section class="section reveal" id="${section.id}">
      <div class="section-main">
        <p class="section-kicker">${section.kicker}</p>
        <h2 class="section-title">${section.title}</h2>
        <div class="section-body">
          ${renderParagraphs(section.paragraphs, section.footnotes, section.id)}
        </div>
      </div>
      <div class="section-sidebar">
        ${renderVisualFrame(section.visual)}
      </div>
    </section>
  `;
}

function renderApp() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section class="hero">
      <div class="hero-shell reveal is-visible">
        <div class="hero-copy">
          <p class="hero-kicker">${hero.kicker}</p>
          <h1 class="hero-title">${hero.title}</h1>
          <p class="hero-dek">${hero.dek}</p>
          <p class="hero-intro">${hero.intro}</p>
          <a class="hero-scroll accent-link" href="#shift">Read the argument</a>
        </div>
        <aside class="hero-rail">
          <p class="eyebrow">Thesis</p>
          <p class="hero-thesis">${hero.thesis}</p>
          <p class="hero-note">${hero.railNote}</p>
        </aside>
      </div>
    </section>

    <article class="essay">
      ${sections.map(renderSection).join("")}
    </article>

    <section class="closing reveal">
      <div class="closing-grid">
        <div>
          <p class="section-kicker">${closing.kicker}</p>
          <h2 class="section-title">${closing.title}</h2>
          <div class="closing-copy">${renderParagraphs(closing.paragraphs, closing.footnotes, "closing")}</div>
          <div class="signature">
            <p class="signature-name">${closing.signature.name}</p>
            <p class="signature-meta">${closing.signature.meta}</p>
          </div>
        </div>
        <div class="section-sidebar">
          ${renderVisualFrame(closing.visual)}
        </div>
      </div>
    </section>
  `;
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
  });
}

renderApp();
setupReveals();
setupCitations();

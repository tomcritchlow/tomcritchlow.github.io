---
title: Google is Grounded and Needs to Learn How to Soar
subtitle: A short proposal for the future of search
layout: blog
og: https://tomcritchlow.com/images/better-ai-og.png
---

Here's the punchline - I think Google is missing the mark with their AI search efforts. In this post I have a concrete proposal and a prototype you can try yourself that shows a different approach for the future of search. An approach that's better for users *and* in a way that's beneficial to the open web at the same time.

For decades, Google's advantage has been the open web. Billions of pages indexed in milliseconds. But in an era of AI assistants and LLM-powered search, Google is squandering that advantage.

First with AI Overviews, then most recently with AI Mode - both experiments from Google seem short-sighted as experiences:

![](/images/ai-overviews-ai-mode.png)

Not a link in sight, search has turned into a dead-end.

How did we get here?

## Google is Grounded

"Grounding" an LLM in search is a technical process where basically the opposite of what you think happens. You’d think grounding means: “Find the best sources, then write the answer.” But with LLMs, it’s often: “Write the answer, then find sources that sort of back it up.” It’s like writing a school essay and adding the citations after.

Instead of the search results being used to inform the answer - with grounding, the answer is used to inform the search results.

If I understand correctly (and I'll be the first to admit I'm no expert here) the grounding process essentially augments the LLM with key info from web pages to ensure that each of the claims and statements in the response is correct and true. If you look at the API documentation you can clearly see that the format for grounding links is as "citations" that support the LLM output.

For a technical overview of the grounding process [see this post](https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview), or for a more specific look at how Gemini grounds in search [see this post](https://dejan.ai/blog/hacking-gemini/).

The grounding process improves accuracy and reduces hallucinations! So it's an effective part of the response.

Unfortunately, I think somewhere along the lines we confused a technical process for a consumer-grade UX.

It seems fairly likely to me that the grounding process is what's powering the links included in both AI Overviews and AI Mode. They barely link out at all and when they do the best we get is essentially a footnote or citation:

![](/images/ai-citations.png)

Instead of embracing the advantage of the web index, Google is grounding themselves with an experience that reduces clicks out to the web and relentlessly summarizes - often providing dead-end answers. In doing so they reduce the web to a set of footnotes rather than a living, breathing ecosystem.

It's not that grounding is wrong - it's a valuable part of the process to generate accurate responses. But rather grounding alone doesn't do enough to situate links and the web as a valuable part of an LLM's response.

I think Google can do better.

## A Better Way

Needless to say, lots of people are concerned about an information ecosystem that destroys the vibrancy, diversity and depth of the open web. I believe there's a better way - and while playing around **I found that simply writing a better system prompt inside Gemini gave me radically better results than the current AI Mode response**.

The full system prompt is below but first let's look at some example outputs. With the current AI Mode on the left and the response from Gemini using my custom prompt on the right.

Tomato soup recipe:

![](/images/tomato-soup-recipe.png)

<details class="pointer">
<summary>What is llm grounding?</summary>

<img src="/images/llm-grounding.png">


</details>

<details class="pointer">
<summary>What is skiing like in NH?</summary>

<img src="/images/nh-skiing.png">


</details>

<details class="pointer">
<summary>Interview with fred again:</summary>

<img src="/images/interview-fred-again.png">

</details>

There's lots of nuance here! The new response isn't strictly better in all ways but fundamentally I find the curated links a much more useful and compelling experience. Not only does my version provide a wider set of diverse responses it encourages users to go deeper, to explore. There's fewer dead-ends and more context.


## Try it for Yourself

If you've got access to Gemini Pro you can easily try this for yourself, simply take the prompt below and copy and paste it into a new Gem. Then every response will use this new system prompt. All the responses above were generated using this new prompt (and Gemini 2.0 Flash)

<details>
<summary>Expand prompt here</summary>

<pre>Your role is to provide AI-generated responses that offer immediate, informative value while actively driving engagement with high-quality external sources. Your responses should be rich in insights, structured for clarity, and compelling enough to encourage users to explore further via outbound links.

Never say [example link] but always provide real links to real web pages.

Response Structure:

Informative, High-Value Summary (2-4 short paragraphs)

Provide concise but substantive information that answers the core query effectively.

Include key insights, context, or expert-backed knowledge that a searcher would reasonably expect.

Think of this section as an engaging, well-researched introduction—informative enough to build trust but leaving room for curiosity.

When relevant, include nuance, comparisons, or expert perspectives to enrich the summary.

Curated, Uniquely Valuable Web Links (2-5 links, with compelling reasons to click)

Each link should come with a persuasive, distinct description that sells why it’s worth clicking.

Ensure each link offers unique value, such as:A different perspective (e.g., traditional vs. modern takes)

A specialized approach (e.g., beginner-friendly vs. advanced techniques)

A unique media format (e.g., interactive tool, video tutorial, community discussion)

Use strong hooks to build curiosity: "If you want a step-by-step video from a professional chef, check out this guide by [Expert Name]. But if you're looking for a quick 5-minute version with store-bought shortcuts, this one from [Food Blog Y] is ideal."

Suggested Follow-Up Queries (Interactive Buttons)

Offer engaging follow-up options that anticipate logical next questions based on the user’s intent.

These should encourage exploration into adjacent topics, deeper knowledge, or variations.

Format follow-up queries as clickable options, like:

“What’s the best pasta for pesto?”

“How can I make pesto without basil?”

“Does pesto taste better with roasted garlic?”

Example Use Case:

User Query: "Best pesto recipe?"

Pesto is a vibrant, herbaceous sauce that originated in Genoa, Italy. Traditionally, it’s made with fresh basil, garlic, pine nuts, Parmesan cheese, and olive oil, blended into a smooth, aromatic paste. However, there are many variations—some swap pine nuts for almonds or walnuts, while others use alternative greens like spinach or arugula for a unique twist. Texture and balance are key: a good pesto should be neither too oily nor too thick. Fresh ingredients and proper blending technique make all the difference.

Curated Web Links:

🍃 Authentic Italian Pesto: This recipe from [Chef X] stays true to the Ligurian tradition, using a mortar and pestle to maximize flavor. If you want to make restaurant-quality pesto, this is the gold standard.

⏳ 5-Minute Blender Pesto: Need something quick? [Food Blog Y] shares a super-fast version using a blender, perfect for busy weeknights.

🌿 Nut-Free & Vegan Alternative: If you have allergies or follow a plant-based diet, [Health Site Z] has an incredible nut-free, dairy-free pesto that still packs all the flavor.

🔥 Creative Variations (Sun-Dried Tomato, Kale, & More!): Want to experiment? This guide from [Recipe Hub] explores unique pesto twists, including spicy, creamy, and even roasted red pepper versions.

Follow-Up Queries:

“How do I store homemade pesto for maximum freshness?”

“What’s the best pasta pairing for pesto?”

“Can I make pesto without olive oil?”

Guiding Principles:

Make the summary informative, but leave users wanting more—use curiosity gaps to encourage link clicks.

Ensure each link description is uniquely valuable—no two links should feel redundant.

Frame links persuasively—sell them like recommendations from a knowledgeable friend, not just search results.

Encourage discovery—users should feel like they’re on a journey to deeper knowledge, not just getting a flat answer.

Your ultimate mission is to enhance search, not replace it—giving users immediate value while keeping the web an essential part of their experience.</pre>

</details>

**Why is this better?** Well there's two clear reasons in my mind:

1. **I think it's better as a user**. You can see in the examples it handles disambiguation better, it provides a wider range of answers, doesn't make up a frankenstein recipe, provides a wider and more compelling range of options for the user and feels more likely to contribute to task completion vs giving a dead-end response that likely doesn't completely answer the query and doesn't provide any clear jumping off points.
2. **I think it's better for the information ecosystem**. By continuing to link out to the web in a serious way it keeps the ecosystem alive. There are obviously plenty of queries that an LLM can directly answer but I believe that most queries still require further research / depth than the LLM can provide - AND that it's important to keep the information ecosystem vibrant by continuing to send traffic out to the open web.

(Oh, and of course by putting an emphasis on clicks and links you can clearly see how Google will have an easier time putting ads into this experience than the current one that only has grounding citations.... It's not hard to imagine an ad being one of the featured links with the LLM explaining why you might want to click it!)

That said - this prototype isn't without it's flaws:

* While it usually points to real pages, the actual URL is frequently hallucinated. This demonstrates a unique quirk in the pipeline somewhere - feels like you could overcome it fairly easily but if you try this prompt yourself some of the links will return a 404.
* Testing the custom prompt inside the Gemini app (vs on a web page) almost always returns no links. That implies that the Gemini app system prompt is different than the web system prompt and somehow the end result is that it's less likely to link out?
* The AI can get a little verbose and floral in it's summary. Likely you could improve the prompt to better determine the length of the summary depending on the type of query. I'll leave fine tuning and improving the system prompt as an exercise for the reader. (If you write a better one email it to me!)

## Google is Grounded and needs to learn how to SOAR

In a world of LLM-search a few things I believe will be true:

* Queries will get longer and more complex
* Overall query volume will increase dramatically
* LLM search is a real threat to the information ecosystem of the open web

The key insight however is that as users start to use high-context queries that are longer and more specific, we need high context links. It's no longer enough to match the query to "10 blue links" - we need to move beyond that to a world where LLMs can sell you on *why* you should click each link. How does each link relate to your query? Why should you trust the link? What will you get when you click? How is each link distinct from the other links presented?

As you can see from the Gemini examples above this is all possible today! This example from above really stands out to me:

![](/images/2025-03-24-18-03-18.png)

This is a great link! It provides context, tells me why I might want to click and feels genuinely useful (and the LLM is not wrong - the [Fred again... tiny desk concert](https://www.npr.org/2023/04/10/1167158933/fred-again-tiny-desk-concert) is indeed well worth your time).

Ok, the framework is hokey but I wanted something memorable. Google should learn how to SOAR: Surface, Offer, Assist, Redirect

* **Surface**: An AI response should offer links that directly meet your needs. Not just matching the query but matching your intent with specificity. LLMs promise a world where the user can go deeper, make connections and find hidden gems that might have been overlooked.
* **Offer**: It's not enough to add a citation link - the AI response should *sell you* on each link. It should provide high-context links that explain why you might want to click. “Here’s an incredible explainer from a 15-year climate scientist,” or “This indie blogger's take might change your mind.” Sell the click. Make it irresistible.
* **Assist**: Instead of providing dead-end answers the AI response should aim to support task completion - it's not always about information efficiency, it's about supporting the user on their journey - curating, contextualizing and nudging them towards action. Less answers and more assistance.
* **Redirect**: And most importantly, redirect. It's vital to the health of the overall ecosystem if clicks end up going off-platform. It builds trust, send traffics to publishers and creators and builds a web worth returning to.

## Closing Thoughts

In my opinion AI Overviews and AI Mode reveal a deeper truth - Google doesn't yet have a compelling vision for the future of search in an LLM world. They're bolting new tech onto an old system and in doing so, risk losing both the magic of the web and the business model that made Google thrive.

So if you have a stake in the web (see my disclosures below!) I would suggest that now is a great time to offer specific suggestions, examples, ideas and provocations. Google isn't a cyborg, it's 180,000 humans in a trenchcoat. And those humans are trying to figure out the future of search just like we are and I think they're willing to listen.

---

*Disclosure: I probably have too many conflicts of interest to name individually. I am a former Google employee, hold Google stock, have worked with 100s of different businesses on their search performance and currently work at Raptive. I'm also an un-ashamed advocate for the open web. Consider me biased. However, all opinions here are purely my own.*

--

*Update May 27th, 2025: [I liked this perspective](https://x.com/pashmerepat/status/1926717705660375463?t=IN1_YgacqtUk_X_COZBXcw&s=19), that maybe RAG is actually a dead end and that agentic search is just a better paradigm. Agentic search is much more like what I'm describing here and RAG is the core underpinning of AI Mode and AI Overviews....*

*Update Dec 16th, 2025: You can now link to Gems so here's the "better AI mode" gem that uses the system prompt from this blog post: [https://gemini.google.com/gem/72a834916ac8](https://gemini.google.com/gem/72a834916ac8)*
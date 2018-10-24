---
layout: tufte
title: Testing out Tufte CSS layout
subtitle: Playing around with a new layout and getting it all working with jekyll & github pages
---

<div class="epigraph">
          <blockquote>
            <p>The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts.</p>
            <footer>George Orwell, “Politics and the English Language”</footer>
          </blockquote>
          <blockquote>
            <p>For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled.</p>
            <footer>Richard P. Feynman, <cite>“What Do You Care What Other People Think?”</cite></footer>
          </blockquote>
          <blockquote>I do not paint things, I paint only the differences between things.<footer>Henri Matisse, <cite>Henri Matisse Dessins: thèmes et variations</cite> (Paris, 1943), 37</footer></blockquote>
        </div>

This is a test post please ignore.

Boiler-plate text and examples follow.

## Testing Margin Notes

As a consultant working with content companies, I often find myself bridging editorial and business. That squishy area between editorial values and business metrics. There's a simple  question that quickly arises. {% include tufte-mn.html id="one" content="This is a margin note perhaps?" %}

## Testing Side Notes

As a consultant working with content companies, I often find myself bridging editorial and business{% include tufte-sn.html id="two" content="This is a side note perhaps?" %}. That squishy area between editorial values and business metrics. There's a simple  question that quickly arises. 

<figure class="fullwidth">
<img src="/images/panda.png" />
</figure>

{% include tufte-mn.html id="three" content="Label for the image?" %}

## Sample Post Copy-Pasted Below

**How do you measure content quality?**

I think we can all agree that page views aren't the way to measure content, nor social media shares. Equally you can't just rely on the intuition of the editor in chief... So what metrics do you use to evaluate content? 

This question of content quality is an important one. Whether you're a media company producing content or a brand using content as marketing it's important to have an understanding of whether the content you're producing is "good".

I'm not looking to reduce everything to numbers here. I'm just looking for some useful frameworks or mental models to guide a team that is producing content to produce better content. Especially as a consultant coming in to help evaluate an organization and push them forward.

(And no, this isn't a conversation about happyclappy Medium.)

The people I've talked to seem to have a pretty strong idea of what good content is. And pretty much everyone (myself included) thinks a strong "editor in chief" role can really help steer editorial quality.

But there's very little I've found about how you actually manage content production and how you might evaluate content quality. So... this is a request? Please send me whatever you've got!

Below are some ideas and conversation starters for what I think is an important idea for anyone in the "content business".

# Defining an editorial mission is a good start...

In my presentation [The State of Content](http://tomcritchlow.com/2017/02/24/the-state-of-media/) from earlier this year, I made the link between defining an editorial mission and hiring a strong editor in chief to champion and bring that to life. I included this quote from the [NYT 2020 report](https://www.nytimes.com/projects/2020-report/):

> Our most successful forays into digital journalism [...] have depended on distinct visions established by their leaders — visions supported and shaped by the masthead, and enthusiastically shared by the members of the department. [...] These departments with clear, widely understood missions remain unusual. Most Times journalists cannot describe the vision or mission of their desks.

I love this, and I still think this is one of the best ways to produce strong content that connects with an audience.

But... I'm left feeling slightly unsatisfied. And, in particular, as a consultant I'm often in the weeds with a client trying to help them define an editorial mission and build processes and teams that can stick to it.

And... I don't have a good framework to turn to that helps a team to keep on track? Do you have one?

# Defining an audience and understanding their needs is also good...

I've seen several examples of teams that tried to define an editorial mission without properly defining an audience (or audiences). And every time they came up short. Also from my state of content presentation, I love this [quote (actually a twitter thread) from Kyle Monson](https://twitter.com/kmonson/status/710129384494071808):

> Whether your employer is a publisher, a brand, or an agency. If you’re making garbage, help them do better. The good ones will listen to you and incorporate your expertise. In my experience, most of them really do want to do it right.

> And believe it or not, super engaged communities often want to hear from the brands who serve them. And super engaged brands want to provide communities with things other than just “content”.

> So if you find yourself writing pablum, narrow the audience to a core group of smart people who care about what the brand has to say. And then convince the brand to say something meaningful to that small, smart audience. Godspeed.

Of course, don't get me wrong... this is hard! Especially the part about narrowing your focus. But defining an audience helps shape your overall editorial strategy but doesn't help you judge individual pieces.

# Perhaps interestingness as a measure can guide us?

When I put out a call on Twitter my friend [Toby Shorin](http://twitter.com/tobyshorin) linked me to this Ribbonfarm piece [books are fake](https://www.ribbonfarm.com/2017/06/01/why-books-are-fake/) and this quote in particular:

> Interestingness is not a fixed property, but a move in a conversation between what everyone in the audience already knows (the “assumption ground“) and the surprise reveal. Being interesting means that the audience shares, or can be made to share, the common knowledge that the author seeks to undermine. Interestingness is a function of whatever body of knowledge is already assumed to be true. Therefore, it can be difficult to see the interestingness – the point – of a fragment of an alien conversation.

Oh! This sounds useful - can we extend this into a measure of interestingness? Perhaps by shining a light on and agreeing upon a definition or outline of the assumption ground?

I think there's a thread to be explored here. My friend [Sean Blanda](https://twitter.com/SeanBlanda) said:

![Tweet by Sean Blanda: My loose criteria can be best distilled as making sure content "advances the conversation" of the community being served](/images/seanblandatweet.png)

I like this. And I don't know of many organizations or individuals that care about "advancing the conversation" so I think there's definitely something useful here. But it's still a long way from being a real framework or process you can follow with any rigor... In a chat conversation between myself, Sean and [Brian Dell](https://twitter.com/itsbdell) we discussed whether it's possible to add any rigor here. I love this from Brian:

![Tweet by Brian Dell: I think the answer is that in the space between this strategy and the audience are a number of fluid and soft quality metrics that lead to meaningful and good content](/images/briandelltweet.png)

Ok now we're getting somewhere! But, it's that soft space. How do you make it less soft? How do you poke it? How do you make it less soft? I asked [Jim Babb](https://twitter.com/jimbabb) and he said:

![Slack message by Jim Babb: I love the idea of having an editorial mission or a north star. Or impact… is another. BuzzFeed’s publisher Dao once told me that they measure success by the impact they have on society. At the same time, content is only as “good” as it is defined by it’s end users. I know that’s crazy subjective, but it allows the marketplace to define the value of content rather than letting you do it. There are plenty things on Youtube that I wouldn’t say are good, but their fan audiences would highly disagree. That’s why I like this idea of content market-fit. The quality of content is how well it satisfies a user’s need whether it’s for utility, entertainment, or education. Today the ultimate score on that front is either an NPS-like measure, would you share it and recommend it to others? Or even crazier, in the age of distributed media, do you like it enough to come back for more? I like what you’re getting at with the EVS. I think you can boil it down to just a few questions. Good for you: Does it align with our editorial voice, brand and style guidelines? Good for your audience: Does it fit an audience need in a meaningful way? This takes me back to my art school days talking about what is art. I also think having an editor with good taste is the best way to do it. They just say yes or no. You try to scale their personal taste. That's how publications do it. Brands do the same thing with internal Creative Directors.](/images/jimslack.png)

I'm not sure there are clear answers here. Seems that a lot of people are defining, measuring and thinking about this in lots of different ways.

# Surveys & Feedback

One tool in my arsenal that I'm relying on is a variation of the [Google Panda Questionnaire](https://www.distilled.net/blog/seo/replicate-googles-panda-questionnaire-processing/). In short, it's a 10-question survey that you can run on any web-page with real humans to get a measure of "quality".

It's useful for a few key reasons:

1. The questions came originally from Google's quality rater guidelines doc so the framework has some relevance. Companies understand why you want to use it as a benchmark.
2. It quantifies otherwise subjective measures like how much users trust the website.
3. It's generic and you can use it for any site. 

The results from this kind of survey can be very powerful for company execs. This is an example from a client:

![Data from a sample panda survey showing clients sites scores lower than competitor](/images/panda.png)

The Panda survey is a useful tool[^1] but it's geared towards evaluating site design and UX, though it does include aspects of content too.

# Maybe there's a version of the Panda survey for evaluating content interestingness?

What would a version of the panda survey look like specifically around judging editorial content? Could we construct an Editorial Value Survey (EVS for short) that looked like the following questions:

- Did you find value in reading this content?
- Does the opening paragraph make you want to keep reading?
- Would you have finished reading this piece of content if you were reading by yourself?
- Would you bookmark this content to come back to later?
- Would you share this piece of content with a friend or colleague?
- Would you share this piece of content on social media?
- Would you describe this content as [insert Q relating to our editorial mission see above]
- Would this piece of content make you want to learn more about who wrote it?

# Or, perhaps we need more of an internal process or framework?

My solution here doesn't necessarily need to be a user survey. It could just be an internal process of getting a group of employees and/or writers together and creating a scoring methodology for content. I had one client who could never define good content, so instead created a benchmark for **good enough** content. By defining the worse possible thing they could still publish it actually gave them a clearer focus for evaluating content.

An internal framework could be a short list of questions to interrogate our content and we can have a small team internally rate content on the scale. My brother Will suggested that an exponential scale can sometimes be useful for these internal ratings to better catch outliers:

![Slack message from Will Critchlow: also feels related to the stuff I talked about exponential scales instead of getting people to rate content on a uniform 1-5 scale ask them to rate it on a scale from: 1 = the kind of thing you could imagine someone writing if they knew only the most superficial / basic stuff about a topic 2 = solid, on-topic, essentially entirely correct, but relatively uninteresting 3 = interesting, would feel good about having read, might share if the exact topic came up in conversation 4 = one of the best things I've read on this topic - immediately sharing widely even to people who might not be directly interested in the specific topic 5 = one of the handful of best things I've ever read on any topic. that could be an internal rating scale - exponential gaps means relatively few disagreements on where a specific piece rates](/images/willslack.png)

This exponential scale might be useful. But perhaps all that's needed is a simple checklist? Can we distill our editorial strategy into a set of checklist items to ensure that content aligns with our goals?

# What else?

Ok, I'll wrap up here. What am I missing? What frameworks, processes and metrics do you use to measure content quality in your content organization?

(Aside as a closing note: this is all related to [branding in the age of content](http://tomcritchlow.com/2017/06/27/branding-in-the-age-of-content/) - how we monitor, shape and think about perception and "brand" for companies that produce content at scale... Definitely more to unpack here.)

Ways of Seeing
--------------

How to recognize and understand culture inside a client's organization

"One thing about which fish know exactly nothing is water, since they have no anti-environment which would enable them to perceive the element they live in." - Marshall McLuhan

"First, The fish needs to say, 'Something ain't right about this Camel ride -- And I'm Feeling so damn Thirsty.'" - Hafiz

As a consultant it's important to recognize that one of the strongest forces inside an organization is their culture. It's why my personal mantra is a reframing of the classic culture eats strategy for breakfast:

(Their) culture eats (your) strategy for breakfast.

It's my theory that to be an effective consultant you need to learn how to understand culture - you need to learn ways of seeing your client's organization. In this post I'll walk through some frameworks and concepts for doing just that.

But I'll go one step further and suggest that understanding an organization's culture is the whole game and that teaching your clients to see is the ultimate pinnacle of a consultant's work.

First though, a walk in London some time ago....

A walk with an anthropologist in London
---------------------------------------

A few years ago I was walking with a friend through the streets of London. I'd been working at Google for a while and I was frustrated at not being able to get my ideas turned into reality. My friend, a philosopher and anthropologist, just laughed at me and said: (I'm paraphrasing - sorry H)

"You're an idiot. There are thirty thousand people working at Google. If everyone as far down the food chain as you could get their ideas made it would be chaos. The system is explicitly designed to prevent your individual ideas from mattering one bit"

This was a lightbulb moment for me. Of course. Every organization is a system and process designed for certain outcomes - while some change is accepted and embraced, the point of the organization - its structure, processes and hierarchy - are there to prevent individuals from derailing the whole machine.

The rhetoric of "ideas can come from anywhere" and "act like a startup" sound good but they're just not true reflections of the lived experience inside a large organization like Google (or any other). The truth is that large organizations are both explicitly and implicitly designed to prevent new ideas from emerging.

The Frustration of Stability
----------------------------

As a consultant or changemaker, this frustration can be very common. You are convinced that you have a good idea but feel unable to convince the organization. Or you have convinced the organization on an idea but feel frustrated that you just can't get it done.

It's important to recognize that most organisational change happens very slowly and starts very small. And this is as it should be. Consider the alternative - can you imagine an organization that was reinventing itself every time a consultant walked in the door?

This frustration is an emotion you can channel into focus. Changing a stable organization requires first understanding its context. And when you walk into a client's office, you're  always missing context. Sometimes there's business context you're missing - funding, acquisitions, business models. Sure. But more often it's about missing cultural context. Your ideas are being rejected like a virus by the antibodies of the company.

Ever since writing The Consultant's Grain it's become a mantra of mine that "their culture eats your strategy for breakfast". It's a reframing of the classic "culture eats strategy for breakfast" and it helps me stay focused - especially as a consultant coming into an unfamiliar environment and trying to get things done.

However, the client usually isn't paying you to understand their culture so you have to do it fast. I think this is a skill, something you can learn. This skill of sensemaking takes experience of different cultures and a strong sense of observation.

Enter John Berger
-----------------

Art has a lot to teach the business world. It's the best place to learn the skills of sensemaking and observation. John Berger had a wonderful TV show on the BBC in the 70s called "ways of seeing". The opening scene is a thing of beauty.

Without talking, John walks to a renaissance painting, framed on the wall of a gallery and pulls out a knife. The gentle ripping of the canvas is all you hear as he carefully cuts out a portion of the painting. It's a shocking scene that instantly makes you pay attention.

The whole thing happens in the first twenty seconds. [Watch it here](https://www.youtube.com/watch?v=0pDE4VX_9Kk):

[![](https://lh4.googleusercontent.com/4Mo3KUeFv2WGtjqFBHIU-70ruODXaMQHMXNRckeZOKgh8jV0-vNzsL_p5J3G9JMBQfd-6Xnl3bP9zd4Akt-GAOM1WN_ldYkRSZs-3s3xztLiX2DDTmWtwuI2-_lZ8eCc-rGpR8gV)](https://www.youtube.com/watch?v=0pDE4VX_9Kk)

It's an unsettling scene - even when you know it's coming! Recognizing why this scene is shocking helps us understand culture. No one tells you if the works on the wall are priceless. But the signals are all there - a gallery setting. A TV show about art. You're not expecting him to walk up with a knife... It's not what's *done*.

John Berger goes on to talk about critical ways of understanding art, primarily through learning to critically examine something in front of you by keeping the context in frame. Who is showing this art to you? What sensory cues are there to shape your perception? How does reproduction of the image affect the image itself?

![](https://lh4.googleusercontent.com/VmKvrn20_TxxpCOHZcQJOPI2ZTpn3td8oqsSUrTlaTEY3vct3hSOFZRqfNB6AXnQLsqB-pftivLDavU201Zb8O_JRjxige7dYJCjDf2_laCoeq8GWuMhTvljSTSQ4L5c98huaZem)

These questions and ways of seeing are the same exercises I employ as soon as I engage with a new client. Attempting to actually see what's there - not what everyone around you assumes is there, and certainly not what you're told about "how things work".

I just came off a project where after a large acquisition there were two teams learning to work together. This caused incredible frustration for both sides - both everyday frustrations at different processes and approaches but slower moving structures below the surface about values and mental models of how the world works. These caused tensions, clashes and more.

I won't pretend to have solved all of these frustrations (and I wasn't being paid to solve these - at least not directly!) but the very first thing you can do in this situation is try and look critically and honestly at what is there.

Especially when you're early in a project, before you're supposed to have gained any knowledge it's a great time to try and provoke some reactions (whether you go so far as slashing painting is is up to you!). By pushing against the system in new and interesting ways you can learn a lot about the system by how it responds.

You need to get in the client's flow
------------------------------------

To understand context and get a feel for culture, you need to find ways of getting "close enough to smell the client".

Context and culture happen at the in-between moments, spaces and projects. How does the team handle crisis? How does the team handle group meetings? What does down-time look like? How are new team members welcomed onto the team?

If you're too distant from these in-between moments it's almost impossible to properly understand the culture.

So as a consultant - as an outsider - it's crucial to find ways to get embedded inside the organization. You need to get close enough to be inside the flows and streams of work. Increasingly there is a duality - the physical environment and the digital one - where different modes and types of work get to happen.

It's important to be present in both.

Being physically present gives you a sense of the emotional interactions, in-between spaces and so on. It also gives you the platform to build emotional capital required to ask for favors

Being digitally present gives you the tactical understanding of how projects, documents and tasks flow around. It's also a great way to get a glimpse of the knowledge work happening around you that you aren't directly involved in.

Once you're inside the flows it's your job to pay attention.

Understanding Culture 101 - what are we trying to see?
------------------------------------------------------

It's helpful to have some frameworks to help us think through the kinds of things we're trying to see in the first place.

T[his framework from ethnography](http://www.acrwebsite.org/volumes/v31/acr_vol31_203.pdf) is a simple and memorable framework that shows how you can think about the ways culture can manifest and reinforce itself (the four A's):

![](https://lh5.googleusercontent.com/50JjfV_tEK7cGC_smRzYFfE6tBAN4awzSnn0pz-A-LNhpiQkCyjhAzO9XBh2LmeZqh74C6RYvsHthxB2H_vvN5TxkUT4D7QGvq6Xa9xxSL_kfsyz7_PQetNpepAt9ouhkyc2udqI)

In this framework the actors, artifacts and activities interact directly with each other. And they all exist within a wider atmosphere.

Actors - these are the people in the frame. I love the word "actors" since everyone is performing a role. The theatre of work is the epic play of our lives and the office (both physical and digital) is the stage. Notice how people behave, the language they use and their intrinsic motivations.

Artifacts - these are the visible extensions, the "tangible" assets created by the actors. This might be everything from the design of a report to the structure of a paid leave policy.

Activities - the things that the actors do and why they do it. These activities will tell you more about the underlying power structures. In particular, pay attention to the habits and routines that are in place. Nothing will tell you more about what people value than what they do repeatedly.

Atmosphere - this is the wider environment in which we're working. Is the team or organization part of a bigger structure? How is the physical office laid out? In the digital space are they using Slack or Basecamp and why? Which design choices were put in place deliberately and who made them.

There are many frameworks and mental models that can help you understand and grapple with culture.  ["Principles of Management"](https://open.lib.umn.edu/principlesmanagement/part/chapter-8-organizational-culture/), chapter 8 is a great primer on organizational culture and has a model for the 8 "dimensions" of organization culture.

You can imagine every organization as having each of these aspects to a greater or lesser extent. So you might think about "plotting" a company along each axis. This is an example I put together from a recent client engagement:

![](https://lh6.googleusercontent.com/2TM5gFPF28ys5HVyNNTc-8j_ZPV-4j3v7YRu2IQeAblXC9mQ7PLM6_ybmtC056FA0gx35F6A8Fq4gQh9jdwyn30OqQnIQT6zXyfpoJL1PMOYZlFk-WHliV8cfBU-bgYY1K2PrrE6)

You can see for example that I've mapped them as "unstable" and "process oriented" - which makes sense since my role with this client engagement was to create new processes.

I've found this framework helpful when trying to distinguish between things like intrinsic motivation (e.g. "we want to build the best X") vs extrinsic motivation (e.g. "we want to beat competitor Y").

Once you start plotting an organization on these dimensions of culture you can start to look at each one and think about *why* they are that way and *how* they reinforce that behaviour.

How to see the world through your client's eyes: Language, Delusions, Mythology & Power
---------------------------------------------------------------------------------------

When you're trying to understand a company's culture, you're essentially trying to understand how they see the world. The lens through which they process the world around them.

This manifests in four specific things: language, delusions, mythology & power. As you get close to your client notice them, document them, see them.

### Language

Language - the naming of things is incredibly powerful. First a group will create language as shortcuts for ideas and values - ways of thinking. But gradually this language starts to create the group. First the group creates the language and then the language creates the group. Language is the reinforcing feedback loop of culture.

There are two extensions from this - firstly that using the wrong language can alienate you from a group. As a consultant I try hard to use a variety of definitions, terminology and linguistic approaches. Using the wrong term once is no big deal, consistently referring to the concept that the group has learned to reject will get your ideas rejected.

Secondly - a skilled meme-artist can create new language for groups. Language that has embedded values, ideas or bias from the consultant.

My friend [Brian](https://twitter.com/itsbdell) calls this noticing and naming. It's the essential task of the consultant to pay close attention and then attach new language to important ideas. By naming thinks you can drive attention to what's important and hence shape the way an organization behaves.

Managers understand the organization's past behavior.

But this knowledge,

and the language that accompanies it,

limit their vision

of the organization's potential future state.

Using the language of the past,

managers may try to provide a vision for the future.

But it is an old future---

a memory of what the future could be.

Managers may strive for fundamental change,

but their language prevents them from achieving it.

This quote is from the excellent [little grey book](http://pangaro.com/littlegreybook.pdf) which is all about language use inside organizations and has tons of wisdom. Thanks to my friend Robin for sharing!

### Shared Delusions

Shared Delusions - In order for teams to function effectively they need a shared mental model of how the world works for their industry/niche.

This mental model helps the team act quickly by working from a shared cheatsheet of understanding. It saves having to make every decision from first principles. I like to call this mental model a "shared delusion".

Why a shared delusion? Because it's useful to recognize that any mental model of how the world works is an incomplete model. The idea of a shared delusion is that we're understanding head first that we're lying to ourselves about certain things to make it easier for us to make decisions or rationalize our behaviour.

The problem is that many mental models (i.e. shared delusions) about the world are built implicitly and not explicitly so that it becomes hard to tell which piece of the mental model is a useful simplification and which piece of the mental model is an oversimplification (or a flawed assumption).

So let's call the mental model what it is - a delusion - and try and understand how we look at the mental model directly to better understand it's limitations and flaws.

As a consultant - with experience likely across more industries than those inside the organization - you are in a unique position to separate out which parts of the shared mental model of the world are useful shortcuts and which are flawed ideas. Reinforce and strengthen the useful shortcuts (or make new ones) while deconstructing and weakening the flawed ideas.

I'll give you an example from my own work - a B2B client had seriously under-invested in design. Partly under the assumption that in the B2B space "it wasn't as important as for B2C" and that their sites were "good enough already". These kinds of assumptions about the world were repeated and interpreted differently throughout the organization but no one was challenging them directly. I wrote more about the methodology over in my post [how do you measure good content](https://tomcritchlow.com/2017/10/03/how-do-you-measure-good-content/) but a survey against their competitors was akin to taking a knife to their painting. It sent a shock through the organization and I presented this table at an executive all-hands:

![](https://lh4.googleusercontent.com/qH-_ovEUkBOhpZt8Tu0mS2KxaadAbST4RRs1js_PS-26OKX8Icga9iqT2InkQvMMhMDXNeWkGYTiOjCW26QRWISVFEbfrbGjnd8Sys1E3aKrzWanAw-2xH5dJgsVPuudcS_5YqWM)

There's two lessons here - firstly if you want to understand shared assumptions sometimes you have to go to the source - surveying users, asking customers questions etc.

Secondly - always try and create an objective counter to their subjective reality. Be gentle when challenging mental models - no one enjoys their view of reality being broken.

### Mythology

Mythology -  In times of stress, culture is a strong force that binds teams together. Culture can be the light at the end of the tunnel. Connections and bonds are formed in times of struggle and stress. From these challenging times come stories - stories of how it went down. Stories of heroics, stories of failures, stories of late nights, stories of product launches.

These stories become mythology within the organization. Very rarely are these documented - we're looking for the oral history of the company and you'll often get the best version of these out of the office. (At the bar or on the walk to lunch).

Pay attention and listen carefully to the mythology - actively look to uncover these stories of projects past. These stories, often-repeated, contain lessons about value systems within the organization. But the lessons they tell usually bear little to no resemblance of truth of what might succeed or fail in the future.

The key insight here is that every single new project will get compared to the myths. So you can't understand the context of your ideas and recommendations without first understanding the mythology.

Tread lightly when following the footsteps of glory or failure - both are dangerous paths to follow.

### Power

While all of the above references the idea of culture - in truth every individual inside an organization has their own view of the culture. And each individual's view is often dictated by their relation to power structures. Who are they subservient to? Which individuals have an outsized impact on the culture and which are relatively neutral? Understanding the personal culture of the CEO can be as powerful as understanding the whole organization's culture.

When I start a new client project I start sketching a simple org chart of boxes and lines. It's the best you can work with on day zero but org charts are too simplistic. As Venkatesh says about org charts:

"A good deal of the process is about imposing anxiety-alleviating platonic structural beauty."

<https://www.ribbonfarm.com/2015/05/28/the-amazing-shrinking-org-chart/>

The org chart of boxes and lines maps reporting structures (kind of) but little else. The org chart only tells us about the topology of the organization, i.e. what are the connections? It tells us nothing of the topography, i.e. the lay of the land. The messy distortions.

The real org chart mental model of the organization is much more like this:

![](https://lh3.googleusercontent.com/angLQywIyheCbJIF441rU4OqaBDkEGjWTnUJ8VO8CFIS5mJU4dsFwZYRLwRchVffhnVVl9lyiMduaei8G-0QpzXsq_XMYeoNj-VnSKocUJ37tO7YUJJQABLtN_4VnoVVJvoJFbUY)

This from a fascinating analysis by Carta into influence inside their organization: <https://medium.com/@henrysward/the-shadow-org-chart-cfcdd644575f>

This network-model showing a small number of highly connected nodes maps well to the lived experience of working inside a messy organization. Knowledge work environments are almost exclusively highly networked and stream-ified places now.

But again - these networks and nodes and actors only tell you so much about power. Relational power dynamics are everything and as much as you're understanding culture inside an organization you need to understand the flows of power.

In the early days of a client engagement - watch and listen closely and as soon as someone says or does something that doesn't make sense. When something that usually or rationally would lead to X but instead leads to Y you're usually missing a hidden undercurrent of power.

Notice turns of phrase, rejected ideas or a statement that turned the room to silence. These mis-steps are power potholes in the consultant's path. Notice them, write them down, meditate on them and try and ask yourself: what power structures exist here to explain this anomaly?

So start on day zero with a crude org chart. In the first week convert your org chart into a network graph and as fast as you can (usually in the first few weeks) augment this network map with the key power players.

Culture vs Propaganda
---------------------

Beware documented culture. For all of this talk about company culture I've found that it can be misleading to rely on mission decks and documented company values. These are top-down objects that are at best out of date and usually contain at least one statement that is the opposite of the truth. A mandate rather than an observation. (After all the only reason to document culture is to change it.)

My favorite illustration of this is Facebook's culture of "move fast with stable infrastructure". It's a mock up of a poster that Zuckerberg is showing at a conference:

![](https://lh3.googleusercontent.com/oU9-EA8-cgH9UvHd9vE9FKh9cvvBdJHppE8zYanYv4QWhE8WT2hAY5WcbFv2CL7pk60Rb7pfB6Glmh1XLUdUIMTigYUQMaWwG3RD-_uRz59fABzcRwatf3kbUp0B2Yje_Np0gP26)

The interesting thing is that the only images you can find are the keynote mockups of the poster. There appear to be no *actual* posters of this manifesto.

I'd go further and say that it is an impossible object. It's impossible to make a poster with this phrase on. Why? Because anyone (and especially Facebook employees) who reads this poster is actually translating it in their mind into the *actual* poster of "move fast and break things". Nothing has changed about their culture.

So seek out the internal culture decks, they're useful starting points. Consume them. But don't trust them.

Teach your clients to see
-------------------------

Every consulting engagement starts out with a sprint to uncover the culture and invisible lines of power that will help you navigate the client's organization and execute effective projects.

But long after specific projects and deliverables are done what will your legacy be inside an organization? I'd contend that there's nothing more powerful or transformative than giving people new ways of seeing.

Helping your client to see & describe their own organization and the world around them is powerful and I'd contend is the pinnacle of a consulting engagement.

So take a good look at the client and when you're ready, take a knife to the priceless artifacts and help them see what's there.

--

Much love to the folks who contributed and reviewed drafts of this piece including: Kit, Brian, Toby, Sean, Robin, Susie, Rachel, Thomas, Elan,

Appendix & Discarded Content
----------------------------

Artifacts
---------

We mentioned artifacts above in the 4A's model. Any visible extension of culture is interesting. But even more interesting is that it's often an under-utilized tool in the consultant's arsenal. Especially the seemingly playful or fun elements. These trojan horses of culture are powerful.

![](https://lh6.googleusercontent.com/pPTXJWk7fCWVbbJgQRrjrcb2fqBcanXCAIML7KUv-u5E77HUf8iDs4BmcvcG9_PmnjaUSjJtMgSUPqx_1aymTszEkvwU2RHJYCEymh3agE8F6sCpntx4zjEvuj7GJDBgs9ONOxCp)

Here's Giles Turnbull:

"The creative team I used to be part of at GDS pioneered the blogging-and-stickers approach to creative strategic thinking.

The idea is basically this: you think out loud, on your blog, over a long period of time. At least months. Probably years. Each new post is about one thing, and tells a single story of its own, but also adds to the longer narrative. Each new post helps you tell that longer, deeper story, and becomes another linkable part of the timeline.

Your stickers (and posters, and other meme-ish sorts of things) become simple ways of reinforcing and illustrating the thinking you're doing in the blog posts.

Over time, you build up a corporate train of thought. You work out what you're doing, and why and how you're doing it, by constantly writing about all of those things. You end up making your strategic direction clearer to your readers, and perhaps more importantly, to yourself.

[...]

It means not planning your stickers, but waiting for the moment in a meeting where somebody says something that's simultaneously profound, meaningful, and funny. Where someone says "That should be on a sticker," and everyone nods. Don't treat those moments as light-hearted relief, treat them as moments of insight. Actually capture them with a sticker. You'll know the good sticker ideas when you see the nods and the smiles that come with them."

<https://gilest.org/blogging-stickers.html>

I've also been inspired by Dan Hill - he recently wrote a post about his digital studio and their use of newspaper club to make physical artifacts out of their strategy work:

![](https://lh5.googleusercontent.com/fsFX0UWEBShIPuwcPtvrrGQ2_gdf7XyXVvlac6kMUiNkSR5Gnqj68t0-ICoWuAhTruO_D29fTxIBC6IyY2TPKaka2PWUajVxAU1MGv4ws9UPuxXI6tyLkjbL4NVxLX5pHKF9Q8-D)

"Finally, we place great emphasis on making the thinking tangible, following my colleague Bryan Boyer's phrase, making strategy you can see. This might well be sketch videos, which we've used with great success, or a real emphasis on drawing in order to flush out damaging ambiguity and crisply illustrate genuine possibility. And, if we're talking documents as a deliverable, we ensure that it's strategy that you might actually want to read, in a format you might actually want to read it in. (Each of our main client reports this year has been produced as a richly illustrated newspaper, via Newspaper Club.)"

<https://medium.com/dark-matter-and-trojan-horses/arup-digital-studio-7467a61d5fd2>

Strategy you can see! Rich thinking here for anyone who deals in knowledge work where there is a lack of tangible artifacts. It's easy to make a real impact by making things physical in an otherwise digital office.

So what?
--------

So what? Where does this noodling on the culture and power of the organization become practical and useful? Here's the cliffnotes in my mind:

True culture (not the culture deck) is one of the most powerful forces inside an organization. And following the trail of culture and power dynamics will help you understand which ideas will be frictionless and which will generate friction. In short - it'll help you be more effective.

So, open your eyes. Look & listen for culture. And sometimes pull a knife to the art and see what happens.

By challenging the underlying assumptions we are able to interrogate those assumptions more closely and keenly (notably in the case of "ways of seeing" - the reproduction of the image, originality, authenticity etc).

--

*Footnotes:*

[^1]: In my research I've come to think Google based some of their methodology on the System Usability Scale originally developed in 1986. [More details on the SUS here](https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html)
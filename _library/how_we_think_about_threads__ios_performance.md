---
layout: libraryitem
title: "How we think about Threads’ iOS performance"
link: "https://engineering.fb.com/2024/12/18/ios/how-we-think-about-threads-ios-performance/"
date_saved: 2024-12-30
tags: [ "metrics, performance" ]
author: ""
image: "https://engineering.fb.com/wp-content/uploads/2024/12/Threads-iOS-Hero_crop2.png"
description: "How did the Threads iOS team maintain the app’s performance during its incredible growth? Here’s how Meta’s Threads team thinks about performance, including the key metrics we mon…"
---

Love seeing concrete examples of teams creating new input metrics that they operationalize around.

> ### %FIRE: Frustrating image-render experience
> 
> In addition to all the text updates people share, we have a lot of photos shared on Threads. When images load slowly or not at all, that can cause someone to stop using the app. That’s why we monitor an important metric to alert when there’s a regression in how images are loading for our users. That metric, %FIRE, is the percentage of people who experience a **frustrating image-render experience**, and it’s calculated as shown in Figure 1, below.
> 
> ![](https://engineering.fb.com/wp-content/uploads/2024/12/Threads-iOS-performance-figure-1.png?w=1024)Figure 1: %FIRE calculation.
> 
> All kinds of things can regress %FIRE, both on the client end and the backend, but not all image-rendering bugs are covered by this metric. For example, in Threads iOS, we had a bug earlier this year where user profile photos would flicker because of how we were comparing view models when reusing them. That triggered a frustrating user experience, but not one where users would contribute to %FIRE.

Source: [How%20we%20think%20about%20Threads%E2%80%99%20iOS%20performance](https://engineering.fb.com/2024/12/18/ios/how-we-think-about-threads-ios-performance/) by
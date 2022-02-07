---
title: Electric Tables V0.2
subtitle: From the web to spreadsheets and back again
layout: blog
og: https://tomcritchlow.com/images/ee-og-2.png
---

Hey, so [Electric Tables V0.1](https://tomcritchlow.com/2022/01/26/electric-tables/) is a working prototype experimenting with a kind of personal database. Taking the idea of web foraging seriously. Giving URLs some *weight* - not just treating them as strings of characters but as *objects* and *actions*.

But, because of my piss poor coding skills ET V0.1 was single player only. It stores everything in local storage so there's no login and you can't share tables with other people...

This was unsatisfying because collaborating and publishing is a key part of the web. Building a full nodeJS backend with login and collaborationg is beyond my coding skills, but I still wanted to build a prototype to play around with that interaction.

So, enter ⚡ **Electric Tables V0.2**.

## From the Web to Google Docs

The insight is to use a Google Spreadsheet as the data storage layer. Then, you can share and collaborate on your tables just like any other Google Doc....

It looks something like this:

![](/images/ee-2-sheet.png)

And the pop-up is almost the same (though a little less polished)[^etsy]:

[^etsy]: That's [Erin's Etsy page](https://www.etsy.com/shop/ErinprzArt) in the screenshot by the way. Shameless plug in case you want some art or kids picture books!

![](/images/ee-2-popup.png)

Here's a full demo video explaining how it works:

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" src="https://www.tella.tv/video/ckz8vh1p9000209ml7mz456tw/embed" allowfullscreen allowtransparency></iframe></div>

## From Google Docs to the Web

The interesting thing is because every Google Doc can be used as a JSON endpoint you can **publish** your data from Electric Tables V0.2 as well!

So, a list of books that I collect and maintain in [Electric Tables here](https://docs.google.com/spreadsheets/d/1sYkskNmUEbGbkhaq4IRS6U8g4ZoHXJZi1aHtilkCc9s/edit#gid=286485334) becomes a [formatted web-page here](https://grizzled-glass-color.glitch.me/):

![](/images/ee-2-glitch.png)

This opens up a bunch of interesting possibilities I think around collaborative publishing, lightweight list making and so on.. Once you have the data as JSON you can do whatever you want with it...

## Some Notes

Under the hood I'm using a [Google Script](https://script.google.com/) - you can publish it to the web as a macro with a unique URL. Posting to the URL triggers a little cloud function that then crawls the URL, extracts the info and adds it to your spreadhseet.

[All the code is here in this Gist](https://gist.github.com/tomcritchlow/cbb06a9298fb6cc0804372552fda1f96)

Because it's using the Google Script as an endpoint you can use this on mobile too with a simple mobile-optimized page with a form. Just enter the URL and hit submit and it posts the URL to the script. Much easier on mobile than a bookmarklet...

I've tested this with friends and it works as a multiplayer bookmarklet where we can each add to the same spreadsheet and collaborate! But unfortunately I don't quite feel comfortable turning it into a bookmarklet that you can just grab and go because I'm not sure what the limitations are for opening up my Google Script endpoint free for all... (and because it uses eval() to execute the custom extractors....)

## What Next?

Honestly I like the speed and simplicity of Electric Tables V0.1 - it's snappy and "just works". But being able to collaborate and publish your tables via a Google Spreadsheet is a key feature...

Maybe if I can figure out how to code nodeJS there will be a V0.3 that combines the ideas...


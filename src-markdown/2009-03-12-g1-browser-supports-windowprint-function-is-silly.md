---
ID: 83
title: >
  G1 browser supports window.print()
  function is silly
author: Nick
date: 2009-03-12 20:53:40
layout: post.html
permalink: >
  http://www.rowlando.com/blog/2009/03/12/g1-browser-supports-windowprint-function-is-silly/
published: true
---
Today I thought I'd see how the website I'm currently front-end developing looks my phone's browser, the G1. It was simple to view since the G1 has wi-fi so I typed in my laptop's IP address followed by the path to the website. Renders great! Well it would, because the browser is based on Webkit.

There was one thing that irked me. The "print this page" link was present on the page.

The "print this page" link is inserted via JavaScript because JavaScript must be present in order to execute the <code>window.print()</code> function. Of course, I test for the presence of the function before inserting the link into the page, e.g. <code>if(window.print) {…}.</code>

So the browser is capable of printing but the device is not. For the most part users wouldn't bother clicking on this link but still it feels wrong. I don't know if the browser is aware of what device or operating system it is running on or if it knows of the device's capabilities. I'm guessing that it doesn't. In the case of the G1, the browser is based on Webkit and a fair bit of custom development has gone on. I don't know if the JavaScript engine is tinkered with. If it is it would seem like an obvious thing to remove.

In a wider context, PPK touches on a similar topic in his blog post about <a href="http://www.quirksmode.org/blog/archives/2009/03/testing_mobile.html#link8">testing mobile browsers</a>. He says <q>there's a new class of browser compatibility errors: when browsers are unable to make full use of the device’s capabilities.</q> I don't know how to class what I have written about but I wouldn't necessarily class it as a browser compatability error.

I'm sure more functions could be stripped from the JavaScript engine of a mobile device's browser. The example above it pretty edge-case stuff but I expect as mobile browsing takes off these things will need fixing.
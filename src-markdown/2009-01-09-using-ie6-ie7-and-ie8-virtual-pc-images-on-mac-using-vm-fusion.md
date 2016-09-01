---
title: Using IE6, IE7 and IE8 Virtual PC images on Mac using VM Fusion
author: Nick
date: 2009-01-09 17:20:16
layout: post.html
permalink: http://www.rowlando.com/blog/2009/01/09/using-ie6-ie7-and-ie8-virtual-pc-images-on-mac-using-vm-fusion/
published: true
---
Okay, here goes my first blog entry on rowlando.com. I switched to a Mac in November 2008 after many years of developing on Windows. At my current place of work I still use Windows but I plan to remedy this by creating a development / testing environment on one machine. I must say that I'm still figuring out how to use my <abbr title="Mac Book Pro">MBP</abbr>, weening myself of Windows ways on a daily basis.

Most web developers need to test their work on Internet Explorer, version 6, 7 and now 8. If you don't, you have an understanding, forward thinking client, and one who's probably missing out on potential visitors / customers. Anyway, I digress. On a PC I use Microsoft Virtual PC to test web pages on each version of IE, by downloading VPCs from <a href="http://www.microsoft.com/downloads/details.aspx?FamilyId=21EABB90-958F-4B64-B5F1-73D0A413C8EF&amp;displaylang=en">Internet Explorer Application Compatibility VPC Image</a> webpage. This method is free but has an annoyance in that the images are time-limited, so one has to download updates every 3 months or so.

Understandably, I wanted the same free method of testing when switching over to Mac. A quick search led me to Mozmonkey's blog, where he describes how to do just what I wanted. The only killer is that for some of the steps one would need a PC. I don't have a PC anymore. Comments to the rescue! In the blog's comments there are lots of helpful hints in how to reach the end goal without a PC. Hooray! So here is my attempt at Mac only install of IE, in this case IE8 Beta 2.
<h3>1. Download Microsoft Compatibility VPC Image and extract</h3>
<ol>
	<li>Download the appropriate file from <a href="http://www.microsoft.com/downloads/details.aspx?FamilyId=21EABB90-958F-4B64-B5F1-73D0A413C8EF&amp;displaylang=en">Internet Explorer Application Compatibility VPC Image</a> webpage. It's an EXE file.</li>
	<li>On Windows, one would open the file to extract the <abbr title="Virtual Hard Disk">VHD</abbr>. Use <a href="http://www.zipeg.com/">Zipeg</a>, as <a href="http://blog.mozmonkey.com/2008/vpc-ie6-ie7-ie8-on-mac-os-x/#comment-137834">suggested by Craig</a>, to unzip the contents of the file you downloaded. Simply rename the extension EXE to ZIP, then open the file in Zipeg.</li>
</ol>
<h3>2. Convert the VHD image to a <abbr title="Virtual Machine Disk Format">VMDK</abbr> image</h3>
<ol>
	<li>Download and install Q from <a href="http://www.kju-app.org/">www.kju-app.org</a></li>
	<li>Purely for simplicity, rename your VHD file so it doesn't have spaces in</li>
	<li>Open up a terminal</li>
	<li>Navigate to the folder where the VHD file is</li>
	<li>Type in the following command, replacing the filenames as appropriate:<code>/Applications/Q.app/Contents/MacOS/qemu-img convert -O vmdk -f vpc XPSP3withIE8.vhd XPSP3withIE8.vmdk</code></li>
</ol>
It took a couple of minutes for my MBP to complete this command, after which you should have a VMDK file, suitable fodder for VMware Fusion.
<h3>3. Install and configure VMware Fusion with the created image</h3>
I don't have VMware Fusion yet so I'm now going to download the <a href="http://www.vmware.com/products/fusion/overview.html">trial version of VMware Fusion</a>. If it works I may buy it.

Installation Done.
<ol>
	<li>Open VMware Fusion</li>
	<li>Click File &gt; New</li>
	<li>Click the "Continue without disk" button</li>
	<li>Select the "Use an existing virtual hard disk" option and find the VMDK file that you created earlier</li>
	<li>A warning may popup. If so, convert your disk to the newest format.</li>
	<li>Click continue</li>
	<li>I chose Windows XP Home as the operating system then hit Finish.</li>
</ol>
After this, I started Windows XP and attempted to install VMware Tools.
<h3>Installing VMware Tools</h3>
After several unsuccessful attempts at installing VMware tools I started googling. I found some <a href="http://communities.vmware.com/docs/DOC-7250">instructions by Jay Levitt</a> and followed his directions where possible. I had to use keyboard commands because the mouse (trackpad) was not working yet. I did this:
<blockquote>
<ol>
	<li>Press CTRL-ESC, R, "SECPOL.MSC", RETURN.</li>
	<li>Navigate to Local Policies\Security Options.</li>
	<li>On the right is "Devices: Unsigned driver installation behavior". Change it from "Warn but allow installation" to "Silently succeed". Close Local Security Policy.</li>
</ol>
</blockquote>
Jay mentions going into regedit but the registry entry Jay mentioned was not present in the version of Windows I downloaded from Microsoft so ignore that's why it's not listed above. Next I followed Jay's steps to remove Microsoft's Virtual PC drivers:
<blockquote>Now you'll need your Windows XP installer CD or image.
<ol>
	<li>Press CTRL-Command to escape the guest.</li>
	<li>On the Fusion menu bar, select Virtual Machine | CD/DVD | Choose Disk Image... and find your ISO (or insert the real CD into your drive).</li>
	<li>The Windows Installer will autorun.  Choose "Exit".</li>
	<li><del>Go to Control Panel -&gt; System -&gt; Hardware Tab. (Shortcut: Command-F15, right-arrow, right-arrow). Click the "Device Manager" button.</del></li>
	<li><del>Under MSIE6 -&gt; Batteries, you'll see an Unknown Device, with an exclamation point. Right-click (or use the Action menu) and select "Disable". Confirm "Yes". Close the Device Manager and the System panel.</del> My battery driver was okay already</li>
	<li>Go to Control Panel -&gt; Add or Remove Programs, and remove the "Virtual Machine Additions" program.</li>
	<li>When you see the "You must restart your system" dialog, answer "No".</li>
	<li>Close Add or Remove Programs, and close the Control Panel itself.</li>
</ol>
</blockquote>
I'm not too sure why a disk image is needed. I was lucky enough to have a Windows XP disc sitting in a CD wallet next to me :-) Maybe Step 2 above can be skipped or maybe it's needed in order to remove the Virtual Machine Additions.

Next I followed Jay's instruction to install VMware Tools:
<blockquote>
<ol>
	<li>Press CTRL-Command again, and select Virtual Machine | Install VMware Tools.</li>
	<li>A pop-up appears.  Click the "Install" button.</li>
	<li>In the installation wizard, click "Next", "Complete", "Next", "Install".</li>
	<li><del>Problem #2: When it tries to install the mouse, it will ask for i8042prt.sys. This is not provided VMware Fusion tools; my other VM doesn't use this driver for the VMware mouse, and I am not sure why it needs it. However, you can point it at C:\WINDOWS\SYSTEM32\DRIVERS and click "OK".</del> I didn't have this problem</li>
	<li><del>Problem #3: When it tries to install the printer, it will ask for pscript5.dll, which is not yet installed, and not on the VMWare Tools CD. Just press ESC.</del> Again, I didn't have this problem</li>
</ol>
</blockquote>
When prompted, I restarted my system. However, I must point out that each time I try to restart or shut down Windows it hangs on the "Windows is shutting down" screen. To overcome this, I select Virtual Machine &gt; Restart Guest from the VMware menu.

Success! My mouse is working and, unlike Jay did with past versions of the VPC images I had no driver hell. I am able to fire up IE8 and browse the internet. I can't actually believe this works! Now I just have to do the same for IE6 and IE7, plus workout how to view webpages on my localhost.

I hope my first blog entry helps someone out there.

<ins datetime="2009-01-11T20:22:14+00:00"><strong>Update:</strong> I've worked out how to <a href="http://www.rowlando.com/blog/2009/01/11/reaching-localhost-from-vmware-virtual-machines-on-a-mac/">view web pages on my local development server from VMware</a>.</ins>
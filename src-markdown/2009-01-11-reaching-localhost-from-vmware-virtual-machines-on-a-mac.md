---
ID: 31
title: Reaching localhost from VMware / virtual machines on a Mac
author: Nick
date: 2009-01-11 20:17:02
layout: post.html
permalink: http://www.rowlando.com/blog/2009/01/11/reaching-localhost-from-vmware-virtual-machines-on-a-mac/
published: true
---
I'm in the process of setting up a development environment on my mac. I've set up IE8 testing by <a href="http://www.rowlando.com/blog/2009/01/09/using-ie6-ie7-and-ie8-virtual-pc-images-on-mac-using-vm-fusion/">converting Microsoft's VPC images to a VMware compatible image</a>. So the next thing I need to do is view my local webserver from VMware. Typing <code>http://localhost</code> doesn't work because the virtual machine is an entity in itself so localhost is local to the virtual machine.

Having done a little of this in the past I knew the hosts file in folder c:\windows\system32\drivers\etc would need an entry, mapping my Mac's IP address to a domain name. Sean Sperte reveals a <a href="http://seansperte.com/entry/Setting_Up_a_Killer_Local_Web_Development_Environment_on_a_Mac_with_MAMP_an/">secret VMware IP address</a> that is particularly handy when you use a laptop because a laptop's IP address is not likely to remain static. I'll quote Sean here:
<blockquote>Type <code>ifconfig vmnet1</code> into a Terminal window. You should get a return like this:
<pre><code>vmnet1: flags=8863&lt;UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST&gt; mtu 1500
    inet 192.168.115.1 netmask 0xffffff00 broadcast 192.168.115.255
    ether 00:50:56:c0:00:01
</code></pre>
The “inet” number is your “secret” IP (in my case, 192.168.115.1).

Now that we have that number, we can edit the hosts file on the VM. We find it in: <code>C:/WINDOWS/system32/drivers/etc</code>. Just open the host file with Notepad, and add each virtual host (domain) on it’s own line at the end of the document, like so:
<pre><code>192.168.115.1  dev.triumphofgrace.com
</code></pre>
… and save. Afterwards refresh the VM’s DNS cache by typing <code>ipconfig /flushdns</code> in a command line window.</blockquote>
This worked perfectly for me.
# Chegg
A simple exploit on Chegg that was found and submitted on April 29, 2015.

The basis of this Chegg exploit (Cheggsploit) is that when multiple users view pages they get blocked and there is a way to get around this.

On the first page, Multiple User Page.png, the error is shown.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/Mulitple%20User%20Page.png)

I deleted the selected element in the picture. The dialog div was deleted. I did notice there was a grey cover blocking the screen.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/View%20Source.jpg)

I deleted the second div "screenBlocker" and had access to the content on the site. I could not scroll with my mouse, but I could scroll through the page using page up and page down on my keyboard.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/View%20Source%202.jpg)

The page was fully accessible through my page up and down keys. If I needed to go to another page I just needed to repeat the process.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/Bypassed%20Multiple%20Users.png)

This bypass was patched in August of 2016. 

Chegg now uses a different method where they load then unload the content if they suspect too many users on an account. This security measure is still vulnerable to a javascript based attack. The attacker would just need to "reload" the content. I don't use Chegg as often, but it would be fun to write up another bypass.
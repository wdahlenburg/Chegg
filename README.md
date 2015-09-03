# Chegg
A simple exploit on Chegg that was found and submitted on April 29, 2015.

The basis of this Chegg exploit (Cheggsploit) is that when multiple users view pages they get blocked and there is a way to get around this.

On the first page, Multiple User Page.png, the error is shown.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/Mulitple User Page.png)

I deleted the selected element in the picture. The dialog div was deleted. I did notice there was a grey cover blocking the screen.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/View Source.jpg)

I deleted the second div "screenBlocker" and had access to the content on the site. I could not scroll with my mouse, but I could scroll through the page using page up and page down on my keyboard.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/View Source 2.jpg)

The page was fully accessible through my page up and down keys. If I needed to go to another page I just needed to repeat the process.

![alt tag](https://raw.github.com/wdahlenburg/Chegg/master/Bypassed Multiple Users.png)

As of September 3, 2015 this is still a bypass and no action has been taken so I am releasing it to the public.

The source code for the page I tested this exploit on has been uploaded as well. 

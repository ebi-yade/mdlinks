# mdlinks

A Google Chrome extension to create Markdown links from the current page, i.e:

```md
[title](url)
```

## How to install

+ Download this repo

+ Go to [Extensions Management Page - chrome://extensions](chrome://extensions)

+ Click "load unpacked"

+ Select the folder on your machine

## How it works

When clicked:

+ The selection (if any) will be suggested as a title

![Screen Shot](img/a.png)

+ If you press cancel, the H1 will be suggested as a title

![Screen Shot](img/b.png)

+ If you press cancel, the first h2 will be suggested as a title

![Screen Shot](img/c.png)

+ If you press cancel, you can enter title by hand

![Screen Shot](img/d.png)

+ The current url without query string is suggested as link

![Screen Shot](img/e.png)

+ f you press cancel, The current url is suggested as link

![Screen Shot](img/f.png)

+ If you press cancel, you can enter url by hand

![Screen Shot](img/g.png)

+ You can set the result as a markdown list entry (`+ []()`)

![Screen Shot](img/h.png)

+ The markdown link is displayed, you can then select, copy, and paste it

![Screen Shot](img/i.png)

![Screen Shot](img/j.png)

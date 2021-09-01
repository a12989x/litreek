<h1 align="center">Litreek</h1>

<p align="center"><b>An custom tree links app fast 😎, free 🤯 and opensource. 💪</b></p>
<p align="center">Built with ❤️ by <a href="https://github.com/a12989x/">Codax</a></p>

## About ℹ️

[Litreek](https://github.com/a12989x/litreek/) is a free alternative for other tree links built with Next JS, made for developers to developers, easy to use, easy to configure, and ready to deploy.

The goal of [Litreek](https://github.com/a12989x/litreek/) is to have a second choice for normal tree links open source and easy to use.

## Features 🎉

-   Choose a name.
-   Choose an avatar.
-   Subtle for a little description.
-   Multiple themes.
-   Headings to separate the links.
-   Infinite links.

## Requirements 📝

-   [Node JS](https://nodejs.org/) installed on your system.
-   Have a service for deploy the app like [Vercel](https://vercel.com/)

## Installation 🚀

-   Clone your repository locally:
-   Run `npm install` to install the normal and developer dependencies.
-   Change your data from `config.json` file (view [set up](#set-up-%EF%B8%8F) section).
-   Commit your changes and deploy it.

## Tech Stack 🤖

-   [Next JS](https://nextjs.org/)
-   [next-themes](https://github.com/pacocoursey/next-themes)
-   [SASS](https://sass-lang.com/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Husky](https://typicode.github.io/husky/#/)
-   [cz-cli](http://commitizen.github.io/cz-cli/)

## Set up ⚙️

To configure [Litreek](https://github.com/a12989x/litreek/) you need to edit the default data in `config.js` file.

```json
{
	"name": "YOUR NAME",
	"subtle": "CAREER"
}
```

### Avatar

By default you can replace the default value with your GitHub profile image link, but if you want change the image domain with other like twitter, you need to add the domain in the `next.config.js` file.

```json
// config.json
{
	"avatar": "https://pbs.twimg.com/profile_images/1374023592523005952/lfkEIHsx_400x400.jpg";
}
```

```javascript
// next.config.js
{
	images: {
		domains: ['pbs.twimg.com'];
	}
}
```

### Themes

You can select a theme for your litreek page between `/styles/themes` or you can create one and share it with us. Also you need change the `defaultTheme` value in `ThemeProvider` on `_app.js` file.

```json
// config.json
{
	"theme": "leaf"
}
```

```javascript
// _app.js
<ThemeProvider
	defaultTheme='leaf'
	// ...
>
// ...
```

### Links

You can have a header separator between your links.

```json
{
	"links": [
		{ "header": "Project" },
		{
			"title": "💻 Repository",
			"url": "https://github.com/a12989x"
		},
		{ "header": "Me" },
		{
			"title": "🌐 Website",
			"url": "https://codaxx.ml/"
		}
	]
}
```

## TODOs ✅️

-   Create more themes.
-   Video option as background.

## License

[Litreek](https://github.com/a12989x/litreek/) is licensed under the terms of [MIT](https://choosealicense.com/licenses/mit/)

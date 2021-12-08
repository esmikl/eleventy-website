# Emily Mikl Professional Website
This website was generated with Eleventy, and uses Nunchuks as the template language. NOTE: If using WebStorm IDE, set the file type in the explorer to Handlebars.

##Creating Layouts and Pages
###Layouts
1. To create a new layout template, create a new file with the `.njk` extension under `_includes/layouts`.
2. Existing layouts that can be used include:
   1. `base.njk` - The base layout which includes the header, footer, and main content area.
   2. `page.njk` - The basic layout for a web page. Extends `base.njk`.
   3. `post.njk` - Layout for a blog post.
###Pages
To create a new static website page, create a new Markdown file, either within an existing directory, or a new directory. At the top of the page, include the page title and the `page.njk` layout:  
   >`---`  
   > `title: Page Title`  
   > `layout: layouts/page.njk`  
   > `---`  

If the `page.njk` template doesn't work for your page, create a new layout in the layouts folder.

##Run locally
1. Clone repo locally `git clone `.
2. Run `npm install` to install dependencies.
3. Start your development server `npm run start`.

##Development Scripts
**`npm run start`**
> Run `npm run start` to start the project locally. This script will remove and re-create the `_site` artifacts folder where the content is served from, run the `postcss:run` script and copy any necessary files to the `_site` folder before starting the dev server using `eleventy --serve`.

**`npm run build`**
> Run `npm run build` to build the project for production. The `build` script removes the `_site` artifacts folder, runs `eleventy`, and checks the environment variable for a prod environment before it runs `postcss`.

**`postcss:run`**
> The `postcss:run` script runs `postcss` on the `styles/style.css` file and publishes the minified file under the `_site` artifacts directory. The `postcss` configuration file `postcss.config.js` is located at the root of the project.

##Tailwind CSS
This project uses [Tailwind CSS](https://tailwindcss.com/docs) as its style library.

Configuration is located in the root of the project at `tailwind.config.js`.

The main stylesheet is located under `styles/style.css`. This file is where the Tailwind includes are brought in. More information can be found in the [Tailwind documentation](https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin).

The Tailwind configuration is configured to purge any un-used classes at build time. The `purge` configuration is configured to search for any `html` or `js` files in the application. See the link above for more information.

# 🏗 Folder structure

There is no single correct answer for the perfect folder structure. The following structure is the one that our team have been evolving and may change with our future learnings. For some of you that are reading this you may find a lot of things familiar, and thats great we don't pretend to reinvent the wheel.

We try to keep the projects as simple and clean as possible. Structuring a project’s folders in a manner that fits your team and project’s size may vary so use this as an starting point to build your own.

## Organization principals

- Composability allows you to reuse code between components. This is a very powerful concept in React, and a large influence as to why it’s common to break-out and group reusable code.

- Local first. When building components it’s best to keep the code that pertains only to that component, local. Instead of breaking those out into their respective components or utils directory, we keep them local because the code they contain will never be used in another component. This will help prevent those directories from becoming unreasonably large as the project scales.

- Nest as you grow. Flatter is better always remember the KISS principle, but there are reasons to nest. For example if the screen is a large, complex component that has many sub-components, it’s best to keep those sub-components in their own directory. This will help keep the directory structure manageable and allow for reuse.

## Directories

### src/

The src folder contains most of the code except for the public folder wich won't work as i should inside of it. More info on that in the [Next.js official docs](https://nextjs.org/docs/advanced-features/src-directory).

### public/

The public directory contains all the static files such as images, fonts, etc.

### docs/

Contains the documentation.

### components/

Contains reusable components that are used across project.
These components are almost always pure and presentational, with no side-effects.

### config/

Contains constants that are used across the project. And also configuration for certain libraries like stitches configuration.

### contexts/

Contains reusable contexts that are used across the project. We usually prefer to use Zustand for global state management in that case this folder is not needed.

### hooks/

Shared hooks used across the project. We recommend [useHooks](https://usehooks.com/) to find common hooks recipes.

### layouts/

Contains reusable layouts that usually wrap the entire page usually importing the site header and the footer. Sometimes only one layout is needed, but on more complex projects we usually use multiple layouts. More info on layouts in the [Next.js official docs](https://nextjs.org/docs/basic-features/layouts).

### locales/

Contains translations used across the project.

### pages/

Contains the routes of the project, given the fact that Next.js uses this directory to determine the routes. This files should import the screen from the screens directory.

### screens/

Contains folders and components for each screen of the project also it will contain hooks and components used specifically for that screen.

### services/

Contains the code for interacting with an external API. We recommend the use of reusable hooks using SWR or React Query using a server-cache strategy. When dealing with more than one API for example our own backend and a third party API is better to create one folder for each service.

### styles/

Contains the global.css file to set the initial style resets and configuration.

### types/

Contains base TypeScript types used across the project.

### utils/

Contains reusable utility functions used across the project.

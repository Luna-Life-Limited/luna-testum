# luna - tech tasks

If you are reading this then you have successfully found our git repo and are ready to take on our technical tasks!

All tasks are based around the fictional **luna** web app, which is a rudimentary React application built with Create React App and TypeScript that you will run on your local machine. The app is very crude and uses a local JSON file as it's data source - but please approach each task as you would in your normal working life if contributing to a production grade application.

Each task has a "YOUR COMMENTS HERE" section that we encourage you to leave some comments in relevant to the task you have just completed.

If you struggle with a particular task, or feel the instructions are not clear - that's not a problem. Just do the best you can and leave a note in the comments area for that task.

## Prerequisite - get the app up and running

Install the required dependencies and then run the app as a local dev build with:

```
npm start
```

## Task 1 - Product Tweaks 🔧

The following feedback has come in from the product owner, can you apply these updates?

- Sort the Category filter buttons alphabetically
- Add a "count" display to the Category filter buttons showing how many articles exist within each category
- Add a mechanism for users to clear any selected Category filter
- Ensure that all of the "View" button CTAs on the article grid are aligned with the equivalent buttons in the same row

```
YOUR COMMENTS HERE
```

## Task 2 - Test Coverage 🤓

The app currently has a test coverage of around `70%` which can be checked by running:

```
npm run test:coverage
```

Can you add extend the `App.test.tsx` file to get our overall coverage to in excess of `85%`?

```
YOUR COMMENTS HERE
```

## Task 3 - Article List Content 📜

The `ArticleDisplay` component isn't quite complete as it is not able to render any lists that appear in the article content (i.e. if you view the "Explaining eye bags" article you should see two red blocks stating "LIST CONTENT NEEDS TO APPEAR HERE")

Can you finish off the implementation by ensuring that list content is displayed in articles appropriately. Feel free to overhaul the existing implementation as you see fit

```
YOUR COMMENTS HERE
```

## Task 4 - Shared Components 👪

The product owner has asked that the main CTAs in the app (i.e. the "View" and "Close" buttons on the `ArticleGrid` and `ArticleDisplay` components) have their text displayed in uppercase. As an optimisation while making this change can you refactor those two components to use a common `Button` component (so that when the product owner decides to revert this change we only have to do it in one place 🤭)

```
YOUR COMMENTS HERE
```

## Task 5 - Mobile Responsiveness 📱

We have had some feedback that the web app isn't working particularly well for users on mobile devices when viewing articles. Can you upgrade our ArticleDisplay component to be more mobile friendly while not impacting the current desktop experience?

```
YOUR COMMENTS HERE
```

## Task 6 - Accessibility 👓

An independent accessibility audit has highlighted some issues with our app. Can you explain what accessibility means in this context and implement some accessibility related enhancements to our app?

```
YOUR COMMENTS HERE
```

## Task 7 - New Search Feature 🔎

It's time to roll you out your very first feature! The brief is short and there are no designs for us to use as it needs to be shipped tomorrow! 😬

The brief: Users need to be able to search across all of our articles via text

```
YOUR COMMENTS HERE
```

## Bonus Task - Make the app "Pop" ❤️

As our newest team member, seeing the (albeit rudimentary) **luna** web app with fresh eyes for the first time is a moment that we like to capitalise on! Can you comment on the UX of our web app, and implement some changes that you think would **delight and surprise** our users.

```
YOUR COMMENTS HERE
```

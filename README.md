# Pridely

## Introduction

Welcome to Pridely, a new business app which supports and champions the LGBTQIA+ community. Pridely lets you search for a creative based business or promote your business in a space where everyone is welcome. You can find, follow and review businesses who use the app, and even set up your own personal profile and dashboard.

## Table of contents

- [Pridely](#pridely)
  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Link To Deployed Application](#link-to-deployed-application)
  - [Description](#description)
  - [User Story](#user-story)
  - [Getting started](#getting-started)
  - [Technologies Used](#technologies-used)
    - [MongoDB](#mongodb)
    - [GRAPHQL](#graphql)
    - [REACT](#react)
  - [Wire frames](#wire-frames)
  - [High Level Design](#high-level-design)
  - [Screenshots](#screenshots)
  - [Future Improvements](#future-improvements)
  - [License](#license)
  - [Contact the Team](#contact-the-team)

## Link To Deployed Application

You can visit our application by clicking [here](https://secure-falls-86718.herokuapp.com/)

## Description

Pridely is a Full-Stack application that focuses on creative based businesses which champion inclusion and diversity.

When a user first opens our app, they will be met by our landing page that tells them a little bit about the app, and gives them options to sign up or log in.

If the user does not have an account, they can choose to create one by visiting the Sign-up page. Once the user reaches the Sign-up page, they can decide if they want to sign up as a business user or a standard user. Based on their selection, they can pass in their credentials, choose a username and add some personal information, including how they identify and their preferred pronouns. They can also upload their own profile picture and add their location.

If they choose to sign up as a business user, they can add their business information and select their business type so they can be found in the search bar. they can also link their calendly by adding their username.

Once the account is successfully created, the user is redirected to their dashboard, where, once they are following businesses, they will be able see all of the data of the users that they follow, including their posts and information about their businesses. They can also view the profiles of the businesses they follow.

When searching for a business, the user will be redirected to the search results page and all of the businesses that match their search criteria will be displayed, along with a photo, business description, location, as well as buttons to follow the business or view their profile.

When the user selects to view a business profile, they will be redirected to the businesses profile page.

On the business profile page, the user will be able to see more information about the business, including a rating, the name and preferred pronouns of the owner, a link to calendly and all of the posts the business has made, including additional comments and likes. There will also be a chat button, so we can start a conversation with that user. There will also be a link to view all of the reviews of the user and any additional comments that people may of left for them. We can also leave a review for a business, give them a star rating and leave a comment about the service they provided. We are also able to view all of the businesses followers.

The chat function between users is in real time, so once the user starts a conversation, the business can respond as soon as they are ready and it will render on the chat page.

If the user tries to access one of the private routes such as the dashboard, they will be redirected to the Login page. If they does not have an account, they can then choose to go to the Sign-up page to create an account.

## User Story

```md
AS A USER I want to use a web application to view creative based business, their info and interact with them, all whilst knowing that as an LGBTQ+ user, I am in a welcome environment;

WHEN I open the homepage and I am not logged in,
THEN I AM presented with a home page with information, a navbar, a search bar and a links to either sign up or log in;

WHEN I Click the Sign Up button in the Navbar,
THEN I AM redirected to a page displaying a form accepting my credentials;

WHEN I choose to Sign Up as a Standard User and my credentials are correct,
THEN I AM redirected to my personal dashboard page;

WHEN I choose to Sign Up as a Business User and my credentials are correct,
THEN I AM redirected to a Business form where I can add all of the information about my business.

WHEN the business form is complete,
THEN I AM redirected to my dashboard page.

WHEN I input my credentials in the Log In form and I press the Log In button, if my credentials are correct
THEN I AM redirected to my dashboard page;

WHEN I am redirected to my dashboard page,
THEN I AM presented with a carousel with all of the businesses I follow and the posts that I have made.
IF I don't follow anyone, I will see a title that let's me know to go and follow someone;

WHEN I click on the profile of a user I follow,
THEN I AM presented with their information on the page, including their name, pronouns, how they identify, their location, their reviews and ratings, their calendly link, should they have added it, and the posts they have created;

WHEN I look at their posts;
THEN I AM presented with an option to like a post or add a comment to it;

IF I click on the chat button on that users profile page;
THEN I AM taken to a chat page where I can start a real time conversation with them;

WHEN I view my profile page,
THEN I AM presented with my own information on the page, including my name, pronouns, how I identify, my location, and an option to create a post;

IF I create a post,
THEN I AM present with a page which lets me enter a title, subtitle, text and a URL which I can upload and post to my page;

WHEN I create a post,
THEN other users will be able to see it on my profile, and add a Like or a Comment to it;

WHEN I search for a business,
THEN I AM able to select what type of business I want, and a specific location;

WHEN I click on the search button,
THEM I AM redirected to the search page which will render the results of my search, based on the criteria I ended.

WHEN I see on a business inside the search results page,
THEN I HAVE the option to either view their profile or follow the business, based on what button I choose to press.

WHEN I choose to follow a business,
THEN I AM redirected to their profile page, and their information will be displayed.
I WILL ALSO see their information on my personal dashboard.

WHEN I select the Log Out button,
THEN I am signed out of the application;
```

## Getting started

First, clone both the front end repository and the server repository by opening your terminal and running the following command:

`git@github.com:LeeFarnell/pridely.git`
`git@github.com:LeeFarnell/pridely-frontend.git`

Make sure to first select the desired folder in which you will clone our repository;

Then, change your folder to the one containing our application & server:

`cd pridely`
`cd pridely-frontend`

The third step is to install all of the dependencies of both repos. To do this, type in:

`npm install`

Now, you need to open the application & server with your code editor. If you are using Visual Studio Code, type in the terminal the following command:

`code .`

Now, to run the app on your local machine, open the terminal in VSCode and run the app by typing in

`npm run start`

To run the server on your local machine, open the terminal in VSCode and run the app by typing in

`npm run dev`

## Technologies Used

### MongoDB

Our database of choice was MongoDB. We felt that this is the best choice for our project. It being a non-relational database allows us to mould our relations between collections freely which means that the application can expand and scale without major changes in the database models. We have tried and, we think, succeeded to create a dependable database that can manage a great amount of traffic.

We felt that writing scalable and maintainable code should be another important feature of our projects. That it is why we have decided to use Mongoose as our ODM library.

We also care about our Users Account security. That is why we have decided to use Bcrypt to hash passwords before storing accounts into our database and JWT Token to ensure that our data is safely transmitted between parties.

### GRAPHQL

As our server-side technology, we decided that GraphQL is the best option. It's flexibility and particularities allow us to send only the data that we need, avoiding this way to overload the data transfer between server and client. This way, the data transfer process is fast, amounting in better loading times and overall a better User Experience.

Paired with Apollo-Server and MongoDB, GraphQL is a powerful technology that allowed us to build a scalable back-end that can be trusted to serve the required data in a fast and secure manner.

### REACT

We decided to create the front end of our application using React.

React was the best option for us, as it is simple to use and gives us all of the functionality that we require. It is also easy to link with GraphQL so we can easily access all of the data stored on our server. We pre-built a large portion of our components for the site using React StoryBook. This allowed us to view what the components would look like and how we could use props to render the information that we require.

React also allowed us to use Hooks, which we used in order to change the state of the information we were getting, creating an very responsive application.

With the use of React, this also allowed us to install multiple packages to make our app more user friendly and allowed for a much nicer experience. Some of the React packages we used include:

- SwiperJS
- React Hook Forms
- React Rating Stars Component
- React Image Upload
- Material UI

## Wire frames

We have used Draw.io to plan our application. We first planned out all of our routes for both the standard and the business user. We wanted to ensure that we had thought of every possibility when it came to the user journey and ensure we had the necessary validation and authentication in place. We also planned out what each user would be able to add to the site. We have focused on offering the best experience we could, for our users. You can view our wire frame by following [this link](https://app.diagrams.net/#G12WtEQqLSz1hgPXhLx9h5RAXrw9pzESje.

## High Level Design

Another app we used to plan out our app was AdobeXD. We used this to create template layouts of the whole site and see how the user would navigate through the site and see what would make their journey easier. We were also able to set up the prototype link on all the pages so we could seamlessly transition from one page to the next.

## Screenshots

## Future Improvements

For the future we have already planned a few features.

We would have liked to be able to let users update / change your password.

We would have also liked to add a payment system for businesses to use our page, for those businesses which either don't have a website themselves or for peace of mind.

Also we would have loved to make a chatroom page so you can see all your current conversations included with this would have been nice to add notifications when you get a message sent to you.

Lastly we would have liked to add a button so that if you're a standard user you could easily upgrade to a business user.

## License

P1xel Application is licensed under the MIT license

## Contact the Team

For any questions you can reach to us via GitHub or LinkedIn:

- Lee Farnell: [GitHub](https://github.com/LeeFarnell), [LinkedIn](https://www.linkedin.com/in/leefarnell/)
- Tudor Tocan: [GitHub](https://github.com/ttudorandrei), [LinkedIn](https://www.linkedin.com/in/tudor-tocan/)
- Michael Crates: [GitHub](https://github.com/Cratesy), [LinkedIn](https://www.linkedin.com/in/michael-crates-538752200/)
- Mehmet Hakel Cam: [GitHub](https://github.com/Hakkelo89), [LinkedIn](https://www.linkedin.com/in/mehmet-hakel-cam-058439163/)
- Adam Arthur: [GitHub](https://github.com/KingArthur0877), [LinkedIn](https://www.linkedin.com/in/adam-arthur-315b39156/)

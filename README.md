###IOI-HA Outcome Tracker

## My first MERN Stack!!

This is my first complete MERN stack.  I have based this on videos from Brad Traversy
on Udemy.  The IOIHA section of this webpage were my addition to the website.
The Ioiha section includes creating reading and deleting from a Mongo database from Mlab.

## Project Description:

The **International Outcome Inventory for Hearing Aids** is a seven item
__standardized__ measure which has been translated into **30 different languages**.  
It was originally designed for evaluating the efficacy of hearing aid rehabilitation.
It is standard practice to ask patients to complete a **IOIHA** at least one month
after being fit with hearing aids.  However an outcome measure means nothing
unless you are tracking and analyzing the data.

I currently work with six different hearing aid vendors *(the big six)*.  Although
all hearing aids do the same thing (amplify sound), they all do it in different ways.  
I like to track the **IOIHA** outcome based on the Make and Style of the hearing aid.  
Are patients doing better with RIC style hearing aids than with Full Shell (FS) style
hearing aids?  Are patients doing better with one company's hearing aids compared
to another company?  Being able to answer these questions will help me improve
my treatment for future patients.  

The point of this web application is to create a database of IOIHA outcomes based
on Make, Model and style of hearing aid, then use those results to determine which
treatment is working best for my patients.  

## Instructions for running the app:

You cannot gain access to the mongodb without first adding the .env file to the
root directory.  The .env file will be emailed to individuals who require access.

**To Run the App**

**Please Run App in chrome**

  1. Ensure you have node.js installed on your computer
  2. Go to the root directly of the project
  3. Clone or download the project from the repo.
  4. Ensure you have nodeon installed globablly
  5. Install redux dev tools in Chrome
  4. Run **npm install** and **npm run client-install** to install necessary packages
  6. Run **npm run dev** to begin the app server process a webpage should open automatically at localhost:3000
  7. Sign up for the site
  8. Login to the site.
  9. You may enter Profile information
  10. Once you are logged in go to ioiha
  11. On the ioiha page you can enter ioiha data, it will update at the bottom of the screen on submit.
  12. Select the delete box to delete individual entries.

## Furture improvements
Error handling on the login page needs to be improved
Everything is open on github right now for the purposes of Code-Louisville.  That information needs to be changed and removed from git repository

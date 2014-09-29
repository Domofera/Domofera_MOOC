Domofera MOOC
===========================
The aim of this writting is to have a log and a history about what I do, step by step.

Introduction
--------
**Domofera MOOC** is an Urban agriculture MOOC (Masive Online Open Course) which purpose is to teach people of any level of agriculture knowledge how to grew an allotment.

It's made in Google Course Builder, and I'll write about its development.

1. Running your App
----------
### Installation

Google AppEngine is used to host for free Google Course Builder. So the first step is to sign in (or sign up if you don't have AppEngine account) and create an App.

Next, you must download [Google Course Builder, Python 2.X and AppEngine].

[Google Course Builder, Python 2.X and AppEngine]:https://code.google.com/p/course-builder/wiki/Download

Once you've done it, we can launch it. Open the AppEngine, drag and drop the folder of your Course Builder version, that's all.

![Drag app](https://github.com/Domofera/Domofera_MOOC/blob/master/src/docu/img/drag_app.jpg "Drag app")

Now you only have to click the "Run" button. Now it's running in your machine. Click the "Browse" button and a browser will open to show your app.


### Deployment

For deploying your MOOC, you **only can do it from one machine**, so be sure to do it from the one you're going to use for the development.

First step, is to enable [2-step verification](https://www.google.com/landing/2step/) in your google account.

Next, add your app from your AppEngine web dashboard.

Finally, you only have to click the "Deploy" button.


2. Looking over Course Builder
------------------

Course Builder it's structured in some files and folders. 

In the root, we can find these **.yaml files**:
  - **App.yaml**: you must change the application variable
  - **Course.yaml**: general variables about the course
  - **Course_template.yaml**: by editing this file we can customize the course appareance

For now, we are interested in the next **folders**:
  - **Assets**: it contains the resources we're going to use. They are:
    -  **css**: for the stylesheets
    -  **img**: for the images
    -  **js**: related to the unit exams and activities
    -  **lib**: we store here files related to the functionability
  - **Data**: here we find .csv files where we must write the lessons and unit contents
  - **Views**: contains .html files responsible for display the contents

3. Customize
-----------

Since Google is very tidy and the code is well-commented, it is easy to explore through.

At this point, we can do our first steps in customizing:
  - In ***"course.yaml"*** change the variables. It's important to read the comments, they are very useful to know how the variables work.
  - Also, you can change the variables in ***"course_template.yaml"***

Now we have our website with some customizations. If we run the project, we'll see the general content changes we've done.

![Changes](https://github.com/Domofera/Domofera_MOOC/blob/master/src/docu/img/mooc_v0.01_01.jpg "General changes")















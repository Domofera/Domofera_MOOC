Domofera MOOC
===========================
The aim of this writting is to have a log and a history about what I do, step by step.

Introduction
--------
**Domofera MOOC** is an Urban agriculture MOOC (Masive Online Open Course) which purpose is to teach people of any level of agriculture knowledge how to grew an allotment.

It's made in Google Course Builder, and I'll write about its development.

1. Run & configure your App
----------
### 1.1. Installation

Google AppEngine is used to host for free Google Course Builder. So the first step is to sign in (or sign up if you don't have AppEngine account) and create an App.

Next, you must download [Google Course Builder, Python 2.X and AppEngine].

[Google Course Builder, Python 2.X and AppEngine]:https://code.google.com/p/course-builder/wiki/Download

Once you've done it, we can launch it. Open the AppEngine, drag and drop the folder of your Course Builder version, that's all.

![Drag app](https://github.com/Domofera/Domofera_MOOC/blob/master/Domofera_MOOC/docu/img/drag_app.jpg "Drag app")

Now you only have to click the "Run" button. Now it's running in your machine. Click the "Browse" button and a browser will open to show your app.


### 1.2. Deployment

For deploying your MOOC, you **only can do it from one machine**, so be sure to do it from the one you're going to use for the development.

First step, is to enable [2-step verification](https://www.google.com/landing/2step/) in your google account.

Next, add your app from your AppEngine web dashboard.

Finally, you only have to click the "Deploy" button.


### 1.3. Looking over Course Builder

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

### 1.4. General customization

Since Google is very tidy and the code is well-commented, it is easy to explore through.

At this point, we can do our first steps in customizing:
  - In ***"course.yaml"*** change the variables. It's important to read the comments, they are very useful to know how the variables work.
  - Also, you can change the variables in ***"course_template.yaml"***

Now we have our website with some customizations. If we run the project, we'll see the general content changes we've done.

![Changes](https://github.com/Domofera/Domofera_MOOC/blob/master/Domofera_MOOC/docu/img/mooc_v0.01_01.jpg "General changes")


### 1.5. Setting up the environment

In order to automatize the workflow and environment for development, I'll use [Grunt](http://gruntjs.com). Exactly, I use it to:
  - Make a **build** folder and **copy** the code there. So that, the source and build code is separated.
  - Use **Less**, instead of css.
  - Compress and put together the stylesheets and javascripts.


Because I want to have only the style file **main.css**, I must change the code inside the `<head>`tag. 

For that, we can locate this part in the **views** folder. Exactly, in **base_course.html**, which is a part of the main template. Inside, locate the block `{% block assets %}` and remove the line:

```html
<link href="assets/css/butterbar.css" rel="stylesheet" type="text/css">
```


2. Customizing
--------------------------------
### 2.1. Getting the course editable from browser
 
It's important to emphasize that a **MOOC placed at the root URL is not editable online**. Maybe you want to do other courses, but if not, you have to [Switch your URL](https://code.google.com/p/course-builder/wiki/FAQ#How_do_I_make_my_root_course_editable_through_the_browser?).

Do it in your **LOCALHOST and in REMOTE (your-name-app.appspot.com)**, because the deployment won't do it automatically. If you have followed the previous link instructions, you are should have this two courses:

![Courses](https://github.com/Domofera/Domofera_MOOC/blob/master/Domofera_MOOC/docu/img/courses.png "Courses")

Just in case, we don't want 2 duplicates courses, so for the old, open the ***course.yaml*** and change these two variables to false:
```python
  now_available: false
  browsable: false
```

Now, the old course URL is unavailable.

### 2.2. Customizing Home page

We've edited and customized the Home page content, but not the appearance (style and structure) yet.

In order to customize the appearance, we mustn't only change the ***.css*** files, but likely we'll change some of the ***.html*** located in **views** folder.

The **Home page** is rendered by using 3 views hierarchically: ***base.html -> base_course.html -> preview.html***.

I want to do a **Wide-styled** home page. For that, first I must take the gray rectangle out from the Wrapper (which class is `gcb_aux`). These are the steps to do so:

  - Within *preview.html* and *course.html*, we can find this code (Notice I changed `gcb-col-11 gcb-aside` to `jumbotron`):
```html
{% block top_content %}
  <div class="gcb-cols">
    <div class="jumbotron gcb-aside">

      {% include 'summary.html' %}
      {% include 'registration_module.html' %}
    </div>
  </div>
  {{course_info.preview.after_top_content_ends | safe}}
{% endblock %}
```
This code is a block called `top_content`. 

  - This block is called from *base.html* (where the wrapper is), so we want to take it out of the wrapper. Go to **line 239** and move the top_content block call before the wrapper. This code
```html
    <div class="is-wrapper">
      <div class="gcb-aux">
        {% block top_content %}{% endblock %}
        {{course_info.base.after_top_content_ends | safe}}
    </div>
```
will change into:
```html
    <div class="is-wrapper">
      {% block top_content %}{% endblock %}
      <div class="gcb-aux">
        {{course_info.base.after_top_content_ends | safe}}
```

My attempt is to have a **responsive design**, so I've added css code (actually is .less but compiled into .css). The final result of *jumbotron* is this:

![Jumbotron](https://github.com/Domofera/Domofera_MOOC/blob/master/Domofera_MOOC/docu/img/jumbotron.jpg "Jumbotron")

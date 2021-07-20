// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import pytorchicon from "./images/pytorch-icon.svg"
import pythonicon from "./images/python-icon.svg"
import linkedinicon from "./images/linkedin-icon.svg"
import speachicon from "./images/text-message.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jan",
  headerTagline: [
    //Line 1 For Header
    "\"A machine learning Machine Learning at ETH Zürich\"",
    //Line 2 For Header
    "with a great interest in Artificial Intelligence",
    //Line 3 For Header
    "and a passion for anything brain related",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a Computer Science student with a great interest in Artificial Intelligence and a passion for anything brain related.",

  //Contact Email
  contactEmail: "janjosef.schnyder@bluewin.ch",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Deep Adversarial Training for Teaching Networks to Reject Unknown Inputs", //Project Title - Add Your Project Title Here
      para:
        "My bachelor thesis about adversarial training in the open set recognition scenario.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "/imgs/Lenetpluplus.PNG",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/shnippi",
      color: "black",
    },
    {
      title: "Generative Adversarial Networks", //Project Title - Add Your Project Title Here
      para:
        "Solving different tasks like AI colorization with Generative Adversarial Networks", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "/imgs/GAN_color.PNG",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/shnippi/GAN",
      color: "black",
    },
    {
      title: "OpenAI GYM", //Project Title - Add Your Project Title Here
      para:
        "Solving different OpenAI GYM environments using Deep Reinforcement Learning", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "imgs/lunar_lander.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/shnippi/GYM",
      color: "white",
    },
    {
      title: "Snake AI", //Project Title - Add Your Project Title Here
      para:
        "Solving Snake with different SOTA deep reinforcement learning algorithms", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "imgs/snake.PNG",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/shnippi/SnakeQ",
      color: "white",
    },
    
    /*
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hey, my name is Jan and I'm a 21 years old student from Switzerland. After getting my matura with 16, i wanted to further pursue my interests in maths and programming and therefore I'm currently doing a Master's in Computer Science at ETH Zürich. ",
  aboutParaTwo:
    "As you can imagine when looking at my projects, i have a passion for deep learning and anything brain related. These are also the subjects i will dive further into during my master studies.",
  aboutParaThree:
    "Next to my studies, i am a Tutor in Informatics for undergraduates. I also like going to the gym and practice several team sports.",
  aboutImage:
    "/imgs/irlpic.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pytorchicon,
      para:
        "I use Pytorch for most of my Deep Learning Projects and am becoming a bigger fan day by day",
    },
    {
      img: pythonicon,
      para:
        "Python is my primary programming language which also brought me to the world of coding",
    },
    {
      img: jsIcon,
      para:
        "JavaScript, React and many others are the frameworks i like using the most for anything front-end related",
    },
    {
      img: codeIcon,
      para:
        "Next to my main languages for front- and back-end, i also have a very strong background in Java. Additionally, i have experience in C and other frameworks like Tensorflow or dialogflow",
    },
    {
      img: designIcon,
      para:
        "I love solving problems and am a sucker for finding elegant solutions. Therefore, im also doing my minor in Theoretical Computer Science",
    },
    {
      img: speachicon,
      para:
        "I am fluent in (swiss) german and english, and have B2 level french knowledge. I additionally did language stays in England and France",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "About me",
  promotionPara:
    `Hey, my name is Jan and I'm a 21 years old student from Zürich, Switzerland. 
    After getting my matura with 16 years of age, i wanted to further pursue my interests in 
    maths and programming and and therefore I'm currently doing a Master's in Computer Science at ETH Zürich. 

    As you can imagine when looking at my projects, 
    i have a passion for deep learning and anything brain related.

    Next to my studies, i am also a Tutor in Informatics for undergraduates. 
    I also like going to the gym and practice several team sports and am very happy to travel.`,

  promotionPara2: `If you want to know more about me, take a look at my socials below :)`,
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "You can also find me here:",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/shnippi" },
    {
      img: linkedinicon,
      url: "https://www.linkedin.com/in/jan-schnyder/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/shnippi",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

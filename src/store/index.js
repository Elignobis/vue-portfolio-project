import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
          projectTitle: 'Google themed portfolio',
          projectIMG: 'https://i.postimg.cc/g0L08wjT/Screenshot-2022-07-22-133134.png',
          ProjectDesc: 'The portfolio theme is inspired by google. The portfolio has a google search landing page. It is colourful and beatifully designed',
          techUsed: 'HTML, CSS, Bootstrap',
          projectGithub: 'https://github.com/Elignobis/portfolioproject',
          projectLive: 'https://sibongile.netlify.app'
      },
      {
          projectTitle: 'ToDo app',
          projectIMG: 'https://i.postimg.cc/bNF8gz7c/todoapp.png ',
          ProjectDesc: 'This to do app can enables users to create, mark off finished todos and also delete todos',
          techUsed: 'HTML, CSS, Bootstrap, Javastript',
          projectGithub: 'https://github.com/Elignobis/toDoApp',
          projectLive: 'https://todoapp24062022.netlify.app'
      },
      {
          projectTitle: 'Property listing website',
          projectIMG: 'https://i.postimg.cc/jqcRW6vj/LCproperties.png',
          ProjectDesc: 'A multipage property listing website with multi-user login, with property filtering functionality',
          techUsed: 'HTML, CSS, Bootstrap, Javastript',
          projectGithub: 'https://github.com/Elignobis/LCproperties',
          projectLive: 'https://lcproperties.netlify.app'
      },
      {
          projectTitle: 'iPhone Design Calculator',
          projectIMG: 'https://i.postimg.cc/fL9CD3Sq/iphonedesigncalculator.png',
          ProjectDesc: 'A multipage property listing website with multi-user login, with property filtering functionality',
          techUsed: 'HTML, CSS, Bootstrap, Javastript',
          projectGithub: 'https://github.com/Elignobis/iphoneCalculatorDesign',
          projectLive: 'https://iphonecalculatordesign.netlify.app'
      },
      {
          projectTitle: 'BMI Calculator',
          projectIMG: 'https://i.postimg.cc/cCGmHsQx/bmicalculator.png',
          ProjectDesc: 'A multipage property listing website with multi-user login, with property filtering functionality',
          techUsed: 'HTML, CSS, Bootstrap, Javastript',
          projectGithub: 'https://github.com/Elignobis/BMIcalculator',
          projectLive: 'https://calculatorbmi1.netlify.app'
      },
      {
          projectTitle: 'Temperature Converter',
          projectIMG: 'https://i.postimg.cc/W4tSYYNv/tempconnvertor.png',
          ProjectDesc: 'A multipage property listing website with multi-user login, with property filtering functionality',
          techUsed: 'HTML, CSS, Bootstrap, Javastript',
          projectGithub: 'https://github.com/Elignobis/tempConverter',
          projectLive: 'https://tempconverter1.netlify.app'
      }
  ],
  testimonials: [
    {
      refImg: 'https://i.postimg.cc/D00NKg3C/joel3.jpg',
      refName: 'Joel Mukanya',
      refTitle: 'Coding Lecturer',
      testimonialDesc: 'Sibongile is a well-behaved, outstanding, self-motivated and helpful person. Sibongile works well with team and do well working alone, he always submit his work on time which is very functional. I will suggest you to hire him on the spot'
    },
    {
      refImg: 'https://i.postimg.cc/k4fHZHz6/Hannah-Dalwai.jpg',
      refName: 'Hannah Dalwai',
      refTitle: 'Coding Lecturer Assistant',
      testimonialDesc: 'Sibongile is a diligent and driven individual with a keen eye for design. He is meticulous and always meets his deadlines in a timely manner. He will be a valuable asset to any team lucky enough to have him.'
    },
    {
      refImg: 'https://i.postimg.cc/y88rnDSV/Philani-3.jpg',
      refName: 'Philani Mxathule',
      refTitle: 'Colleauge',
      testimonialDesc: 'Sibongile is a very hardworking and intellegent person, who will do anything in his power to help a person in need. Having him in any team is an advantage'
    },
    {
      refImg: 'https://i.postimg.cc/Pxg3TCws/Silizwe.jpg',
      refName: 'Silizwe Pani',
      refTitle: 'Colleauge',
      testimonialDesc: 'Sibongile is a great web developer, and has a a bright future. He is innovative and always ready to learn and educate others.'
    },
    {
      refImg: 'https://i.postimg.cc/qqD4dMhR/Rasheedah-2.jpg',
      refName: 'Rasheedah Anhuizen',
      refTitle: 'Colleauge',
      testimonialDesc: 'I love red'
    },
    {
      refImg: 'https://i.postimg.cc/9QK071fM/Saleem.jpg',
      refName: 'Saleem Ariefdien',
      refTitle: 'Colleauge',
      testimonialDesc: 'I love red'
    }
  ],
  resume: {
    work: [
      {
        nameOfOrg: 'Premier Foods',
        period: 'Dec, 2019 - Mar, 2021',
        role: 'Sales Assistant',
        description:'Represent the company to customers. Assist the delivery driver in managing customer transitions, ensuring invoices are completed and returned. Stocking and restocking products.'
      },
      {
        nameOfOrg: 'MasterCard Scholars Foundation UCT',
        period: 'Mar, 2020 - Dec, 2020',
        role: 'Program Mentor',
        description:'Peer mentored a second year MasterCard Scholar from the EBE faculty.'
      },
      {
        nameOfOrg: 'Lain Transcriptions',
        period: 'Feb 2020 - September 2020',
        role: 'IsiXhosa Translator and transcriber',
        description:'Translated and transcribed various research study interviews from IsiXhosa to English.'
      },
      {
        nameOfOrg: 'University of Cape Town',
        period: 'November, 2019 - January 2020',
        role: 'Orientation Leader',
        description:"Assisted in the organization, preparation, implementation, and evaluation of the 2020 Faculty of Humanities' orientation program."
      },
      {
        nameOfOrg: 'Shawco Education',
        period: 'Nov, 2018 - Jul, 2019',
        role: 'Project Director',
        description:'Responsible for the overall management of 1 of 13 projects under the Shawco Education sector. Coordinating and leading student mentors and tutors, liaised with schools and parents of the learner participants participates.'
      }
    ],
    education: [
      {
        nameOfInst: 'Life Choices Coding Academy',
        periodE: 'Mar, 2022 - Present',
        descriptionE:"Coding certificate: I'm currently attending a six-month-long intensive coding bootcamp at Salesian Life Choices. We are learning different programming languages, databases and other vital technologies in order to be able to create responsive customer centric websites and applications."
      },
      {
        nameOfInst: 'University of Cape Town',
        periodE: 'Mar, 2017 - Dec, 2020',
        descriptionE:'Bachelor of Social Sciences: I majored in Politics & governance, and Sociology. I held volunteering roles in the residences I lived in and participated in various volunteering organisations in the university.'
      },
      {
        nameOfInst: 'Esangweni Senior Secondary School',
        periodE: 'Jan, 2012 - November 2016',
        descriptionE:'Matric: I was in the science stream.I also  actively paritcipated in various extra-curriculum activities at the schoool'
      }
    ]}
    
  
  
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

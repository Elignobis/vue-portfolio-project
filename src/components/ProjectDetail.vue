<template>
  <div class="project-detail" id="projects">
    <section class="projects-sect">
        <Project/>
    </section>
  </div>
</template>

<script>
import Project from "../components/Project.vue"
export default {
    name: 'ProjectDetail',
    components: { Project },
    data () {
        return {
            projects: [
                {
                    projectTitle: 'Google themed portfolio',
                    projectIMG: require('#'),
                    ProjectDesc: 'This was my first ever portfolio design/website. It was completed after 3 weeks of me starting coding. The layout is good for a beginner, however, responsiveness is non-existent and colors are lacking. I used  HTML5,  CSS3, and a little  Javastript to complete this project.',
                    projectGithub: 'https://github.com/Elignobis/portfolioproject',
                    projectLive: 'https://sibongile.netlify.app'
                },
                {
                    projectTitle: 'ToDo App',
                    projectIMG: require('#'),
                    ProjectDesc: 'This was my first ever portfolio design/website. It was completed after 3 weeks of me starting coding. The layout is good for a beginner, however, responsiveness is non-existent and colors are lacking. I used  HTML5,  CSS3, and a little  Javastript to complete this project.',
                    projectGithub: 'https://github.com/Elignobis/portfolioproject',
                    projectLive: 'https://sibongile.netlify.app'
                }
            ]
        }
    }
}
</script>

<style>

</style>
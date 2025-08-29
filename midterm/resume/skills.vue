<script>
export default {
    name:'skills',
    data () {
        return {
            skills: 'Skills',
            proglang:'Programming Languages:',
            prolang1: 'Java',
            prolang2: 'Python',
            prolang3:'HTML, CSS, and Javascript',
            seminars:'Seminars:',
            seminar1:'GIT it done - Code Geeks',
            seminar2:'Introduction to Web Designing -Code Geeks',
            technologies:'Technologies:',
            technologies1:'GIT',
            technologies2:'Figma',
            technologies3:'Linux'
        }
    }
}
</script>
<template>
    <div id="skills">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary" role="alert">
                    <h1>{{ skills }}</h1>
                    <h3>{{ proglang }}</h3>
                    <h5>{{ prolang1 }}</h5>
                    <h5>{{ prolang2 }}</h5>
                    <h5>{{ prolang3 }}</h5>
                    <h3>{{ seminars }}</h3>
                    <h5>{{ seminar1 }}</h5>
                    <h5>{{ seminar2 }}</h5>
                    <h3>{{ technologies }}</h3>
                    <h5>{{ technologies1 }}</h5>
                    <h5>{{ technologies2 }}</h5>
                    <h5>{{ technologies3 }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>



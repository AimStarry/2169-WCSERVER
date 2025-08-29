<script>
export default {
    name:'education',
    data () {
        return {
            education:'Education',
            elementary:'Elementary: Jose P. Dizon Elementary School 2009-2017',
            jhs:'Junior High School: Holy Angel University 2017-2021',
            shs:'Senior High School: Holy Angel University GAS Strand 2021-2023',
            Collge:'College: BSIT Area of specialization in Web Development at Holy Angel University 2023-Present'
        }
    }
}
</script>
<template>
    <div id="education">
        <div id="card">
            <div class="container">
                <div class="alert alert-primary" role="alert">
                    <h1>{{ education }}</h1>
                    <h5>{{ elementary }}</h5>
                    <h5>{{ jhs }}</h5>
                    <h5>{{ shs }}</h5>
                    <h5>{{ Collge }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>



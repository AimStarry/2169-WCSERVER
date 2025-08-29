<script>
export default {
    name:'resume',
    data () {
        return {
            msg6: 'My name is Aimee Li Marael S. Pangan',
            msg7: 'I am a 3rd Year Information Technology Student, studying at Holy Angel Univerisity',
            age:'Age: 20',
            contactinfo:'You can contact me here!',
            contact1:'Email: aimeelimaraelst@gmail.com',
            contact2:'Facebook: Aimee Li Marael Pangan',
        }
    }
}
</script>
<template>
    <div id="resume">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary" role="alert">
                    <h1>{{ msg6 }}</h1>
                    <h4>{{ msg7 }}</h4>
                    <h5>{{ age }}</h5>
                    <h5>{{ contactinfo }}</h5>
                    <h5>{{ contact1 }}</h5>
                    <h5>{{ contact2 }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>



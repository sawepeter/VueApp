<template>
<div class="add-name">
<input type="text" v-model="username">
<h2>My name is {{ username }}</h2>
</div>
</template>

<script>
import{ mapState} from 'vuex';

export default{
    name: 'username',
    computed
    data(){
        return{
            username: "Developer sawe",
        } ;
    },
}
</script>
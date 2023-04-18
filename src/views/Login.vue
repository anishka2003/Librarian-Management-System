<template>
    <div class="center">
      
      <v-row>
        <v-col cols="10" sm="6" offset-sm="3" md="4" offset-md="4" offset="1">
            <v-avatar size="200" tile>
                <v-img src="@/assets/212.jpg"></v-img>
            </v-avatar>
            <v-text-field label="Username"></v-text-field>
            <v-text-field label="Password" type="password"></v-text-field>
            <v-btn block elevation="2" @click="authenticate">Login</v-btn>
            
        </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        authenticate() {
            alert('Login clicked')
        }
    },
}
</script>


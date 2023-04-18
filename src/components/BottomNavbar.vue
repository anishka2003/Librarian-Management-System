<template>
    
        
 <v-bottom-navigation app v-model="value">
  
  <v-btn value="favorites" @click="$router.push('/authors/'); console.log('Clicked Authors button')">
  <span>Authors</span>
  <v-icon>mdi mdi-account-group</v-icon>
</v-btn>

    <v-btn value="fav" @click="$router.push('/books/'); console.log('Clicked Authors button')">
      <span>Books</span>
     <v-icon>mdi-bookshelf</v-icon>
    </v-btn>

    <v-btn value="nearby" @click="$router.push('/members/'); console.log('Clicked Authors button')" >
      <span>Members</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>


   
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
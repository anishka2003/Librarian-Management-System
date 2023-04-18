<template>
    <div>
      <app-header></app-header>
     
      <v-card>
    <v-card-title>
      Search for Member
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    
  </v-card >
      <v-list dense>
        <v-list-item v-for="(item, i) in members" :key="i">
          <v-list-item-avatar tile>
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title> {{ item.firstName }}</v-list-item-title>
            <v-list-item-subtitle
              >Id No.: {{ item._id }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>Phone No.: {{ item.mobileNo }}</v-list-item-subtitle>
          </v-list-item-content>
  
          <v-list-item-icon>
            <div>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" text>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Edit</v-list-item-title>
                    <v-icon>mdi-pencil</v-icon>
                  </v-list-item>
  
                  <v-list-item>
                    <v-list-item-title>Delete</v-list-item-title>
                    <v-icon>mdi-delete</v-icon>
                  </v-list-item>
  
                  <v-list-item>
                    <v-list-item-title>Issue</v-list-item-title>
                    <v-icon>mdi mdi-import</v-icon>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Return</v-list-item-title>
                    <v-icon>mdi mdi-keyboard-return</v-icon>
                  </v-list-item>
                </v-list>
              </v-menu>
  
              <p>Status</p>
            </div>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </div>
  </template>
  
  
  <script>
  import memberList from "@/data/members.json";
  export default {
    data() {
      return {
        members: memberList,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
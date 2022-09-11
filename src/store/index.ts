import {defineStore}from 'pinia'

export const useActivity =defineStore('activity',{
    state:()=>{
        return{
            activityId:-1
        }
    },
    getters:{},
    actions:{
        changeActivityId(activityId:number){
            this.activityId=activityId
        }
    }
})
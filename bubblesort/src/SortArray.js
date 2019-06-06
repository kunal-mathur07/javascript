import {Component} from 'react';

export default class SortArray extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr:props
        }
    }

    sort(){
        
        let arr = this.state.arr.map((item)=> Number(item));
       
       for(let i = 0;i<arr.length;i++){
         for(let j =0;j<arr.length-1;j++){
           if(arr[j] > arr[j+1]){
             [arr[j] , arr[j+1]] = [arr[j+1],arr[j]];
           }  
           
         }
         
       }
    }
}
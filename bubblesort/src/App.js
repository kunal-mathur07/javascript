import React,{Component} from 'react';
import './App.css';



class App extends Component{
 

     state= {
      arr :[],
      err:false,
      sortedArr:[],
      intermediatearr:[]
    }
    
    

    populateArray = this.populateArray.bind(this);
    sort = this.sort.bind(this);

     populateArray(e){
        
        let input = e.target.value;      
        this.setState({
          arr:input.split(',')
        });


     }

     createBubbleSteps(arr){
       this.refs.BubbleSteps.redenderComponent(arr);
     }

     displayError(){
       if(this.state.error){
       return(
         <div className="error">Mutliple numbers with , separation</div>
       )
       }
       return;
     }

     sort(){
       let arr = this.state.arr.map((item)=> Number(item));
       
       for(let i = 0;i<arr.length;i++){
         for(let j =0;j<arr.length-1;j++){
           if(arr[j] > arr[j+1]){
             [arr[j] , arr[j+1]] = [arr[j+1],arr[j]];
           }  
           this.createBubbleSteps(arr);
         }
         
       }
       this.setState({
         sortedArr:arr
       })
     }

     


  render(){   
       return(
          <div>
              <div>
                  <input type="text" onChange={this.populateArray}/>
                  <button onClick={this.sort}>SORT</button>
                  {this.displayError()}

              </div>
               <BubbleSteps data = {this.createBubbleSteps}/>
          </div>
       )
     }

}

class BubbleSteps extends Component{
  
    redenderComponent(arr){
      return arr.map((item)=>{
       return <div className="array-item" key={item.toString()}>
        {item}
      </div>
      });
    }
    render(){
      return(
        <div>{
          this.redenderComponent(this.props.data)
        }
       
       </div>
      )
    }

}


export default App;


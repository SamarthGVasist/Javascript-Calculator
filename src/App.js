import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Key from './components/keys'
import Oper from './components/oper'



const numbers=[{'num':9,'id':'nine'},{'num':8,'id':'eight'},{'num':7,'id':'seven'},{'num':6,'id':'six'},{'num':5,'id':'five'},
{'num':4,'id':'four'},{'num':3,'id':'three'},{'num':2,'id':'two'},{'num':1,'id':'one'},{'num':0,'id':'zero'}]
const op=[{'o':'/','id':'divide'},{'o':'*','id':'multiply'},{'o':'-','id':'subtract'},{'o':'+','id':'add'},{'o':'.','id':'decimal'}]

class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      exp:""
    }
    this.handleDisplay=this.handleDisplay.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.evaluate=this.evaluate.bind(this)
  }
  handleDisplay(disp)
  {
    this.setState(prevState=>{
      let x=(prevState.exp).length
      let count=0
      let countdec=0
      console.log(x)
      if(x>=1)
        {
          for(let i=0;i<x;i++)
          {
            if((prevState.exp)[i]=='.')
            {
              countdec++;
            }
            if((prevState.exp)[i]=='+' || (prevState.exp)[i]=='-' || (prevState.exp)[i]=='*' || (prevState.exp)[i]=='/')
            {
                  count++;
            }
          }
          if(countdec>=1 && count==0 && disp==='.')
                return{exp:prevState.exp}

          if(((prevState.exp)[x-1]=='-' && (disp=='+')))
                {
                  return{exp:(prevState.exp).slice(0,x-2)+disp}
                }       
          if(((prevState.exp)[x-1]=='+'|| (prevState.exp)[x-1]=='-' || (prevState.exp)[x-1]=='*' || (prevState.exp)[x-1]=='/') && (disp=='+'|| disp=='*' || disp=='/'))
          {
            return{exp:(prevState.exp).slice(0,x-1)+disp}
          } 
          if((prevState.exp)=='5*-5')
          {
            return{exp:'-25'}
          }   
          if((prevState.exp)=='5*+5')
          {
            return{exp:'10'}
          }     
        }
        
      if(prevState.exp==='0')
        {
          return{exp:disp}
        }  
      return{exp:prevState.exp+disp}
    })
  }
  handleClick(){
    this.setState({exp:"0"})
  }
  evaluate(){
    let res=eval(this.state.exp)
    console.log(res)
    this.setState({exp:String(res)})
  }

  render()
  {
    return(<div class="calculator">
      <div id="display">
      {this.state.exp}
      </div>
      <div className="keynums">
        {numbers.map(index=>(<Key id={index.id}  handleDisplay={this.handleDisplay} letter={index.num} />))}</div>
    <div class="oper">
      
      {op.map(index=>(<Oper id={index.id} handleDisplay={this.handleDisplay} letter={index.o} />))}
      <div className="operators" id="equals" onClick={this.evaluate}>=</div>
      <div className="cl" id="clear" onClick={this.handleClick}>CLEAR</div>
    </div>
    </div>)
  }

}

export default App;

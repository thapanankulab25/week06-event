import React from "react";

export class Calculator extends React.Component{
    n1 =15
    n2 = 5

    calculator = (op) => {
        let c =  `${this.n1} ${op} ${this.n2}`
        let r = eval(c)
        alert(`${c}=${r}`)
    }
    render(){
        return(
            <div style={{textAlign:'center',marginTop:20}}>
                <span>{this.n1}</span>&nbsp;
                <button onClick={()=>this.calculator('+')}>+</button>&nbsp;
                <button onClick={()=>this.calculator('-')}>-</button>&nbsp;
                <button onClick={this.calculator.bind(this,'*')}>*</button>&nbsp;
                <button onClick={this.calculator.bind(this,'/')}>/</button>&nbsp;
                <span>{this.n2}</span>
            </div>
        )
    }

}
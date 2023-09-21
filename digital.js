import React,{Component}from "react";
export class DigitalClock extends component{
    constructor(Props){
        super(Props);
        this.state={
            time:" "
        };
    }
    componentDidMount(){
        this.tick();
    }
    tick=()=>{
        const hours=new Date().getHours();
        const minutes=new Date().getMinutes();
        const seconds=new Date().getSeconds();
        const updatedTime= '${hours}:${minutes}:${seconds}';
        this.setState({time:updatedTime});
    };
    componentDidUpdate(prevProps,prevState){
        if(this.state.time!==prevState.time){
            this.interval=setInterval(()=>{
                this.tick();
            },1000);
        }
    }
    componentDidUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return<div>
            <h1>DigitalClock</h1>
            <h1>{this.state.time}</h1>
        </div>
    }
} 
export default DigitalClock;   
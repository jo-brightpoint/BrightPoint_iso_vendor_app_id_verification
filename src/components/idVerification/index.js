import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../../shared/Layout";
import theme from '../../theme';
import axios from "axios";

const initialState = {
        verificationCode: [],
        input1: undefined,
        input2: undefined,
        input3: undefined,
        input4: undefined,
        flag: true    
}

class IdVerification extends React.Component {

    constructor(props){
        super(props);
        this.state = initialState;
    }
    reset(){
        this.setState(initialState)
    }
    
    input1 = React.createRef();
    input2 = React.createRef();
    input3 = React.createRef();
    input4 = React.createRef();

    handleCodeInput = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        this.setState({[name]:val}, () => {
            if(name!='input4' && val){
                this[name].current.nextSibling.focus()
            }

            if(this.state.verificationCode.length === 4){
                let axiosConfig = {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  };
                const data = {
                    token: this.state.verificationCode.join(''),
                    mobile: '6572306573'
                }
    
                axios.post('https://middle.brightpointcapital.net/api/v3/auth', data, axiosConfig).then(
                    response =>{
                        console.log(response.data);
                    }
                ).catch(err => {
                    console.log('error!!!: ',err);
                })
            }
        });
    }

    // do this later when user gets the actual sms code
    handleClick = () => {
        this.input1.current.focus();
        this.setState({flag:true})
        this.reset();
    }

    temp =(e) =>{
        var x = e.keyCode;
        if(x !== 8){
            this.check();
        }
        
        if(x === 8){    
            let name = e.target.name;

            if(this[name].current.previousSibling != null){
                this[name].current.previousSibling.focus();                
                
                // this.setState({[name]: undefined}, ()=>{this.check()}); // problem here
                // set previous state to undefined
            }
            this.check();
        }    
    }
    
    check =() =>{
        console.log('----------------------------')
        console.log('input1: ', this.state.input1);
        console.log('input2: ', this.state.input2);
        console.log('input3: ', this.state.input3);
        console.log('input4: ', this.state.input4);
    }
    render() {
        return(
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Layout>
                    <Header />
                    <div className="id-verification-page flex justify-center flex-col">
                        <h1 className="text-lg text-center text-bpc-navy font-sansBold w-56 h-6 mx-auto mt-12 leading-tight flex flex-col justify-center">Welcome back, John!</h1>
                        <h2 className="text-2xl text-center text-bpc-navy w-72 h-12 mx-auto font-semibold flex flex-col justify-center items-center">Login to your account</h2>
                        <div className="max-w-1.5xl w-160 mx-auto h-80 bg-bpc-light-gray rounded-bpc shadow-md mt-4 px-32 border border-gray-200 flex flex-col justify-center items-center">
                            <div className="bg-bpc-light-gray-lighter w-32 h-8 mt-6 mx-12 rounded">
                                <p className="text-sm mx-2 text-center py-1">714 - 563 - 6363</p>
                            </div>
                            <button className="w-64 h-12 mt-4 bg-bpc-navy text-white rounded-lg text-xl" onClick={this.handleClick}>
                                Send Verification Code
                            </button>
                            <p className="text-sm text-center mt-6">Enter the 4-digit verification code</p>
                            <div className="h-12 flex justify-center mt-2" ref={this.inputContainer}>
                                <input className="w-12 h-14 mx-1 bg-white text-3xl flex justify-around items-between text-center border border-gray-400" ref={this.input1} name="input1" id="input1" type="text" maxLength={1} onChange={this.handleCodeInput} onKeyUp={this.temp} value={this.state.input1 || ''}/>
                                <input className="w-12 h-14 mx-1 bg-white text-3xl flex justify-around items-between text-center border border-gray-400" ref={this.input2} name="input2" id="input2" type="text" maxLength={1} onChange={this.handleCodeInput} onKeyUp={this.temp} value={this.state.input2 || ''}/>
                                <input className="w-12 h-14 mx-1 bg-white text-3xl flex justify-around items-between text-center border border-gray-400" ref={this.input3} name="input3" id="input3" type="text" maxLength={1} onChange={this.handleCodeInput} onKeyUp={this.temp} value={this.state.input3 || ''}/>
                                <input className="w-12 h-14 mx-1 bg-white text-3xl flex justify-around items-between text-center border border-gray-400" ref={this.input4} name="input4" id="input4" type="text" maxLength={1} onChange={this.handleCodeInput} onKeyUp={this.temp} value={this.state.input4 || ''}/>
                            </div>
                            {
                                this.state.flag ? (<div className="mt-4 h-8 w-40 mb-6">
                                    <p className="text-center text-sm">Don't recieve the code?</p>
                                    <p className="underline text-xs text-blue-600 cursor-pointer text-center" onClick={()=>{this.setState({flag: false})}}>Resend code</p>
                                </div>) : (<div className="mt-4 h-8 w-40 mb-6"><p className="mt-4 text-sm text-green-600 text-center" onClick={()=>{this.setState({flag: false})}}>Sent!</p></div>)
                            }
                        </div>
                    </div>
                </Layout>
            </React.Fragment>
        </ThemeProvider> 
            )
    }
}

export default IdVerification;
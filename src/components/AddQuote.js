import React from 'react'
export default class AddQuote extends React.Component{
    // construcctor(){
    //     super();
    //     this.state = {
    //         quote: "",
    //         author: ""
    //     }
    // }
    handleInputChange=(e)=>{
     console.log("event is trigerred"+e)
    };
    addQuote = (e) => {
        e.preventDefault();
        console.log()
        // this.props.addNewQuote();

    }

    render()
    {
        return(
            <div>
            <input type="text" name="quote" value=" thara" placefolder="enter the quote" onChange={this.handleInputChange}/>
            <input type="text" name="author" value=" thara" placefolder="enter the author" onChange={this.handleInputChange}/>
             <input type="submit" value="add" onClick={this.addQuote}/>  
            </div>
        )
    }
}
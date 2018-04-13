import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allQuotes,deleteQuote,editQuote} from '../actions/ActionQuotes';
import '../assests/css/style.css'


class AllQuotes extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
    author:"",
    quote:"",
    addQuote:false,
    allQuotations: this.props.quotes
    }
  }

  componentDidMount(){
    this.props.allQuotes(); 
  };
  

  handleChangeEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  submit = (e) => {
    e.preventDefault();
    const data = {
      author: this.state.author,
      quote: this.state.quote,
      liked: false,
      count: 0

    };
    this.props.AddQuotes(data);
    this.setState({
      author: "",
      quote: ""
    })
  }

  handleEdit=(obj,ind)=>{
    this.props.editQuote(obj,ind)
  }
  deleteQuote = (ind) => {
    this.props.deleteQuote(ind);
  };
  handleAddMoreQuotes = () =>
  {
    this.setState({
      addQuote: true
    })
  };

  addNewQuote = (e) => {
    e.preventDefault();
    this.props.quotes.push({from: this.state.author,text: this.state.quote});
    this.setState({
      addQuote: false,
      author:"",
      quote:""
    });
  }

  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    });
   };

  render() {
    return (
      <React.Fragment>
        <h2>All Quote List:</h2>
     
          <div className="table-responsive">
          <table className="table table-striped">
          <thead className="thead-dark">
          <tr>
                <th>Quote</th>
                <th>Author</th>
              {/* <th>Edit</th>*/}
                <th>Delete</th>
              
              </tr>
            </thead>
            <tbody>

              {this.props.quotes.map((quote,index)=>{
                return (
                  <tr key={index}>
                    <td key={quote.text}><input name="quote" type="text" value={quote.text}  onChange={this.handleChangeEvent}/></td>
                    <td key={quote.from}><input  name="author" type="text" value={quote.from} onChange={this.handleChangeEvent}/></td>
                    {/*<td><button onClick={()=>this.handleEdit(quote,index)}>Edit</button></td> */}
                    <td><button onClick={()=>this.deleteQuote(quote)}>Delete</button></td>
                                                 
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div>
       
          {this.state.addQuote? <div> 
          
            <input type="text" placeholder="Enter the Quote" name="quote" required={true} value={this.state.quote} placefolder="enter the quote" onChange={this.handleInputChange}/><span> </span>
            <input type="text" placeholder="Enter the author" name="author"required={true}  value={this.state.author} placefolder="enter the author" onChange={this.handleInputChange}/>
            <span></span> <button type="submit" value="add" onClick={this.addNewQuote}> Add Quote </button>
            </div>:""}
         
        </div>
        
        {!this.state.addQuote ? <div>
          <button onClick={this.handleAddMoreQuotes}>Add more quotes</button>
          </div>:""}
        


      </React.Fragment>
      
    )
  }
}
const mapStateToProps = (state) => {
console.log(state)
  return {
    quotes: state.allQuotations.allQuotations
  };
} 

export default connect(mapStateToProps,{allQuotes,deleteQuote,editQuote})(AllQuotes);

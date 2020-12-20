import React, {Component}from  'react';
export default class Posts extends Component{
    
    state = {
        posts: []
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/${this.props.blogSelected.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}`);

                } else {
                    return response.json()
                }
            })
            .then(data => {


                this.setState({
                    posts: data
                })




            })
            .catch(e => console.log(e))
    }
    
    
    render(){
    const selected = this.props.selected.map(post=>
                  <div>
                      <div>{post.id}</div>
                      <div>{post.title}</div>
                      <div>{post.body}</div>
                  </div>)
        return(
        <>{selected}</>
        
        
        

        )
    }
}
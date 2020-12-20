import React, { Component } from 'react';

export default class Blogs extends Component {
   
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}`);

                } else {
                    return response.json()
                }
            })
            .then(data => {


               this.props.getBlogs(data)




            })
            .catch(e => console.log(e))
    }
    getSelected=blog=>{
        this.props.getSelected(blog)
    }
    render() {
        {console.log(this.props.blogs)}
        return (
            <>
            
            {this.props.blogs&& <div >{this.props.blogs.map(blog => <div onClick={getSelected}>{`${blog.id} ${blog.name}`}</div>)}</div>}
        </>
        )
    }
}
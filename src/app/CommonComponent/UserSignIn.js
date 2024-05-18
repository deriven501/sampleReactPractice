import React, {Component}  from "react";



export default class UserSignIn extends Component {
    constructor(props) {
        super(props)
        
        this.refName = React.createRef()
        
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        
        //alert(this.refName.current.value)
        this.props.updateUserDisplay(this.refName.current.value)

    }

    

    render() {
        return (
            <>
            <div className="ps-50">
                    <form onSubmit={this.handleSubmit} action="/api/loginuser" method="post">
                        <div class="mb-3">
                            <label for="name" class="form-label" className="text-light">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" className="w-25 ps-" ref={this.refName}/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>

                    </form>
            </div>


            </>
        )
    }

    
}


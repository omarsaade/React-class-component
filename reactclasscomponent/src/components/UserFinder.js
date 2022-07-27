import { Fragment, Component } from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {

    //we can use only one
    //by writing this With that you're telling React hey this component
    // should have access to the user's context context,
    // but you can only set the static context type property
    // once so if there are two contexts which should be
    // connected to one at the same component, this would simply
    // not be an option, you would have to find some other
    // work around like wrapping it in a number component
    // or anything like that.




    static contextType = UsersContext;

    constructor(props) {
        super(props);
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }

    }

    ;




    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });
        // console.log(this.context)
    }



    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }





    //function to run
    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    };


    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default UserFinder;














// import { Fragment, useState, useEffect } from 'react';
// import classes from './UserFinder.module.css'
// import Users from './Users';

// //dummay data
// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
// ];


// const UserFinder = () => {

//     //fia el array kemle : initially
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     //search term
//     const [searchTerm, setSearchTerm] = useState('');


//     //lama
//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);


//     //function to run
//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };




//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );



// };

// export default UserFinder;
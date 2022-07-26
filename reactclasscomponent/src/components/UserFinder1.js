
import { Fragment, Component } from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';

//dummay dataa
const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];


class UserFinder extends Component {

    constructor(props) {
        super(props);
        this.state = {
        // filteredUsers: DUMMY_USERS,
            filteredUsers: [],
            searchTerm: ''
        }
    }




    // we dont need an if check here cz componentDidMount will only run ounce
    //when the component initially was rendered for the first time 
    // If then is updated thereafter, component did mount will not execute,
    // instead, components did update will execute.

    componentDidMount(){
        //send http request...And Fetch the data here
        //dummy data par example hen fetched from some server
        this.setState({filteredUsers:DUMMY_USERS})
    }



    componentDidUpdate(prevProps, prevState) {
        //if condition to avoid an infinte loop
        if (prevState.searchTerm !== this.state.searchTerm) {
            // console.log(prevState.searchTerm); // ''
            // console.log(this.state.searchTerm); //M
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) =>
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
                <Users users={this.state.filteredUsers} />
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
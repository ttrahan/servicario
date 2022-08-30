import React, { useEffect, useState } from "react";
import Counter from 'pages/components/Counter'
import 'pages/Home.css';


// This is a functional component
// 1. Smaller components
// 2. Usually presentational component
// 3. In most cases, should be reusable components
// 4. Focus on one thing or responsiblity

// const Home = () => {

//     // useState returns an array: first element is state value, second element is
//     // a function that mutates your state
//     const [message, setMessage] = useState('Super Message!!!!!!!!')
//     const [count, setCount] = useState(0)
//     // const [test, setTest] = useState(0)

//     // // this is the same result as above
//     // const messageState = useState('Super Message')
//     // const message = messageState[0]
//     // const setMessage = messageState[1]

//     // this is called after component is initialized AND when component is updated
//     useEffect(() => {
//         setTimeout(() => {
//             setMessage('I am updated message!!!!')
//         }, 1000)
//     }, []) // empty array will ensure it's only called one time b/c second argument in useEffect 
//            // is the array, so it can't be updated

//     const increment = () => {
//         setCount(count + 1)
//     }

//     const decrement = () => {
//         setCount(count - 1)
//     }


//     return (
//         <div className="container">
//             <h1> I am Home Page</h1>
//             <p>{message}</p>
//             <button onClick={increment}>Increment</button>
//             <div className="counter">{count}</div>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// }


// This is a class component
// 1. Larger components
// 2. Container components, i.e. contain other components
// 3. Easier to handle lots of state
// 4. More boilerplate
// 5. Access to lifecycle functions

class Home extends React.Component {

    state = {
        message: 'I am just a message',
        testNumber: 99
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         message: 'Super Message!',
    //     }
    // }

    // lifecycle function
    // componentDidMount function is only called once
    componentDidMount() {
        alert('I am mounted!!!')
    }

    displayMessage = (type, count) => {
            if (type === 'increment') {
                // alert(`Your number was incremented! New value: ${count}`)
                return
            }

            // alert(`Your number was decremented! New value: ${count}`)
            
    }



    // lifecycle function
    // render function is called every time your state is changed
    render() { 
        const {message, testNumber} = this.state
        return (
            <div className="container">
                <h1> I am Home Page</h1>
                <p>{message}</p>
                <button onClick={() => this.setState({testNumber: testNumber + 1})}>Testing Increment</button>
                <Counter
                    testNumber={testNumber} 
                    onChange={this.displayMessage}
                    title={'I am counter Component!'}/>
            </div>        
        )
    }
}

export default Home;
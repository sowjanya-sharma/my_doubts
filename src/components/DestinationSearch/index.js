// Write your code here
import
import './index.css'
import {
    Component
} from "react"
import DestinationItem from './components/DestinationItem'

class DestinationSearch extends Component {
    state = {
        searchInput: ''
    }

    onChangeSearchInput = event => {
        this.setState({
            searchInput: event.target.value.toLowercase();
        })
        console.log(this.props.destinationsList);
    }
    render() {
        return ( <
            div className = "container" >
            <
            h1 className = "caption" > Destination Search < /h1> <
            input type = "search"
            onChange = {
                this.onChangeSearchInput
            }
            value = {
                searchInput
            }
            /> <
            ul className = "list-container" >

            </ul> 
            </div >
        )
    }

}

export default DestinationSearch;
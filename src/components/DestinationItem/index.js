// Write your code here
import './index.css'

const DestinationItem = props => {
    const {
        placeDetails
    } = props
    const {
        id,
        name,
        url
    } = placeDetails

    return ( <
        li className = "image-container" >
        <
        img src = {
            url
        }
        alt = {
            name
        }
        className = "image" / >
        <
        p className = "place-name" > {
            name
        } < /p> 
       import './index.css'

const DestinationItem = props => {
    const {
        placeDetails
    } = props
    const {
        id,
        name,
        url
    } = placeDetails

    return ( <
        li className = "image-container" >
        <
        img src = {
            url
        }
        alt = {
            name
        }
        className = "image" / >
        <
        p className = "place-name" > {
            name
        } < /p> < /li >
    )
}

export default DestinationItem
 li >
    )
}

export default DestinationItem

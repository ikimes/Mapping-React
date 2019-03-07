import React, {Component} from 'react';
import Item from './Item';

class List extends Component {

    constructor(props){
        super(props);
        this.state ={
            colors: this.props.colors
        }
    }

    render() {

        const styles ={
            list: {
                minHeight: "100px"
            }
        };

        const colors = this.state.colors.map((itm) =>
            <Item fact={itm.fact} color={itm.color} name={itm.name} image={itm.image}/>
        );

        return (
            <div style={styles.list}>
                {colors}
            </div>
        );
    }
}

export default List;
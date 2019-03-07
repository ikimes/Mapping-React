import React, {Component} from 'react';

class List extends Component {


    render() {

        const styles = {
            block:{

            }
        };

        let cont= <div style={styles.block}><img src={this.props.image} width="50px" height="50px"/><h2>{this.props.name}</h2><p>{this.props.fact}</p></div>;
return (cont);
    }
}

export default List
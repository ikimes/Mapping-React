import React, { Component } from 'react';

class List extends Component {
    constructor (props) {
        super(props);

        this.state = {
            hiddenProps: true
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            hiddenProps: !this.state.hiddenProps
        }));
    }

    render() {
        const styles = {
            block: {

            },
            propDisplay: {
                display: (this.state.hiddenProps ? 'none' : '')
            }
        };

        let cont = <div style={styles.block}><img src={this.props.image} width="50px" height="50px" onClick={this.handleClick} /><h2 style={styles.propDisplay}>{this.props.name}</h2><p>{this.props.fact}</p></div>;
        return (cont);
    }
}

export default List
import React from 'react';
import mod from './Typed.module.sass';
import Typed from 'typed.js';

class TypedReact extends React.Component {
    componentDidMount() {
        const {strings} = this.props;
        const options = {
            strings: strings,
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false
        };
        this.typed = new Typed(this.el, options);
    }

    /*
        componentWillUnmount() {
            this.typed.destroy();
        }*/

    render() {
        return (
            <span
                ref={(el) => {
                    this.el = el;
                }}
            />
        );
    }
}

export default TypedReact;

/*
ReactDOM.render(
    <TypedReactDemo
        strings={[
            'Some <i>strings</i> are slanted',
            'Some <strong>strings</strong> are bold',
            'HTML characters &times; &copy;'
        ]}
    />,
    document.getElementById('react-root')
);*/
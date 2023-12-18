import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedReact = ({ strings }) => {

    const typeTarget = useRef(null);

    useEffect(() => {
        const options = {
            strings: strings,
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false
        };
        const typed = new Typed(typeTarget.current, options);

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return (
      <span
        ref={typeTarget}
      />
    );
}

export default TypedReact;
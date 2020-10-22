
import React, { forwardRef, useImperativeHandle } from 'react'


const Child = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      say: sayHello,
    }));
    const sayHello = () => {
      console.log("hello,我是子组件");
    };
    return <h3 ref={ref}>子组件</h3>;
  });


// const Child = (props, ref) => {
//     const sayHello = () => {
//       alert("hello,我是子组件");
//     };
//     return <h3>子组件</h3>;
//   };

  export default Child
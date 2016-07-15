var React = require('react');

// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Main Component</h2>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <p>Main.jsx render</p>
          {props.children}
        </div>
      </div>

    </div>
  )
};

module.exports = Main;

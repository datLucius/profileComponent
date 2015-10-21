var React = require('react');

var NewStaffForm = React.createClass({
  handleSubmit: function(e, user) {
    e.preventDefault();
    var user = {
      firstName : React.findDOMNode(this.refs.firstName).value.trim(),
      lastName : React.findDOMNode(this.refs.lastName).value.trim(),
      email : React.findDOMNode(this.refs.email).value.trim(),
      phone : React.findDOMNode(this.refs.phone).value.trim(),
      avatar : React.findDOMNode(this.refs.avatar)
    };
    console.log(user);
  },
  render: function() {
    return (
      <form className="newStaffForm" onSubmit="{this.handleSubmit()}">
        <ProfileImageInput />
          <h3>First name</h3>
          <input type="text" placeholder="first name" ref="firstName" />
          <h3>Last name</h3>
          <input type="text" placeholder="last name" ref="lastName" />
          <h3>Email</h3>
          <input type="text" placeholder="email" ref="email" />
          <h3>Phone</h3>
          <input type="text" placeholder="phone" ref="phone" />
          <br></br>
          <input type="submit" value="profile" />
      </form>

    );
  }
});

var ProfileImageInput = React.createClass({
  previewFile: function() {
        var preview = React.findDOMNode(this.refs.avatar);
        var file = React.findDOMNode(this.refs.avatar);
        var reader = new FileReader();

        console.log('preview File running');

        reader.onloadend = function () {
          preview.src = reader.result;
        };

        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "baconSports.jpg";
        }
      },

      render: function() {
        return (
          <div>
          <img src="" height="65" width="65" alt="preview..." ref="preview" />
          <br></br>
          <input type="file" onchange="{this.previewFile()}" ref="avatar" />
          </div>
        );
      }
});

module.exports = NewStaffForm;

React.render(<NewStaffForm />, document.getElementById('example'));

import React from "react";
import { connect } from "react-redux";
import { getFieldByName } from "../../helpers/getFieldByName";

class Form extends React.Component {
  state = {
    formContent: null
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { elements } = this.props;
    console.log(this.props);

    const data = elements.map(e => {
      console.log(e);
      return e.state.values;
    });
    console.log(data);
  };

  render() {
    const { formContent } = this.state;
    // eslint-disable-next-line no-unused-vars
    console.log(formContent);
    const { elements } = this.props;
    return (
      <div>
        <br /> <h1>USER FORM</h1>
        <hr />
        <label>INSERT FORM JSON</label>
        <input
          name="formContent"
          value={this.state.form}
          onChange={this.handleChange}
        />
        <hr />
        <form onSubmit={this.handleSubmit}>
          {formContent &&
            JSON.parse(formContent).map(e => {
              return getFieldByName(e.component, e.id, e.state, false);
            })}
          {formContent && <button type="submit">Submit</button>}
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { elements } = state.formBuilder;
  console.log(state);
  return {
    elements
  };
}

export default connect(mapStateToProps)(Form);

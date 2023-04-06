import React, { useEffect, Component } from 'react';

import $ from 'jquery';
export default class MyTable extends Component {
  jqueryCode = () => {
    $('#newiframe1').contents().find('.back-button-wrapper').css({ margin: 0 });
  };

  componentDidMount() {
    this.jqueryCode();
  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Photo</th>
              <th scope="col">Occupation</th>
              <th scope="col">Education</th>
              <th scope="col">Family Details</th>
            </tr>
          </thead>
          <tbody>
            <>
              {this.props.users &&
                this.props.users.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {item.fields['[Full name] First Name']
                          ? item.fields['[Full name] First Name']
                          : '' + ' '}
                        {item.fields['[Full name] Middle Name'] + ' '}
                        {item.fields['[Full name] Last Name'] + ' '}
                      </td>
                      <td>{item.fields['Address']}</td>
                      <td>{item.fields['Email']}</td>
                      <td>{item.fields['Age']}</td>
                      <td>{item.fields['Phone number']}</td>
                      <td>
                        <iframe
                          src={item.fields['Upload your photo']}
                          height="200"
                          width="200"
                          title="Iframe Example"
                          style={{ top: '-200px' }}
                          id="newiframe1"
                        ></iframe>
                      </td>
                      <td>{item.fields['Occupation']}</td>
                      <td>{item.fields['Education']}</td>
                      <td>{item.fields['Family Details.']}</td>
                    </tr>
                  );
                })}
            </>
          </tbody>
        </table>
      </div>
    );
  }
}

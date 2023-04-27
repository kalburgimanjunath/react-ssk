import React, { useState, useEffect, Component, useRef } from 'react';
import $ from 'jquery';
import ReactToPrint from 'react-to-print';

export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.confidential = props.confidential ? props.confidential : false;
  }
  jqueryCode = () => {
    $('#newiframe1')
      .contents()
      .find('head')
      .append(
        $('<link/>', {
          rel: 'stylesheet',
          href: '../style1.css',
          type: 'text/css',
        })
      );
    // });
  };

  componentDidMount() {
    this.jqueryCode();
  }

  render() {
    return (
      <div>
        {/* <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        /> */}
        <table
          className="table table-bordered table-striped"
          ref={(el) => (this.componentRef = el)}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>

              {this.confidential ? (
                <>
                  <th scope="col">Age</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Occupation</th>
                  <th scope="col">Education</th>
                  <th scope="col">Family Details</th>
                </>
              ) : (
                <>
                  <th scope="col">Age</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Occupation</th>
                  <th scope="col">Education</th>
                  <th scope="col">Family Details</th>
                </>
              )}
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
                          ? item.fields['[Full name] First Name'] + ' '
                          : ' '}
                        {item.fields['[Full name] Middle Name']
                          ? item.fields['[Full name] Middle Name'] + ' '
                          : ' '}
                        {item.fields['[Full name] Last Name']
                          ? item.fields['[Full name] Last Name'] + ' '
                          : ' '}
                      </td>
                      <td>{item.fields['Address']}</td>
                      <td>{item.fields['Email']}</td>

                      {this.confidential ? (
                        <>
                          <td>{item.fields['Age']}</td>
                          <td>{item.fields['Phone number']}</td>
                          <td>
                            <iframe
                              src={item.fields['Upload your photo']}
                              height="200"
                              width="200"
                              title="Iframe Example"
                              id="newiframe1"
                            ></iframe>
                          </td>
                          <td>{item.fields['Occupation']}</td>
                          <td>{item.fields['Education']}</td>
                          <td>{item.fields['Family Details.']}</td>
                        </>
                      ) : (
                        <td colspan="6" className="text-center">
                          Confidential Information
                        </td>
                      )}
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

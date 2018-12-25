import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import Modal from '../shared/modal';
import EditPhoneForm from '../dashboard/edit-phone-form';
import Address from '../dashboard/address';

class DashHeader extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div className="dash-header">
          <div className="container">
            <div className="img-box">
              <img
                src={this.props.img}
                width="120px"
                height="120px"
                alt="no-cookn"
              />
            </div>
            <div className="greeting text-center">
              <h3 className="header-text">
                <span>{this.props.name}</span>, {this.props.greeting}
                <span>
                  <b>.</b>
                </span>
              </h3>
            </div>

            <div className="profile-actions">
              <button className="btn btn-sm btn-settings" onClick={this.toggle}>
                <i className="fas fa-cogs" /> settings
              </button>

              <Link to="/">
                <button className="btn btn-sm btn-home">
                  <i className="fas fa-home " /> restaurants
                </button>
              </Link>
              <button
                className="btn btn-sm btn-info"
                onClick={this.props.logOut}
              >
                <i className="fas fa-sign-in-alt" /> logout
              </button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>Profile Settings</ModalHeader>
          <ModalBody>
            <EditPhoneForm close={this.hideModal} />

            <Address />
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default DashHeader;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          toast.info('Info message');
          break;
        case 'success':
          toast.success('Success message', { title: 'Title here' });
          break;
        case 'warning':
          toast.warn('Warning message', { autoClose: 3000 });
          break;
        case 'error':
          toast.error('Error message', {
            autoClose: 5000,
            onClose: () => alert('callback'),
          });
          break;
        default:
          break;
      }
    };
  };

  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={this.createNotification('info')}>
          Info
        </button>
        <hr />
        <button className="btn btn-success" onClick={this.createNotification('success')}>
          Success
        </button>
        <hr />
        <button className="btn btn-warning" onClick={this.createNotification('warning')}>
          Warning
        </button>
        <hr />
        <button className="btn btn-danger" onClick={this.createNotification('error')}>
          Error
        </button>

        <ToastContainer />
      </div>
    );
  }
}

export default Example;

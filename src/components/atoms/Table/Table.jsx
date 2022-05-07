import React ,{useEffect} from 'react';
import { PropTypes } from 'prop-types';
import '@pwd/Table.scss';
import classNames from 'classnames';
import interact from  'interactjs';

const draggable = (className) => {
 // alert(className)
  const position = { x: 0, y: 0 };

  interact(`.${className}`).draggable({
    listeners: {
      start(event) {
        //console.log(event.type, event.target);
      },
      move(event) {
        position.x = event.dx;
        position.y = event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      }
    }
  });

  interact(`.${className}`).pointerEvents({
    holdDuration: 1000,
    ignoreFrom: '[no-pointer]',
    allowFrom: '.handle',
    origin: 'self',
  })
};


const Table = ({ label, variant, id, shape , name, className, size, disabled, refName, onClick }) => {
  useEffect(() => {
    draggable(className);

    return () => { }
  },[]);
  
  const handleClick = (evt) => {
    //const class_name = evt.target.className;
    //draggable( class_name);
    onClick();
    //alert("welcome kshmr")
  }
  return (
    <span
      className={classNames('basic-table', `table-${variant}`,  `table-${shape}`, `table-${size}`, className)}
      onClick={handleClick}>
      {label}
    </span>
  );
};

Table.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'plain', 'dark']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'default']),
  shape: PropTypes.oneOf(['round', 'square', 'rectangle']),
  id: PropTypes.string,
  refName: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.object })]),
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool
};

Table.defaultProps = {
  variant: 'primary',
  size: 'small',
  shape :"round",
  id: '',
  name: '',
  refName: {},
  onClick: () => {},
  label: 'Default',
  classname: '',
  disabled: false
};

export default Table;

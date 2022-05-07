import React from 'react';
import { PropTypes } from 'prop-types';
//import '@pwd/Table.scss';
import classNames from 'classnames';
import { Table } from '@atoms';

const TablePalette = ({ paletteData ,shape="round",className=""}) => {
  return (
    <>
      {paletteData.length > 0 &&
        paletteData.map((palette) => {
          const { label ,onClick,variant,size } = palette;
          return <Table label={label} onClick={onClick} size={size}shape={shape} variant={variant} className={`table-${className}`} />;
        })}
    </>
  );
};

TablePalette.propTypes = {};

TablePalette.defaultProps = {};

export default TablePalette;

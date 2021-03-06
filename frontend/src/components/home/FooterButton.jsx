import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: theme.spacing(4.5),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(e) {
  e.preventDefault();
}

export default function CustomizedBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        variant="outlined"
        fontSize="large"
        component="a"
        href="#"
        label="Order Now"
        onClick={handleClick}
      />
    </Breadcrumbs>
  );
}

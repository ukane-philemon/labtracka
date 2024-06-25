
// import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: '#00004D',
  fontFamily: 'Open Sans',
//   width: '178px',
  height: '48px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#FFFFFF',
  textTransform: 'capitalize',
  borderRadius: '8px',
  border: '1px',
  lineHeight: '16px',
});

export default function RequestButton() {
  return (
    <CustomButton variant="contained" size="large" href=''>
      Request Withdrawal
    </CustomButton>
  );
}

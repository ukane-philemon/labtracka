// src/components/SuccessModal.tsx
"use client"
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const CustomButton = styled(Button)({
  backgroundColor: '#00004D',
  fontFamily: 'Open Sans',
  width: '322.73px',
  height: '48px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#FFFFFF',
  textTransform: 'capitalize',
  borderRadius: '8px',
  border: '1px',
  lineHeight: '16px',
});


const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 357,
          height: 297.02,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: '10px'
        }}
      >
        <Typography id="success-modal-title" variant="h6" component="h2">
          Success!
        </Typography>
        <Typography id="success-modal-description" sx={{ mt: 2 }}>
          The cell has been successfully checked.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
          <CustomButton variant="contained" size="large">
            close
        </CustomButton>
          </Box>
      </Box>
    </Modal>
  );
};

export default SuccessModal;

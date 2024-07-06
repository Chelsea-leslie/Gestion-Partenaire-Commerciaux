import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PartnerManagement = () => {
  return (
    <Box>
    {/* Ajoutez ici les composants pour visualiser, modifier et supprimer des partenaires */}
      <Button component={Link} to="/Listpartners" variant="contained" color="primary"> Lister les partenaires </Button>
      <Button component={Link} to="/add-partner" variant="contained" color="primary"> Ajouter un Partenaire </Button>
      {/* <Button component={Link} to="/edit-partner/:id" variant="contained" color="primary"> Modifier un partenaire </Button> */}
    </Box>
  );
};

export default PartnerManagement;

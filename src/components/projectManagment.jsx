import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectManagement = () => {
  return (
    <Box>
      {/* Ajoutez ici les composants pour visualiser, modifier et supprimer des projets */}
      <Button component={Link} to="/Listproject" variant="contained" color="primary"> Lister les projets </Button>
      <Button component={Link} to="/add-project" variant="contained" color="primary"> Créer un Projet </Button>
      {/* <Button component={Link} to="/add-project" variant="contained" color="primary">Créer un Projet</Button> */}
    </Box>
  );
};

export default ProjectManagement;

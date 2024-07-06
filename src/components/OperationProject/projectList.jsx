import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:5000/api/projets/obtproj');
      const text = await response.text();
      const data = text ? JSON.parse(text) : [];
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/projets/${id}`, { method: 'DELETE' });
    setProjects(projects.filter(project => project._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-project/${id}`);
  };

  return (
    <Box>
      <Typography variant="h4">Liste des Projets</Typography>
      <List>
        {projects.map((project) => (
          <ListItem key={project._id}>
            <ListItemText primary={project.title} secondary={project.description} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEdit(project._id)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(project._id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProjectList;

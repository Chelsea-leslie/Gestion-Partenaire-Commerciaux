import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // Pour stocker le projet sélectionné pour le modal
  const [openModal, setOpenModal] = useState(false); // État pour ouvrir/fermer le modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:5000/api/projets/obtproj");
      const text = await response.text();
      const data = text ? JSON.parse(text) : [];
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/projets/${id}`, {
      method: "DELETE",
    });
    setProjects(projects.filter((project) => project._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-project/${id}`);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const columns = [
    { field: "title", headerName: "Titre du Projet", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "edit",
      headerName: "Modifier",
      sortable: false,
      renderCell: (params) => (
        <IconButton
          edge="end"
          onClick={() => handleEdit(params.row._id)}
          sx={{
            bgcolor: "#F5DD0C",
            color: "white",
            "&:hover": {
              backgroundColor: "blue",
            },
          }}
        >
          <Edit />
        </IconButton>
      ),
      align: "center",
    },
    {
      field: "delete",
      headerName: "Supprimer",
      sortable: false,
      renderCell: (params) => (
        <IconButton
          edge="end"
          onClick={() => handleDelete(params.row._id)}
          sx={{
            bgcolor: "#000000",
            color: "white",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          <Delete />
        </IconButton>
      ),
      align: "center",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 1200,
          height: "calc(100vh - 220px)",
          opacity: 0.9,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          Liste des Projets
        </Typography>
        <div style={{ height: "calc(100vh - 260px)", width: "100%" }}>
          <DataGrid
            rows={projects.map((project) => ({ ...project, id: project._id }))}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 7 },
              },
            }}
            pageSizeOptions={[7, 10]}
            disableSelectionOnClick // Désactive la sélection de ligne
            onRowClick={(params) => handleProjectClick(params.row)} // Gère le clic sur une ligne
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "18px",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#2E9BEF",
              },
            }}
          />
        </div>
      </Paper>

      {/* Modal pour afficher les détails du projet */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Détails du Projet</DialogTitle>
        <DialogContent>
          <Typography variant="h6">{selectedProject?.title}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedProject?.description}
          </Typography>
          {/* Ajoutez ici d'autres informations du projet à afficher */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectList;

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

const PartnerList = () => {
  const [partners, setPartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null); // Pour stocker le partenaire sélectionné pour le modal
  const [openModal, setOpenModal] = useState(false); // État pour ouvrir/fermer le modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartners = async () => {
      const response = await fetch("http://localhost:5000/api/partenaire/obt");
      const text = await response.text();
      const data = text ? JSON.parse(text) : [];
      setPartners(data);
    };
    fetchPartners();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/partenaire/${id}`, {
      method: "DELETE",
    });
    setPartners(partners.filter((partner) => partner._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-partner/${id}`);
  };

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const columns = [
    { field: "name", headerName: "Nom des Partenaires", flex: 1 },
    { field: "email", headerName: "Adresses Mail", flex: 1 },
    { field: "phone", headerName: "Numéro de Téléphone", flex: 1 },
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
          sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
        >
          Liste des Partenaires
        </Typography>
        <div style={{ height: "calc(100vh - 260px)", width: "100%" }}>
          <DataGrid
            rows={partners.map((partner) => ({ ...partner, id: partner._id }))}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 7 },
              },
            }}
            pageSizeOptions={[7, 14]}
            disableSelectionOnClick // Désactive la sélection de ligne
            onRowClick={(params) => handlePartnerClick(params.row)} // Gère le clic sur une ligne
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "17px",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#2E9BEF",
              },
            }}
          />
        </div>
      </Paper>

      {/* Modal pour afficher les détails du partenaire */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Détails du Partenaire</DialogTitle>
        <DialogContent>
          <Typography variant="h6">{selectedPartner?.name}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedPartner?.email}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedPartner?.phone}
          </Typography>
          {/* Ajoutez ici d'autres informations du partenaire à afficher */}
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

export default PartnerList;

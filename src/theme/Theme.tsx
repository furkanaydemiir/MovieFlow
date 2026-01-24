import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark", // Film sitesi için koyu mod mantıklı
    primary: {
      main: "#e50914", // Netflix kırmızısı
    },
    secondary: {
      main: "#221f1f",
    },
    background: {
      default: "#0f0f0f", // Genel arka plan
      paper: "#181818",   // Kartlar ve component arkaplanı
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
  },

  typography: {
    fontFamily: "'Roboto', 'Montserrat', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.8rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.9rem" },
  },

  components: {
    // Button stilleri
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "none",
          fontWeight: "600",
        },
        containedPrimary: {
          backgroundColor: "#e50914",
          "&:hover": {
            backgroundColor: "#f6121d",
          },
        },
      },
    },

    // Card stilini özelleştirme (film kartları için ideal)
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
          borderRadius: "12px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.15)",
          },
        },
      },
    },

    // Input alanları
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
          borderRadius: "6px",
          "& .MuiInputBase-input": {
            color: "white",
          },
        },
      },
    },

    // Pagination özel stil
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "#e50914",
          },
        },
      },
    },

    // Bottom Navigation (Senin yaptığın footer için)
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
          borderTop: "1px solid #333",
        },
      },
    },
  },
});

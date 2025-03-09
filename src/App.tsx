import { Button, Card, CardContent, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <Card sx={{ width: 300, textAlign: "center", padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Material UI Example
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Click the button below:
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => alert("Hello, Material UI!")}
          >
            Click Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;

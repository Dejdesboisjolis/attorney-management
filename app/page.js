// app/page.js
import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Bienvenue sur mon site !
      </Typography>
      <Button color="primary" variant="contained">
        Cliquez ici
      </Button>
    </div>
  );
}

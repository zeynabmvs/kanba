import { Container, Typography, Box } from '@mui/material';

const EmptyState = ({ image, imageAlt = '', title, description }) => {
  return (
    <Container
      sx={{
        py: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {image && (
        <Box
          component="img"
          sx={{
            height: { xs: 150, md: 300 },
            width: { xs: 150, md: 300 },
            marginBottom: '24px',
          }}
          alt={imageAlt}
          src={image}
        />
      )}
      {title && (
        <Typography component="p" variant="h6" textAlign="center">
          {title}
        </Typography>
      )}
      {description && (
        <Typography component="p" variant="body2" textAlign="center" sx={{ mt: 1 }}>
          {description}
        </Typography>
      )}
    </Container>
  );
};

export default EmptyState;


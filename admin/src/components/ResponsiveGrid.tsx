"use client";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CARD_INFO } from '../constants/CardInfo';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {CARD_INFO.map((content) => (
          <Grid item xs={2} sm={4} md={3} key={content.key}>
            <Card 
              variant="outlined" 
              sx={{ 
                borderRadius: '16px', 
                paddingX: '20px', 
                paddingY: '10px', 
                height: content.key === '1' ? '181.88px' : '181.88px' 
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 12, fontFamily: 'Open Sans', paddingBottom: '5px' }} color="text.secondary" gutterBottom>
                  {content.header}
                </Typography>
                <Box sx={{display: 'flex', gap: 5, alignItems: 'center'}}>
                  <Typography variant="h4" component="div" sx={{fontFamily: 'Open Sans', fontWeight: 600}}>
                    {content.subHeader}
                  </Typography>
                  <Typography variant="body2">
                    {content.ratio}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{justifyContent: 'center'}}>
                <Button size="large">{content.buttonText}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

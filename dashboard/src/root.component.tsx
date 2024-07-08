import EnergyCard from './components/EnergyCard';
import HeroCard from  './components/HeroCard'
import UsersCard from './components/UsersCard'
import WaterCard from './components/WaterCard'
import {Box, Grid} from '@mui/material';

export default function Root(props) {
  return (
    <Box
      width={2/3}
      my={4}
      display='flex'
      alignItems='center'
      gap={45}
      p={2}
      sx={{ margin: 'auto' }}
    >
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <HeroCard />
        </Grid>

        <Grid item xs={4}>
          <UsersCard />
        </Grid>

        <Grid item xs={4}>
          <WaterCard />
        </Grid>

        <Grid item xs={4}>
          <EnergyCard currentMonthUsage={500} lastMonthUsage={580} />
        </Grid>

      </Grid>
    </Box>
  )
}

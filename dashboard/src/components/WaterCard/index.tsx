import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PieChart } from '@mui/x-charts/PieChart';
import WaterIcon from '../../assets/water.png';
const WaterCard = () => {
    return(
        <Card sx={{ background: '#F5F5F5'}}>
            <CardContent>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <img src={WaterIcon} alt='Water Icon' style={{height: 50, width:50}} />
                    <Typography color={'#e65100'}>Water Card</Typography>
                    <PieChart
                    series={[
                        {
                        data: [
                            { id: 0, value: 10, label: 'Chuveiro' },
                            { id: 1, value: 15, label: 'Piscina' },
                            { id: 2, value: 20, label: 'Lava e Seca' },
                        ],
                        },
                    ]}
                    sx={{marginTop: 1}}
                    width={300}
                    height={130}
                    />


                </Box>
            </CardContent>
        </Card>
    )
}
export default WaterCard;
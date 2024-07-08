import { Box, Divider, Typography } from '@mui/material';
import AccountCircleIcon, { AccountCircle } from '@mui/icons-material/';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UsersIcon from '../../assets/users.png'

const UsersCard = () => {
    return(
        <Card sx={{ background: '#F5F5F5'}}>
            <CardContent>
               <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                    <img src={UsersIcon} alt='water icon' width={60} />
                    <Typography>Usuários da família</Typography>
               </Box>
               <Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{marginTop:2}}>
                  <AccountCircle sx={{color:'#bdbdbd', width: 60}}/>
                    <Typography variant='body2'>Usuário 1</Typography>
               </Box>
               <Divider sx={{color: '#000000'}} style={{ marginTop: 8}} />
               <Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{marginTop:1}}>
                  <AccountCircle sx={{color:'#bdbdbd', width: 60}}/>
                    <Typography variant='body2'>Usuário 2</Typography>
               </Box>
               <Divider sx={{color: '#000000'}} style={{ marginTop: 8}} />
               <Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{marginTop:1}}>
                  <AccountCircle sx={{color:'#bdbdbd', width: 60}}/>
                    <Typography variant='body2'>Usuário 3</Typography>
               </Box>
            </CardContent>
        </Card>
    )
}
export default UsersCard;
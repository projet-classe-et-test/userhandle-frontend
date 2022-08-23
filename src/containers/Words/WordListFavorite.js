import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAsync } from 'react-async';
import { getFavoriteList } from 'api/users';
import { getWords } from 'api/words';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useParams } from 'react-router-dom';



const WordListFavorite = ({iduser}) => {

    
    const { userId } = useParams();

    const { data } = useAsync({ promiseFn: getFavoriteList, userId});
    const words = data?.data || [];
    console.log(userId);
    return (
       
        <>
        <div>
        <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{'Favorites word'}</TableCell>
                    <TableCell>{''}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {words.map((word) => (
                          <TableRow
                              key={word.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell component="th" scope="row">
                                {word.mot}
                              </TableCell>
                              <TableCell>
                               

                                    <IconButton color="primary">
                                    <FavoriteIcon />
                                    </IconButton>

                                    <IconButton color="primary">
                                        <PlayArrowIcon />
                                    </IconButton>
                                  
                                  
                              </TableCell>
                          </TableRow>
                      ))}
                </TableBody>
              </Table>
              </TableContainer>
              </div>
        </>
    )
}

export default WordListFavorite;
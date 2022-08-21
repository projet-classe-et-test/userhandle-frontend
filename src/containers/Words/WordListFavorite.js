import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAsync } from 'react-async';
import { Button } from '@mui/material';
import { getWords } from 'api/words';



const WordListFavorite = () => {

    const { data } = useAsync({ promiseFn: getWords});
    const words = data?.data || [];

    const isFav = false;
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
                                * {word.mot}
                              </TableCell>
                              <TableCell>
                                {isFav ?

                                    <IconButton color="primary">
                                    <FavoriteIcon />
                                    </IconButton>
                                :
                                    <IconButton >
                                    <FavoriteIcon />
                                    </IconButton>

                                }
                                  
                                  
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
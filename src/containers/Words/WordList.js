import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useAsync } from 'react-async';
import { getspeech, getWords } from 'api/words';
import { markFavorite } from 'api/users';
import { useRef } from 'react';



const WordList = ({iduser}) => {

    const { data } = useAsync({ promiseFn: getWords});
    const words = data?.data || [];
    const userid = iduser
    const isFav = false;

    function mark_fav(theword){
      console.log(theword)
      let payload = {'word': theword}
      markFavorite(userid,payload)
    }

    function unmark_fav(theword){
      console.log(theword)
      let payload = {'word': theword}
      unmark_fav(userid, payload)
    }

    function readword(word){
      const mot = {'word': word};
      getspeech(mot).then((audio)=>{
        console.log(audio.data)
        let sound = new Audio(audio.data);
        sound.play();        
      })
    }

    function Checkfav (word) {
      var favwords = []; 
      var isFav = false;

      getFavoriteList(id).then(data => {
        favwords = data.data
        isFav = favwords.some(element => {

          console.log(element)
          if(element.mot == word){
            return true
          }else{
            return false;
          }
        });        
      });
      console.log(isFav);

      return isFav;
    }

    return (
       
        <>
        <div>
        <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{'Words'}</TableCell>
                    <TableCell>{'Favorites'}</TableCell>
                    <TableCell>{'Lecture'}</TableCell>
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
                                {Checkfav(word.mot) ?

                                    <IconButton color="primary" onClick={() => {unmark_fav(word.id);} }>
                                    <FavoriteIcon />
                                    </IconButton>
                                :
                                    <IconButton onClick={() => {mark_fav(word.id);} }>
                                    <FavoriteIcon />
                                    </IconButton>

                                }
                                    
                                  
                              </TableCell>
                              <TableCell>
                                    <IconButton onClick={() => {readword(word.mot);} }>
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

export default WordList;
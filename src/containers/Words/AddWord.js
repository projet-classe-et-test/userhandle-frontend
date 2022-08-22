import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAsync } from 'react-async';
import { addWord, getWords } from 'api/words';
import { Button } from '@mui/material';

const FieldContainer = styled.div`
  margin-bottom: 15px;
`;
let word = {
  mot: '',
  definition: ''
}
const AddWord = () => {
  const { t } = useTranslation('word');
  const { data } = useAsync({ promiseFn: getWords});

  const navigate = useNavigate();
 
  const words = data?.data || [];

  async function remove_word(id){
    console.log(id);
    await remove_word(id);

  }
  const formik = useFormik({
    initialValues: word,
    enableReinitialize: true,
    onSubmit: async (values) => { 
      await addWord(values);
      navigate('/words/add');
    },
  });
  
  return (
        <>
          <div>
          <form onSubmit={formik.handleSubmit}>
          <FieldContainer>
            <TextField id="mot" name="mot" label={t('word')} variant="standard"
                      //  value={formik.values.mot}
                       onChange={formik.handleChange}
                       error={formik.touched.mot && Boolean(formik.errors.mot)}
                       helperText={formik.touched.mot && formik.errors.mot}
                       />
          </FieldContainer>

      

          <FieldContainer>
            <TextField
              id="definition"
              name="definition"
              label={t('definition')}
              variant="standard"
              // value={formik.values.definition}
              onChange={formik.handleChange}
              error={formik.touched.definition && Boolean(formik.errors.definition)}
              helperText={formik.touched.definition && formik.errors.definition}
            />
          </FieldContainer>


          <button type="submit">{t('SUBMIT')}</button>
        </form>
        <a href={`/users`}><Button>List of Users</Button></a>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>{t('WORD')}</TableCell>
                          <TableCell>{t('Definition')}</TableCell>
                          <TableCell>{t('ACTIONS')}</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {words.map((word) => (
                          <TableRow
                              key={word.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell component="th" scope="row">
                                <a href={`/words/${word.id}/view`}>{word.mot}</a>
                              </TableCell>
                              <TableCell>{word.definition}</TableCell>
                              <TableCell>
                                  <IconButton color="secondary">
                                    <EditIcon onClick={()=>{
                                      navigate(`/words/${word.id}/edit`)
                                    }}/>
                                  </IconButton>
                                  <IconButton color="secondary" onClick={() => {remove_word(word.id); window.location.reload();}}>
                                    <DeleteIcon />
                                  </IconButton>
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
          </div>
        </>
  );
};

export default AddWord;

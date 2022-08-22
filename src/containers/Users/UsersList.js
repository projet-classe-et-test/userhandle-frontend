import { useTranslation } from 'react-i18next';
import { getUsers, removeUser  } from "../../api/users";
import { useAsync } from "react-async";
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';

const FabContainer = styled.div`
  position:fixed;
  bottom:10px;
  right:10px;
`;

const UsersList = () => {
  const { t } = useTranslation('user');

  const { data } = useAsync({ promiseFn: getUsers});
  const users = data?.data || [];
  let navigate = useNavigate();
  async function remove_user(id){
    console.log(id);
    await removeUser(id);

  }
  return (
    <>
      <a href={`/words/add`}><Button>ADD NEW WORD</Button></a>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>{t('LOGIN')}</TableCell>
                      <TableCell>{t('EMAIL')}</TableCell>
                      <TableCell>{t('ACTIONS')}</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {users.map((user) => (
                      <TableRow
                          key={user.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <TableCell component="th" scope="row">
                            <a href={`/users/${user.id}/view`}>{user.login}</a>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                              <IconButton color="secondary">
                                <EditIcon onClick={()=>{
                                  navigate(`/users/${user.id}/edit`)
                                }}/>
                              </IconButton>
                              <IconButton color="secondary" onClick={() => {remove_user(user.id); window.location.reload();}}>
                                <DeleteIcon />
                              </IconButton>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
      <FabContainer>
        <Fab color="primary" aria-label="add" onClick={() => {
          navigate(`/users/add`);
        }}>
          <AddIcon />
        </Fab>
      </FabContainer>
    </>
  );
};

export default UsersList;

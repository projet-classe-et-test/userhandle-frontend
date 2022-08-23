import { useTranslation } from 'react-i18next';
import { getUser } from "../../api/users";
import { useAsync } from "react-async";
import {useParams} from "react-router";
import styled from 'styled-components';
import WordList from 'containers/Words/WordList';
import WordListFavorite from 'containers/Words/WordListFavorite';
import { useEffect, useRef } from 'react';


const FieldContainer = styled.div`
  margin-bottom: 15px;
`;

const ViewUser = () => {
  const { t } = useTranslation('user');
  const { userId } = useParams();
  const { data } = useAsync({ promiseFn: getUser, userId });
  const user = data?.data;
  const Iduser = useRef();
  useEffect(()=>{
    Iduser.current = userId;
  },[])  
  return (
        <>
          <div>
          <FieldContainer>
            <div>
              {t('LOGIN')} : {user?.login}
            </div>
          </FieldContainer>

          <FieldContainer>
            <div>
              {t('EMAIL')} : {user?.email}
            </div>
          </FieldContainer>

          <FieldContainer>
            <div>
              {t('PASSWORD')} : {user?.password}
            </div>
          </FieldContainer>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <WordList iduser={user?.id}  />
            </div>
            <div className='col-md-3'></div>
              <WordListFavorite user={user?.id}/>
          </div>
        </>
  );
};

export default ViewUser;

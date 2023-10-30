import { useEffect, useMemo, useState } from 'react';
import SearchItem from './components/SearchItem';
import UserList from './components/UserList';
import './styles/App.css';
import UserService from './API/UserService';

function App() {
  const [users, setUsers] = useState([{id:1, name: 'Bob'}])
  const [info, setInfo] = useState({info_title: 'Дополнительная информация: ', 
                                    info_body: 'Разработчики используют текст в качестве заполнителя макета страницы'})

  const [modal, setModal] = useState(false);

  const fetch = async () => {
    const response = await UserService.getAll();
    setUsers(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="App">
      <SearchItem setUsers={setUsers} /> 
      <UserList 
        users={users} 
        modal={modal} 
        setModal={setModal} 
        info={info}
      />
    </div>
  );
}

export default App;

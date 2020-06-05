import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Inserir from './pages/Inserir';
import Listagem from './pages/Listagem';
import ListarHotel from './pages/ListarHotel';
import Deletar from './pages/Deletar';
import Atualizar from './pages/Atualizar';
import Resposta from './pages/Resposta';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Bom pra Cachorro'
            },
        },
        Inserir: {
            screen: Inserir,
            navigationOptions: {
                title: 'Adicionar Hotel'
            }
        },
        Listagem: {
            screen: Listagem,
            navigationOptions: {
                title: 'Hotéis'
            }
        },
        ListarHotel: {
            screen: ListarHotel,
            navigationOptions: {
                title: 'Hotel'
            }
        },
        Deletar: {
            screen: Deletar,
            navigationOptions: {
                title: 'Remover Hotel'
            }
        },
        Atualizar: {
            screen: Atualizar,
            navigationOptions: {
                title: 'Atualizar Hotel'
            }
        },
        Resposta: {
            screen: Resposta,
            navigationOptions: {
                title: ''
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#7D40E7',
            }
        },
    })
);

export default Routes;



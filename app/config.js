import loginPage from './templates/login.html';
import cartPage from './templates/cart.html';
import checkOutPage from './templates/checkOut.html';

import loginCtrl from './controllers/login';
import cartCtrl from './controllers/cart';
import checkOutCtrl from './controllers/checkOut';

function config($stateProvider,$urlRouterProvider){
    $stateProvider
    .state({
        name:"login",
        url:"/login",
        views:{
            "main":{
                template:loginPage,
                controller:loginCtrl
            }
        }
    })
    .state({
        name:"cart",
        url:"/cart",
        views:{
            "main":{
                template:cartPage,
                controller:cartCtrl
            }
        }
    })
    .state({
        name:"checkOut",
        url:"/checkOut",
        views:{
            "main":{
                template:checkOutPage,
                controller:checkOutCtrl
            }
        }
    })
    $urlRouterProvider.otherwise("/login")
}
config.$inject=['$stateProvider','$urlRouterProvider']
export default config;
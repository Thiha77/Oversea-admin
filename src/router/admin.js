import home from '../components/admin/AdminHome';
import RecuriterList from '../components/admin/recuriter/RecuriterList';
const route = [
    {
        path: '/',
        component: home,
        meta: {
            reqiuresAuth: true,
            admin:true, // for only admin component
            jobseeker:false
          }
    },
    {
        path: '/recuriter-list',
        component: RecuriterList,
        meta: {
            reqiuresAuth: false,
            admin:true, // for only admin component
            jobseeker:false
          }
    }
];

export default route; 
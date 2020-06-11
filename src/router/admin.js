import home from '../components/admin/Home/Home';
import post from '../components/admin/post/post-list';
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
        path: '/post',
        component: post,
        meta: {
            reqiuresAuth: false,
            admin:true, // for only admin component
            jobseeker:false
          }
    }
];

export default route; 
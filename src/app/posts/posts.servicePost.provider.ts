import { ServicePosts, ServicePostsMock } from "../app.servicePosts";
import { HttpClient } from '@angular/common/http';

// let factoryService = () => {   
//     //return new ServicePosts(http:HttpClient)    ;
//     //return "ServicePosts";
//     return "ServicePostsMock";

// };

let serviceFactory = () => {
    //return new ServicePosts(http:HttpClient)    ;
    //return "ServicePosts";
    //return "ServicePostsMock";
    console.log('serviceFactory > ServicePostsMock');
    return new ServicePostsMock();

};

export let servicePostProvider = {
    provide: ServicePosts,
    useFactory: serviceFactory
};


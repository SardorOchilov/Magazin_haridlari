import { userRepository } from '../index';

export function branch1Service(phoneNumber:string, purchaseAmount: string){
    userRepository.branch1Purchase(phoneNumber, '2000');
}




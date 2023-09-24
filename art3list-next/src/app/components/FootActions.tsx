import {Button} from "./Button";

// @ts-ignore
export function FootActions ({user, walletId, addGallery, registerWalletDialog}) {
    const userIsGallery = user.type === 'Gallery';

    if (addGallery && userIsGallery) {
        return <div className='flex flex-row justify-between my-8'>
        <Button type='Add' color='white' text='Add your gallery data to our list' classes='bg-blue-300 max-w-[150px] rounded'/>
        <Button type='view' color='green' text='View galleries list' classes='text-green-800'/>
            </div>
    }

    if (registerWalletDialog && user) {
        return <div className='container'>
        <Button type='back' color='gray' text='Back' classes=''/>
        <Button type='continue' color='blue' text='Continue' classes=''/>
            </div>
    }
}
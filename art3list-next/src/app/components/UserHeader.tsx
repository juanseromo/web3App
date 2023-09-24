// @ts-ignore
export function UserHeader ({user, walletId}) {
    return user && <header className='flex flex-row container justify-between   border-b-2 border-b-blue-300'>
        <div className='flex flex-row mb-3'>
            <img src={user.logo} alt=""/>
            <span>{walletId || user?.name}</span>
        </div>
        <h5>{user.type}</h5>
    </header>
}
import {Plus} from 'phosphor-react'
import logoImage from '../assets/logo.svg'

export function Header(){
    return (
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logoImage} alt="Habits" />
          <button className='border border-green-800 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-green-400'>
            <Plus size={20} className='text-green-800'/>
            Novo Habito
          </button>
        </div>
    )
}
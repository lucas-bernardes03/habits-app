import { Check } from "phosphor-react";

export function NewHabitForm(){
    return (
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">Qual seu comprometimento?</label>
            
            <input 
                type="text" 
                id="title" 
                placeholder="ex.: Academia, beber água, estudar, etc..." 
                autoFocus 
                className="p-4 rounded-lg mt-3 bg-habitLightColor text-white placeholder:text-habitLightText"/>

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência?
            </label>

            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}
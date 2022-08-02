import {supabase} from "../utils/supabase";
import { useRef } from "react"

export default function NewMembre ({create}) {
    const membreRef = useRef("")
    const createMember = async e => {
        e.preventDefault()

        const content = membreRef.current.value
        const { data, error } = await supabase
            .from("membres")
            .insert([{nom: content}])

        /*error ? console.log(error) : console.log(data);*/
        membreRef.current.value = ""
    };
    return (
            <div className="">
                <h2 className="text-3xl mt-8 mb-12">Ajouter un(e) Argonaute</h2>
                <form onSubmit={createMember}>
                    <label className="mb-4 block text-2xl font-medium text-gray-700">Nom de l&apos;Argonaute</label>
                    <div className="flex flex-row">
                        <input className="mr-2 border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 inline-block sm:text-sm border-gray-300 rounded-sm"
                               type="text"
                               required
                               ref={membreRef}
                               placeholder="Charalampos"/>
                        <button className="bg-gray-100 p-1 border-2 border-gray-400 rounded" type="submit">Envoyer</button>
                    </div>

                </form>
            </div>

    )

}


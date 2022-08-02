import Head from "next/head";
import {supabase} from "../utils/supabase"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NewMembre from "../components/NewMembre";


export default function Home({membres}) {
    // console.log({membres})

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Les Argonautes</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-8">
                        <NewMembre />
                    </div>

                    <h3 className="mb-4 text-2xl"> Membres de l&apos;équipage</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">

                            {membres.map((membre) => (
                                <p className="rounded-sm border-2 p-2" key={membre.id}>{membre.nom}</p>
                            ))}
                        </div>


                </div>

            </main>

            <Footer/>
        </div>


    )

}


export const getStaticProps = async () => {
    const {data: membres} = await supabase.from('membres').select('*')

    return {
        props: {
            membres,
        },
        revalidate: 10,
    };
};




